import React from "react";
import SongList from "./SongList";
import SelectedSong from "./SelectedSong";
const App = props => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SelectedSong/>
        </div>
      </div>
    </div>
  );
};

export default App;
