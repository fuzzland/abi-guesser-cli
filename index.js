#!/usr/bin/env node

const { guessAbiEncodedData, guessFragment } = require('@openchainxyz/abi-guesser');

const calldata = process.argv[2];

if (!calldata) {
  console.error("Usage: abi-guesser <calldata>");
  process.exit(1);
}

try {
  const paramTypes = guessAbiEncodedData(calldata);
  const fragment = guessFragment(calldata);

  console.log(JSON.stringify({
    paramTypes,
    fragment
  }, null, 2));
} catch (error) {
  console.error("Error:", error.message);
}

