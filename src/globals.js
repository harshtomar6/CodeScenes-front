import { SERVER_URI } from './config';

export let homeData = [];
export let userData =  {};
export let loggedIn = false;

export const getData = async path => {
  try{
    let resObj = await fetch(SERVER_URI+path)
    let res = await resObj.json();

    return res;
  }catch(err){
    return {err: err, data: null};
  }
}

export const postData = async (path, data) => {
  let fetchPath = typeof path === 'string' ? SERVER_URI+path: SERVER_URI+path.path;

  try{
    let resObj = await fetch(fetchPath, {
      method: 'post',
      headers: typeof path === 'string' ? 
        {'Content-Type': 'application/json'}: 
        Object.assign({'Content-Type': 'application/json'}, path.headers),
      body: JSON.stringify(data)
    });
    let res = await resObj.json();

    return res;
  }catch(err){
    return {err: err, data: null};
  }
}
