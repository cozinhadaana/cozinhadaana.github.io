import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';

import GradientButton from '../GradientButton';

import { EDIT_PRODUCT_MODAL_TITLE, SUCESS_UPDATE_PRODUCT_MESSAGE } from '../../constants/strings.constants'
import Toast, { ToastInitialState } from '../Toast'

import { useDispatch } from 'react-redux';
import { addItem } from '../../reducers/slices/product.slice';
import { iProducts } from '../../db'

interface ModalProps {
    open: boolean;
    toggle: VoidFunction;
    productData: iProducts
}

export default function ({ open, toggle, productData }: ModalProps) {
    const [toastConfig, setToastConfig] = useState(ToastInitialState)
    const [openToast, setOpenToast] = useState(false)

    const dispatch = useDispatch()

    const handleCloseToast = () => setOpenToast(false)
    const handleOpenToast = () => setOpenToast(true)

    const [product, setProduct] = useState(productData)

    const handleUpdateProduct = () => {
        dispatch(addItem(product))
        toggle()
        setToastConfig((prev) => ({ ...prev, message: SUCESS_UPDATE_PRODUCT_MESSAGE, type: 'success' }))
        return handleOpenToast()
    }

    const handleProductData = ({ target }: any) => {
        const { name, value } = target
        setProduct((prev) => ({ ...prev, [name]: value }))
    }

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
                    {EDIT_PRODUCT_MODAL_TITLE}
                </DialogTitle>
                <Box
                    noValidate
                    component="form"
                    autoComplete="off"
                    sx={{ '& > :not(style)': { my: 1 }, width: '90%', margin: '0 auto' }}
                >
                    <TextField
                        name="obs"
                        label="Obsevações"
                        variant="filled"
                        onChange={handleProductData}
                    />
                </Box>
                <DialogActions sx={{ mx: 2.5 }}>
                    <Button color="secondary" onClick={toggle}>Cancelar</Button>
                    <GradientButton onClick={handleUpdateProduct} autoFocus>
                        Atualizar
                    </GradientButton>
                </DialogActions>
            </Dialog>
        </>
    );
}