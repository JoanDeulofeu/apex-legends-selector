import { createStyles, makeStyles } from "@mui/styles";
import React from "react";
import RALSLogo from "../Images/logo.png";

const useStyles = makeStyles((theme) =>
	createStyles({
		image: {
			[theme.breakpoints.only("xs")]: {
				width: 250,
				marginTop: "10px !important",
				marginBottom: "10px !important",
			},
			[theme.breakpoints.only("sm")]: {
				width: 400,
			},
			[theme.breakpoints.only("md")]: {
				width: 500,
			},
			[theme.breakpoints.only("lg")]: {
				width: 600,
			},
			[theme.breakpoints.only("xl")]: {
				width: 700,
			},
		},
	})
);

const Logo = () => {
	const styles = useStyles();

	return <img className={styles.image} alt="Logo-RALS" src={RALSLogo}></img>;
};

export default Logo;
