import app from 'firebase/app';
import 'firebase/auth';
import '@firebase/storage';
import '@firebase/firestore';
import {BLOG, CATEGORY, CHEF, FEEDBACK, DELETE_BLOG, DELETE_CHEF, DELETE_RECIPE, DELETE_REVIEW} from '../store/action/type'

const config = {
  apiKey: "AIzaSyCiA2ze_-i6HOmfS51ApXmvLMazekEMdo8",
  authDomain: "cream-bakery.firebaseapp.com",
  databaseURL: "https://cream-bakery.firebaseio.com",
  projectId: "cream-bakery",
  storageBucket: "cream-bakery.appspot.com",
  messagingSenderId: "667217281545",
  appId: "1:667217281545:web:ab18f92934ff4e5c2caed8"
};
app.initializeApp(config);

var auth = app.auth();

export const User = auth.currentUser;
export const onAuth = userInfo => app.auth().onAuthStateChanged(userInfo);


export const createUser = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const signIn = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const doSignOut = () => this.auth.signOut();

export const doPasswordReset = email => auth.sendPasswordResetEmail(email);

export const doPasswordUpdate = password =>
  auth.currentUser.updatePassword(password);

//firebase storage

export const storageRef = app.storage().ref("images");


//firebase firestore 

export const OrderDatabase = app.firestore().collection('order');
export const CategoryDatabase = app.firestore().collection('recipe');
export const ReviewDatabase = app.firestore().collection('review');
export const ChefDatabase = app.firestore().collection('chefs');
export const BlogDatabase = app.firestore().collection('blogs');
export const NewsletterDatabase = app.firestore().collection('newsletter');


export const postBlog = post => dispatch => {
  BlogDatabase
    .add({
      title: post.title,
      img: post.img,
      body: post.body
    })
    .then(() => {
      dispatch({ type: BLOG, payload: post});
    })
}

export const fetchBlog = () => dispatch => {
  BlogDatabase
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        const Data = doc.data();
        //console.log(doc.id, " => ", doc.data());
        dispatch({ type: BLOG, payload: Data });
      });
    })
};

export const DeleteBlog = id => dispatch => {
  BlogDatabase
    .doc(id)
    .delete()
    .then(doc => {
      alert("Document successfully deleted!" + doc);
      dispatch({ type: DELETE_BLOG, payload: doc})
    })
    .catch(err => alert(err))
}


export const postNewsletter = email => {
  NewsletterDatabase
    .add({email: email})
    .then(res => {return res})
    .catch(err => {return err})
}

export const postReview = post => dispatch => {
  ReviewDatabase
    .add({
      img: post.img,
      price: post.price,
      title: post.title,
      body: post.body
    })
    .then(res => {
      dispatch({ type: FEEDBACK, payload: post})
    })
    .catch(err => {return err})
}

export const fetchReview = () => dispatch => {
  ReviewDatabase
  .get()
  .then(querySnapshot => {
    querySnapshot.forEach(function(doc) {
      // doc.data() is never undefined for query doc snapshots
      const Data = doc.data();
      //console.log(doc.id, " => ", doc.data());
      dispatch({ type: FEEDBACK, payload: Data });
    });
  });
}

export const DeleteRevew = id => dispatch => {
  ReviewDatabase
    .doc(id)
    .delete()
    .then(doc => {
      alert("Document successfully deleted!" + doc);
      dispatch({ type: DELETE_REVIEW, payload: doc})
    })
    .catch(err => alert(err))
}


export const postChef = post => dispatch => {
  ChefDatabase
    .add({
      img: post.img,
      name: post.name,
      job: post.job
    })
    .then(() => {
      dispatch({ type: CHEF, payload: post })
    })
    .catch(err => {return err})
}

export const fetchChef = () => dispatch => {
  ChefDatabase
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        const Data = doc.data();
        //console.log(doc.id, " => ", doc.data());
        dispatch({ type: CHEF, payload: Data });
      });
    })
}

export const DeleteChef = id => dispatch => {
  ChefDatabase
    .doc(id)
    .delete()
    .then(doc => {
      alert("Document successfully deleted!" + doc);
      dispatch({ type: DELETE_CHEF, payload: doc})
    })
    .catch(err => alert(err))
}


export const postRecipe = post => dispatch => {
  CategoryDatabase
    .add({
      img: post.img,
      price: post.price,
      title: post.title,
      body: post.body
    })
    .then(() => {
      dispatch({ type: CATEGORY, payload: post})
    })
    .catch(err => {return err})
}

export const fetchCategory = () => dispatch => {
  CategoryDatabase
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        const Data = doc.data();
        //console.log(doc.id, " => ", doc.data());
        dispatch({ type: CATEGORY, payload: Data });
      });
    })
}

export const DeleteRecipe = id => dispatch => {
  CategoryDatabase
    .doc(id)
    .delete()
    .then(doc => {
      alert("Document successfully deleted!" + doc);
      dispatch({ type: DELETE_RECIPE, payload: doc})
    })
    .catch(err => alert(err))
}


