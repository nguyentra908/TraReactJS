import { Box } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import FilterByCategory from "./Filters/FilterByCategory";
import FilterByPrice from "./Filters/FilterByPrice";
import FilterByService from "./Filters/FilterByService";

ProductFilters.propTypes = {
  onChange: PropTypes.func,
  filters: PropTypes.object.isRequired,
};

function ProductFilters({ onChange, filters }) {
  //category Filters
  const handleChangeCategory = (newCategory) => {
    if (!onChange) return;
    const newFilters = {
      ...filters,
      "category.id": newCategory,
    };
    onChange(newFilters);
  };
  //Price Filters
  const handleChange = (values) => {
    console.log(values);
    if (onChange) onChange(values);
  };

  return (
    <Box>
      <FilterByCategory onChange={handleChangeCategory} />
      <FilterByPrice onChange={handleChange} />
      <FilterByService filters={filters} onChange={handleChange} />
    </Box>
  );
}

export default ProductFilters;
