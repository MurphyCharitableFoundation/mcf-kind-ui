import { Button, ButtonProps } from "@mui/material";

export const CustomButton = (props: ButtonProps) => {
  return <Button variant="contained" color="primary" {...props} />;
};
