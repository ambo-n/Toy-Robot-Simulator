function processCommand(robot, command) {
  const parts = command.trim().split(" ");

  if (!robot.placed && parts[0] !== "PLACE") {
    console.log("Error: The first command must start with PLACE X,Y,FACING");
    return;
  }

  if (parts[0] === "PLACE") {
    const coordinates = parts[1]?.split(",");
    if (!coordinates || coordinates.length !== 3) {
      console.log("Error: Invalid PLACE format. Please use PLACE X,Y,FACING");
    }
    if (coordinates?.length === 3) {
      const x = parseInt(coordinates[0]);
      const y = parseInt(coordinates[1]);
      const facing = coordinates[2];
      if (
        isNaN(x) ||
        isNaN(y) ||
        !["NORTH", "SOUTH", "WEST", "EAST"].includes(facing)
      ) {
        console.log(
          "Error: PLACE commands requires valid X,Y coordindates and a direction (NORTH, SOUTH, WEST, EAST"
        );
      } else {
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
  } else {
    console.log(
      "Error: Invalid command. Valid commands: PLACE X,Y,FACING, MOVE, LEFT, RIGHT, REPORT or EXIT to terminate"
    );
  }
}

export default processCommand;
