export function authHeader() {
  let user = JSON.parse(localStorage.getItem("user"));

  if (user == null && user.token == null) return {};

  return { Authorization: "Bearer " + user.token };
}
