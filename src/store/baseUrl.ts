const csbUrl = 'https://6xz4j3-3005.csb.app';
const isLocalhost =
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1';
export const baseUrl = isLocalhost ? 'http://localhost:3006' : csbUrl;
