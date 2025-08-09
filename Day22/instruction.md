



------------------------------------------------------------------------------------------

1. npm install --save-dev @testing-library/react @testing-library/jest-dom

2. npm install --save-dev @testing-library/dom

3. npm install --save-dev jest jest-environment-jsdom

---------------------------------------------------------------------------

jest.config.js

module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
}

updated one :....

export default {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}

-----------------------------------------------------------------

jest.setup.js

import '@testing-library/jest-dom'

------------------------------------------------------------------

package.json

"test": "jest",
"coverage": "jest --coverage"

---------------------------------------------------------------------
babel install

npm install --save-dev @babel/preset-env @babel/preset-react babel-jest

---------------------------------------------------------------------------

Create babel.config.js

module.exports={
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
};

-----------------------------------------------------------------------------------------------

moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },


--------------------------------------------------------




