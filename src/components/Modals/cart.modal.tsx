import React, { useRef, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import GradientButton from '../GradientButton';

import { CART_MODAL_TITLE, SUCESS_SIGNUP_MESSAGE, ERROR_SIGNUP_MESSAGE } from '../../constants/strings.constants'
import Toast, { ToastInitialState } from '../Toast'

import { useDispatch, useSelector } from 'react-redux';
import { iProducts } from '../../db'

interface ModalProps {
    open: boolean;
    toggle: VoidFunction;
}

export default function ({ open, toggle }: ModalProps) {
    const addressRef = useRef(null);
    const payModeRef = useRef(null);
    const clientNameRef = useRef(null);
    const [toastConfig, setToastConfig] = useState(ToastInitialState)
    const [openToast, setOpenToast] = useState(false)
    const [payMode, setPayMode] = useState('Pix');
    const [clientNameError, setclientNameError] = useState({error: false, helperText: ""});
    
    const { error, success } = useSelector((state: any) => state.user)
    const dispatch = useDispatch()

    const handleCloseToast = () => setOpenToast(false)
    const handleOpenToast = () => setOpenToast(true)

    const allProducts = useSelector((state: any) => state.products);
    const listProducts = allProducts.gourmet.concat(allProducts.sopas.concat(allProducts.tradicional));
    const cartProducts = listProducts.filter(function (el:iProducts) {return el.qt>0});
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });        

    function AddressField (){
        return ( 
        <TextField
            ref={addressRef}
            name="address"
            label="Seu Endereço (deixe em branco caso queira retirar no nosso estabelecimento)"
            variant="filled"
            fullWidth
        />
        );
    }

    function ClientNameField (){
        return ( 
        <TextField
            ref={clientNameRef}
            name="clientName"
            label="Seu nome"
            variant="filled"
            onChange={handlenameChange}
            {...clientNameError}
            required
            fullWidth
        />
        );
    }

    function PayModeControl (){
        return (
            <FormControl variant="filled" fullWidth>
                <InputLabel id="demo-simple-select-label">Forma de pagamento</InputLabel>
                <Select
                ref={payModeRef}
                labelId="demo-simple-select-label"
                id="payMode"
                label="Forma de pagamento"
                value={payMode}
                onChange={handleChange}
                >
                    <MenuItem value='Pix'>Pix</MenuItem>
                    <MenuItem value='Dinheiro'>Dinheiro</MenuItem>
                    <MenuItem value='Cartão de crédito'>Cartão de crédito</MenuItem>
                    <MenuItem value='Cartão de débito'>Cartão de débito</MenuItem>
                </Select>
            </FormControl>
        )
    }


    const handleChange = (event: SelectChangeEvent) => {
        setPayMode(event.target.value);
    };
    const handlenameChange = (event: any) => {
        if (!(event.target.value.length>0)){
            setclientNameError( { error: true, helperText: "Por favor preencha um nome" });
        }else{
            setclientNameError( { error: false, helperText: "" });
        }
    };

    const handleClick = () => {       
        const address = new String(addressRef.current!['lastElementChild']['firstElementChild']['value']);
        const clientName = new String(clientNameRef.current!['lastElementChild']['firstElementChild']['value']);

        if (!(clientName.length>0)){
            setclientNameError( { error: true, helperText: "Por favor preencha um nome" });
            return 0
        }else{
            var deliveryMode = (address.length>0)? 'd':'r';
            var totaPrice = 0; 
            var itensListTxt = '';
            for (var i = 0; i<cartProducts.length; i++){
                totaPrice += cartProducts[i].qt*cartProducts[i].price;
                itensListTxt += `  - ${cartProducts[i].qt}x ${cartProducts[i].title} = ${formatter.format(cartProducts[i].qt*cartProducts[i].price)}%0a`;
            }
            var deliveryModeTxt = '';
            const myAddress = 'Rua do meu comércio';
            if (deliveryMode==='d'){
                deliveryModeTxt += `Modo de entrega:%0a  - Delivery = ${formatter.format(10)}%0a`;
                totaPrice += 10;
            }else{
                deliveryModeTxt += `  - Modo de entrega: Retirada = ${formatter.format(0)}%0a`;
            }
            var waurl = "https://wa.me/5592981000957?text=";
            var txttempalte = `Pedido nº ${Math.floor(Math.random() * 9999) + 1}-${clientName}%0a
%0a
Itens:%0a
${itensListTxt}
%0a
${deliveryModeTxt}
%0a
Total: *${formatter.format(totaPrice)}*%0a
%0a
Endereço: ${deliveryMode==='d'? address:myAddress}%0a
%0a
Forma de Pagamento: ${payMode}%0a
%0a
( Entregas todas as quintas e sextas.)`;
            var murl = waurl+txttempalte;
            window.open(murl,'_blank')!.focus();
        }
      }

    useEffect(() => {
        if (error) {
            setToastConfig((prev) => ({ ...prev, message: ERROR_SIGNUP_MESSAGE, type: 'error' }))
            return handleOpenToast()
        }

        if (success) {
            toggle()
            handleOpenToast()
            return setToastConfig((prev) => ({ ...prev, message: SUCESS_SIGNUP_MESSAGE, type: 'success' }))
        }

    }, [error, success])

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
                    {CART_MODAL_TITLE}
                </DialogTitle>
                <Box
                    noValidate
                    component="form"
                    autoComplete="off"
                    sx={{ '& > :not(style)': { my: 1 }, width: '90%', margin: '0 auto' }}
                >
                    <TextField
                        ref={clientNameRef}
                        name="clientName"
                        label="Seu nome"
                        variant="filled"
                        onChange={handlenameChange}
                        {...clientNameError}
                        required
                        fullWidth
                    />
                    <AddressField />
                    <PayModeControl />
                </Box>
                <DialogActions sx={{ mx: 2.5 }}>
                    <Button color="secondary" onClick={toggle}>Cancelar</Button>
                    <Button onClick={handleClick} 
                        >
                        <img width="100%" alt="Chat on WhatsApp" src={new URL('../../assets/WhatsAppButtonGreenSmall.png', import.meta.url).href} /> 
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}