/** @type {import('jest').Config} */
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', //  Next.js project address
});

// Jest config 
const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom', // fordi Next.js simulates the browser
};

module.exports = createJestConfig(customJestConfig);
