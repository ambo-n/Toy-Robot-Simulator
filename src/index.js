import readline from "readline";
import Robot from "./robot.js";
import processCommand from "./commands.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const robot = new Robot();

console.log("Enter commands(or type EXIT to quit): ");

rl.on("line", (input) => {
  const command = input.trim().toUpperCase();
  if (command === "EXIT") {
    console.log("Exiting the program. Goodbye");
    rl.close();
    process.exit();
  }
  processCommand(robot, command);
});
