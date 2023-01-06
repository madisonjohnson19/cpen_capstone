import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function App() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  
  return (
    <div className="App">
    <div className='header'>Request Trash Can</div>
    <div className='meat'>
      <h1>Where Are You?</h1>
      <h2>West Wing Second Floor Luter</h2>
      <div className='dropdownbox'>
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Location</InputLabel>
        <Select style={{color:"white"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Room 1</MenuItem>
          <MenuItem value={20}>Room 2</MenuItem>
          <MenuItem value={30}>Room 3</MenuItem>
        </Select>
      </FormControl>
    </Box>

      </div>
      
      
    </div>
    </div>
  );
}

export default App;
