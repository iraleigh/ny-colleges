# ny-colleges

## Cookbook
Getting started
```
$ git clone ...
$ cd ny-colleges
$ npm install
$ npm start
```

If you want to set the two projects up seperately, in one terminal run:
```
$ cd server
$ npm install
$ npm start
```
in a second terminal run:
```
$ cd client
$ npm install
$ npm start
```

If you want to see how they run deployed together as one app
```
$ cd client
$ npm run build
$ cd ../server
$ PROD=true npm start
```

## Checklist
 - [x] create checklist
 - [x] set up project structure
 - [x] initialize server npm package
 - [x] add testing suite to server
 - [x] set up module structure for server
 - [x] build/test controller for api
 - [x] build/test express server with route
 - [x] initialize client as react app
 - [x] build as one table of data
 - [x] add/test sorting to table
 - [x] add/test pagination to table
 - [x] add caching layer
 
## Bonus
 - [x] add d3 to visualize data as bar graph of student size
 - [x] change graph with pagination
 - [x] set up Github Actions
