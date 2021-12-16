import { createStyles, makeStyles } from "@mui/styles";
import React from "react";
import LegendsPaper from "./components/LegendsPaper";
import OptionsBar from "./components/OptionsBar";

const useStyles = makeStyles(() =>
	createStyles({
		container: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			minHeight: "100vh",
			padding: 50,
			minWidth: 200,
		},
	})
);

const App = () => {
	const styles = useStyles();

	return (
		<div className={styles.container}>
			<OptionsBar />
			<LegendsPaper />
		</div>
	);
};

export default App;
