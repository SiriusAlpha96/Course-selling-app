import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';

function SignUp(){
    return <div>
        <div style={{
            PaddingTop: 150,
            marginBottom: 10,
            display: "flex",
            justifyContent: "center"
        }}>
            <Typography variant={"h6"}>
            Welcome to Course. Sign up below 
            </Typography>
        </div>
        <div style={{display: "flex",
    justifyContent: "center"}}>
        <Card variant="outlined" style={{width: 400, padding:20}}>
        <TextField 
            fullWidth = {true}
            id="outlined-basic" 
            label="UserName" 
            variant="outlined" />
        <br/><br/>
        <TextField
            fullWidth 
            id="outlined-basic" 
            label="Email" 
            variant="outlined" />
        <br/><br/>
        <TextField 
            fullWidth
            id="outlined-basic" 
            label="Password" 
            variant="outlined" />
        <br/><br/><br/>
        <Button variant="contained">Sign Up</Button>
        {/* <button>Sign Up</button> */}
        </Card>
        </div>
    </div>
}
export default SignUp;