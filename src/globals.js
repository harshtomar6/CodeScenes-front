let config = require('./config');

module.exports = {
  homeData: [],
  userData: {},
  loggedIn: false,

  getData: (path, callback) => {
    fetch(config.SERVER_URI+path)
    .then(res => {
      if(!res.ok)
        return callback(true, 'Internal Server Error');
      else
        return res;
    })
    .then(res => res.json())
    .then(data => callback(false, data))
    .catch(err => {
      return callback(true, err);
    })
  },

  postData: (path, data, callback) => {
    fetch(config.SERVER_URI+path, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(res => {
      if(!res.ok)
        return callback(true, 'Internal Server Error');
      else
        return res;
    })
    .then(res => res.json())
    .then(data => callback(false, data))
    .catch(err => {
      return callback(true, err);
    })
  }

}