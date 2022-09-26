import { useState } from "react";
import {
	Avatar,
	Box,
	Button,
	Card,
	CardContent,
	CardHeader,
	Divider,
	Grid,
	Typography,
	TextField,
} from "@mui/material";

/*Mock data for testing and showcase purposes only*/
const user = {
	avatar:
		"https://cdnb.artstation.com/p/assets/images/images/024/538/827/original/pixel-jeff-clipa-s.gif?1582740711",
	userName: "SalkoBrat",
	email: "test@test.io",
	password: "password",
	discordId: "465330185709944844",
	discordUsername: "SalkoBrat#8224",
	role: "Admin",
};

//TODO: Refactor the component to avoid DRY code
const AccountComp = () => {
	const [values, setValues] = useState({
		password: user.password,
	});

	const handleChange = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<Card
			sx={{
				background: "rgba(135, 119, 127, 0.15)",
				mixBlendMode: "darken, luminosity",
				borderRadius: 3,
			}}>
			<CardHeader title='Account' titleTypographyProps={{ variant: "h3" }} />
			<Divider />
			<CardContent>
				<Grid container  flexDirection='column'>
					<Grid item xs={12} flexDirection='column'>
						<Grid item>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									flexDirection: "column",
								}}>
								<Avatar
									src={user.avatar}
									sx={{
										height: 150,
										width: 150,
									}}
								/>
								<Typography
									color='textPrimary'
									gutterBottom
									variant='h3'
									sx={{ marginTop: "3vh" }}>
									{user.userName}
								</Typography>
							</Box>
						</Grid>
					</Grid>
					<Grid container marginTop='2vh'>
						<Grid item xs={12} sm={5} marginTop='2vh'>
							<TextField
								fullWidth
								id='emailInput'
								label='Email Address'
								name='email'
								disabled
								defaultValue={user.email}
							/>
						</Grid>
						<Grid item sm={2} marginTop='2vh'></Grid>
						<Grid item xs={12} sm={5} marginTop='2vh'>
							<TextField
								fullWidth
								label='Password'
								id='passwordInput'
								disabled
								name='password'
								onChange={handleChange}
								type='password'
								value={values.password}
								variant='outlined'
							/>
						</Grid>
						<Grid item xs={12} sm={5} marginTop='2.5vh'>
							<TextField
								fullWidth
								id='discordUsernameInput'
								label='Discord Username'
								name='discordUsername'
								disabled={true}
								defaultValue={user.discordUsername}
							/>
						</Grid>
						<Grid item sm={2} marginTop='2vh'></Grid>
						<Grid item xs={12} sm={5} marginTop='2.5vh'>
							<TextField
								fullWidth
								id='discordIdInput'
								label='Discord ID'
								name='discordId'
								disabled={true}
								defaultValue={user.discordId}
							/>
						</Grid>
					</Grid>
					<Divider sx={{ marginTop: "20px" }} />
					<Button sx={{ marginTop: "20px", color: "rgb(191, 199, 213)" }}>
						Update Information
					</Button>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default AccountComp;
