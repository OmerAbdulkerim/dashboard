import { useState } from "react";
import {
	Card,
	CardContent,
	CardActions,
	Switch,
	Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import mockLogs from "../../_mock_data_/commands";


const Command = (command) => {
	const [checked, setChecked] = useState(command.status);

	const handleChange = (event) => {
		/*This particular part of code is for showcase purposes only.
		In production the command object will be loaded from and updated in a database
		so it's properties will persist after update and will be stored permanently as opposed
		to being only runtime variables.
		*/

		mockLogs.forEach(el => {
			if (el.name === command.name) {
				el.status = event.target.checked;
			}
		})
		setChecked(event.target.checked);
	};

	return (
		<Card
			sx={{
				background: "rgba(135, 119, 127, 0.15)",
				mixBlendMode: "darken, luminosity",
				borderRadius: 3,
				backdropFilter: "blur(10px)",
			}}>
			<CardContent>
				<Typography>{command.name}</Typography>
				<Switch
					checked={checked}
					onChange={handleChange}
				/>
				<Typography
					sx={{
						color: "text.secondary",
					}}>
					{command.description}
				</Typography>
			</CardContent>
			<CardActions>
				<IconButton aria-label='settings' sx={{ color: "white" }}>
					<SettingsIcon></SettingsIcon>
				</IconButton>
				<IconButton aria-label='help' style={{ color: "white" }}>
					<HelpIcon></HelpIcon>
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default Command;
