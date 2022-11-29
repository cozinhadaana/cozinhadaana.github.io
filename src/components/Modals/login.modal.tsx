import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';

import GradientButton from '../GradientButton';
import Toast from '../Toast';

import { LOGIN_MODAL_TITLE, ERROR_LOGIN_MESSAGE, SUCESS_LOGIN_GREETING_MESSAGE } from '../../constants/strings.constants'
import { ToastInitialState } from '../Toast'

import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../reducers/slices/user.slice';

interface ModalProps {
    open: boolean;
    toggle: VoidFunction;
}

interface LoginProps {
    email: string;
    password: string;
}

const userLoginInitialState: LoginProps = {
    email: 'hello@world.com',
    password: '123',
}

export default function ({ open, toggle }: ModalProps) {
    const [userData, setUserData] = useState(userLoginInitialState)

    const [toastConfig, setToastConfig] = useState(ToastInitialState)
    const [openToast, setOpenToast] = useState(false)

    const { isLogged, error, name } = useSelector((state: any) => state.user)
    const dispatch = useDispatch()

    const handleCloseToast = () => setOpenToast(false)
    const handleOpenToast = () => setOpenToast(true)

    const handleUserData = ({ target }: any) => {
        const { name, value } = target
        setUserData((prev) => ({ ...prev, [name]: value }))
    }

    const handleLogin = () => {
        const { email, password } = userData
        dispatch(loginUser({ email, password }))
    }

    useEffect(() => {
        if (error) {
            setToastConfig((prev) => ({ ...prev, message: ERROR_LOGIN_MESSAGE, type: 'error' }))
            return handleOpenToast()
        }

        if (isLogged) {
            toggle()
            handleOpenToast()
            return setToastConfig((prev) => ({ ...prev, message: SUCESS_LOGIN_GREETING_MESSAGE(name), type: 'success' }))
        }
    }, [error, isLogged])

    return (
        <>
            <Toast open={openToast} handleClose={handleCloseToast} message={toastConfig.message} type={toastConfig.type} />
            <Dialog
                open={open}
                onClose={toggle}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" sx={{ mx: 1 }}>
                    {LOGIN_MODAL_TITLE}
                </DialogTitle>
                <Box
                    noValidate
                    component="form"
                    autoComplete="off"
                    sx={{ '& > :not(style)': { my: 1 }, width: '90%', margin: '0 auto' }}
                >
                    <TextField
                        name="email"
                        label="Seu email"
                        variant="filled"
                        required
                        fullWidth
                        value={userData.email}
                        onChange={handleUserData}
                    />
                    <TextField
                        name="password"
                        label="Sua senha"
                        variant="filled"
                        type="password"
                        required
                        fullWidth
                        value={userData.password}
                        onChange={handleUserData}
                    />
                </Box>
                <DialogActions sx={{ mx: 2.5 }}>
                    <Button color="secondary" onClick={toggle}>Cancelar</Button>
                    <GradientButton
                        onClick={handleLogin}
                        autoFocus
                    >
                        Entrar
                    </GradientButton>
                </DialogActions>
            </Dialog>
        </>
    );
}