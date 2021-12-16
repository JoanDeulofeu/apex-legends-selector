import { Grid, Paper, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import React from "react";
import legendsImg from "../constants/legendsImg";
import { capitalize } from "../utils";
import { useOptions } from "../contexts/OptionsContextProvider";

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

	return (
		<>
			{banLegends.length < Object.keys(legendsImg).length - (isSolo ? 1 : 2) ? (
				<Paper className={styles.container}>
					<Grid container>
						{Object.keys(legendsImg).map((_legendName) => {
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
										className={styles.item}
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
