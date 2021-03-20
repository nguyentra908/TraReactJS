import { Box, Checkbox, FormControlLabel, makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

FilterByService.propTypes = {
  onChange: PropTypes.func,
  filters: PropTypes.object,
};

const useStyles = makeStyles((them) => ({
  root: {
    padding: them.spacing(2),
    borderTop: `1px solid ${them.palette.grey[300]}`,
  },
  service: {
    margin: 0,
    padding: 0,
    listStyleType: "none",
    "&>li": {
      margin: 0,
      paddingTop: them.spacing(1),
    },
  },
}));

function FilterByService({ filters = {}, onChange }) {
  const classes = useStyles();

  const handleChange = (e) => {
    if (!onChange) return;
    const { name, checked } = e.target;
    if (onChange) onChange({ [name]: checked });
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">DỊCH VỤ</Typography>

      <ul className={classes.service}>
        {[
          { value: "isPromotion", label: "Có khuyến mãi" },
          { value: "isFreeShip", label: "Miễn phí vận chuyển" },
        ].map((service) => (
          <li key={service.value}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Boolean(filters[service.value])}
                  onChange={handleChange}
                  name={service.value}
                  color="primary"
                />
              }
              label={service.label}
            />
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByService;
