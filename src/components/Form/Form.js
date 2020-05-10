import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  root: {
      height: '50vh',
      width: '50vh',
      position: 'fixed',
      padding: '5%',
      backgroundColor: '#bfb8f0',
      border: '#bf08f3 1% solid'
  },
}));

export default function Form() {
  const classes = useStyles();

  return (
    <form className={classes.root} autoComplete="off">
      <TextField id="standard-basic" label="Match" />
      <TextField
          id="standard-number"
          label="Score"
          type="number"
        />
      <TextField id="standard-basic" label="Name of Opponent" />
      <TextField id="standard-basic" label="Comment" />
      <InputLabel id="demo-simple-select-label">Type of game</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        //   value={type}
        //   onChange={handleChange}
        >
          <MenuItem value={0}>Practice</MenuItem>
          <MenuItem value={1}>Tournament</MenuItem>
          <MenuItem value={2}>Training Camp</MenuItem>
        </Select>
      <Button>Submit</Button>
    </form>
  );
}
