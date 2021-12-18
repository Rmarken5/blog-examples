const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: getJestProjects(),
  codeCoverage: true,
  coverageReporters: ['json', 'lcov', ['text', { skipFull: true }], 'clover'],
};
