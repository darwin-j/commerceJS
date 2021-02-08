import React from "react";
import "./product.css";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  IconButton,
  CardActions,
} from "@material-ui/core";

import { AddShoppingCart } from "@material-ui/icons";
export const Product = ({ product }) => {
  console.log(product.image);

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className="image"
          image={product.image}
          title={product.name}
        />
        <CardContent>
          <div>
            <Typography variant="h4" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5">{product.price}</Typography>
          </div>
          <Typography variant="h6" color="textSecondary">
            {product.description}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="Add to cart">
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
