import { Box,Button} from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import React,{useState}from 'react';

const SignIn = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [inputs, setInputs] = useState({
        name: '', email:'' , password:''
    })
    const handleChange = (e)=> {
        setInputs((prevState)=>({
            ...prevState, [e.target.name]: e.target.value
        }))}
        const handleSubmit = (e)=>{
            e.preventDefault();
            console.log(inputs);
        }
        const resetState=()=> {
            setIsSignup(!isSignup);
            setInputs({name:'', email:'', password: ''});
        }
        return (
        <form onSubmit={handleSubmit}>
            <Box 
            display="flex"
             flexDirection ={'column'}
              maxWidth={400}
               alignItems="center"
                justifyContent={'center'}
                margin="auto"
                marginTop={5}
                padding={5}
                borderRadius={5}
                boxShadow={"5px 5px 10px #ccc"}
                sx={{":hover":{boxShadow:'10px 10px 20px #ccc'}
                     }}>

                <Typography variant='h3' padding={3} textAlign='center'>{isSignup ? "Sign Up" : 'Login'}</Typography>
                <TextField 
                    onChange={handleChange}
                    name='name'
                    value={inputs.name}
                    margin ="normal" 
                    type={'text'} 
                    variant='outlined'
                    placeholder='Name' 
                 />
               {isSignup && (
               <TextField 
                    onChange={handleChange}
                    value={inputs.email}
                    name='email'
                    margin ="normal" 
                    type={'text'}
                    variant='outlined' 
                    placeholder='Email'
                />)}
                <TextField
                    onChange={handleChange}
                    value={inputs.password}
                    name='password'
                    margin ="normal"
                    type={'text'} 
                    variant='outlined'
                    placeholder='Password'
                />
                <Button type='submit' variant='contained' sx={{marginTop:3}}>{isSignup ? "Sign Up" : 'Login'}</Button>
                <Button onClick={resetState} sx={{marginTop:3}}> Change to {isSignup ? "Login" : "Sign Up"}</Button>
            </Box>          
        </form>
    );
};

export default SignIn;