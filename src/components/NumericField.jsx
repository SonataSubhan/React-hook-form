import { Box, TextField, Typography, Select, MenuItem, FormControl } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as countryCodes from "country-codes-list";
import { useFormContext } from 'react-hook-form';

export default function NumericField({ label, name }) {
  const myCountryCodesObject = countryCodes.customList(
    "countryCode",
    "+{countryCallingCode}"
  );
  const countryArray = Object.entries(myCountryCodesObject);
  const [selectedCountryCode, setSelectedCountryCode] = useState(countryArray[0][1]);

  const { register, formState: { errors } } = useFormContext();
  return (
    <Box>
      <Typography>{label}</Typography>
      <Box display={'flex'}>
        <FormControl sx={{ minWidth: 75, }}>
          <Select
            value={selectedCountryCode}
            onChange={(e) => setSelectedCountryCode(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-notchedOutline': {
                border: '2px solid gray',
                borderRight: 'none',
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'gray',  // hover zamanı border rəngi
                borderRight: 'none',   // sağ border-i hələ də silirik
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'gray', // focus zamanı border rəngi
                borderRight: 'none',
              },
            }}
          >

            {countryArray.map(([code, callingCode]) => (
              <MenuItem key={code} value={callingCode}>
                {code}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField

          {...register(name, { required: true })}
          fullWidth
          placeholder={selectedCountryCode}
          type="number"

          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              border: '2px solid gray',
              borderLeft: 'none',
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'gray',  // hover zamanı border rəngi
              borderLeft: 'none',   // sağ border-i hələ də silirik
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'red', // focus zamanı border rəngi
              borderLeft: 'none',
            },
          }}
        />
      </Box>
    </Box>
  );
}
