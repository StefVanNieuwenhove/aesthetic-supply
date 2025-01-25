'use client';

import { TextField, TextFieldProps } from '@mui/material';
import { IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';

const PasswordField = ({ ...props }: TextFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <TextField
      {...props}
      type={showPassword ? 'text' : 'password'}
      placeholder='************'
      slotProps={{
        input: {
          endAdornment: (
            <IconButton onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          ),
        },
      }}
    />
  );
};

export default PasswordField;
