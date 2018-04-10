'use strict';
const curl = require('curl');

curl.get('https://nealrs.herokuapp.com/nyc/', {}, (err, response, body) => {
    console.log('\n\x1b[36m%s\x1b[0m\n', 'NYC SUBWAY STATUS');
    console.log(body);
});
