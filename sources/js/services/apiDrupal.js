import { async } from "regenerator-runtime";

class apiDrupal {
  index(){
    return 'welcome to service';
  }
}

export default apiDrupal;

function get(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => resolve(data));
  });
}

function post(url, data) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => reject(error))
      .then((response) => resolve(response));
  });
}
