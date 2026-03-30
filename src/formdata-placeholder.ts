// Placeholder for formdata-polyfill in browser environment
const FormData = typeof window !== 'undefined' ? window.FormData : null;
export default FormData;
