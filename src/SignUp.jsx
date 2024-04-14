import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function SignUp(){
    return <div>
        <center>
        <div style={{
            marginTop: 150,
            marginBottom: 10
        }}>
            Welcome to Course. Sign up below 
        </div>
        
        <div style={{
            border: "2px solid black",
            width: 400,
            padding: 20
           
        }}>
        <TextField 
        fullWidth = {true}
        id="outlined-basic" 
        label="UserName" 
        variant="outlined" />
        <br/>
        <TextField
        fullWidth 
        id="outlined-basic" 
        label="Email" 
        variant="outlined" />
        <br/>
        <TextField 
        fullWidth
        id="outlined-basic" 
        label="Password" 
        variant="outlined" />
        <br/>
        <Button variant="contained">Sign Up</Button>
        {/* <button>Sign Up</button> */}
        </div>
        </center>
    </div>
}
export default SignUp;