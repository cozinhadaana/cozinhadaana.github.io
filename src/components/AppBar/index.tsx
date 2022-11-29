import { useState, useEffect, MouseEvent, ReactElement } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import useMediaQuery from '@mui/material/useMediaQuery';
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/logo.svg'
import theme from '../../styles/theme';

import APP_PAGES from '../../routes/pages.routes'
import GradientButton from '../GradientButton';
import { CartModal, LoginModal } from '../../components/Modals'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../reducers/slices/user.slice';
import { Offset } from './styles';
import { iProducts } from '../../db';

interface Props {
    children: ReactElement
}

const textColor = theme.palette.text.primary


const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

export default function ({ children }: Props) {
    const dispatch = useDispatch();
    const { isLogged, avatar, name } = useSelector((state: any) => state.user);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [cartFABVisibility, setcartFABVisibility] = useState(false);
    const matches1400px = useMediaQuery('(min-width:1400px)');

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    const allProducts = useSelector((state: any) => state.products);
    const listProducts = allProducts.gourmet.concat(allProducts.sopas.concat(allProducts.tradicional));
    const cartProducts = listProducts.filter(function (el:iProducts) {return el.qt>0});
    var cartLength = cartProducts.length;
    const cartEmpty = !(cartLength>0);
    var productCount = 0;
    cartProducts.map((el:iProducts)=> {productCount+=el.qt});
    console.log({cart: cartProducts});
    
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const [openCartModal, setOpenCartModal] = useState(false)
    const [openLoginModal, setOpenLoginModal] = useState(false)

    const toggleCartModal = () => setOpenCartModal(!openCartModal)
    const toggleLoginModal = () => setOpenLoginModal(!openLoginModal)

    const handleLogout = () => dispatch(logoutUser())

    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <CartModal open={openCartModal} toggle={toggleCartModal} />
            <LoginModal open={openLoginModal} toggle={toggleLoginModal} />

            <AppBar position="static" sx={{ backgroundColor: 'background.paper' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* Exibe a logo a esquerda em tela média */}
                        <Box sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, }}>
                            <img src={Logo} />
                        </Box>

                        {/* Exibe o botão de hamburguer em tela menor que a média */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon color="primary" />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {APP_PAGES.map((page) => (
                                    <NavLink key={page.id} to={page.path} end>
                                        {({ isActive }) => (
                                            <MenuItem onClick={handleCloseNavMenu}>
                                                <Typography
                                                    align='center'
                                                    textAlign="center"
                                                    color={isActive ? 'primary' : textColor}
                                                >
                                                    {page.label}
                                                </Typography>
                                            </MenuItem>
                                        )}
                                    </NavLink>
                                ))}

                                {
                                    !isLogged && (
                                        <MenuItem sx={{ display: 'none' }} onClick={() => {
                                            handleCloseNavMenu()
                                            toggleLoginModal()
                                        }}>
                                            <Typography
                                                align='center'
                                                textAlign="center"
                                            >
                                                Entrar
                                            </Typography>
                                        </MenuItem>
                                    )
                                }

                            </Menu>
                        </Box>

                        {/* Exibe a logo centralizada em tela menor que a média */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <img width='100px' src={Logo} />
                        </Box>

                        {/* Exibe os links das páginas em tela média */}
                        <Box sx={{ mr: 2, flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' } }}>
                            {APP_PAGES.map((page) => (
                                <NavLink
                                    key={page.id}
                                    end
                                    to={page.path}
                                >
                                    {({ isActive }) => (
                                        <Button
                                            key={page.path}
                                            onClick={handleCloseNavMenu}
                                            sx={{ my: 2, display: 'block', color: isActive ? 'primary' : 'text.primary' }}
                                        >
                                            {page.label}
                                        </Button>
                                    )}
                                </NavLink>
                            ))}

                            <Button
                                variant="outlined"
                                onClick={toggleLoginModal}
                                sx={{
                                    color: 'text.primary',
                                    borderColor: 'primary.800',
                                    display: { xs: 'none', md: 'none' },
                                    my: 2, marginLeft: 1
                                }}
                            >
                                Entrar
                            </Button>
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Badge color="primary" badgeContent={productCount} invisible={cartEmpty}>
                                <GradientButton
                                    onClick={toggleCartModal}
                                    sx={{ marginRight: 1 }}
                                >
                                    <AddShoppingCartIcon />
                                </GradientButton>
                            </Badge>

                            {
                                isLogged && (
                                    <>
                                        <Tooltip title="Sua conta">
                                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                                <Avatar alt={name} src={avatar} />
                                            </IconButton>
                                        </Tooltip>
                                        <Menu
                                            sx={{ mt: '45px' }}
                                            id="menu-appbar"
                                            anchorEl={anchorElUser}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={Boolean(anchorElUser)}
                                            onClose={handleCloseUserMenu}
                                        >
                                            <MenuItem onClick={() => {
                                                handleCloseUserMenu()
                                                handleLogout()
                                            }}>
                                                <Typography textAlign="center">Sair</Typography>
                                            </MenuItem>
                                        </Menu>
                                    </>
                                )
                            }
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar >
            <Offset>{children}</Offset>
            
            <Box sx={{ 
                '& > :not(style)': { m: 1 },
                position: 'fixed',
                bottom: '5%',
                zIndex:'1',
                right: (matches1400px) ? '100px' : '10px',
                display: { xs: (scrollPosition) >60 ? 'flex': 'none', md: (scrollPosition) >213 ? 'flex': 'none' }
                }}>
                <Badge color="secondary" overlap="circular" badgeContent={productCount} invisible={cartEmpty}>
                    <Fab color="primary" aria-label="add" onClick={toggleCartModal} sx={{zIndex:'1'}}>
                        <AddShoppingCartIcon />
                    </Fab>
                </Badge>
            </Box>
        </>
    );
};