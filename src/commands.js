function processCommand(robot, command) {
  const parts = command.trim().split(" ");

  if (!robot.placed && parts[0] !== "PLACE") {
    console.log("The first command must start with PLACE");
    return;
  }

  if (parts[0] === "PLACE") {
    const coordinates = parts[1]?.split(",");
    if (coordinates?.length === 3) {
      const x = parseInt(coordinates[0]);
      const y = parseInt(coordinates[1]);
      const facing = coordinates[2];
      if (["NORTH", "SOUTH", "WEST", "EAST"].includes(facing)) {
        robot.place(x, y, facing);
      }
    }
  } else if (parts[0] === "MOVE") {
    robot.move();
  } else if (parts[0] === "LEFT") {
    robot.left();
  } else if (parts[0] === "RIGHT") {
    robot.right();
  } else if (parts[0] === "REPORT") {
    robot.report();
  }
}

export default processCommand;
