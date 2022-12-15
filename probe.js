// Represents a Space Probe
class Probe {
  constructor(position, direction) {
    this.position = position;
    this.direction = direction;
  }

  // Turns the probe 90 degrees to the left
  turnLeft() {
    switch (this.direction) {
      case 'N':
        this.direction = 'W';
        break;
      case 'W':
        this.direction = 'S';
        break;
      case 'S':
        this.direction = 'E';
        break;
      case 'E':
        this.direction = 'N';
        break;
    }
  }

  // Turns the probe 90 degrees to the right
  turnRight() {
    switch (this.direction) {
      case 'N':
        this.direction = 'E';
        break;
      case 'E':
        this.direction = 'S';
        break;
      case 'S':
        this.direction = 'W';
        break;
      case 'W':
        this.direction = 'N';
        break;
    }
  }

  // Moves the probe forward in the direction it is facing
  moveForward() {
    switch (this.direction) {
      case 'N':
        this.position.y += 1;
        break;
      case 'E':
        this.position.x += 1;
        break;
      case 'S':
        this.position.y -= 1;
        break;
      case 'W':
        this.position.x -= 1;
        break;
    }
  }
}
