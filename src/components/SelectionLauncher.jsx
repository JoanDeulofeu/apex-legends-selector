import { Button, Grid, Paper, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import React from "react";
import { useLegendsSelector } from "../contexts/LegendsSelectorContextProvider";
import { useOptions } from "../contexts/OptionsContextProvider";
import { capitalize } from "../utils";

const useStyles = makeStyles(() =>
	createStyles({
		container: {
			width: "100%",
			marginTop: 25,
		},
		buttonContainer: {},
		paper: {
			width: "100%",
			display: "flex",
			flexDirection: "column",
			padding: 10,
		},
	})
);

const SelectionLauncher = () => {
	const styles = useStyles();
	const { isSolo } = useOptions();
	const {
		selectRandomlySoloLegend,
		selectRandomlySquadLegend,
		legendsSquadSelected,
		isBeingSelected,
	} = useLegendsSelector();

	return (
		<Grid container className={styles.container}>
			<Grid item xs={12} sm={8} className={styles.buttonContainer}>
				<Button
					variant="outlined"
					className={styles.button}
					onClick={
						isSolo ? selectRandomlySoloLegend : selectRandomlySquadLegend
					}
				>
					<Typography variant="text">{`GET RANDOM LEGEND${
						isSolo ? "" : "S"
					}`}</Typography>
				</Button>
			</Grid>
			<Grid item xs={12} sm={4}>
				{!isSolo && (
					<Paper className={styles.paper}>
						<Typography variant="text">{`First legend ${
							legendsSquadSelected[0] && !isBeingSelected
								? ": " + capitalize(legendsSquadSelected[0])
								: ""
						}`}</Typography>
						<Typography variant="text">{`Second legend ${
							legendsSquadSelected[1] && !isBeingSelected
								? ": " + capitalize(legendsSquadSelected[1])
								: ""
						}`}</Typography>
						<Typography variant="text">{`Third legend ${
							legendsSquadSelected[2] && !isBeingSelected
								? ": " + capitalize(legendsSquadSelected[2])
								: ""
						}`}</Typography>
					</Paper>
				)}
			</Grid>
		</Grid>
	);
};

export default SelectionLauncher;
