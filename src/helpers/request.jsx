// const baseURL = "http://localhost:9000/api/runs";
const baseURL = "https://run-tracker-backend.fly.dev/api/runs";


class Request {
  get() {
    return fetch(baseURL).then((res) => res.json());
  }

  getById(id) {
    return fetch(`${baseURL}/${id}`).then((res) => res.json());
  }

  post(payload) {
    return fetch(baseURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).then((res) => res.json());
  }

  delete(id) {
    return fetch(`${baseURL}/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
  }
}

export default Request;
