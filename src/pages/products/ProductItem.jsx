/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const ProductItem = ({product}) => {
    return (
        <Card 
             
            sx={{ maxWidth: 345}}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={`${product?.images}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 {product.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                 {product.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
    );
};

export default ProductItem;