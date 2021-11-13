//const x = require('./module-example/index.js')
const sum = ar => ar.reduce((a, i) => a + i, 0)
const x = {a:1*2+3,b:"Hello world!", f:x=>x*x}
module.exports = {a:x.a*2,b:x.b,c:x.f(7),d:sum([1, 2, 3])}
