const express = require('express');
const path = require('path');
const firebase = require('firebase')
const secret = require('./secret.js')

const app = express();
const port = 3000;

var config = {
  apiKey: secret.apiKey,
  authDomain: secret.authDomain,
  databaseURL: secret.databaseURL,
  projectId: secret.projectId,
  storageBucket: secret.storageBucket,
  messagingSenderId: secret.messagingSenderId
};
firebase.initializeApp(config);

firebase.auth().signInWithEmailAndPassword(secret.email, secret.password)
  .catch(function(error) {
  if (error)
    console.log("ERROR");
    console.log(error.code + ": " + error.message);
  })
  .then(
    // Serve static files from the React app
    function(){
        firebase.database().ref().update({
          last_update : Date.now()
        });
        app.use(express.static(path.join(__dirname, 'app/build')));
        app.get('*', (req, res) => {
          res.sendFile(path.join(__dirname+'/app/build/index.html'));
        });

        const port = process.env.PORT || 5000;
        console.log("Listening on PORT " + port);
        app.listen(port);
  });
