export default class NotesService {
  constructor() {
    this.baseUrl = process.env.VUE_APP_NOTES_SERVER;
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
    note.imageData = this.trim(note.imageData);

    const response = await fetch(`${this.baseUrl}`, {
      method: "POST",
      body: JSON.stringify(note),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      // do something
    }

    return response.json();
  }
  //   Create(note) {}
  //   Update(note) {}
  //   Delete(note) {}
  trim(note) {
    const parts = note.split(",");
    return parts[1];
  }
}
