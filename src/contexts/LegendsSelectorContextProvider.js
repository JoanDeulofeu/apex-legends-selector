import PropTypes from "prop-types";
import * as React from "react";
import legendsImg from "../constants/legendsImg";
import { timeOut, getRandomInt } from "../utils";
import { useOptions } from "./OptionsContextProvider";

const LegendsSelectorContext = React.createContext();

const RANDOM_LOTTERY_COUNT = 20;

const LegendsSelectorContextProvider = ({ children }) => {
	const { isSolo, banLegends } = useOptions();

	const [legendSoloSelected, setLegendSoloSelected] = React.useState();
	const [legendsSquadSelected, setLegendsSquadSelected] = React.useState([]);
	const [isBeingSelected, setIsBeingSelected] = React.useState(false);
	const [legends, setLegends] = React.useState(Object.keys(legendsImg));

	React.useEffect(() => {
		setLegendSoloSelected();
		setLegendsSquadSelected([]);
	}, [isSolo, legends]);

	React.useEffect(() => {
		//Get legends that are not banned.
		setLegends(
			Object.keys(legendsImg).filter((_legend) => !banLegends.includes(_legend))
		);
	}, [banLegends]);

	const selectRandomlySoloLegend = async () => {
		if (!isBeingSelected) {
			setIsBeingSelected(true);
			let i = 0;
			for (i = 0; i < RANDOM_LOTTERY_COUNT; i++) {
				const idx = getRandomInt(legends.length);
				setLegendSoloSelected(legends[idx]);
				await timeOut(400 - i * RANDOM_LOTTERY_COUNT);
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
			for (i = 0; i < RANDOM_LOTTERY_COUNT; i++) {
				const firstIdx = getUniqueIndex(legends.length, -1, -1);
				const secondIdx = getUniqueIndex(legends.length, firstIdx, -1);
				const thirdIdx = getUniqueIndex(legends.length, firstIdx, secondIdx);
				setLegendsSquadSelected([
					legends[firstIdx],
					legends[secondIdx],
					legends[thirdIdx],
				]);
				await timeOut(400 - i * RANDOM_LOTTERY_COUNT);
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
				legends,
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
