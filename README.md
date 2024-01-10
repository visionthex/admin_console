# Admin Console

## NPM Modules
`npm i react-pro-sidebar@0.7.1`
This will help with getting the correct react css files loaded.

original npm module
`npm i react-pro-sidebar` <-- updated version but missing css files

Full NPM Module list
```
npm i @mui/material @emotion/react @emotion/styled @mui/x-data-grid @mui/icons-material react-router-dom@6 react-pro-sidebar@0.7.1 formik yup @fullcalendar/core @fullcalendar/daygrid @fullcalendar/timegrid @fullcalendar/list @nivo/core @nivo/pie @nivo/line @nivo/bar @nivo/geo
```

## Getting GH-Pages working with React
`npm add gh-pages`

### Package.json
```
{
  "name": "starter-project",
  "homepage": "https://tomerpacific.github.io/starter-project/", <---- add gh-pages
  "version": "0.1.0",
  /....
}
```

```
"scripts": {
    "start": "react-scripts start",
    "predeploy": "npm run build", <----------- #1 add
    "deploy": "gh-pages -d build", <---------- #2 add
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

### Next step
`npm run deploy`

## React pages will be active on your repo
