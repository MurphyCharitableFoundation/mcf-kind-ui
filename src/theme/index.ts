import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import palette from "./palette";
import custom from "./custom";
import status from "./status";
import typography from "./typography";

export const theme = responsiveFontSizes(
  createTheme({
    palette,
    custom,
    status,
    typography,
  }),
);
