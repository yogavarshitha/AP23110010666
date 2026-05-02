function logRequest(method, url) {
  const time = new Date().toISOString();
  console.log(`[${time}] ${method} ${url}`);
}

module.exports = logRequest;