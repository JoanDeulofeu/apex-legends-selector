import {
	Checkbox,
	ButtonBase,
	Collapse,
	FormControlLabel,
	Paper,
	Switch,
	Typography,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import React from "react";
import legendsImg from "../constants/legendsImg";
import { useOptions } from "../contexts/OptionsContextProvider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { capitalize } from "../utils";

const useStyles = makeStyles(() =>
	createStyles({
		paper: {
			display: "flex",
			flexDirection: "column",
			padding: 15,
			paddingLeft: 25,
			paddingRight: 25,
		},
		buttonGlobal: {
			width: "100%",
			marginBottom: "25px !important",
			display: "flex",
			justifyContent: "start !important",
		},
		buttonText: {
			width: "100%",
			display: "flex",
			justifyContent: "start !important",
		},
		divider: {
			width: "calc(100% - 30)",
			margin: 15,
			borderTop: "1px solid #C6D3E7",
		},
	})
);

const OptionsBar = () => {
	const styles = useStyles();
	const {
		isDisplay,
		updateIsDisplay,
		isSolo,
		updateIsSolo,
		banLegends,
		updateBanLegends,
	} = useOptions();

	return (
		<ButtonBase
			className={styles.buttonGlobal}
			onClick={() => {
				if (!isDisplay) updateIsDisplay();
			}}
			disableTouchRipple
		>
			<Paper className={styles.paper}>
				<ButtonBase
					className={styles.buttonText}
					onClick={() => {
						if (isDisplay) updateIsDisplay();
					}}
					disableTouchRipple
				>
					{isDisplay ? (
						<KeyboardArrowUpIcon sx={{ color: "#C6D3E7" }} />
					) : (
						<KeyboardArrowDownIcon sx={{ color: "#C6D3E7" }} />
					)}
					<Typography variant="text">Options</Typography>
				</ButtonBase>
				<Collapse in={isDisplay}>
					<div className={styles.divider} />
					<FormControlLabel
						control={<Switch onChange={updateIsSolo} value={isSolo} />}
						label={
							<Typography variant="text">
								{isSolo ? "Solo" : "Squad"}
							</Typography>
						}
					/>
					<div>
						{Object.keys(legendsImg).map((_legendName) => {
							const isBan = banLegends.includes(_legendName);
							return (
								<FormControlLabel
									key={_legendName}
									control={
										<Checkbox
											checked={!isBan}
											onChange={() => updateBanLegends(_legendName)}
										/>
									}
									label={
										<Typography variant="text">
											{capitalize(_legendName)}
										</Typography>
									}
								/>
							);
						})}
					</div>
				</Collapse>
			</Paper>
		</ButtonBase>
	);
};

export default OptionsBar;
