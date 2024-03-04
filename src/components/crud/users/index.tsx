import { Box } from "@mui/material"
import { NavBar } from "../../commons"

const Users = () => {
    return (
        <>
         <div style={{display:'flex', flexDirection:'column'}}>
            <Box>
                <NavBar></NavBar>
        <h1>Users</h1>
            </Box >
        </div>
        </>

    )
}

export {Users}