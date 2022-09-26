import { useState, useEffect } from "react";
import _debounce from "lodash.debounce";
import { isMobile } from "react-device-detect";
import PropTypes from "prop-types";
import { AppBar, Box, Grid, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../Logo";

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {
	const [width, setWidth] = useState([window.innerWidth]);

	useEffect(() => {
		const handleResize = _debounce(() => setWidth(window.innerWidth), 10);
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<AppBar
			sx={{
				width: isMobile || width < 1200 ? "100%" : "85vw",
				display: isMobile || width < 1200 ? "block" : "none",
			}}
			elevation={0}
			{...rest}>
			<Toolbar
				sx={{
					height: 80,
					background: `#1d1f2b`,
					paddingX: "24px",
					paddingTop: "12px",
				}}>
				<Box sx={{ flexGrow: 1, display: { lg: "block" } }} />
				<Box
					sx={{
						display: { lg: "none", xs: "block" },
					}}>
					<Box
						sx={{
							display: "flex",
							maxHeight: 80,
						}}>
						<Grid container spacing={8} width={"100vw"} paddingLeft={"0px"}>
							<Grid
								item
								xl={6}
								lg={6}
								md={6}
								sm={6}
								xs={6}
								display='flex'
								justifyContent='flex-start'>
								<Logo />
							</Grid>
							<Grid
								item
								xl={6}
								lg={6}
								md={6}
								sm={6}
								xs={6}
								display='flex'
								justifyContent='flex-end'>
								<IconButton color='inherit' onClick={onMobileNavOpen}>
									<MenuIcon />
								</IconButton>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

DashboardNavbar.propTypes = {
	onMobileNavOpen: PropTypes.func,
};

export default DashboardNavbar;
