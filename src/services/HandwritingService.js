export default class HandwritingService {
  constructor() {
    this.baseUrl = "http://localhost:3000/handwriting";
  }

  async GetByNoteId(noteId) {
    const response = await fetch(`${this.baseUrl}?noteId=${noteId}`);

    if (!response.ok) {
      console.warn("Response not Ok.");
    }

    return response.json();
  }
}
