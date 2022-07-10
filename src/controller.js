
async function handleRequest(event, message) {
    return "pds: " + new Date() + " --> " + message;
  }

module.exports = handleRequest