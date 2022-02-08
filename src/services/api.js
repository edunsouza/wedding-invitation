class API {
  constructor(root) {
    this.apiRoot = root;
  }

  async fetch(path, _method, _headers, _body) {
    const url = `${this.apiRoot}/${path}`;
    const method = _method || 'GET';
    const headers = _headers || { 'Content-Type': 'application/json' };
    const body = JSON.stringify(_body);
    const response = await window.fetch(url, { method, headers, body });
    return await response.json();
  }

  async put(path, body, headers) {
    return await this.fetch(path, 'PUT', headers, body);
  }

  async post(path, body, headers) {
    return await this.fetch(path, 'POST', headers, body);
  }

  async get(path, headers) {
    return await this.fetch(path, 'GET', headers);
  }
}

export default new API('https://camilaeeduardo.deta.dev');