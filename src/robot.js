import Table from "./table.js";

class Robot {
  constructor() {
    this.x = null;
    this.y = null;
    this.facing = null;
    this.placed = false;
    this.table = new Table();
  }

  place(x, y, facing) {
    if (this.table.isValidPosition(x, y)) {
      this.x = x;
      this.y = y;
      this.facing = facing;
      this.placed = true;
    } else {
      console.log(
        `Error. Invalid position. Please ensure your X,Y are within boundaries of your ${this.table.width} x ${this.table.height} grid`
      );
    }
  }

  move() {
    if (!this.placed) return;

    let newX = this.x;
    let newY = this.y;

    switch (this.facing) {
      case "NORTH":
        newY++;
        break;
      case "SOUTH":
        newY--;
        break;
      case "EAST":
        newX++;
        break;
      case "WEST":
        newX--;
        break;
    }

    if (this.table.isValidPosition(newX, newY)) {
      this.x = newX;
      this.y = newY;
    } else {
      console.log(
        `Error. You may be out of range. Please ensure your X,Y are within boundaries of your ${this.table.width} x ${this.table.height} grid. Try LEFT/RIGHT commands to continue.`
      );
    }
  }

  left() {
    if (!this.placed) return;
    switch (this.facing) {
      case "NORTH":
        this.facing = "WEST";
        break;
      case "SOUTH":
        this.facing = "EAST";
        break;
      case "EAST":
        this.facing = "NORTH";
        break;
      case "WEST":
        this.facing = "SOUTH";
        break;
    }
  }
  right() {
    if (!this.placed) return;
    switch (this.facing) {
      case "NORTH":
        this.facing = "EAST";
        break;
      case "SOUTH":
        this.facing = "WEST";
        break;
      case "EAST":
        this.facing = "SOUTH";
        break;
      case "WEST":
        this.facing = "NORTH";
        break;
    }
  }

  report() {
    if (this.placed) {
      console.log(`Output: ${this.x}, ${this.y}, ${this.facing}`);
    }
  }
}

export default Robot;
