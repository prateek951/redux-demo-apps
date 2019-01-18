import React from "react";
import { connect } from "react-redux";

const SelectedSong = ({ selectedSong }) => {
  //   console.log(props);
  if (!selectedSong) {
    return <h1>Select a Song!</h1>;
  }
  return (
    <div>
      <h1>Details for: </h1>
      <p>
        Title : {selectedSong.title}
        <br></br>
        Duration : {selectedSong.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selectedSong: state.selectedSong
  };
};

export default connect(mapStateToProps)(SelectedSong);
