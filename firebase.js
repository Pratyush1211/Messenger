import * as firebase from "firebase";

import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAEk596DHKa1QA2WlVhR6yY3wy3aT3vdjc",
    authDomain: "messenger-5ebbb.firebaseapp.com",
    projectId: "messenger-5ebbb",
    storageBucket: "messenger-5ebbb.appspot.com",
    messagingSenderId: "864026382416",
    appId: "1:864026382416:web:51569e365c951bc9e40155"
  };
  
  let app;
  if(firebase.apps.length===0){
  app =firebase.initializeApp(firebaseConfig);
  }else{
  app=firebase.app();
  }

  const db =app.firestore();
  const auth=firebase.auth();

  export{db,auth};