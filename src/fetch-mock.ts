export default typeof window !== 'undefined' ? window.fetch.bind(window) : () => { throw new Error('Fetch not available'); };
