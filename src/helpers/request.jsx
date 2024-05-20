const baseURL = "http://localhost:9000/api/runs";

class Request {
  get() {
    return fetch(baseURL).then((res) => res.json());
  }

  post(baseURL, payload) {
    return fetch(baseURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).then((res) => res.json());
  }
}

export default Request;
