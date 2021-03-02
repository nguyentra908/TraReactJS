import React from "react";
import PropTypes from "prop-types";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "components/form-controls/InputFields";

TodoForm.propTypes = {
  onsubmitTodo: PropTypes.func,
};
TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props) {
  //form validation khai báo schema
  const schema = yup.object().shape({
    //khaibaos field
    title: yup.string().required("Please enter title").min(5, "title is true short"),
  });

  const form = useForm({
    defaultValues: {
      title: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmitTodo = (values) => {
    // console.log(values);
    const { onsubmitTodo } = props;
    if (onsubmitTodo) {
      onsubmitTodo(values);
    }
    form.reset();
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmitTodo)}>
      <InputField name="title" label="Todo" form={form} />
    </form>
  );
}

export default TodoForm;
