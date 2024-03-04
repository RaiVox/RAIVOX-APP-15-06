import { Adb } from "@mui/icons-material";
import { Link } from "react-router-dom"
import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material"

const pages = ['Visitantes', 'Citas', 'Anfitriones', 'Visitas','Usuarios'];
const LayoutRoot = () => {
    return (
        <>
          <AppBar position="static">
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Adb sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="#app-bar-with-responsive-menu"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                RAIVOX
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        <Link style={{color:'white'}} to={`/${page.toLowerCase()}`}>{page}</Link>
                                    </Button>
                                ))}
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
        </>

    )
}

export {LayoutRoot}