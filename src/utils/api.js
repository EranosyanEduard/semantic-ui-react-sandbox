class Api {
  constructor() {
    this.headers = {
      'Content-Type': 'application/json',
    };
    this.url = 'https://webhook.site/9939966b-072a-4d2b-84b3-bf20bfb2bd76';
  }

  _postFormData(formData) {
    const requestOptions = {
      method: 'post',
      headers: this.headers,
      body: JSON.stringify(formData)
    };
    return fetch(this.url, requestOptions);
  }

  _callBaseRequestHandler(response, resolve, reject) {
    return response
      .then((res) => res.ok ? 'ok' : Promise.reject('not ok')) // case: dev
      .then(resolve)
      .catch(reject);
  }

  submitForm(formData, resolve, reject) {
    const response = this._postFormData(formData);
    return this._callBaseRequestHandler(response, resolve, reject);
  }
}

export default new Api();
