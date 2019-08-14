#!/usr/bin/env node
const chalk = require("chalk");
const figlet = require("figlet");
const CLI = require('./commands/cli-init');

const init = () => {
  console.log(
    chalk.green(
      figlet.textSync("bianky we bs", {
        font: "Ghost",
        horizontalLayout: "default",
        verticalLayout: "default",
        function (err, data) {
          if(err) return console.log('Something went wrong') && console.dir(err);
          console.info(data)
        }
      })
    )
  );
};




const run = () => {
  // show script introduction
  init();

  CLI.parse(process.argv);
};

run();