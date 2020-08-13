const fs = require("fs");
const fetch = require("node-fetch");

const subreddit = "Jokes"; // subreddit name goes here
const filter = "top"; // filter options are(new, hot, top, rising)
const age = "all"; // options are(hour, day, week, month, year, all)

let apiContent = [];

fetch(`https://www.reddit.com/r/${subreddit}/${filter}/.json?t=${age}`)
  .then((r) => r.json())
  .then((result) => appendData(result))
  .catch((err) => console.log(`Something Went Wrong, ${err.message}`));

let appendData = (result) => {
  for (let i = 0; i < result.data.children.length; i++) {
    let fullContent = result.data.children[i].data;
    let cleaner = (x) => x.replace(/\n|\r|\\|\|*"/gi, "").trim();

    // if you need more options, just do as follows:
    // "OPTION": "${cleaner(fullContent.OPTION)}"
    // you can find the options inside data in: https://www.reddit.com/r/all/top/.json?t=all

    apiContent.push(
      `
  {"title": "${cleaner(fullContent.title)}",
  "body": "${cleaner(fullContent.selftext)}"}`
    );
  }

  const apiContentClean = `[${apiContent}]`;

  fs.writeFile("reddit.json", apiContentClean, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File saved to reddit.json");
    }
  });
};
