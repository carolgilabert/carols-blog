import { bookFetcher } from "./books";

bookFetcher().then(() => {
  console.log("Done!");
});
