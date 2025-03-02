import Robot from "../src/robot.js";

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
