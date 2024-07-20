import { bookFetcher } from "./books";
import { nytGamesFetcher } from "./nyt-games";

bookFetcher().then(() => {
  console.log("Done!");
});

nytGamesFetcher().then(() => {
  console.log("Done!");
});
