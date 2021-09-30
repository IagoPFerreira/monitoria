const fs = require('fs')
const data2 = require('../../api/data/data2.json')
console.log(data2);

data2.push('teste');

const data = JSON.stringify(data2)
console.log(Array.isArray(data2));

try {
  fs.writeFileSync('../../api/data/data2.json', data)
} catch (err) {
  console.error(err)
}