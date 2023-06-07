import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { RHFController } from "./RHFController";

export const BasicFormOnSubmit = () => {
  const { control, formState: { errors }, handleSubmit } = useForm();

  const [formData, setFormData] = useState<{ first_name: string, last_name: string, email: string }>();
  const onSubmit = (data: any) => setFormData(data);

  const requiredErrorMessage = "This field is required";
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="first_name"
          control={control}
          defaultValue={""}
          rules={{ required: requiredErrorMessage }}
          render={({ field }) =>
            <TextField
              InputProps={{ style: { fontSize: 16 } }}
              variant="outlined"
              error={!!errors.first_name}
              helperText={!!errors.first_name ? requiredErrorMessage : ""}
              fullWidth
              label='First Name'
              {...field}
            />
          }
        />

        <Controller
          name="last_name"
          control={control}
          defaultValue={""}
          render={({ field }) =>
            <TextField
              InputProps={{ style: { fontSize: 16 } }}
              variant="outlined"
              fullWidth
              label='Last Name'
              {...field}
            />
          }
        />
        <Controller
          name="email"
          control={control}
          // defaultValue={"email"}
          defaultValue={""}
          rules={{ required: true, pattern: { value: emailRegex, message: "Must be a valid email address" } }}
          render={({ field }) =>
            <TextField
              InputProps={{ style: { fontSize: 16 } }}
              variant="outlined"
              error={!!errors.email}
              helperText={!!errors.email && errors.email?.message as string}
              fullWidth
              label='Email*'
              {...field}
            />
          }
        />

        <RHFController
          errorMessage={"this is required"}
          required={true}
          error={undefined}
          defaultValue={"test"}
          fieldName={"new_field"}
        />

        <Button type="submit">Submit</Button>
        {
          formData ?
            <Box display="flex" flexDirection="column">
              <Typography variant="h5">Mode: On Submit</Typography>
              <Typography>First Name: {formData.first_name}</Typography>
              <Typography>
                Last Name: {formData.last_name ? formData.last_name : 'No last name provided'}
              </Typography>
              <Typography>
                Email: {formData.email}
              </Typography>

              <Typography>
                {JSON.stringify(formData)}
              </Typography>
            </Box>
            : null
        }
      </form>
    </Box>

  )
}