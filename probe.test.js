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
  });

  it('should execute a string of commands', () => {
  });

  it('should throw an error for invalid commands', () => {
  });

  it('should execute a string of commands for 2 pods', () => {
  });
});
