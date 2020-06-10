import { authHeader } from "../_helpers/auth-header";

export default class UserService {
  constructor() {
    this.baseUrl = process.env.VUE_APP_IDENTITY_SERVER;
  }

  async login(username, password) {
    const requestOptions = {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    };

    const response = await fetch(this.baseUrl, requestOptions);

    const user = await this.handleResponse(response);

    if (user.token) {
      localStorage.setItem("user", JSON.stringify(user));
    }

    return user;
  }

  async register(username, password) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    };

    const response = await fetch("http://localhost:4000/users", requestOptions);

    return await this.handleResponse(response);
  }

  logout() {
    localStorage.removeItem("user");
  }

  async getAll() {
    const requestOptions = {
      method: "GET",
      headers: authHeader(),
    };

    const response = await fetch("http://localhost:4000/users", requestOptions);

    return this.handleResponse(response);
  }

  async handleResponse(response) {
    return response.text().then((text) => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        if (response.status === 401) {
          // auto logout if 401 response returned from api
          this.logout();
          location.reload(true);
        }

        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
      return data;
    });
  }
}
