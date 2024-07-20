import { scrapeSite } from "../utils/scraping";
import { emptyDir, ensureDir, writeJson } from "fs-extra";
import { resolve } from "path";

const NYT_USERNAME = process.env.NYT_USERNAME;
const NYT_PASSWORD = process.env.NYT_PASSWORD;

const nytGamesFolder = resolve(__dirname, "../content/nyt-games");

export const nytGamesFetcher = async function () {
  return scrapeSite(
    "https://www.nytimes.com/crosswords",
    async function ({ page, log }) {
      // Create and empty NYT games folder
      await ensureDir(nytGamesFolder);
      await emptyDir(nytGamesFolder);

      log.info("Logging in to NYT Games");

      // Click on the login button
      const loginLink = page.getByRole("link", { name: "Log in" });
      await loginLink.waitFor();

      if (loginLink.isDisabled()) {
        // Dismiss the cookie banner
        await page.click('button[data-testid="Reject all-btn"]');
      }

      await loginLink.click();

      // Log in to NYT Games
      await page.fill('input[id="email"]', NYT_USERNAME);
      await page.click('button[data-testid="submit-email"]');
      await page.fill('input[id="password"]', NYT_PASSWORD);
      await page.click('button[data-testid="login-button"]');

      log.info("Getting NYT Games info");

      const moreStats = page.getByText("More Stats");
      await moreStats.waitFor();

      log.info("Main crossword stats");

      await page.goto("https://www.nytimes.com/puzzles/stats");

      const streak = await page.locator(
        'h2:has(+ p:has-text("Current Streak"))',
      );

      const todaysMainTime = await page.locator(
        ".single-day.active .today .time",
      );

      const mainCrossword = {
        isItFinished: (await todaysMainTime.textContent()) != "--:--",
        streak: await streak.textContent(),
        todaysTime: await todaysMainTime.textContent(),
      };

      await writeJson(`${nytGamesFolder}/main-crossword.json`, mainCrossword);

      log.info("Mini crossword stats");

      await page.goto("https://www.nytimes.com/crosswords/game/mini");

      const todaysMiniTime = await page.locator(".timer-count");
      let isSpellingBeeFinished = true;
      const filledInLetters = await page
        .locator('#puzzle g.xwd__cell text[text-anchor="middle"]')
        .all();
      for (const letter of filledInLetters) {
        const content = await letter.textContent();
        if (content === "") {
          isSpellingBeeFinished = false;
          break;
        }
      }

      const miniCrossword = {
        todaysTime: await todaysMiniTime.textContent(),
        isItFinished: isSpellingBeeFinished,
      };

      await writeJson(`${nytGamesFolder}/mini-crossword.json`, miniCrossword);

      log.info("Spelling bee stats");

      await page.goto("https://www.nytimes.com/puzzles/spelling-bee");
      await page.click("button.primary.default");

      const todaysPoints = await page.locator(".sb-progress-marker span");
      const todaysRank = await page.locator("h4.sb-progress-rank");

      const spellingBee = {
        isItFinished: (await todaysRank.textContent()) == "Genius",
        todaysPoints: await todaysPoints.textContent(),
        todaysRank: await todaysRank.textContent(),
      };

      await writeJson(`${nytGamesFolder}/spelling-bee.json`, spellingBee);

      log.info("Connections stats");

      await page.goto("https://www.nytimes.com/games/connections");
      await page.click("button.primary.default");

      let isConnectionsFinished = false;
      let connectionsResults = "";

      const boardActions = await page
        .locator('section[class*="boardActionGroup"] button')
        .all();

      if (
        boardActions.length === 1 &&
        (await boardActions[0].textContent()) === "View Results"
      ) {
        isConnectionsFinished = true;

        await boardActions[0].click();

        await page.click("button[class*=shareResults]");

        connectionsResults = await page.evaluate(() =>
          navigator.clipboard.readText(),
        );
      }

      const connections = {
        isItFinished: isConnectionsFinished,
        results: connectionsResults,
      };

      await writeJson(`${nytGamesFolder}/connections.json`, connections);

      log.info("Wordle stats");

      await page.goto("https://www.nytimes.com/games/wordle/index.html");

      let isWordleFinished = false;
      let wordleResults = "";

      const wordleActionsContainer = page.locator(
        "div[class*='Welcome-module_buttonContainer']",
      );
      await wordleActionsContainer.waitFor();

      const wordleActions = await page
        .locator("div[class*='Welcome-module_buttonContainer'] button")
        .all();

      if (
        wordleActions.length === 1 &&
        (await wordleActions[0].textContent()) === "See Stats"
      ) {
        isWordleFinished = true;

        await wordleActions[0].click();

        const shareButton = page.locator("button[class*=shareButton]");
        await shareButton.waitFor();
        await shareButton.click();

        const confirmationModal = page.locator(
          "div[class*=Toast-module_toast]:has-text('Copied results to clipboard')",
        );
        await confirmationModal.waitFor();

        wordleResults = await page.evaluate(() =>
          navigator.clipboard.readText(),
        );
      }

      const wordle = {
        isItFinished: isWordleFinished,
        results: wordleResults,
      };

      await writeJson(`${nytGamesFolder}/wordle.json`, wordle);

      log.info("Finished scraping NYT Games.");
    },
  );
};
