# best-restaurant-backend
[![Actions Status](https://github.com/hi15/best-restaurant-backend/workflows/nodeci/badge.svg)](https://github.com/hi15/best-restaurant-backend/actions)

Get information about restaurants from Zomato API

## Description

The backend was developed in [Node](https://nodejs.org/) (v10.16.2) and deployment of application was done in [Heroku](https://www.heroku.com).
- Deploy available at [Backend](https://best-restaurant-backend.herokuapp.com/)
- I chose to use [node-geocoder](https://www.npmjs.com/package/node-geocoder) with [Here](https://developer.here.com/documentation/geocoder/topics/what-is.html) to consult any address and get the latitude and longitude.

Features available:
- [Categories](https://best-restaurant-backend.herokuapp.com/categories) get a simple categories list of restaurants.
- [Best Near Restaurants](https://best-restaurant-backend.herokuapp.com/best_near?place=New%20York%20City)(example of New York City) get information of the best restaurants from anywhere you want. 

In the case of the route Best Near Restaurants you need to pass the some address as a paramter like "best_near?place=New York City"

## Installing

Clone the repository:

```git clone git@github.com:hi15/best-restaurant-backend.git```

Change directory to the repository:

```cd best-restaurant-backend/```

Use [yarn](https://yarnpkg.com/en/docs/install) (Recommended) or [npm](https://www.npmjs.com/get-npm) to install the packages.

```yarn install```

Configure the file .env:
```cp .env.example .env```

Set the varibles in .env file:
```
API_KEY=API_KEY_FROM_ZOMATO_API
HERE_API_KEY=
HERE_APP_ID=
PORT=PORT
```
If you want to test quicky get my personal env configuratoin:
```
API_KEY=14c7a14033120623fb43db7dd6139d0c
HERE_API_KEY=Nev3kMwv74jaI1aEupo0Kw
HERE_APP_ID=b1xaPexGpwpoUwqbOusx
PORT=3333
```


Now run application:
```yarn nodemon src/server.js```

## Testing instructions

Now run application tests with command :
```yarn test```

It will print the results of the tests and the coverage of backend.
