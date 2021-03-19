import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

Product.propTypes = {
  product: PropTypes.object,
};

function Product(props) {
  const { product } = props;
  return (
    <Box padding={1}>
      <Skeleton variant="rect" width="100%" height={118} />
      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        {product.salePrice} - {product.promotionPercent}%
      </Typography>
    </Box>
  );
}

export default Product;
