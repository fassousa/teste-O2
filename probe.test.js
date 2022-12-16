// Probe.test.js
const Probe = require('./probe');

describe('Probe', () => {
  it('should move forward in the direction it is facing', () => {
    const SpaceProbe = new Probe({x: 0, y: 0}, 'N');
    SpaceProbe.moveForward();
    expect(SpaceProbe.position).toEqual({x: 0, y: 1});

    SpaceProbe.direction = 'E';
    SpaceProbe.moveForward();
    expect(SpaceProbe.position).toEqual({x: 1, y: 1});

    SpaceProbe.direction = 'S';
    SpaceProbe.moveForward();
    expect(SpaceProbe.position).toEqual({x: 1, y: 0});

    SpaceProbe.direction = 'W';
    SpaceProbe.moveForward();
    expect(SpaceProbe.position).toEqual({x: 0, y: 0});
  });

  it('should turn left and right', () => {
    const SpaceProbe = new Probe({x: 0, y: 0}, 'N');
    SpaceProbe.turnLeft();
    expect(SpaceProbe.direction).toBe('W');

    SpaceProbe.turnLeft();
    expect(SpaceProbe.direction).toBe('S');

    SpaceProbe.turnLeft();
    expect(SpaceProbe.direction).toBe('E');

    SpaceProbe.turnLeft();
    expect(SpaceProbe.direction).toBe('N');

    SpaceProbe.turnRight();
    expect(SpaceProbe.direction).toBe('E');

    SpaceProbe.turnRight();
    expect(SpaceProbe.direction).toBe('S');

    SpaceProbe.turnRight();
    expect(SpaceProbe.direction).toBe('W');

    SpaceProbe.turnRight();
    expect(SpaceProbe.direction).toBe('N');
  });

  it('should execute a string of commands', () => {
    const SpaceProbe = new Probe({x: 0, y: 0}, 'N');
    SpaceProbe.move('LMLMLMLMM');
    expect(SpaceProbe.position).toEqual({x: 0, y: 1});
    expect(SpaceProbe.direction).toBe('N');

    SpaceProbe.move('MMRMMRMRRM');
    expect(SpaceProbe.position).toEqual({x: 2, y: 3});
    expect(SpaceProbe.direction).toBe('N');
  });

  it('should throw an error for invalid commands', () => {
    const SpaceProbe = new Probe({x: 0, y: 0}, 'N');
    expect(() => SpaceProbe.move('ABC')).toThrowError('Invalid command: A');
    expect(() => SpaceProbe.move('LMB')).toThrowError('Invalid command: B');
  });

  it('should execute a string of commands for 2 pods', () => {
    const Probe1 = new Probe({x: 1, y: 2}, 'N');
    const Probe2 = new Probe({x: 3, y: 3}, 'E');
    Probe1.move('LMLMLMLMM');
    Probe2.move('MMRMMRMRRM');

    expect(Probe1.position).toEqual({x: 1, y: 3});
    expect(Probe1.direction).toBe('N');
    expect(Probe2.position).toEqual({x: 5, y: 1});
    expect(Probe2.direction).toBe('E');
  });
});

