import PropTypes from "prop-types";
import * as React from "react";

const OptionsContext = React.createContext();

const OptionsContextProvider = ({ children }) => {
	const [isDisplay, setIsDisplay] = React.useState(false);
	const [isSolo, setIsSolo] = React.useState(true);
	const [banLegends, setBanLegends] = React.useState([]);

	const updateIsDisplay = () => setIsDisplay((e) => !e);
	const updateIsSolo = () => setIsSolo((e) => !e);
	const updateBanLegends = (_legend) =>
		setBanLegends((_oldBanLegends) => {
			if (_oldBanLegends.includes(_legend)) {
				return _oldBanLegends.filter((l) => l !== _legend);
			} else {
				return [..._oldBanLegends, _legend];
			}
		});

	return (
		<OptionsContext.Provider
			value={{
				isDisplay,
				isSolo,
				banLegends,
				updateIsDisplay,
				updateIsSolo,
				updateBanLegends,
			}}
		>
			{children}
		</OptionsContext.Provider>
	);
};

const useOptions = () => React.useContext(OptionsContext);
export { useOptions };

OptionsContextProvider.propTypes = {
	children: PropTypes.object.isRequired,
};

export default OptionsContextProvider;
