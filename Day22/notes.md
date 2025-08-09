# Testing With Vite Tool

- install jest and other libraries from  https://dev.to/teyim/effortless-testing-setup-for-react-with-vite-typescript-jest-and-react-testing-library-1c48

- 1. enter cmd in terminal: npm install -D jest @testing-library/react ts-jest @types/jest ts-node @testing-library/jest-dom jest-environment-jsdom @testing-library/user-event

- 2. Setup jest.setup.js and jest.config.js files in root directory

- 3. Add these "test": "jest",
    "coverage": "jest --coverage" in package.json

- 4. -  Follow this website for further instructions, https://jestjs.io/docs/tutorial-react (under testing react apps) 
     -  npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer

- 5. Setup babel.config.cjs     

- 6. create folder under src named tests
