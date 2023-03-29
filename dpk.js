const {constants} = require('./constants');
const {helpers} = require('./utils')

const {
  TRIVIAL_PARTITION_KEY,
  MAX_PARTITION_KEY_LENGTH,
} = constants // Refactoring #1

const {
  createSha3512UsingData
} = helpers // Refactoring #2

exports.deterministicPartitionKey = (event) => {
  let candidate = TRIVIAL_PARTITION_KEY; // Refactoring #3

  if (event) {
    if (event.partitionKey) {
      candidate = event.partitionKey;
    } else {
      const data = JSON.stringify(event);
      candidate = createSha3512UsingData(data);
    }
  }

  if (typeof candidate !== 'string') {
    candidate = JSON.stringify(candidate);
  } // Refactoring #3

  // If partitionKey is a string and its bigger than MAX_PARTITION_KEY_LENGTH, proceed to hash
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = createSha3512UsingData(candidate);
  }
  return candidate;
};
