import { Center } from "../layout/Center.jsx";
import { MainLayout } from "../layout/MainLayout.jsx";

function MainMenu() {
	return (
		<MainLayout>
			<Center>
				<div>
					<h1>Hello Puppeteer.</h1>
					<h2>Here are a few navigation links to our test pages</h2>
					<ul>
						<li>
							<a href="/waitfor">Wait for className</a>
						</li>
					</ul>
				</div>
			</Center>
		</MainLayout>
	);
}

export default MainMenu;
