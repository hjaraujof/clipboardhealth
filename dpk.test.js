const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("Passing event obj input with a partitionKey prop as a string, Returns the partitionKey property as string", () => {
    const partitionKey = 'IAmAPartitionKey'
    const trivialKey = deterministicPartitionKey({partitionKey});
    expect(trivialKey).toBe(partitionKey);
  });
  it("Passing event obj input with a partitionKey prop as an Object, Returns the stringified version of the partitionKey property", () => {
    const partitionKey = {key: 'value', 'IAmAnObjectKey': 'ObjectValue'}
    const trivialKey = deterministicPartitionKey({partitionKey});
    expect(trivialKey).toBe(`{"key":"value","IAmAnObjectKey":"ObjectValue"}`);
  });
  it("Using event obj input with NO partitionKey prop, Returns the Sha3-512 hash of the event object", () => {
    const obj = {key: 'value', 'IAmAnObjectKey': 'ObjectValue'}
    const trivialKey = deterministicPartitionKey(obj);
    expect(trivialKey).toBe("ba4c7d4ac9de602fe1ac9fbfdfad5f67205a7edcb472fd9ea8ca2749d82bf412d6f0d72c89f394f5fd879bc9d4fe4635cb038dafe4550ee2e4283718b544a239");
  });
  it("Using event obj input with a partitionKey prop as a string bigger than 256 chars, Returns the Sha3-512 hash of string", () => {
    const partitionKey = 'IAmAPartitionKeyIAmAPartitionKeyIAmAPartitionKeyIAmAPartitionKeyIAmAPartitionKeyIAmAPartitionKeyIAmAPartitionKeyIAmAPartitionKeyIAmAPartitionKeyIAmAPartitionKeyIAmAPartitionKeyIAmAPartitionKeyIAmAPartitionKeyIAmAPartitionKeyIAmAPartitionKeyIAmAPartitionKey1'
    const trivialKey = deterministicPartitionKey({partitionKey});
    expect(trivialKey).toBe('208e708cd08a966cfda55db370254f23e52a594db7a19e25de29612257cb76765a9a0d52f1fba50cdb1ddba0e7adb862b5a0f3719f0b67ace43f6bbc59d6fee3');
  });  
});
