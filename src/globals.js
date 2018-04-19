let config = require('./config');

module.exports = {
  homeData: [],
  userData: {},
  loggedIn: false,

  getData: (path, callback) => {
    fetch(config.SERVER_URI+path)
    .then(res => res.json())
    .then(res => {
      if(res.err)
        return callback(true, res.err);
      
      return callback(false, res.data);
    })
    .catch(err => {
      return callback(true, err);
    })
  },

  postData: (path, data, callback) => {
    let fetchPath = typeof path === 'string' ? config.SERVER_URI+path: config.SERVER_URI+path.path
    console.log(fetchPath);
    fetch(fetchPath, {
      method: 'post',
      headers: typeof path === 'string' ? 
        {'Content-Type': 'application/json'}: 
        Object.assign({'Content-Type': 'application/json'}, path.headers),
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
      if(res.err)
        return callback(true, res.err)
      else
        return callback(false, res.data)
    })
    .catch(err => {
      return callback(true, err);
    })
  }

}