const mediumToMarkdown = require("medium-to-markdown");

mediumToMarkdown
  .convertFromUrl(
    "https://medium.com/free-code-camp/9-months-into-a-software-engineering-role-this-is-what-i-learned-823230e4be9a"
  )
  .then(function (markdown) {
    console.log(markdown); //=> Markdown content of medium post
  });
