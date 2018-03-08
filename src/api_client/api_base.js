export default (baseUrl, auth) => {
  return (path, method, body) => {
    const req = new Request(baseUrl + path, { method, body });
    return fetch(req).then(res => res.data);
  };
};
