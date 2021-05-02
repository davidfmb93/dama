
export default class Petition {
 get(url: string) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data));
    });
  }
  
  post(url: string, data: object) {
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

  put(url: string, data: object) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT", // or 'PUT'
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
}
  