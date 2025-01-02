/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const ProductItem = ({product}) => {
  const { title,  description, image } = product;

    return (
        <Card 
             
            sx={{ maxWidth: 345}}>
              <CardMedia
                component="img"
                sx={{ width:200}}
                alt="images"
                image={`${image}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 {title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {description.slice(0, 45) + "..."}
                </Typography>
              </CardContent>
              <CardActions>
               <Button size="md">Buy Now</Button>
               <Button size="md">Add To Cart</Button>
              </CardActions>
            </Card>
    );
};

export default ProductItem;