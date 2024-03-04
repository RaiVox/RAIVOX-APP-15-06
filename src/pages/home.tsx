import { Box } from "@mui/material"
import { NavBar } from "../components/commons"

const Home = () => {
    return (
        <>
        <div style={{display:'flex', flexDirection:'column'}}>
            <Box>
                <NavBar></NavBar>
                <h1>Home</h1>
            </Box >
        </div>
        </>
    )
}

export { Home }