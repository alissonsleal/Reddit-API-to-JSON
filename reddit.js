const fs = require("fs");
const fetch = require("node-fetch");

//fetch("https://messagesapp-backend.herokuapp.com/texts");

fetch("https://www.reddit.com/r/Vent/top/.json?count=20?t=day")
  .then((r) => r.json())
  .then((result) => appendData(result))
  .catch((err) => console.log(`Something Went Wrong, ${err.message}`));

let num = 0;
let apiContent = [];

let appendData = (result) => {
  /* 
  const eachChildren = result.data.children.map(
    (child, num) =>
      JSON.stringify(result.data.children, null, 2)
        .replace(/\n|\r|\\|\"/g, "")
        .trim()

    //console.log(child)
  );
   */

  for (let i = 0; i < result.data.children.length; i++) {
    let fullContent = result.data.children[i].data;
    let cleaner = (x) => x.replace(/\n|\r|\\|\|*"/gi, "").trim();

    apiContent.push(`title: ${cleaner(fullContent.title)}`);
    apiContent.push(`body: ${cleaner(fullContent.selftext)}`);
    JSON.stringify(apiContent, null, 2);

    /* JSON.stringify(eachChildren, null, 2)
      .replace(/\n|\r|\\|\"/g, "")
      .trim(); */
  }
  console.log(apiContent);

  fs.writeFile("reddit2.json", JSON.stringify(apiContent, null, 2), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File saved");
    }
  });
  /* 
  const titleArray = eachChildren.map((result) => [
    ...[result.data.title],
    ...[result.data.selftext],
  ]);

  const titleClean = JSON.stringify(titleArray, null, 2);

  console.log(titleClean);
   */
  //let title;
  //let body;
  /* let arrOfArr = [];
     for (let i = 0; i < eachChildren.length; i++) {
    arrOfArr.push(
      '"title": "' +
        eachChildren[i].data.title +
        '", "body": "' +
        eachChildren[i].data.selftext +
        '"'
    ); 
    //let body = ``;

    //arrOfArr.push(`"title":${title}, "body":${body}`);
 }
 */
  /* mappedArr = eachChildren.map((i) =>
    //eachChildren[0].data.selftext;
    console.log(i++)
  ); */
  //console.log(result.data.children[0].data.title);
  //console.log(JSON.stringify(eachChildren, null, 2));

  //console.log(eachChildren.data);

  //***********************************************************************vvvvvv
  /*   fs.writeFile(
    "reddit.json",
    eachChildren[0].replace(/\n|\r/g, "").trim(),
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File saved");
      }
    }
  );
   */ //************************************************************************^^^^^^

  //console.log(arrOfArr);

  /* fs.writeFile("vent.json", JSON.stringify(mappedArr, null, 2), (err) => {
    err ? console.log(err) : console.log("Working");
  }); */
};
