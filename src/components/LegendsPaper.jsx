import { Grid, Paper, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import React from "react";
import legendsImg from "../constants/legendsImg";
import { capitalize } from "../utils";
import { useOptions } from "../contexts/OptionsContextProvider";
import { useLegendsSelector } from "../contexts/LegendsSelectorContextProvider";
import clsx from "clsx";

const useStyles = makeStyles((theme) =>
	createStyles({
		container: {
			borderRadius: 50,
			padding: 10,
			minWidth: 250,
			width: "100%",
		},
		item: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			border: "3px solid #0E1624",
			borderRadius: 10,
		},
		itemSelected1: {
			border: "3px solid #48DD48",
		},
		itemSelected2: {
			border: "3px solid #F84CE0",
		},
		itemSelected3: {
			border: "3px solid #F8E54C",
		},
		itemInSelection: {
			border: "3px solid #CB4242",
		},
		legendImg: {
			marginRight: 15,
			[theme.breakpoints.down("sm")]: {
				marginRight: 0,
			},
			[theme.breakpoints.down("md")]: {
				width: 50,
			},
			[theme.breakpoints.up("md")]: {
				width: 100,
			},
		},
		textContainer: {
			width: "7vw",
			minWidth: 100,
			[theme.breakpoints.down("sm")]: {
				display: "none",
			},
		},
	})
);

const LegendsPaper = () => {
	const styles = useStyles();
	const { isSolo } = useOptions();
	const { isBeingSelected, legendSoloSelected, legendsSquadSelected, legends } =
		useLegendsSelector();

	return (
		<>
			{legends.length >= (isSolo ? 2 : 3) ? (
				<Paper className={styles.container}>
					<Grid container>
						{legends.map((_legend) => {
							const isInSelection =
								isBeingSelected &&
								((isSolo && legendSoloSelected === _legend) ||
									(legendsSquadSelected[0] === _legend && !isSolo) ||
									(legendsSquadSelected[1] === _legend && !isSolo) ||
									(legendsSquadSelected[2] === _legend && !isSolo));
							const isFirstSelected =
								(isSolo && legendSoloSelected === _legend) ||
								(legendsSquadSelected[0] === _legend && !isSolo);
							const isSecondSelected =
								legendsSquadSelected[1] === _legend && !isSolo;
							const isThirdSelected =
								legendsSquadSelected[2] === _legend && !isSolo;
							return (
								<Grid
									key={_legend}
									item
									xs={4}
									sm={6}
									md={4}
									lg={3}
									xl={2}
									className={clsx(
										styles.item,
										isInSelection && styles.itemInSelection,
										!isBeingSelected && isFirstSelected && styles.itemSelected1,
										!isBeingSelected &&
											isSecondSelected &&
											styles.itemSelected2,
										!isBeingSelected && isThirdSelected && styles.itemSelected3
									)}
								>
									<img
										className={styles.legendImg}
										alt={_legend}
										src={legendsImg[_legend]}
									></img>
									<div className={styles.textContainer}>
										<Typography variant="text">
											{capitalize(_legend)}
										</Typography>
									</div>
								</Grid>
							);
						})}
					</Grid>
				</Paper>
			) : (
				<Typography variant="text">
					{`Please select at least ${isSolo ? "two" : "three"} legends ...`}
				</Typography>
			)}
		</>
	);
};

export default LegendsPaper;
