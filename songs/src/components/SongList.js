import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => (
      <ul className="item" key={song.title}>
        <div className="right floated content">
          <button
            className="ui button primary"
            onClick={this.props.selectSong.bind(this, song)}
          >
            Select
          </button>
        </div>
        <div className="content">{song.title}</div>
      </ul>
    ));
  }
  
  render() {
    // console.log(this.props.songs);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

//this.props === { songs: state.songs, selectedSong : null}

const mapStateToProps = state => {
  // console.log(state);
  //return an object
  return {
    songs: state.songs
  };
};

export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
