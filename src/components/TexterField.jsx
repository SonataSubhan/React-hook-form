import { Box, Typography, TextField } from '@mui/material';
import { useState } from 'react';
import {  useFormContext } from 'react-hook-form';

export default function TexterField({ name, placeholder, label, fullwidth, height, multiline }) {
  const { register, formState: { errors } } = useFormContext();
  
  return (
    <Box>
      <Typography>{label}</Typography>
      <TextField
        {...register(name, { required: true })}

        multiline={multiline} fullWidth={fullwidth} placeholder={placeholder} sx={{
          "& .MuiOutlinedInput-root": {
            minHeight: height, // input-un hündürlüyü
            borderRadius: "10px",
            alignItems: 'flex-start', // çoxsətirli input üçün yuxarıdan başlamaq

            // künclər yumru
            "& fieldset": {
              borderColor: "#666", // border rəngi
            },
            "&:hover fieldset": {
              borderColor: "#000", // hover zamanı border
            },
            "&.Mui-focused fieldset": {
              borderColor: "#504f4fff", // focus zamanı border (mavi default)
            },
          },
          "& .MuiInputLabel-root": {
            color: "#555", // label rəngi
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#1976d2", // fokus zamanı label rəngi
          },
        }} />
    </Box>
  )
}