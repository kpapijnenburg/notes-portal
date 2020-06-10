import { authHeader } from "../_helpers/auth-header";

export const userService = {
  login,
  logout,
  getAll,
  register,
};

async function login(email, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  };

  const response = await fetch(
    "http://localhost:4000/users/authenticate",
    requestOptions
  );

  const user = await handleResponse(response);

  if (user.token) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  return user;
}

async function register(email, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  };

  const response = await fetch("http://localhost:4000/users", requestOptions);

  return await handleResponse(response);
}

function logout() {
  localStorage.removeItem("user");
}

async function getAll() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  const response = await fetch("http://localhost:4000/users", requestOptions);

  return handleResponse(response);
}

async function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
