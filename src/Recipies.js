import { Text, Flex, Card, Container } from "@mantine/core";

function Recipies() {
	return (
		<Card bg="red.4" shadow="xl" p="lg" radius="md" withBorder>
			<Text fw={800} fs={32}>
				{" "}
				Welcome to Recipies Page
			</Text>
		</Card>
	);
}

export default Recipies;
