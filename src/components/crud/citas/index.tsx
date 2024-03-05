import { NavBar } from "../../commons"
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Container, Typography, Box, Paper, styled, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

interface FormInputs {
    nombre: string;
    codigoSeguridad: string;
    fecha: Date;
    observacion: string;
}
const MyBox = styled(Box)({
    color: 'darkslategray',
    backgroundColor: 'aliceblue',
    padding: 8,
    borderRadius: 4,
});

const MyInput = styled(TextField)({
    color: 'darkslategray',
});

const Citas: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
    const [open, setOpen] = useState(false);
    const [mresponse, setMResponse] = useState<{ message?: string, title?: string }>({
        title: '',
        message: ''
    });

    const handleClose = () => {
        setOpen(false);
    };
    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        try {
            // Realiza la llamada a la API utilizando Axios
            const response = await axios.post('http://192.168.0.104:3001/api/citas/', data);

            // Puedes manejar la respuesta de la API según tus necesidades
            setMResponse({ title: 'Operación Exitosa', message: 'Se ha registrado correctamente' + JSON.stringify(response.data) });
            setOpen(true);
            console.log(response.data, response.status);
        } catch (error: any) {
            // Puedes manejar los errores aquí
            setMResponse({ title: 'Error', message: error ?? 'Error!' });
            setOpen(true);
            console.error('Error al enviar datos:', error);
        }
    };

    return (
        <Container component="main" maxWidth="s">
            <Paper elevation={3}>
                <NavBar></NavBar>
                <MyBox p={3} >
                    <Typography component="h1" variant="h5">
                        Formulario de Citas
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Campos del formulario */}
                        <MyInput
                            margin="normal"
                            fullWidth
                            label="Nombre"
                            InputProps={{
                                style: {
                                    color: "black"
                                }
                            }}
                            {...register('nombre', { required: 'Este campo es requerido' })}
                            error={!!errors.nombre}
                            helperText={errors.nombre?.message}
                        />
                        <MyInput

                            margin="normal"
                            fullWidth
                            label="Código de seguridad"
                            InputProps={{
                                style: {
                                    color: "black"
                                }
                            }}
                            {...register('codigoSeguridad')}
                            error={!!errors.codigoSeguridad}
                            helperText={errors.codigoSeguridad?.message}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            label="Fecha"
                            InputProps={{
                                type: 'datetime-local',
                                style: {
                                    color: "black"
                                }
                            }}
                            {...register('fecha', { required: 'Este campo es requerido' })}
                            error={!!errors.fecha}
                            helperText={errors.fecha?.message}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            label="Motivo de la cita"
                            InputProps={{
                                style: {
                                    color: "black"
                                }
                            }}
                            {...register('observacion', { required: 'Este campo es requerido' })}
                            error={!!errors.observacion}
                            helperText={errors.observacion?.message}
                        />
                        {/* Otros campos del formulario */}
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Enviar
                        </Button>
                    </form>
                </MyBox>
            </Paper>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {mresponse.title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {mresponse.message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>OK</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export { Citas }
