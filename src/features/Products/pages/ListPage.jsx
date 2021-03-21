import { Box, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import productApi from "api/productApi";
import { useEffect, useState } from "react";
import FilterViews from "../components/FilterViews";
import ProductFilters from "../components/ProductFilters";
import ProductList from "../components/ProductList";
import ProductSort from "../components/ProductSort";
import ProductSkeletonList from "./../components/ProductSkeletonList";

const useStyles = makeStyles((them) => ({
  root: {},
  left: {
    width: "250px",
  },
  right: {
    flex: "1 1 0",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    flexFlow: "row nowrap",

    marginTop: "30px",
    paddingBottom: "20px",
  },
}));

function ListPage(props) {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    limit: 9,
    page: 1,
    total: 10,
  });
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 9,
    _sort: "salePrice:ASC",
  });
  //API
  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters);
        setProductList(data);
        setPagination(pagination);
        console.log(data, pagination);
      } catch (error) {
        console.log("ERROR", error);
      }
      setLoading(false);
    })();
  }, [filters]);

  //change pagination
  const handleChangePagination = (e, page) => {
    setFilters((preFilters) => ({
      ...preFilters,
      _page: page,
    }));
  };
  //change sort
  const handleChangeSort = (newValueSort) => {
    setFilters((preFilters) => ({
      ...preFilters,
      _sort: newValueSort,
    }));
  };
  //change filter (category, price, service)
  const handleChangeFilters = (newFilters) => {
    setFilters((preFilters) => ({
      ...preFilters,
      ...newFilters,
    }));
  };

  const setNewFilters = (newFilters) => {
    setFilters(newFilters);
  };
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              <ProductFilters filters={filters} onChange={handleChangeFilters} />
            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <ProductSort onChange={handleChangeSort} currentSort={filters._sort} />
              <FilterViews filters={filters} onChange={setNewFilters} />
              {loading ? <ProductSkeletonList length={9} /> : <ProductList data={productList} />}

              <Box>
                <Pagination
                  className={classes.pagination}
                  count={Math.ceil(pagination.total / pagination.limit)}
                  color="primary"
                  page={pagination.page}
                  onChange={handleChangePagination}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
