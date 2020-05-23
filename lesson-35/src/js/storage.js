export const storage = {
  saveAnswer(text) {
    localStorage.setItem('answer', text);
  },
  hasAnswer() {
    return !!localStorage.getItem('answer');
  },
  getAnswer() {
    return localStorage.getItem('answer') || 'Here will ne an answer';
  },
  saveCharacters(data) {
    localStorage.setItem('characters', JSON.stringify(data));
  },
  getCharacters() {
    const item = localStorage.getItem('characters');
    return item ? JSON.parse(item) : [];
  },
}