import { Typography } from "@mui/material";
import Button from "@mui/material/Button";


function AppBar(){
    return <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 4
    }}>
        <div >
        <Typography variant={"h6"}>Coursera</Typography>
        </div>
        <div style={{display:"flex"}}>
            <div style={{marginRight: 10}}>
                <Button variant={"contained"}>Sign up</Button>
            </div>
            <div>
                <Button variant={"contained"}>Sign in</Button>
            </div>
        </div>
    </div>

}

export default AppBar;