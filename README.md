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
React:
- `eslint-react`
- `eslint-react-hooks`

Jest: 
- `eslint-plugin-jest`

JSX A11y:
- `eslint-plugin-jsx-a11y`

Babel Module Resolver
-`eslint-plugin-import`
-`eslint-import-resolver-babel-module` (if you use aliases in babel)


## License

The project is currently under MIT license
