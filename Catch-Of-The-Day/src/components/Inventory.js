import React from 'react';
import AddFishForm from './AddFishForm';
import EditFishForm from './editFishForm';
import PropTypes from 'prop-types';
import Login from './Login';
import firebase from 'firebase';
import { firebaseApp } from '../base';

class Inventory extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    loadSampleFishes: PropTypes.func
  };

  authHandler = async authData => {
    console.log(authData);
  };

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  render() {
    const { addFish, loadSampleFishes, updateFish, fishes } = this.props;
    return <Login authenticate={this.authenticate} />;
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(fishes).map(key => (
          <EditFishForm
            fish={fishes[key]}
            key={key}
            index={key}
            updateFish={updateFish}
            deleteFish={this.props.deleteFish}
          />
        ))}
        <AddFishForm addFish={addFish} />
        <button onClick={loadSampleFishes}>Load some samples!</button>
      </div>
    );
  }
}

export default Inventory;
