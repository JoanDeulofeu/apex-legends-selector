import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import OptionsContext from "./contexts/OptionsContextProvider";

ReactDOM.render(
	<React.StrictMode>
		<OptionsContext>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<App />
			</ThemeProvider>
		</OptionsContext>
	</React.StrictMode>,
	document.getElementById("root")
);
