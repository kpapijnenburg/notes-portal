export default class HandwritingService {
  constructor() {
    this.baseUrl = process.env.VUE_APP_HANDWRITING_SERVER;
  }

  async GetByNoteId(noteId) {
    const response = await fetch(`${this.baseUrl}?noteId=${noteId}`, {
      mode: "cors",
    });

    if (!response.ok) {
      console.warn("Response not Ok.");
    }

    return response.json();
  }
}
