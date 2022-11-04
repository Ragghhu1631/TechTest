module.exports = {
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    preset: 'react-native',
    testEnvironment: 'jsdom',
    testMatch: ['<rootDir>/**/*.test.{js,jsx,ts,tsx}'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    transformIgnorePatterns: ['node_modules/(?!(@react-native|react-native)/)'],
};
