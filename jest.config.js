module.exports = {
  // ... other config
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js',
  },
  // ... other config
};
