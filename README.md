# babelproject

# To ouput the result into a file
`npm run babel` // compiles the js to es5 <br/>
`npm run build` // runs the server <br/>

On Babel 7 release, all the packages needs to be installed with `@babel/` prefix ex: `@babel/core` 

## 3 Main dependencies:
`@babel/cli` <br/>
`@babel/core` <br/>
`@babel/preset-env` <br/>

## Output to a file babel
`babel sourceFile.js --out-file targetFile.js`

### .babelrc:
`"presets": [ "@babel/env" ]`