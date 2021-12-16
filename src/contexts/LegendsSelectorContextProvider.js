import PropTypes from "prop-types";
import * as React from "react";
import legendsImg from "../constants/legendsImg";
import { timeOut, getRandomInt } from "../utils";
import { useOptions } from "./OptionsContextProvider";

const LegendsSelectorContext = React.createContext();

const LegendsSelectorContextProvider = ({ children }) => {
	const { isSolo } = useOptions();

	const [legendSoloSelected, setLegendSoloSelected] = React.useState();
	const [legendsSquadSelected, setLegendsSquadSelected] = React.useState([]);
	const [isBeingSelected, setIsBeingSelected] = React.useState(false);

	React.useEffect(() => {
		setLegendSoloSelected();
		setLegendsSquadSelected([]);
	}, [isSolo]);

	const selectRandomlySoloLegend = async () => {
		if (!isBeingSelected) {
			setIsBeingSelected(true);
			let i = 0;
			for (i = 0; i < 20; i++) {
				const idx = getRandomInt(Object.keys(legendsImg).length);
				setLegendSoloSelected(Object.keys(legendsImg)[idx]);
				await timeOut(400 - i * 20);
			}
			setIsBeingSelected(false);
		}
	};

	const getUniqueIndex = (max, prevInx1, prevIdx2) => {
		let i = 0;
		let result = 0;
		for (i = 0; i < max; i++) {
			result = getRandomInt(max);
			if (result !== prevIdx2 && result !== prevInx1) {
				return result;
			}
		}
	};

	const selectRandomlySquadLegend = async () => {
		if (!isBeingSelected) {
			setIsBeingSelected(true);
			let i = 0;
			for (i = 0; i < 20; i++) {
				const firstIdx = getUniqueIndex(Object.keys(legendsImg).length, -1, -1);
				const secondIdx = getUniqueIndex(
					Object.keys(legendsImg).length,
					firstIdx,
					-1
				);
				const thirdIdx = getUniqueIndex(
					Object.keys(legendsImg).length,
					firstIdx,
					secondIdx
				);
				setLegendsSquadSelected([
					Object.keys(legendsImg)[firstIdx],
					Object.keys(legendsImg)[secondIdx],
					Object.keys(legendsImg)[thirdIdx],
				]);
				await timeOut(400 - i * 20);
			}
			setIsBeingSelected(false);
		}
	};

	return (
		<LegendsSelectorContext.Provider
			value={{
				legendSoloSelected,
				legendsSquadSelected,
				isBeingSelected,
				selectRandomlySoloLegend,
				selectRandomlySquadLegend,
			}}
		>
			{children}
		</LegendsSelectorContext.Provider>
	);
};

const useLegendsSelector = () => React.useContext(LegendsSelectorContext);
export { useLegendsSelector };

LegendsSelectorContextProvider.propTypes = {
	children: PropTypes.object.isRequired,
};

export default LegendsSelectorContextProvider;
