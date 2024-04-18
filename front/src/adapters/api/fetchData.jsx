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
  const then = (onFulfilled, onRejected) =>
    suspender.then(onFulfilled, onRejected);

  return { read, then };
};

export function fetchData(url) {
  const promise = fetch(url)
    .then((response) => response.json())
    .then((json) => {
      if (
        !json ||
        !json.data ||
        !json.data.results ||
        !Array.isArray(json.data.results)
      ) {
        throw new Error("Invalid data format received from the API");
      }
      return json.data.results;
    })
    .catch((error) => {
      throw error;
    });

  return getSuspender(promise);
}
