import { useState } from 'react';
import './App.css'
import { Anfitriones } from './components/crud/anfitriones/index.tsx';
import { Citas } from './components/crud/citas/index.tsx';
import { Users } from './components/crud/users/index.tsx';
import { Visitantes } from './components/crud/visitantes/index.tsx';
import { Visitas } from './components/crud/visitas/index.tsx';

// Importar tus componentes de páginas aquí
import { Home, Login } from './pages/index.ts';
import { AppBar, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemText, ThemeProvider, Toolbar, Typography, createTheme } from '@mui/material';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

// Tema personalizado con los colores que mencionaste
const theme = createTheme({
  palette: {
    primary: {
      main: '#673ab7', // Púrpura
    },
    secondary: {
      main: '#4caf50', // Verde
    },
    background: {
      default: '#000', // Negro
    },
    text: {
      primary: '#fff', // Blanco
    },
  },
});

const App: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visitas" element={<Visitas />} />
          <Route path="/visitantes" element={<Visitantes />} />
          <Route path="/users" element={<Users />} />
          <Route path="/citas" element={<Citas />} />
          <Route path="/anfitriones" element={<Anfitriones />} />

          {/* <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/anfitriones" element={<Anfitriones />} />
          <Route path="/citas" element={<Citas />} />
          <Route path="/users" element={<Users />} />
          <Route path="/visitas" element={<Visitas />} />
          <Route path="/visitantes" element={<Visitantes />} /> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
export default App
