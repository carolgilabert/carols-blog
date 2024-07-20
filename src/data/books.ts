import { scrapeSite } from "../utils/scraping";
import { emptyDir, ensureDir, writeJson } from "fs-extra";
import { resolve } from "path";

const STORYGRAPH_USERNAME = process.env.STORYGRAPH_USERNAME;
const STORYGRAPH_PASSWORD = process.env.STORYGRAPH_PASSWORD;

const booksFolder = resolve(__dirname, "../content/books");

export const bookFetcher = async function () {
  return scrapeSite(
    "https://app.thestorygraph.com/users/sign_in",
    async function ({ page, log }) {
      // Create and empty books folder
      await ensureDir(booksFolder);
      await emptyDir(booksFolder);

      log.info("Logging in to Storygraph");

      // Log in to Storygraph
      await page.fill('input[id="user_email"]', STORYGRAPH_USERNAME);
      await page.fill('input[id="user_password"]', STORYGRAPH_PASSWORD);
      await page.click('button[id="sign-in-btn"]');

      // Go to currently reading page
      await page.goto(
        "https://app.thestorygraph.com/currently-reading/carolgilabert",
      );

      log.info("Getting books");

      // Get all the books
      const bookList = await page
        .locator(".read-books-panes > div > div")
        .first();

      for (const row of await bookList.locator(".book-pane-content").all()) {
        const id = (
          await row.locator("h3 a[href*='/books/']").getAttribute("href")
        ).replace("/books/", "");
        const cover = await row
          .locator("div > .book-cover img")
          .getAttribute("src");
        const title = await row.locator("h3 a[href*='/books/']").textContent();
        const author = await row
          .locator("h3 a[href*='/authors/']")
          .textContent();
        const progress = await row
          .locator(".progress-tracker-pane .progress-bar + div")
          .textContent();
        const book = {
          id,
          cover,
          title,
          author,
          progress,
        };

        // Save book to JSON file
        await writeJson(`${booksFolder}/${book.id}.json`, book);
      }

      log.info("Finished scraping Storygraph.");
    },
  );
};
