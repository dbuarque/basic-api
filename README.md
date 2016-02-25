# Just a basic express app

## Features

* Webpack Build Ready
* Babel & ES2015
* Mongoose
* Mongodb Driver for bulk import on startup
* Mocha for tests

## Scripts

### Start the project for development
```
npm run dev
```

### Run All tests
```
npm test
```

### Run ESlint
```
npm run lint
```

### Remove dist and tmp
```
npm run clean
```

### Build the API for production
```
npm run webpack
```


    "clean": "rm -rf dist && rm -rf tmp",
    "webpack": "NODE_ENV=production webpack -p",
    "dev": "./node_modules/.bin/nodemon src/index.js --exec ./node_modules/.bin/babel-node --presets es2015,stage-0",
    "test": "mocha ./tests/* --compilers js:babel-register",
    "lint": "eslint src --ignore-path ./src/boot/import-data.js"