import TextField, { TextFieldProps } from '@mui/material/TextField';

const ReuTextArea = (props: TextFieldProps) => {
  return (
    <TextField
      multiline
      rows={4}
      fullWidth
      variant="outlined"
      {...props}
    />
  );
};

export default ReuTextArea;
