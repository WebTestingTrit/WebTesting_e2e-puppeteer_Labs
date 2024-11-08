/**
 * given description builder
 * @param {*} given description
 * @param {*} scenario function to execute
 */
export const given = async function (given, scenario) {
  console.group(`GIVEN: ${given}`);
  await scenario();
  console.groupEnd();
};

/**
 * when description builder
 * @param {*} when description
 * @param {*} action function to execute
 */
export const when = async function (when, action) {
  console.group(`WHEN: ${when}`);
  try {
    await action();
  } catch (e) {
    console.log(`❌ FAILED: ${e.message}`);
    console.log(e);
  }
  console.groupEnd();
};

/**
 * then description builder
 * @param {*} should description
 * @param {*} actual result
 * @param {*} expected expected result
 */
export const then = function (should, actual, expected) {
  if (actual === expected) {
    console.log(`THEN : ${should} ✅`);
  } else {
    console.log(
      `THEN : ${should} ❌
      - Expected: ${expected} but got ${actual}`
    );
  }
};
