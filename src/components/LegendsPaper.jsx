import { Grid, Paper, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import React from "react";
import legendsImg from "../constants/legendsImg";
import { capitalize } from "../utils";

const useStyles = makeStyles((theme) =>
	createStyles({
		container: {
			borderRadius: 50,
			padding: 10,
		},
		item: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		legendImg: {
			marginRight: 15,
			[theme.breakpoints.down("md")]: {
				width: 80,
			},
			[theme.breakpoints.up("md")]: {
				width: 100,
			},
		},
		textContainer: {
			width: "7vw",
			minWidth: 100,
		},
	})
);

const LegendsPaper = () => {
	const styles = useStyles();

	return (
		<Paper className={styles.container}>
			<Grid container>
				{Object.keys(legendsImg).map((_legendName) => (
					<Grid
						key={_legendName}
						item
						xs={12}
						sm={6}
						md={4}
						lg={3}
						xl={2}
						className={styles.item}
					>
						<img
							className={styles.legendImg}
							alt={_legendName}
							src={legendsImg[_legendName]}
						></img>
						<div className={styles.textContainer}>
							<Typography variant="text">{capitalize(_legendName)}</Typography>
						</div>
					</Grid>
				))}
			</Grid>
		</Paper>
	);
};

export default LegendsPaper;
