export default class NotesService {
  constructor() {
    this.baseUrl = "http://localhost:8082/api/notes";
  }

  async Get() {
    const response = await fetch(this.baseUrl, {
      mode: "cors",
    });

    return response.json();
  }

  async getById(id) {
    const response = await fetch(`${this.baseUrl}/${id}`, { mode: "cors" });

    if (!response.ok) {
      // Do something
    }

    return response.json();
  }

  async Create(note) {
    const response = await fetch(`${this.baseUrl}`, {
      method: "POST",
      body: note,
      mode: "cors",
    });

    if (!response.ok) {
      // do something
    }

    return response.json();
  }
  //   Create(note) {}
  //   Update(note) {}
  //   Delete(note) {}
}
