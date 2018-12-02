import React from 'react';
import AddFishForm from './AddFishForm';
import EditFishForm from './editFishForm';

class Inventory extends React.Component {
  render() {
    const { addFish, loadSampleFishes, updateFish, fishes } = this.props;
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(fishes).map(key => (
          <EditFishForm fish={fishes[key]} key={key} index={key} updateFish={updateFish} deleteFish={this.props.deleteFish}/>
        ))}
        <AddFishForm addFish={addFish} />
        <button onClick={loadSampleFishes}>Load some samples!</button>
      </div>
    );
  }
}

export default Inventory;
