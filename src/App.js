// react
import React from "react";
// react-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

// ^ MAIN CLASS COMPONENT
class App extends React.Component {
  // ! pass props in constructor if you ever need to use props in state
  constructor() {
    super();

    // ! APP COMPONENT STATE
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  // * ONE OF THE LIFECYCLE METHOD IN REACT.COMPONENT
  componentDidMount() {
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
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            }
            // //  () => console.log(this.state)
          );
        });
      }

      // ^ ELSE SET STATE FOR currentUser to NULL

      this.setState({ currentUser: userAuth });
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
          <Header currentUser={this.state.currentUser} />
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

export default App;
