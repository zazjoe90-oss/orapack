// Placeholder for node-fetch in browser environment
const fetch = typeof window !== 'undefined' ? window.fetch.bind(window) : null;
export default fetch;
export const Request = typeof window !== 'undefined' ? window.Request : null;
export const Response = typeof window !== 'undefined' ? window.Response : null;
export const Headers = typeof window !== 'undefined' ? window.Headers : null;
