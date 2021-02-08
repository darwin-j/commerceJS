import React from "react";
import { Product } from "./product/Product";
import { Grid } from "@material-ui/core";
const Products = () => {
  const products = [
    {
      id: 1,
      name: "belt",
      description:
        "The best product descriptions address your target audience directly and personally.",
      price: "5",
      image: "http://pngimg.com/uploads/belt/belt_PNG9579.png",
    },
    {
      id: 2,
      name: "bag",
      description:
        "The best product descriptions address your target audience directly and personally.",
      price: "10",
      image:
        "https://lh3.googleusercontent.com/proxy/Z-KE5fChDtKKrWzdiuos1oZ9UKWVrn1_BYfwATLtINdwETAKMjDNtzg0C6D7ASShVlkiC-YtkCkPfpBbaX_8kZXZDjY5vNyc8wbM170RO4pfnCUBmXE",
    },
  ];

  return (
    <div>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
