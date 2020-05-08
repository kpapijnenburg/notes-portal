export default class NotesService {
  constructor() {
    this.baseUrl = "http://localhost:3000/notes";
  }

  async Get() {
    const result = fetch(this.baseUrl)
      .then((res) => res.json())
      .catch((err) => {
        throw err;
      });

    return await result;
  }

  async GetById(id) {
    const response = await fetch(`${this.baseUrl}/${id}`);

    if (!response.ok) {
      // Do something
    }

    return response.json();
  }

  async Create(note) {
    const response = await fetch(`${this.baseUrl}`, {
      method: "POST",
      body: note,
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
