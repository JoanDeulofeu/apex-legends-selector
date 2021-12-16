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
			minWidth: "100%",
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
	const { banLegends, isSolo } = useOptions();
	const { isBeingSelected, legendSoloSelected, legendsSquadSelected } =
		useLegendsSelector();

	return (
		<>
			{banLegends.length < Object.keys(legendsImg).length - (isSolo ? 1 : 2) ? (
				<Paper className={styles.container}>
					<Grid container>
						{Object.keys(legendsImg).map((_legendName) => {
							const isInSelection =
								isBeingSelected &&
								((isSolo && legendSoloSelected === _legendName) ||
									(legendsSquadSelected[0] === _legendName && !isSolo) ||
									(legendsSquadSelected[1] === _legendName && !isSolo) ||
									(legendsSquadSelected[2] === _legendName && !isSolo));
							const isFirstSelected =
								(isSolo && legendSoloSelected === _legendName) ||
								(legendsSquadSelected[0] === _legendName && !isSolo);
							const isSecondSelected =
								legendsSquadSelected[1] === _legendName && !isSolo;
							const isThirdSelected =
								legendsSquadSelected[2] === _legendName && !isSolo;
							if (!banLegends.includes(_legendName))
								return (
									<Grid
										key={_legendName}
										item
										xs={12}
										sm={6}
										md={4}
										lg={3}
										xl={2}
										className={clsx(
											styles.item,
											isInSelection && styles.itemInSelection,
											!isBeingSelected &&
												isFirstSelected &&
												styles.itemSelected1,
											!isBeingSelected &&
												isSecondSelected &&
												styles.itemSelected2,
											!isBeingSelected &&
												isThirdSelected &&
												styles.itemSelected3
										)}
									>
										<img
											className={styles.legendImg}
											alt={_legendName}
											src={legendsImg[_legendName]}
										></img>
										<div className={styles.textContainer}>
											<Typography variant="text">
												{capitalize(_legendName)}
											</Typography>
										</div>
									</Grid>
								);
							else return <></>;
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
