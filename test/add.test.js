const sum = require('./add.js');

test ('adds 1 + 2 = 3', () =>{
    expect(sum(1, 2)).toBe(3);
});