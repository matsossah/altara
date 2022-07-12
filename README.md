# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The project consists of NodeJS server which serves a static build of a react frontend. The server also contains some endpoints to help the frontend to complete some tasks

### Starting the application

To start off, start by installing all needed dependencies:running: 
```
npm install
```

Next, you can start the server and build the frontend by running: 
```
npm start
```
This command will create a static build of the website and start the NodeJS server.

For now, whenever you make a change to the frontend or server, you need to cancel the process `(CTRL + C)` and restart it.

### To launch the website from the root folder LVQM: `npm run build:ui`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### To launch the server from the "server" folder: `node index.js`

Launches the server locally in port 8080
You need this to run for payments and the sending of the confirmation email with the ebook

### `Testing payments`

For a valid payment, use the credit card number 4242 4242 4242 4242, then a valid date in the future and 3 digits of your choice for the Cryptogram

