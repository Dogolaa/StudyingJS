const { cpfs, ips } = require('./base');

console.log(cpfs.match(/[0-9]+\.[0-9]+\.[0-9]+-[0-9]+/g));
console.log(ips.match(/[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/g));

console.log(`\n ########################## \n`);

//melhorando-as
console.log(cpfs.match(/\d+\.\d+\.\d+-\d+/g));
console.log(cpfs.match(/\d+(\.\d+){2}-\d+/g));

console.log(`\n ########################## \n`);

console.log(ips.match(/[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/g));
