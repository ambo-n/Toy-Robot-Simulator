import readline from "readline";
import Robot from "./robot.js";
import processCommand from "./commands.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const robot = new Robot();

console.log("Enter commands: ");

rl.on("line", (input) => {
  processCommand(robot, input);
});
