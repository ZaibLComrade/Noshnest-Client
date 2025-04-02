import {useContext} from "react";
import { BrandsContext } from "../providers/BrandsProvider";

export default function useBrands() {
	const brands = useContext(BrandsContext);
	return brands;
}
