import { Box } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import FilterByCategory from "./Filters/FilterByCategory";
import FilterByPrice from "./Filters/FilterByPrice";

ProductFilters.propTypes = {
  onChange: PropTypes.func,
  filters: PropTypes.object.isRequired,
};

function ProductFilters({ onChange, filters }) {
  const handleChangeCategory = (newCategory) => {
    if (!onChange) return;
    const newFilters = {
      ...filters,
      "category.id": newCategory,
    };
    onChange(newFilters);
  };
  const handleChangePrice = (values) => {
    console.log(values);
    if (onChange) onChange(values);
  };
  return (
    <Box>
      <FilterByCategory onChange={handleChangeCategory} />
      <FilterByPrice onChange={handleChangePrice} />
    </Box>
  );
}

export default ProductFilters;
