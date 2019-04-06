# Instruction
`$ npm install`

## For development

`$ npm run dev` - run app default on port `5200`

## For deployment

`$ npm run build` - build app

`$ npm start` - run app with prod flag on port `3000`

### Configs

You can change config like default title for pages and ports in file `config.js`


#### HOC withPage

During creating new pages remember to export your page component with HOC `withPage` to keep defaultHead data like global styles or fonts.
You can define your global link for styles or fonts or some other resources in:

`src/app-bootstrap/HeadData.js` - there are just elements which goes to `<head>` tag on every page as a global.

If you want to have custom headData per page then you should pass second parameter to `withPage` HOC for example:

```

export default withPage(Index, {
    title: 'My custom title for Index page',
    metas: [
        {
            name: 'keywords',
            content: 'Keyword for index page'
        },
        {
            name: 'description',
            content: 'Description for index page'
         }
    ]
})
```

as a result your `<head>` tag receive:

```
<title>My custom title for Index page</title>
<meta name="keywords" content="Keyword for index page">
<meta name="description" content="Description for index page">
```


#### Directory aliases
You can check and create new one  directory aliases in file `.babelrc`
