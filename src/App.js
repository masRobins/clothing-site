import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

//pages
import HomePage from './pages/clothing-site-homepage/jsx/_homepage'
import ShopPage from './pages/clothing-site-homepage/jsx/_shopping-page'
import SignInAndSignUpPage from './pages/clothing-site-homepage/jsx/_sign-in-sign-up.jsx'

//authentication
import {auth, createUserProfileDocument} from './firebase/firebase.utils'

//global components
import Header from './components/clothing-site-components/global/_header.jsx'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            })
            console.log(this.state)
          }
        )
      }
      this.setState({currentUser: userAuth})
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    )
  }
}

export default App;
