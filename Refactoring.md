# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

1. Moved the constants to a separate file, a good practice to maintain constants in a separate file.
2. Moved the hashing function to a separate file, since we are using the same algorithm, updating the contents of the hash and also using the same digest calculation for both uses of the method, for a leaner and cleaner package file.
3. Removed the else statement of the second if block and initialized the candidate var value with TRIVIAL_PARTITION_KEY, since the package always tries to return the literal provided in the TRIVIAL_PARTITION_KEY constant and we only modify the candidate at that point only if the partitionKey is an object and we need to stringify it.
