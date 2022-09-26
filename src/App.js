import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { Global } from "@emotion/react";
import theme from "../src/theme";
import routes from "../src/routes";

/*
The reason why the Global component is so messy is because it was a last minute migration from 
createStyle by mui/styles to @emotion/react and I need more time to figure out how to make it pretty
*/
function App() {
	const routing = useRoutes(routes);
	return (
		<ThemeProvider theme={theme}>
			<Global
				styles={{
					"*": {
						boxSizing: "border-box",
						margin: 0,
						padding: 0,
					},
					html: {
						WebkitFontSmoothing: "antialiased",
						MozOsxFontSmoothing: "grayscale",
						height: "100%",
						width: "100%",
					},
					body: {
						backgroundColor: "#1e1f24",
						height: "100%",
						width: "100%",
					},
					a: {
						textDecoration: "none",
					},
					"#root": {
						height: "100%",
						width: "100%",
						"& label.Mui-disabled": {
							color: "#6b778c",
						},
						"& .MuiSwitch-switchBase.Mui-checked": {
							color: "#ef008e",
							"&:hover": {
								backgroundColor: "rgba(239, 0, 142, 0.1)",
							},
						},
						"& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
							backgroundColor: "#ef008e",
						},
					},
					input: {
						WebkitTextFillColor: "rgb(191, 199, 213) !important",
					},
				}}
			/>
			{routing}
		</ThemeProvider>
	);
}

export default App;
