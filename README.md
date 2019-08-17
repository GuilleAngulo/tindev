# Tindev
This app has basically two pages: login and main. The backend of the app is developed in NodeJS, and the frontend is coded in two versions: one in React for browser client and another in React-Native for mobile-native client. Course produced by @RockeatSeat and teached by @diego3g.

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

## Authors

* **Diego Fernandes (@diego3g)**

## License

This project is licensed under the MIT License.

## Acknowledgments

* This project is developed as a part of the Omnistack Week 8.0 by Rocketseat (https://github.com/Rocketseat) 

## Demo
<img src="https://github.com/GuilleAngulo/tindev/blob/master/match.gif" width="48">
![](https://https://github.com/GuilleAngulo/tindev/blob/master/match.gif | width=150)