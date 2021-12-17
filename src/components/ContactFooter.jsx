import { Typography, Link } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles(() =>
	createStyles({
		link: {
			marginTop: "auto !important",
		},
	})
);

const ContactFooter = () => {
	const styles = useStyles();

	return (
		<Link
			className={styles.link}
			href="https://github.com/JoanDeulofeu"
			underline="hover"
		>
			<Typography variant="text">by Joan Gehin</Typography>
		</Link>
	);
};

export default ContactFooter;
