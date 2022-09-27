import React, {useState, useEffect} from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { FormGroup, FormControl, FormControlLabel, Checkbox} from '@mui/material';
import { Select, InputLabel, MenuItem } from '@mui/material';

const Form = () => {
    const [inputs, setInputs]=useState({
        name:'',
        email:'',
        password: '',
        subscribe: false,
        age:0
    })
    const handleChange=(e)=>{
        setInputs((prevState)=>({
            ...prevState, [e.target.name]:e.target.value
        }))
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(inputs);
    }
    return (
        <div>
            <form style={{display:'inline', FlexDirection:'column'}} onSubmit={handleSubmit}>
                <TextField 
                    name='name'
                    value={inputs.name}
                    onChange={handleChange}
                    type={'text'}
                    sx={{margin:3}}
                    placeholder="Name"
                    variant='outlined'
                />
                <TextField
                 onChange={handleChange}
                 value={inputs.email}
                    name='email'
                    type={'email'}
                    sx={{margin:3}}
                    placeholder="email"
                    variant='outlined' 
                 />
                 <TextField
                  onChange={handleChange}
                  value={inputs.password}
                    name='password'
                    type={'password'}
                    sx={{margin:3}}
                    placeholder="password"
                    variant='outlined' 
                 />
                 <Button type='submit'>Submit</Button>
                 <FormGroup>
                    <FormControlLabel 
                    control={<Checkbox 
                        onChange={()=> setInputs((prev)=>({...prev, subscribe: !inputs.subscribe}))} />} 
                        label="Subscribe to newsletter" />
                 </FormGroup>
                 <FormControl fullWidth>
                    <InputLabel>Age</InputLabel>
                    <Select
                    name='age'
                        value={inputs.age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </form>
             
        </div>
    );
};
export default Form;