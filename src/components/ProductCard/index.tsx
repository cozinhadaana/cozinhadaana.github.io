import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';

import { iProducts } from '../../db';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useState } from 'react';
import { addItem, deleteItem } from '../../reducers/slices/product.slice';

function ProductCard({ id, title, description, urlImage, category, price, qt ,active}: iProducts) {
    const { isLogged } = useSelector((state: any) => state.user)
    const dispatch = useDispatch()

    const [openUpdateModal, setUpdateModal] = useState(false)

    const [count, setCount] = useState(qt);
    const putIntoCart = () => setUpdateModal(!openUpdateModal)

    const handleDeleteItem = () => {
        if (count>0){
            setCount(count-1);
        }
        qt = count;
        dispatch(deleteItem({ id, title, description, urlImage, category, price, qt, active }))
    }

    const handleAddItem = () =>{
        setCount(count+1);
        qt = count;
        dispatch(addItem({ id, title, description, urlImage, category, price, qt, active }));
    }

    return (
        <>
            <Badge color="success" badgeContent={count}>
                <Card sx={{ maxWidth: 325, }}>
                    <CardActionArea
                        onClick={handleAddItem}
                    >
                        <CardMedia
                            component="img"
                            image={urlImage}
                            alt={title}
                            height="140"
                            sx={{ objectFit: 'contain', paddingTop: 1 }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="text">
                                {description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button
                            size="small"
                            onClick={handleDeleteItem}
                            endIcon={<DeleteIcon />}
                        >
                            Deletar
                        </Button>
                    </CardActions>
                </Card>
            </Badge>
        </>
    );
}

export default memo(ProductCard)