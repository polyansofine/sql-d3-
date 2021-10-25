import * as React from "react";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fa8b02",
    },
    secondary: {
      main: "#fcc488",
    },
  },
  typography: {
    fontFamily: "Cinzel",
    //     h1: { fontSize: 33, fontWeight: 700, letterSpacing: "0.06em" },
    //     h5: {
    //       fontSize: 26,
    //       fontFamily: "Source Sans Pro",
    //       fontWeight: 400,
    //       lineHeight: "33.8px",
    //     },
    //     h6: { fontSize: 24, lineHeight: "28.8px", fontWeight: 400 },
    //     caption: { fontSize: 61, textTransform: "uppercase", lineHeight: "80px" },
  },
});
