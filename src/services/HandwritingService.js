export default class HandwritingService {
  constructor() {
    this.baseUrl = "http://localhost:8083/api/handwriting";
  }

  async GetByNoteId(noteId) {
    const response = await fetch(`${this.baseUrl}?noteId=${noteId}`);

    if (!response.ok) {
      console.warn("Response not Ok.");
    }

    return response.json();
  }
}
