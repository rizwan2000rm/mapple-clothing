// react
import React from "react";
// react-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// redux
import { connect } from "react-redux";
// css
import "./App.css";

// NAVBAR Component
import Header from "./components/header/header.component";
// LANDING Page
import HomePage from "./pages/homepage/homepage.component";
// SHOP Page
import ShopPage from "./pages/shop/shop.component";
// AUTHENTICATION Page
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
// FIREBASE
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
// importing user action from redux
import { setCurrentUser } from "./redux/user/user.actions";

// ^ MAIN CLASS COMPONENT
class App extends React.Component {
  // // // ! pass props in constructor if you ever need to use props in state
  // // constructor() {
  // //   super();

  // //   // ! APP COMPONENT STATE
  // //   this.state = {
  // //     currentUser: null
  // //   };
  // // }

  unsubscribeFromAuth = null;

  // * ONE OF THE LIFECYCLE METHOD IN REACT.COMPONENT
  componentDidMount() {
    const { setCurrentUser } = this.props;

    // * FIREBASE AUTHENTICATION

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // // this.setState({ currentUser: user });
      // // createUserProfileDocument(user);
      // // console.log(user);
      // ^ IF USER IS FOUND SET STATE FOR currentUser

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          // console.log(snapShot.data());
          // // this.setState(
          // //   {
          // //     currentUser: {
          // //       id: snapShot.id,
          // //       ...snapShot.data()
          // //     }
          // //   }
          // //   // //  () => console.log(this.state)
          // // );
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      // ^ ELSE SET STATE FOR currentUser to NULL

      setCurrentUser({ currentUser: userAuth });
    });
  }

  // * ONE OF THE LIFECYCLE METHOD IN REACT.COMPONENT
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  // EVERYTHING TO BE RENDERED ON PAGE GOES HERE
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/sign-in" component={SignInAndSignUpPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
