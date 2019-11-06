# Tindev
This app has basically two pages: login and main. The backend of the app is developed in NodeJS, and the frontend is coded in two versions: one in React for browser client and another in React-Native for mobile-native client. Course produced by [@RockeatSeat](https://github.com/Rocketseat) and teached by [@diego3g](https://github.com/diego3g).

## Login
In the login page the user will insert his Github nickname, which will create a new app user by getting his github basic data (Avatar, Bio, Username) using the public API.

## Main
In the main page, a list of users already registered is shown along with two buttons: "like" and "dislike". Both buttons turn off users profiles from current user´s view, leaving only users without any interaction.
If two user do like one to each other, a match will show in the screen.

### Modules
* Axios - Requesting resources from Github API
* Socket.io - Real-time WebSocket for "match" screen 


## Built With

* [MongDB](https://www.mongodb.com/) - Database System
* [Express](https://expressjs.com/en/guide/routing.html) - Routing framework
* [React](https://reactjs.org/) - Javascript client side
* [React-Native](http://www.reactnative.com/) - Native mobile client app
* [NodeJS](https://nodejs.org/en/) -  The server-side JavaScript runtime environment

## How to run
It´s necessary to have installed: [Node.js (LTS)](https://nodejs.org/en/), [NPM](https://www.npmjs.com/get-npm) or [Yarn](https://yarnpkg.com/lang/en/).

### Backend
``
cd backend
npm start
``
### Frontend
``
cd frontend
npm start
``
### Mobile
It´s necessary to install an android emulator, like [Genymotion](https://www.genymotion.com/). Run the device emulator and after that run the app.
``
cd mobile
npm react-native run-android
``

## License

This project is licensed under the MIT License.

## Acknowledgments

* This project is developed as a part of the Omnistack Week 8.0 by [Rocketseat](https://github.com/Rocketseat) 

## Web Screens
<img src="https://github.com/GuilleAngulo/tindev/blob/master/web-1.png" width="400"> <img src="https://github.com/GuilleAngulo/tindev/blob/master/web-2.png" width="400">


## Demo
<img src="https://github.com/GuilleAngulo/tindev/blob/master/match.gif" width="800">
