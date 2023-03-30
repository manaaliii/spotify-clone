import React from 'react'
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import "../styles/footer.css";
import { Grid, Slider } from '@material-ui/core';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer_left'>
        <img className='footer_albumLogo' src='https://upload.wikimedia.org/wikipedia/en/7/7c/Taylor_Swift_-_Blank_Space_%28Official_Single_Cover%29.png' alt=''/>
        <div className='footer_songInfo'>
          <h4>blank space</h4>
          <p>taylor swift</p>
        </div>
      </div>
      <div className='footer_center'>
        <ShuffleIcon className='footer_green' />
        <SkipPreviousIcon className='footer_icon' />
        <PlayCircleOutlineIcon fontSize='large' className='footer_icon' />
        <SkipNextIcon className='footer_icon' />
        <RepeatIcon className='footer_green' /> 
      </div>
      <div className='footer_right'>
        <Grid>
          <PlaylistPlayIcon/>
        </Grid>
        <Grid item>
          <VolumeDownIcon/>
        </Grid>
        <Grid item xs>
          <Slider aria-labelledby='continuous-slider' />
        </Grid>
      </div>
    </div>
  )
}

export default Footer
