import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import OptionsContext from "./contexts/OptionsContextProvider";
import LegendsSelectorContext from "./contexts/LegendsSelectorContextProvider";

ReactDOM.render(
	<React.StrictMode>
		<OptionsContext>
			<LegendsSelectorContext>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<App />
				</ThemeProvider>
			</LegendsSelectorContext>
		</OptionsContext>
	</React.StrictMode>,
	document.getElementById("root")
);
