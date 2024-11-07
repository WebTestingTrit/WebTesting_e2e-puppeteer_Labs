export const given = async function (given, scenario) {
  console.group(`GIVEN: ${given}`);
  await scenario();
  console.groupEnd();
};

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
