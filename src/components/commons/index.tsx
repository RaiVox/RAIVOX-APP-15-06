
import { Link } from "react-router-dom"
import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material"
import Logo from "../../assets/logos/logo.png"

const pages = ['Visitantes', 'Citas', 'Anfitriones', 'Visitas', 'Users'];


const NavBar = () => {

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src={Logo} style={{ width: '40px', height: '60px', margin: '5px' }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        RAIVOX
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Link style={{ color: 'white' }} to={`/${page.toLowerCase()}`}>{page}</Link>
                            </Button>
                        ))}
                    </Box>
                </Toolbar>

            </Container>
        </AppBar>
    )
};
export { NavBar }