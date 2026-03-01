const win = typeof window !== 'undefined' ? window : {} as any;

export const fetch = win.fetch ? win.fetch.bind(win) : () => { throw new Error('Fetch not available'); };
export const FormData = win.FormData;
export const Request = win.Request;
export const Response = win.Response;
export const Headers = win.Headers;
export const Blob = win.Blob;
export const File = win.File;

export default fetch;
