Repo contains 2 folders - webpack4 and webpack5 with (almost) identical code. The goal is to show the difference in behavior between Webpack 4 and 5.
How to start:
- Run npm install in both folders (webpack4 and webpack5)
- Run npm run serve in both folders
- In your browser open 2 URLs: http://localhost:9004/ - corresponds to Webpack4 and http://localhost:9005/ - corresponds to Webpack5
- Open devtools and check Console for both tabs. Console should display console.logs from src/app.js file.

You will see the following difference:
- http://localhost:9004/ - displays data for both default and named import (React and useEffect)
- http://localhost:9005/ - displays data only for named import (useEffect). React is undefined
