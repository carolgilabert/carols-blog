import {
  LogLevel,
  PlaywrightCrawler,
  createPlaywrightRouter,
  Configuration,
} from "crawlee";

export async function scrapeSite(url: string, handler) {
  const router = createPlaywrightRouter();

  router.addDefaultHandler(handler);

  const crawler = new PlaywrightCrawler(
    {
      requestHandler: router,
      launchContext: {
        launchOptions: {
          permissions: ["clipboard-read", "clipboard-write"],
        },
      },
    },
    new Configuration({
      logLevel: LogLevel.INFO,
      persistStorage: false,
    }),
  );

  await crawler.run([url]);
}
