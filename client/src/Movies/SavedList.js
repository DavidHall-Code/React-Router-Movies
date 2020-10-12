import React from 'react';
import {useHistory} from 'react-router-dom';

export default function SavedList(props) {
  const history = useHistory ();
  console.log ("history: ", history);
  const navToHome = (e) => {
    console.log("Moving to the home page");
    history.push ('/');
  }
  
  
  
  
  
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div className="home-button">Home</div>
    </div>
  );
}
