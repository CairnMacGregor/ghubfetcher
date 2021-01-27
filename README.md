# ghubfetcher

The purpose of this project was to teach myself how to use VUEX. I used the github api to create this application. 

## Known Issues
The state does not persist between refreshes, meaning if the user refreshes the browser the state is epmtied. I attempted to fix this with persisted state and cookies but for some reason the persisted state causes an error with calling to the API. The information for the user input was no longer being passed into the api call in the VUEX store. So until I come with a workaround for that the refresh issue remains and I have just but in some v-if-else statements to check to see if the data was there or not




## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
