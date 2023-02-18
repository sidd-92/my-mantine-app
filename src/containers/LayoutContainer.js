import { useEffect, useState } from "react";
import { Outlet, useNavigate, useMatch } from "react-router-dom";
import { IconDashboard, IconChevronRight, IconNotes, IconLogout } from "@tabler/icons-react";
import { AppShell, Navbar, Header, Title, NavLink, Stack, MediaQuery, Burger, useMantineTheme } from "@mantine/core";

function AppShellDemo(props) {
	const theme = useMantineTheme();
	return (
		<AppShell
			styles={{
				main: {
					background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
				},
			}}
			navbarOffsetBreakpoint="sm"
			navbar={props.navbar}
			header={props.header}
		>
			{props.children}
		</AppShell>
	);
}

function LayoutContainer() {
	const navigate = useNavigate();
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);
	const match = useMatch("*");
	const [loggedIn, setloggedIn] = useState(false);
	useEffect(() => {
		if (localStorage.getItem("userInfo") && JSON.parse(localStorage.getItem("userInfo")).token) {
			setloggedIn(true);
		} else {
			setloggedIn(false);
			navigate("/login", { replace: true });
		}
	}, []);
	return (
		<AppShellDemo
			navbar={
				<Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 380, xl: 400 }}>
					<Stack spacing={"xl"}>
						<NavLink
							label="Dashboard"
							color="folly-pink.5"
							onClick={() => navigate("/", { replace: true })}
							icon={<IconDashboard size={22} />}
							description="Know your dishes and recipies"
							rightSection={<IconChevronRight size={12} stroke={1.5} />}
							variant="filled"
							active={match.pathname === "/"}
						/>
						<NavLink
							label="Recipies"
							color="folly-pink.5"
							onClick={() => navigate("/recipies", { replace: true })}
							icon={<IconNotes size={22} />}
							description="What am I going to cook today ?"
							rightSection={<IconChevronRight size={12} stroke={1.5} />}
							variant="filled"
							active={match.pathname === "/recipies"}
						/>
						<NavLink
							onClick={() => {
								localStorage.clear();
								navigate("/login", { replace: true });
							}}
							label="Logout"
							active
							color="red"
							icon={<IconLogout size={22} />}
							description="I'm done here, let's go."
							variant="subtle"
						/>
					</Stack>
				</Navbar>
			}
			header={
				<Header height={{ base: 50, md: 50, xl: 70 }} p="md">
					<div style={{ display: "flex", alignItems: "center", height: "100%" }}>
						<MediaQuery largerThan="sm" styles={{ display: "none" }}>
							<Burger
								opened={opened}
								onClick={() => setOpened((o) => !o)}
								size="sm"
								color={theme.colors.gray[6]}
								mr="xl"
							/>
						</MediaQuery>
						<MediaQuery smallerThan="md" styles={{ display: "none" }}>
							<Title
								variant="gradient"
								gradient={{ from: "lime.7", to: "green.9", deg: 45 }}
								order={1}
								underline
							>
								Veggies & Beyond
							</Title>
						</MediaQuery>
						<MediaQuery largerThan="md" styles={{ display: "none" }}>
							<Title order={4} underline color="green.8">
								Veggies & Beyond
							</Title>
						</MediaQuery>
					</div>
				</Header>
			}
		>
			<Outlet />
		</AppShellDemo>
	);
}

export default LayoutContainer;
