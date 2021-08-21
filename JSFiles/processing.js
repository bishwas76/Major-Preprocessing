const fs = require('fs');

fs.readFile('./data.json', (err, data) => {
  if (err) {
    console.log('Error Reading file');
  } else {
    const value = JSON.parse(data);
    console.log(value.length);
  }
});
