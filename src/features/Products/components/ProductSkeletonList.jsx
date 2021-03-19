import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

ProductSkeletonList.propTypes = {
  length: PropTypes.number,
};
ProductSkeletonList.defaultProps = {
  length: 6,
};
function ProductSkeletonList(props) {
  const { length } = props;
  return (
    <Box>
      <Grid container>
        {Array.from(new Array(length)).map((x, index) => (
          <Grid item key={index} xm={12} sm={6} md={4} mx={3}>
            <Box padding={1}>
              <Skeleton variant="rect" width="100%" height={118} />
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductSkeletonList;
