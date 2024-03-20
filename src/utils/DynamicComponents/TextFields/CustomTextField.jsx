import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextField } from "@mui/material";

const CustomTextField = ({ fields }) => {
  return (
    <>
      {fields.map((field) => (
        <Field key={field.name} name={field.name}>
          {({ field }) => (
            <TextField
              {...field}
              margin="normal"
              id={field.name}
              label={field.label}
              type={field.type}
              variant="outlined"
              helperText={<ErrorMessage name={field.name} />}
              error={Boolean(field.touched && field.error)}
            />
          )}
        </Field>
      ))}
    </>
  );
};

export default CustomTextField;
