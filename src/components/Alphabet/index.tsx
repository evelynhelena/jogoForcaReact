import React from "react";
import { GridContainer, GridItem } from "./style";

interface AlphabetProps {
    handleClickLatter: (value: string) => void;
    validClick: (value: string) => boolean;
    disabledEvent: boolean;
}
export function Alphabet({ handleClickLatter,validClick ,disabledEvent}: AlphabetProps) {

	return (
		<GridContainer>
			<GridItem onClick={() => handleClickLatter("A")} clicked={validClick("A")} disabled={disabledEvent}>A</GridItem>
			<GridItem onClick={() => handleClickLatter("B")} clicked={validClick("B")} disabled={disabledEvent}>B</GridItem>
			<GridItem onClick={() => handleClickLatter("C")} clicked={validClick("C")} disabled={disabledEvent}>C</GridItem>
			<GridItem onClick={() => handleClickLatter("D")} clicked={validClick("D")} disabled={disabledEvent}>D</GridItem>
			<GridItem onClick={() => handleClickLatter("E")} clicked={validClick("E")} disabled={disabledEvent}>E</GridItem>
			<GridItem onClick={() => handleClickLatter("F")} clicked={validClick("F")} disabled={disabledEvent}>F</GridItem>
			<GridItem onClick={() => handleClickLatter("G")} clicked={validClick("G")} disabled={disabledEvent}>G</GridItem>
			<GridItem onClick={() => handleClickLatter("H")} clicked={validClick("H")} disabled={disabledEvent}>H</GridItem>
			<GridItem onClick={() => handleClickLatter("I")} clicked={validClick("I")} disabled={disabledEvent}>I</GridItem>
			<GridItem onClick={() => handleClickLatter("J")} clicked={validClick("J")} disabled={disabledEvent}>J</GridItem>
			<GridItem onClick={() => handleClickLatter("K")} clicked={validClick("K")} disabled={disabledEvent}>K</GridItem>
			<GridItem onClick={() => handleClickLatter("L")} clicked={validClick("L")} disabled={disabledEvent}>L</GridItem>
			<GridItem onClick={() => handleClickLatter("M")} clicked={validClick("M")} disabled={disabledEvent}>M</GridItem>
			<GridItem onClick={() => handleClickLatter("N")} clicked={validClick("N")} disabled={disabledEvent}>N</GridItem>
			<GridItem onClick={() => handleClickLatter("O")} clicked={validClick("O")} disabled={disabledEvent}>O</GridItem>
			<GridItem onClick={() => handleClickLatter("P")} clicked={validClick("P")} disabled={disabledEvent}>P</GridItem>
			<GridItem onClick={() => handleClickLatter("Q")} clicked={validClick("Q")} disabled={disabledEvent}>Q</GridItem>
			<GridItem onClick={() => handleClickLatter("R")} clicked={validClick("R")} disabled={disabledEvent}>R</GridItem>
			<GridItem onClick={() => handleClickLatter("S")} clicked={validClick("S")} disabled={disabledEvent}>S</GridItem>
			<GridItem onClick={() => handleClickLatter("T")} clicked={validClick("T")} disabled={disabledEvent}>T</GridItem>
			<GridItem onClick={() => handleClickLatter("U")} clicked={validClick("U")} disabled={disabledEvent}>U</GridItem>
			<GridItem onClick={() => handleClickLatter("V")} clicked={validClick("V")} disabled={disabledEvent}>V</GridItem>
			<GridItem onClick={() => handleClickLatter("X")} clicked={validClick("X")} disabled={disabledEvent}>X</GridItem>
			<GridItem onClick={() => handleClickLatter("W")} clicked={validClick("W")} disabled={disabledEvent}>W</GridItem>
			<GridItem onClick={() => handleClickLatter("Y")} clicked={validClick("Y")} disabled={disabledEvent}>Y</GridItem>
			<GridItem onClick={() => handleClickLatter("Z")} clicked={validClick("Z")} disabled={disabledEvent}>Z</GridItem>
		</GridContainer>
	);
}