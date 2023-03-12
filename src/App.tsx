import React from "react";
import { ThemeProvider } from "styled-components";
import { BoxJogo } from "./components/BoxJogo";
import { GlobalStyle } from "./GlobalStyle";
import { defaultTheme } from "./themes/default";
function App() {
	return (
		<>
			<ThemeProvider theme={defaultTheme}>
				<div className="principalBox">
					<BoxJogo />
					<GlobalStyle />
				</div>
			</ThemeProvider>
		</>
	);
}

export default App;
