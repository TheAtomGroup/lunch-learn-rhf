import { TextField } from "@mui/material"
import { Controller, useForm } from "react-hook-form"

interface IRhfControllerProps {
  rule?: any;
  errorMessage: string;
  required: boolean;
  error: any;
  defaultValue: string;
  fieldName: string;
}

export const RHFController = ({ fieldName, defaultValue, rule, errorMessage, required, error }: IRhfControllerProps) => {
  const { control, formState: { errors } } = useForm();

  return (
    <Controller
      name={fieldName}
      control={control}
      defaultValue={defaultValue}
      rules={{ required, pattern: { value: rule, message: errorMessage } }}
      render={({ field }) =>
        <TextField
          InputProps={{ style: { fontSize: 16 } }}
          variant="outlined"
          // error={!!errors.email}
          // helperText={!!errors.email && errors.email?.message as string}
          fullWidth
          label='Test Field'
          {...field}
        />
      }
    />
  )
}