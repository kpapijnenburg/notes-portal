import { authHeader } from "../_helpers/auth-header";

export const userService = {
  login,
  logout,
  getAll,
};

function login(email, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  };

  const response = await fetch('http://localhost:4000/users/authenticate', requestOptions)

  const user = handleResponse(response);

  if(user.token) {
      localStorage.setItem('user', JSON.stringify(user))
  }

  return user;
}

function logout() {
    localStorage.removeItem('user')
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }

    const response = await fetch('http://localhost:4000/users', requestOptions)

    return handleResponse(response)
}

function handleResponse(response) {
    const data = JSON.parse(response.text());

    if(!response.ok)
    {
        if(response.status === 401)
        {
            // If 401: unauthorized the user is logged out.
            logout()
            location.reload(true);
        }
        
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error)
    }

    return data
}
