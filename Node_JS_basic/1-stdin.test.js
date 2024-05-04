const assert = require('assert');
const { spawn } = require('child_process');

describe('CLI program', () => {

  it('should display user name and closing message', (done) => {
    const child = spawn('node', ['1-stdin.js']);

    child.stdout.on('data', (data) => {
      const output = data.toString();
      assert(output.includes('Welcome to Holberton School, what is your name?'));
      child.stdin.write('John\n');
    });

    child.on('exit', (code) => {
      assert.strictEqual(code, 0);
      done();
    });
  });
});
