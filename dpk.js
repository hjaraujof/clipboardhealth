const {constants} = require('./constants');
const {helpers} = require('./utils')

const {
  TRIVIAL_PARTITION_KEY,
  MAX_PARTITION_KEY_LENGTH,
} = constants

const {
  createSha3512UsingData
} = helpers

exports.deterministicPartitionKey = (event) => {
  let candidate;

  if (event) {
    if (event.partitionKey) {
      candidate = event.partitionKey;
    } else {
      const data = JSON.stringify(event);
      candidate = createSha3512UsingData(data);
    }
  }

  if (candidate) {
    if (typeof candidate !== 'string') {
      candidate = JSON.stringify(candidate);
    }
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = createSha3512UsingData(candidate);
  }
  return candidate;
};
