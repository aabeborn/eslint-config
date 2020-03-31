# @andreabenato/eslint-config

Yeah, config ESLint requires a lot of and good time!:disappointed_relieved:

So here it is the one that makes all for you!:sunglasses::guitar:

Take a good spritz/beer in your saved time!

## How to use 

Install it via npm by running:

```
    npm install ---save dev eslint @andreabenato/eslint-config
```

And then the only thing you have to do is extending it in your eslint like this

```json
{
    "extends":["@andreabenato"]
}
```

### Subconfigurations

The main configuration contains only the main rules valid for every kind of project.

So the packages exposes some really useful subconfigurations, extendible from your project when you needed them.

These configurations are: 

- ecma => used for ecmascript (es6) modules e syntax (uses babel-eslint as parser)
- commonjs => used for commonjs syntax modules
- react => used for react and jsx syntax
- strict => javascript strict mode

You can use them by extending them with the main configuration (better solution)
```json
{
    "extends":["@andreabenato","@andreabenato/<config_name>"]
}
```

or standalone if you have your own base configuration: 
```json
{
    "extends":["@andreabenato/<config_name>"]
}
```
**note**
if you use your base configuration rememeber that all the common rules also for styleing are not imported.

The rules included are the ones strictly related to the configuration name!

**ATTENTION** 
It's recommended to install this dependencies/plugin to make the package works correctly.

- `react`: [React](https://www.npmjs.com/package/react) if you are using the ReactJs configuration (eslint-config-react)
- `babel-module-resolver`: [babel-plugin-module-resolver](https://www.npmjs.com/package/babel-plugin-module-resolver)
    to work with the module-resolver babel plugin (eslint-plugin-import and eslint-import-resolver-babel-module)
- `jest`: [jest framework](npmjs.com/package/jest)
## License

The project is currently under MIT license
