import { Box } from "@mui/material"
import { NavBar } from "../../commons"

const Visitantes = () => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Box>
                    <NavBar></NavBar>
                    <h1>Visitantes</h1>
                </Box >
            </div>
        </>

    )
}

export { Visitantes }