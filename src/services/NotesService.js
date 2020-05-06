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
    const result = fetch(`${this.baseUrl}/${id}`)
      .then((res) => res.json())
      .catch((err) => {
        throw err;
      });

    return await result;
  }
  //   Create(note) {}
  //   Update(note) {}
  //   Delete(note) {}
}
