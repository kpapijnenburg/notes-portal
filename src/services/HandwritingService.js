import { authHeader } from "./../_helpers/auth-header";
export default class HandwritingService {
  constructor() {
    this.baseUrl = process.env.VUE_APP_HANDWRITING_SERVER;
  }

  async GetByNoteId(noteId) {
    const response = await fetch(`${this.baseUrl}/notes/${noteId}`, {
      mode: "cors",
      headers: authHeader(),
    });

    if (!response.ok) {
      console.warn("Response not Ok.");
    }

    return response.json();
  }
}
