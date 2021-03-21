import React from "react";
import PropTypes from "prop-types";
import { Box, Chip, makeStyles } from "@material-ui/core";

FilterViews.propTypes = {
  onChange: PropTypes.func,
  filters: PropTypes.object,
};
const useStyles = makeStyles((them) => ({
  root: {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    listStyleType: "none",

    padding: 0,
    margin: them.spacing(2, 0),
    "&>li": {
      margin: 0,
      padding: them.spacing(1),
    },
  },
}));

//filter LIST
const FILTER_LIST = [
  {
    id: 1,
    getLabel: () => "Vận chuyển miễn phí",
    isActive: (filters) => filters.isFreeShip,
    isVisible: () => true,
    isRemovable: false,
    onRemove: () => {},
    onToggle: (filters) => {
      const newFilters = { ...filters };

      if (newFilters.isFreeShip) {
        delete newFilters.isFreeShip;
      } else {
        newFilters.isFreeShip = true;
      }
      return newFilters;
    },
  },
  {
    id: 2,
    getLabel: () => "Giá khuyến mãi",
    isActive: () => true,
    isVisible: (filters) => filters.isPromotion,
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.isPromotion;
      return newFilters;
    },
    onToggle: null,
  },
  {
    id: 3,
    getLabel: (filters) => `Từ ${filters.salePrice_gte} đến ${filters.salePrice_lte}`,
    isActive: () => true,
    isVisible: (filters) =>
      Object.keys(filters).includes("salePrice_lte") && Object.keys(filters).includes("salePrice_gte"),
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete (newFilters.salePrice_lte && newFilters.salePrice_gte);
      return newFilters;
    },
    onToggle: null,
  },
  // {
  //   id: 4,
  //   getLabel: (filters) => "",
  //   isActive: (filters) => true,
  //   isVisible: (filters) => true,
  //   isRemovable: true,
  //   onRemove: (filters) => {},
  //   onToggle: (filters) => {},
  // },
];
function FilterViews({ filters = {}, onChange = null }) {
  const classes = useStyles();
  return (
    <Box component="ul" className={classes.root}>
      {FILTER_LIST.filter((x) => x.isVisible(filters)).map((x) => (
        <li key={x.id}>
          <Chip
            label={x.getLabel(filters)}
            onDelete={
              x.isRemovable
                ? () => {
                    if (!onChange) return;
                    const newFilters = x.onRemove(filters);
                    onChange(newFilters);
                  }
                : null
            }
            clickable={!x.isRemovable}
            onClick={
              x.isRemovable
                ? null
                : () => {
                    if (!onChange) return;
                    const newFilters = x.onToggle(filters);
                    onChange(newFilters);
                  }
            }
            color={x.isActive(filters) ? "primary" : "default"}
          />
        </li>
      ))}
    </Box>
  );
}

export default FilterViews;
