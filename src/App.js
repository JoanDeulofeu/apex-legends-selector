import { createStyles, makeStyles } from "@mui/styles";
import React from "react";
import ContactFooter from "./components/ContactFooter";
import LegendsPaper from "./components/LegendsPaper";
import OptionsBar from "./components/OptionsBar";
import SelectionLauncher from "./components/SelectionLauncher";

const useStyles = makeStyles(() =>
	createStyles({
		container: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			minHeight: "100vh",
			padding: 50,
		},
	})
);

const App = () => {
	const styles = useStyles();

	return (
		<div className={styles.container}>
			<OptionsBar />
			<LegendsPaper />
			<SelectionLauncher />
			<ContactFooter />
		</div>
	);
};

export default App;
