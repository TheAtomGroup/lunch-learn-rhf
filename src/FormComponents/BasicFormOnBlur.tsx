import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";

export const BasicFormOnBlur = () => {

  const [formData, setFormData] = useState<any>();
  const onSubmit = (data: any) => setFormData(data);
  const integerOnlyRegex = /^(0|[1-9]\d*)(\.\d+)?$/;
  const stringOnlyRegex = /^[A-Za-z]+$/;
  // const { control, formState: { errors }, handleSubmit } = useForm();
  const methods = useForm({
    shouldUnregister: false,
    mode: 'onBlur',
    reValidateMode: 'onBlur'
  });

  const watchedData = useWatch({
    control: methods.control,
  });

  const { control, handleSubmit, formState: { errors } } = methods;

  useEffect(() => {
    if (Object.values(watchedData).length > 0) {
      const timeout = setTimeout(() => {
        if (Object.values(watchedData).length > 0) {
          setFormData(watchedData)
        }
      }, 500);
      return () => clearTimeout(timeout)
    }
  }, [watchedData]);

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="number_field"
          control={control}
          defaultValue={""}
          rules={{ required: false, pattern: { value: integerOnlyRegex, message: "Integer values only" } }}
          render={({ field }) =>
            <TextField
              InputProps={{ style: { fontSize: 16 } }}
              variant="outlined"
              error={!!errors.number_field}
              helperText={!!errors.number_field ? errors.number_field.message as string : ""}
              fullWidth
              label='Numbers Only'
              {...field}
            />
          }
        />

        <Controller
          name="string_only"
          control={control}
          defaultValue={""}
          rules={{ required: false, pattern: { value: stringOnlyRegex, message: "String values only" } }}
          render={({ field }) =>
            <TextField
              InputProps={{ style: { fontSize: 16 } }}
              variant="outlined"
              error={!!errors.string_only}
              helperText={!!errors.string_only ? errors.string_only.message as string : ""}
              fullWidth
              label='String Characters Only'
              {...field}
            />
          }
        />
        <Button type="submit">Submit</Button>
        {
          formData ?
            <Box display="flex" flexDirection="column">
              <Typography variant="h5">Mode: On Blur</Typography>
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