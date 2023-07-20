/**
 * Make a request using node.
 *
 * @param   {string}  method
 * @param   {string}  url
 * @param   {string}  body
 * @param   {Object}  headers
 * @returns {Promise}
 */
module.exports = function request (method, url, body, headers) {
  return fetch(url, {
    body,
    method,
    headers
  }).then(function (res) {
    return res.text()
      .then(body => {
        return {
          status: res.status,
          body
        }
      })
  })
}
