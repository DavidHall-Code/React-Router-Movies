import React from 'react';
import { useHistory } from 'react-router-dom';

const SavedList = props => {
  const history = useHistory();
  console.log("history: ", history);
  const navToHome = (e) => {
    console.log("Going to the Home page!!");
    history.push('/');
  }
  return (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div className="home-button" onClick={navToHome}>Home</div>
  </div>
  );
};

export default SavedList;