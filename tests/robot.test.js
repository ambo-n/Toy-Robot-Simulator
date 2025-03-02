import Robot from "../src/robot.js";
import processCommand from "../src/commands.js";
import { expect, jest } from "@jest/globals";

test("PLACE sets the correct position", () => {
  const robot = new Robot();
  robot.place(1, 2, "NORTH");
  expect(robot.x).toBe(1);
  expect(robot.y).toBe(2);
  expect(robot.facing).toBe("NORTH");
});

test("MOVE updates the position correctly - y direction", () => {
  const robot = new Robot();
  robot.place(0, 0, "NORTH");
  robot.move();
  expect(robot.x).toBe(0);
  expect(robot.y).toBe(1);
  expect(robot.facing).toBe("NORTH");
});

test("MOVE updates the position correctly - x direction", () => {
  const robot = new Robot();
  robot.place(0, 0, "EAST");
  robot.move();
  expect(robot.x).toBe(1);
  expect(robot.y).toBe(0);
  expect(robot.facing).toBe("EAST");
});

test("LEFT rotates correctly", () => {
  const robot = new Robot();
  robot.place(0, 0, "NORTH");
  robot.left();
  expect(robot.x).toBe(0);
  expect(robot.y).toBe(0);
  expect(robot.facing).toBe("WEST");
});

test("RIGHT rotates correctly", () => {
  const robot = new Robot();
  robot.place(0, 0, "NORTH");
  robot.right();
  expect(robot.x).toBe(0);
  expect(robot.y).toBe(0);
  expect(robot.facing).toBe("EAST");
});

test("REPORT prints out the right output", () => {
  const robot = new Robot();
  const spy = jest.spyOn(console, "log");
  const command1 = "PLACE 1,2,EAST";
  processCommand(robot, command1);
  const command2 = "MOVE";
  processCommand(robot, command2);
  const command3 = "MOVE";
  processCommand(robot, command3);
  const command4 = "LEFT";
  processCommand(robot, command4);
  const command5 = "MOVE";
  processCommand(robot, command5);
  const command6 = "REPORT";
  processCommand(robot, command6);
  expect(spy).toHaveBeenCalledWith("Output: 3, 3, NORTH");
  spy.mockRestore();
});

test("Testing invalid PLACE command", () => {
  const spy = jest.spyOn(console, "log");
  const robot = new Robot();
  const command = "PLACE 0,0";
  processCommand(robot, command);
  expect(spy).toHaveBeenCalledWith(
    "Error: Invalid PLACE format. Please use PLACE X,Y,FACING"
  );
  spy.mockRestore();
});

test("Testing invalid PLACE command - when the robot is placed out of range", () => {
  const spy = jest.spyOn(console, "log");
  const robot = new Robot();
  const command = "PLACE 6,8,SOUTH";
  processCommand(robot, command);
  expect(spy).toHaveBeenCalledWith(
    "Error. Invalid position. Please ensure your X,Y are within boundaries of your 5 x 5 grid"
  );
  spy.mockRestore();
});

test("Testing first valid command to the robot must be a PLACE command.", () => {
  const spy = jest.spyOn(console, "log");
  const robot = new Robot();
  const command = "MOVE";
  processCommand(robot, command);
  expect(spy).toHaveBeenCalledWith(
    "Error: The first command must start with PLACE X,Y,FACING"
  );
  spy.mockRestore();
});

test("Ensure that robot doesn't fall off the EAST edge", () => {
  const robot = new Robot();
  const spy = jest.spyOn(console, "log");
  robot.place(4, 0, "EAST");
  const command = "MOVE";
  processCommand(robot, command);
  expect(spy).toHaveBeenCalledWith(
    "Error. You may be out of range. Please ensure your X,Y are within boundaries of your 5 x 5 grid. Try LEFT/RIGHT commands to continue."
  );
  spy.mockRestore();
  expect(robot.x).toBe(4);
  expect(robot.y).toBe(0);
  expect(robot.facing).toBe("EAST");
});
test("Ensure that robot doesn't fall off the WEST edge", () => {
  const robot = new Robot();
  const spy = jest.spyOn(console, "log");
  robot.place(0, 0, "WEST");
  const command = "MOVE";
  processCommand(robot, command);
  expect(spy).toHaveBeenCalledWith(
    "Error. You may be out of range. Please ensure your X,Y are within boundaries of your 5 x 5 grid. Try LEFT/RIGHT commands to continue."
  );
  spy.mockRestore();
  expect(robot.x).toBe(0);
  expect(robot.y).toBe(0);
  expect(robot.facing).toBe("WEST");
});

test("Ensure that robot doesn't fall off the NORTH edge", () => {
  const robot = new Robot();
  const spy = jest.spyOn(console, "log");
  robot.place(0, 4, "NORTH");
  const command = "MOVE";
  processCommand(robot, command);
  expect(spy).toHaveBeenCalledWith(
    "Error. You may be out of range. Please ensure your X,Y are within boundaries of your 5 x 5 grid. Try LEFT/RIGHT commands to continue."
  );
  expect(robot.x).toBe(0);
  expect(robot.y).toBe(4);
  expect(robot.facing).toBe("NORTH");
  spy.mockRestore();
});
test("Ensure that robot doesn't fall off the SOUTH edge", () => {
  const robot = new Robot();
  const spy = jest.spyOn(console, "log");
  robot.place(0, 0, "SOUTH");
  const command = "MOVE";
  processCommand(robot, command);
  expect(spy).toHaveBeenCalledWith(
    "Error. You may be out of range. Please ensure your X,Y are within boundaries of your 5 x 5 grid. Try LEFT/RIGHT commands to continue."
  );
  expect(robot.x).toBe(0);
  expect(robot.y).toBe(0);
  expect(robot.facing).toBe("SOUTH");
  spy.mockRestore();
});
