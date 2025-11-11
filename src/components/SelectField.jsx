import { Box, TextField, Typography, Select, MenuItem, FormControl } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as Flags from "country-flag-icons/react/3x2";
import { useFormContext } from 'react-hook-form';

export default function SelectField({ label, menuitems, name }) {
  const { register, formState: { errors } } = useFormContext();
  return (
    <FormControl fullWidth>
      <Typography>{label}</Typography>


      <Select
        {...register(name, { required: true })}
        defaultValue={menuitems?.[0]?.code || ''}

        sx={{
          "& .MuiSelect-select": {
            display: 'flex',
            gap: '10px'// default value rəngi
          }
        }}
      >
        {menuitems && menuitems.map((item, index) => {
          const Flag = typeof item.code === "string" ? Flags[item.code] : null;
          return (
            <MenuItem sx={{
              display: 'flex',
              gap: '10px'// default value rəngi
            }} key={index} value={item.code}> {Flag ? <Flag style={{ width: 24, height: 24 }} /> : ''}{item.name}</MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}