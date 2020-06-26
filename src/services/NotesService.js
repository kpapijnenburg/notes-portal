import { authHeader } from "./../_helpers/auth-header";

export default class NotesService {
  constructor() {
    this.baseUrl = process.env.VUE_APP_NOTES_SERVER;
  }

  async Get() {
    const response = await fetch(this.baseUrl, {
      headers: this.getHeaders(),
    });

    return response.json();
  }

  async getById(id) {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      headers: this.getHeaders(),
    });

    if (!response.ok) {
      // Do something
    }

    return response.json();
  }

  async Create(note) {
    note.imageData = this.trim(note.imageData);

    let headers = this.getHeaders();
    headers["Content-Type"] = "application/json";

    const response = await fetch(`${this.baseUrl}`, {
      method: "POST",
      body: JSON.stringify(note),
      headers: headers,
    });

    if (!response.ok) {
      // do something
    }

    return response.json();
  }
  trim(note) {
    const parts = note.split(",");
    return parts[1];
  }

  getHeaders() {
    let headers = authHeader();
    headers["Access-Control-Allow-Origin"] = "*";
    return headers;
  }
}
