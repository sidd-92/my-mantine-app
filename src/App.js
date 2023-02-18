import { Button, Card, Container, Flex, Text, TextInput, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import LayoutContainer from "./containers/LayoutContainer";
import Dashboard from "./Dashboard";
import Recipies from "./Recipies";
import AuthService from "./services/AuthService";
import { Notification } from "@mantine/core";

function Home() {
	const navigate = useNavigate();
	const largeScreen = useMediaQuery("(min-width: 1000px)");
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [username, setUsername] = useState("");
	const [error, setError] = useState(false);
	const [password, setPassword] = useState("");
	const loginHandler = async () => {
		if (username.length > 0 && password.length > 0) {
			setError(false);
			let userData = await AuthService.login({
				email: username,
				password: password,
			}).catch((err) => {
				console.log("SOME ERROR", err);
				setError(true);
			});
			if (userData.data && userData.data.token) {
				localStorage.setItem("userInfo", JSON.stringify(userData.data));
				navigate("/", { replace: true });
			}
		}
	};

	return (
		<Container sx={{ height: "100vh" }} size="sm">
			<Flex sx={{ height: "100%" }} gap="xl" justify="center" align="center" direction="column" wrap="nowrap">
				<Card
					sx={{ borderWidth: "2px", borderColor: "tomato" }}
					bg="yellow.3"
					shadow="xl"
					p="lg"
					radius="md"
					withBorder
				>
					<Flex gap="xl" justify="center" align="center" direction="column" wrap="nowrap">
						<Title ta={"center"} size={largeScreen ? 46 : 32} weight={900}>
							Welcome To Veggies & Beyond
						</Title>
						{error && (
							<Notification disallowClose={true} color={"red"} title="Error">
								Something Went Wrong. Please Contact Support.
							</Notification>
						)}

						<Text
							sx={{ cursor: "pointer" }}
							variant="gradient"
							gradient={{ from: "folly-pink.6", to: "violet.8", deg: 45 }}
							ta="center"
							fz={22}
							fw={600}
						>
							Admin Login
						</Text>

						<TextInput
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							style={{ width: "100%" }}
							placeholder="Your username"
							size={largeScreen ? "xl" : "md"}
							variant="filled"
							label="Username"
							withAsterisk
						/>

						<TextInput
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							style={{ width: "100%" }}
							type={passwordVisible ? "text" : "password"}
							placeholder="Your password"
							rightSection={
								<Flex
									sx={{ marginRight: "10px" }}
									justify="center"
									align="center"
									onClick={() => setPasswordVisible(!passwordVisible)}
								>
									{passwordVisible ? <IconEye size={32} /> : <IconEyeOff size={32} />}
								</Flex>
							}
							size={largeScreen ? "xl" : "md"}
							variant="filled"
							label="Password"
							withAsterisk
						/>

						<Button onClick={loginHandler} sx={{ marginTop: "12px" }} size="xl" color="folly-pink.6">
							Login
						</Button>
					</Flex>
				</Card>
			</Flex>
		</Container>
	);
}
function NoMatch() {
	return (
		<Text color={"red.7"} size={48}>
			404 Not Found
		</Text>
	);
}

export default function App() {
	return (
		<Routes>
			<Route path="/login" element={<Home />} />
			<Route path="/" element={<LayoutContainer />}>
				<Route index element={<Dashboard />} />
				<Route path="/recipies" element={<Recipies />} />
				<Route path="*" element={<NoMatch />} />
			</Route>
		</Routes>
	);
}
