import { bookFetcher } from "./books";
import { nytGamesFetcher } from "./nyt-games";

(async () => {
  await bookFetcher();
  await nytGamesFetcher();
  console.log("Done!");
})();
