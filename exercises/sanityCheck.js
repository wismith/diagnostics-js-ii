/**
 * A helper function to check whether two arrays are equal.
 */
function arrayEquals(leftArray, rightArray) {
  if (leftArray.length !== rightArray.length) {
    return false;
  }

  for (let i = 0; i < leftArray.length; i += 1) {
    if (leftArray[i] !== rightArray[i]) {
      return false;
    }
  }

  return true;
}

function sanityCheck(actual, expected) {
  if (arrayEquals(actual, expected)) {
    console.log('[PASS]');
  } else {
    console.log('[FAIL]');
    console.log('  Expected:', expected);
    console.log('  Returned:', actual);
  }
}

module.exports = sanityCheck;
