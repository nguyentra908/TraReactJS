import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

ProductSkeletonCategory.propTypes = {
  length: PropTypes.number,
};
ProductSkeletonCategory.defaultProps = {
  length: 6,
};
function ProductSkeletonCategory(props) {
  const { length } = props;
  return (
    <Box>
      <Grid container>
        {Array.from(new Array(length)).map((x, index) => (
          <Grid item key={index}>
            <Box padding={1}>
              <Skeleton variant="rect" width="100%" height={200} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductSkeletonCategory;
