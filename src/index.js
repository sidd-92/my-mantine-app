import { BackgroundImage, MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<MantineProvider
				theme={{
					breakpoints: {
						xs: 360,
						sm: 500,
						md: 1000,
						lg: 1200,
						xl: 1400,
					},
					fontFamily: '"Work Sans", sans-serif',
					headings: {
						fontFamily: '"Work Sans", sans-serif',
					},
					colors: {
						"folly-pink": [
							"#EADADF",
							"#DEBDC8",
							"#D79FB1",
							"#D57E9B",
							"#DB5A84",
							"#E8306D",
							"#FF0054",
							"#CF1753",
							"#A92551",
							"#8D2D4D",
							"#763148",
							"#643343",
							"#56323E",
						],
						"grape-violet": [
							"#AE96BE",
							"#A17DB8",
							"#9562B7",
							"#8C45BB",
							"#8231B8",
							"#791DB6",
							"#7209B7",
							"#631895",
							"#57217B",
							"#4D2666",
							"#442856",
							"#3C284A",
							"#36273F",
						],
						"zaffre-blue": [
							"#9284B2",
							"#806DAD",
							"#6F53AD",
							"#6041A8",
							"#532FA4",
							"#461EA3",
							"#3A0CA3",
							"#3A1885",
							"#38206E",
							"#35245C",
							"#31254E",
							"#2E2542",
							"#2A2439",
						],
						"neon-blue": [
							"#F3F4F8",
							"#D4D8EA",
							"#B5BDE1",
							"#93A0DE",
							"#6E82E2",
							"#4361EE",
							"#3B56D8",
							"#3A51BD",
							"#40509F",
							"#424E86",
							"#414A73",
							"#3F4663",
						],
						"vivid-sky-blue": [
							"#FEFFFF",
							"#DFECF0",
							"#BFDCE6",
							"#9DD1E2",
							"#77CBE5",
							"#4CC9F0",
							"#42B6DA",
							"#3BA4C5",
							"#418DA5",
							"#447A8C",
							"#436B77",
							"#415E67",
						],
						"amber-yellow": [
							"#EAE6DA",
							"#DED5BD",
							"#D7C89F",
							"#D5BF7E",
							"#DBB95A",
							"#E8B930",
							"#FFBD00",
							"#CF9F17",
							"#A98725",
							"#8D742D",
							"#766431",
							"#645733",
							"#564C32",
						],
						"jet-black": [
							"#5E5E5E",
							"#555555",
							"#4E4E4E",
							"#474747",
							"#404040",
							"#3A3A3A",
							"#353535",
							"#303030",
							"#2B2B2B",
							"#272727",
							"#232323",
							"#1F1F1F",
							"#1C1C1C",
						],
						"alice-blue": ["#EDF6F9", "#CCE2E9", "#B2CED7", "#9DBBC5", "#8CA9B3", "#7D99A2", "#718992"],
						"light-green": [
							"#82FF9B",
							"#6EFF8B",
							"#5BFF7C",
							"#49FF6D",
							"#41FF66",
							"#59F873",
							"#69DB7C",
							"#40F75F",
							"#04FF34",
							"#00FF20",
							"#00FF14",
							"#00FF09",
							"#00FF00",
						],
					},
				}}
				withGlobalStyles
				withNormalizeCSS
			>
				<BackgroundImage
					src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
					radius="sm"
					sx={{
						backgroundColor: "#FFFFFF",
						backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='100%25' height='100%25'%3E%3Cdefs%3E%3Cpattern id='p' width='100' height='100' patternUnits='userSpaceOnUse' patternTransform='rotate(188) scale(0.63)'%3E%3Cpath id='a' data-color='fill' fill='none' stroke='%23E8306D' stroke-width='0.8' d='M-25 20h50L0-20z'%3E%3C/path%3E%3Cuse xlink:href='%23a' x='100'%3E%3C/use%3E%3Cuse xlink:href='%23a' y='100'%3E%3C/use%3E%3Cuse xlink:href='%23a' x='100' y='100'%3E%3C/use%3E%3Cuse xlink:href='%23a' x='50' y='50'%3E%3C/use%3E%3Cuse xlink:href='%23a' x='50' y='150'%3E%3C/use%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23p)' width='100%25' height='100%25'%3E%3C/rect%3E%3C/svg%3E")`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}
				>
					<App />
				</BackgroundImage>
			</MantineProvider>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
