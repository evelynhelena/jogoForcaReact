import React, {useState } from "react";
import { BoxGame, ButtonStart, Container } from "./style";
import { Alphabet } from "../Alphabet";

interface WordsProp {
	word: string;
	clicked: boolean;
}

interface AllLatterClickedProps {
	word: string;
	error: boolean;
}

export function BoxJogo() {
	const [startGame, setStartGame] = useState(false);
	const [wordSelected, setWordSelected] = useState<WordsProp[]>([]);
	const [allLatterClickd, setAllLatterClickd] = useState<AllLatterClickedProps[]>([]);
	const [wordSortable, setWordSortable] = useState("");

	const validClick = (latter: string) => {
		return allLatterClickd.find(el => el.word === latter) ? true : false;
	};

	const disabledEvent = () => {
		const countError = allLatterClickd.filter(el => el.error);
		return countError.length >= 7;
	};



	const verificaEspaco = (value: string) => value.indexOf(" ") >= 0;

	const handleStartGame = async () => {
		setStartGame(true);
		await fetch("https://api.datamuse.com/words?ml=all&max=100").then((response): WordsProp[] => {
			return response.json() as unknown as WordsProp[];
		}).then(data => {
			const numberRange = parseInt(String(Math.random() * 100));
			const wordSortable = data[numberRange].word;
			const arrayWord = wordSortable.split("").map((latter) => {
				return { word: latter, clicked: false };
			});
			setWordSortable(wordSortable);
			console.log(wordSortable);
			setWordSelected(arrayWord);
		});
	};
	const handleClickLatter = (latterClicked: string) => {
		setWordSelected(wordSelected.map((el) => el.word === latterClicked.toLowerCase() ? { ...el, clicked: true } : el));
		const findWord = wordSelected.find(el => el.word === latterClicked.toLowerCase());
		setAllLatterClickd([...allLatterClickd, findWord ? { word: latterClicked, error: false} : { word: latterClicked, error: true}]);		
	};

	const gameAgain = () => {
		handleStartGame();
		setAllLatterClickd([]);
	};


	

	return (
		<Container>

			<BoxGame>
				{disabledEvent() ? (
					<>
						<h1>
							Game Over
						</h1>
						<h2>A palavra era: <strong>{wordSortable}</strong></h2>
						<ButtonStart onClick={gameAgain}>Jogar Novamente</ButtonStart>
					</>) : 
				
					!startGame ?
						<ButtonStart onClick={handleStartGame}>Start Game</ButtonStart> :
						(
							<>
								<h1>
								Jogo da Forca
								</h1>
								<div style={{ "fontSize": "50px" }}>
									{wordSelected.map((letter, index) => (
										<span key={index}>
											{
												verificaEspaco(letter.word) ? " - " : (letter.clicked ? letter.word : " _ ")
											}
										</span>
									))}
								</div>

								<Alphabet handleClickLatter={handleClickLatter} validClick={validClick} disabledEvent={disabledEvent} />
							</>
						)
				}

			</BoxGame>
		</Container>
	);
}