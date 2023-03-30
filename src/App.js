//TODO: learn recoil
import './App.css';
import Login from './components/Login';
import React,{ useEffect, useState } from 'react';
import Player from './components/Player';
import { getTokenFromUrl } from './scripts/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './scripts/DataLayer';

const spotify = new SpotifyWebApi();

function App() {

  const [{ user, token }, dispatch] = useDataLayerValue();

  //runs code based on a given condition
  //to keep eye on windiow.location.hash, after login we will be redirected to home page, app will load for the first time
  useEffect(()=>{
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    window.location.hash = "";
    if(_token) 
      {
        dispatch({
          type: "SET_TOKEN",
            token: _token
        });
        spotify.setAccessToken(_token);
        spotify.getMe().then(user => {
          console.log(user);
          dispatch({
            type: 'SET_USER',
            user: user
          })
        })
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        })
      });
      spotify.getPlaylist('37i9dQZF1E3ab2OvW35up9').then(response => {
        dispatch({  
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response
        })
      });
      
      }
    // console.log('I have a token', token);
  }, []);

  //in list u can put multiple variables like if they change then it will run the code

  return (
    <div className="app">
      {
        token ? <Player spotify={spotify}/> : ( <Login/> )
      }
      {/* login */}
    </div>
  );
}

export default App;
