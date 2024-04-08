//private key: bd166e0e05dbbe70c222f116351ff3cf8b06e722
//public key: 12bcb82570057829e28513a85d0c78ce
//ts: 1
//hash: 21c65676f13c349c8cbeea0605c3b4ee


const getSuspender = (promise) => {
    let status = "pending";
    let response;
  
    const suspender = promise.then(
      (res) => {
        status = "success";
        response = res;
      },
      (err) => {
        status = "error";
        response = err;
      }
    );
  
    const read = () => {
      switch (status) {
        case "pending":
          throw suspender;
        case "error":
          throw response;
        default:
          return response;
      }
    };
  
    return { read };
  };
  
  export function fetchData(url) {
    const promise = fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (!json || !json.data || !json.data.results || !Array.isArray(json.data.results)) {
          throw new Error('Invalid data format received from the API');
        }
        return json.data.results;
      })
      .catch((error) => {
        throw error;
      });
  
    return getSuspender(promise);
  }
  