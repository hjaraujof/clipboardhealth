const crypto = require('crypto');
exports.helpers = {
  createSha3512UsingData: (data) => crypto.createHash('sha3-512').update(data).digest('hex')
}