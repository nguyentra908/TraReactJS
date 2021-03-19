import { Box, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import productApi from "api/productApi";
import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import ProductSkeletonList from "./../components/ProductSkeletonList";

const useStyles = makeStyles((them) => ({
  root: {},
  left: {
    width: "250px",
  },
  right: {
    flex: "1 1 0",
  },
}));

function ListPage(props) {
  const classes = useStyles();
  const [productList, setproductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        };
        const { data } = await productApi.getAll(params);
        setproductList(data);
      } catch (error) {
        console.log("ERROR", error);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>0</Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>{loading ? <ProductSkeletonList /> : <ProductList data={productList} />}</Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
