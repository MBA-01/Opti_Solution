import fs from 'node:fs';
import os from 'node:os';
import type { AstroConfig, AstroIntegration } from 'astro';

import configBuilder, { type Config } from './utils/configBuilder';
import loadConfig from './utils/loadConfig';

export default ({ config: _themeConfig = 'src/config.yaml' }: { config?: string | Config } = {}): AstroIntegration => {
  let cfg: AstroConfig;
  let allowCrawling = false;
  return {
    name: 'astrowind-integration',

    hooks: {
      'astro:config:setup': async ({
        // command,
        config,
        // injectRoute,
        // isRestart,
        logger,
        updateConfig,
        addWatchFile,
      }) => {
        const buildLogger = logger.fork('astrowind');

        const virtualModuleId = 'astrowind:config';
        const resolvedVirtualModuleId = '\0' + virtualModuleId;

        const rawJsonConfig = (await loadConfig(_themeConfig)) as Config;
        const publicSiteUrl = process.env.PUBLIC_SITE_URL?.trim();
        const indexRequested = process.env.PUBLIC_INDEX_SITE?.trim().toLowerCase() === 'true';

        if (publicSiteUrl) new URL(publicSiteUrl);
        if (indexRequested && !publicSiteUrl) {
          throw new Error('PUBLIC_INDEX_SITE=true requires a valid PUBLIC_SITE_URL.');
        }

        const runtimeConfig: Config = {
          ...rawJsonConfig,
          site: {
            ...rawJsonConfig.site,
            name: rawJsonConfig.site?.name ?? 'OptiSolution',
            ...(publicSiteUrl ? { site: publicSiteUrl } : {}),
          },
          metadata: {
            ...rawJsonConfig.metadata,
            robots: {
              ...rawJsonConfig.metadata?.robots,
              index: indexRequested,
              follow: indexRequested,
            },
          },
        };
        const { SITE, I18N, METADATA, APP_BLOG, UI, ANALYTICS } = configBuilder(runtimeConfig);
        allowCrawling = METADATA.robots?.index === true;

        updateConfig({
          site: SITE.site,
          base: SITE.base,

          trailingSlash: SITE.trailingSlash ? 'always' : 'never',

          vite: {
            plugins: [
              {
                name: 'vite-plugin-astrowind-config',
                resolveId(id) {
                  if (id === virtualModuleId) {
                    return resolvedVirtualModuleId;
                  }
                },
                load(id) {
                  if (id === resolvedVirtualModuleId) {
                    return `
                    export const SITE = ${JSON.stringify(SITE)};
                    export const I18N = ${JSON.stringify(I18N)};
                    export const METADATA = ${JSON.stringify(METADATA)};
                    export const APP_BLOG = ${JSON.stringify(APP_BLOG)};
                    export const UI = ${JSON.stringify(UI)};
                    export const ANALYTICS = ${JSON.stringify(ANALYTICS)};
                    `;
                  }
                },
              },
            ],
          },
        });

        if (typeof _themeConfig === 'string') {
          addWatchFile(new URL(_themeConfig, config.root));

          buildLogger.info(`Astrowind \`${_themeConfig}\` has been loaded.`);
        } else {
          buildLogger.info(`Astrowind config has been loaded.`);
        }
      },
      'astro:config:done': async ({ config }) => {
        cfg = config;
      },

      'astro:build:done': async ({ dir, logger }) => {
        const buildLogger = logger.fork('astrowind');
        buildLogger.info('Updating `robots.txt` with `sitemap-index.xml` ...');

        try {
          // `dir` is the directory that gets deployed as static assets. With a
          // fully static build it equals `outDir`; when an adapter renders some
          // pages on demand it is `outDir/client`, so `cfg.outDir` would miss it.
          const outDir = dir;
          const sitemapName = 'sitemap-index.xml';
          const sitemapFile = new URL(sitemapName, outDir);
          const robotsTxtFileInOut = new URL('robots.txt', outDir);
          const robotsTxt = allowCrawling ? 'User-agent: *\nAllow: /\n' : 'User-agent: *\nDisallow: /\n';

          fs.writeFileSync(robotsTxtFileInOut, robotsTxt, { encoding: 'utf8', flag: 'w' });

          const hasIntegration =
            Array.isArray(cfg?.integrations) &&
            cfg.integrations?.find((e) => e?.name === '@astrojs/sitemap') !== undefined;
          const sitemapExists = fs.existsSync(sitemapFile);

          if (hasIntegration && sitemapExists) {
            const sitemapUrl = new URL(sitemapName, String(new URL(cfg.base, cfg.site)));
            const pattern = /^Sitemap:(.*)$/m;

            if (!pattern.test(robotsTxt)) {
              fs.writeFileSync(robotsTxtFileInOut, `${robotsTxt}${os.EOL}${os.EOL}Sitemap: ${sitemapUrl}`, {
                encoding: 'utf8',
                flag: 'w',
              });
            } else {
              fs.writeFileSync(robotsTxtFileInOut, robotsTxt.replace(pattern, `Sitemap: ${sitemapUrl}`), {
                encoding: 'utf8',
                flag: 'w',
              });
            }
          }
        } catch (error) {
          buildLogger.warn(`Could not update robots.txt: ${error instanceof Error ? error.message : String(error)}`);
        }
      },
    },
  };
};
