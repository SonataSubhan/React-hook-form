import { Box, TextField, Typography, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';

export default function CheckField({ checkboxes, name }) {
  const { register, formState: { errors } } = useFormContext();
  return (
    <Box >
      <Typography>Which products are you interested in?</Typography>
      <FormGroup sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr", // 2 sütun
        gap: 1,
      }}>
        {checkboxes && checkboxes.map((item, index) => {

          return (
            <FormControlLabel  key={index} control={<Checkbox {...register(`${name}.${item}`)}  />} label={item.label} />
          )

        })}
      </FormGroup>


    </Box>
  )
}