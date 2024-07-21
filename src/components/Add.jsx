import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Add = () => {
    var[inputs, setInputs]=useState({ProductName:"",Image:"",Price:"",Category:""});
    const inputHandler=(e)=> {
        console.log(e.target.value);
        setInputs({...inputs,[e.target.name]:e.target.value});
        console.log(inputs);
    };
        
  return (
    <div>
              <center>
            <Box id='hi'>
    <Typography variants="h2">Enter Product Details </Typography>
     <br/><br/>
     <TextField variant="standard" label='ProductName'onChange={inputHandler}
        name="ProductName"
        value={inputs.ProductName}/>
     <br/><br/>
      <TextField id="standard-basic" label="Image url" variant="standard" onChange={inputHandler}
        name="Image"
        value={inputs.Image}/> 
       <br /><br />
     <TextField id="standard-basic" label="Price" variant="standard" onChange={inputHandler}
        name="Price"
        value={inputs.Price}/> 
     <br/><br/>
     <TextField id="standard-basic" label="Category" variant="standard" onChange={inputHandler}
        name="Category"
        value={inputs.Category}/> 
     <br/><br/>
     <Button variant="contained">Submit</Button>&nbsp;&nbsp;
     </Box>
     </center>
    </div>
  )
}

export default Add