module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'Accordio/**/*.{ts,tsx}'
  ],
  coverageDirectory: 'coverage',
  modulePathIgnorePatterns: [
    'Accordio/__tests__/helpers/'
  ]
};