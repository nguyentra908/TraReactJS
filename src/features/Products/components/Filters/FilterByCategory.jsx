import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, makeStyles, Typography } from "@material-ui/core";
import categoryApi from "api/categoryApi";

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};
//
const useStyles = makeStyles((them) => ({
  root: {
    padding: them.spacing(2),
  },
  menu: {
    padding: 0,
    margin: 0,
    listStyleType: "none",
    "&>li": {
      marginTop: them.spacing(1),
      transition: "all .25s",
      "&:hover": {
        cursor: "pointer",
        color: them.palette.primary.main,
      },
    },
  },
}));

function FilterByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);
  const classes = useStyles();
  //get api
  useEffect(() => {
    (async () => {
      try {
        const data = await categoryApi.getAll();
        setCategoryList(
          data.map((x) => ({
            id: x.id,
            name: x.name,
          }))
        );
        console.log(data);
      } catch (error) {
        console.log("FAILED to fetch category list", error);
      }
    })();
  }, []);
  //handle onClick
  const handleCategoryChange = (category) => {
    if (onChange) onChange(category.id);
  };
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">DANH MỤC SẢN PHẨM</Typography>
      <ul className={classes.menu}>
        {categoryList.map((category) => (
          <li key={category.id} onClick={() => handleCategoryChange(category)}>
            <Typography variant="body2"> {category.name}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByCategory;
