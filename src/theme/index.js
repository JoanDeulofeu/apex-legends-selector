import darkScrollbar from "@mui/material/darkScrollbar";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	typography: {
		text: { color: "#C6D3E7" },
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					...darkScrollbar(),
					color: "white",
					backgroundColor: "#07080A",
					"& h1": {
						color: "white",
					},
				},
			},
		},
		MuiPaper: { styleOverrides: { root: { backgroundColor: "#0E1624" } } },
	},
});

export default theme;
