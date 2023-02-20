import { Card, Text } from "@mantine/core";

function Dashboard() {
	return (
		<Card
			sx={{ borderWidth: "2px", borderColor: "tomato" }}
			bg="yellow.3"
			shadow="xl"
			p="lg"
			radius="md"
			withBorder
		>
			<Text fw={800} fs={32}>
				{" "}
				Welcome to Veggies & Beyond
			</Text>
		</Card>
	);
}

export default Dashboard;
