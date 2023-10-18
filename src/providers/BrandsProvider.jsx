import { createContext, useState, useEffect } from "react";
import useServer from "../hooks/useServer";
import PropTypes from "prop-types";

export const BrandsContext = createContext();

export default function BrandsProvider({ children }) {
	const server = useServer();
	const [brands, setBrands] = useState([])
	useEffect(() => {
		fetch(`${server}/brands`)
			.then(response => response.json())
			.then(data => setBrands(data));
	}, [server])
	
	return <BrandsContext.Provider value={ brands }>
		{ children }
	</BrandsContext.Provider>
} 

BrandsProvider.propTypes = {
	children: PropTypes.node,
}
