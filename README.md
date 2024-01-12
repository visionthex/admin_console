# Admin Console

## NPM Modules

Install the specific version of  `react-pro-sidebar`

`npm i react-pro-sidebar@0.7.1`

This will help with getting the correct react CSS files loaded. The original npm module can be installed with:

`npm i react-pro-sidebar`

## Other NPM Modules
Install the other necessary npm modules with:

```
npm i @mui/material @emotion/react @emotion/styled @mui/x-data-grid @mui/icons-material react-router-dom@6 react-pro-sidebar@0.7.1 formik yup @fullcalendar/react @fullcalendar/core @fullcalendar/daygrid @fullcalendar/timegrid @fullcalendar/list @nivo/core @nivo/pie @nivo/line @nivo/bar @nivo/geo
```

## Getting GH-Pages working with React
Add the gh-pages npm module:

`npm add gh-pages`

### Package.json
Update your package.json file:
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
Run the following command to deploy your application:

`npm run deploy`

## React pages will be active on your repo
After running the deploy command, your React pages will be active on your GitHub repository

## Links
https://nivo.rocks/


