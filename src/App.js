import { createStyles, makeStyles } from "@mui/styles";
import React from "react";
import ContactFooter from "./components/ContactFooter";
import LegendsPaper from "./components/LegendsPaper";
import Logo from "./components/Logo";
import OptionsBar from "./components/OptionsBar";
import SelectionLauncher from "./components/SelectionLauncher";
import background from "./Images/background2.png";

const useStyles = makeStyles(() =>
	createStyles({
		container: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			minHeight: "100vh",
			padding: 50,
			paddingTop: 0,
			backgroundImage: `url(${background})`,
			backgroundSize: "cover",
		},
	})
);

const App = () => {
	const styles = useStyles();

	return (
		<div className={styles.container}>
			<Logo />
			<OptionsBar />
			<LegendsPaper />
			<SelectionLauncher />
			<ContactFooter />
		</div>
	);
};

export default App;
