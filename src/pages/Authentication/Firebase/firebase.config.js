// const firebaseConfig = {
//     apiKey: "AIzaSyA9Sve4CPb1w0Ul2Vhx5LTLww-Tg-MSZAU",
//     authDomain: "green-leaf-63665.firebaseapp.com",
//     projectId: "green-leaf-63665",
//     storageBucket: "green-leaf-63665.appspot.com",
//     messagingSenderId: "718471778011",
//     appId: "1:718471778011:web:4a215a893fa4108bab86fe"
// };

// export default firebaseConfig;


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export default firebaseConfig;