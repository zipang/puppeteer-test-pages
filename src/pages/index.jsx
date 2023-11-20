import { Link } from "react-router-dom";
import { Center } from "../layout/Center.jsx";
import { MainLayout } from "../layout/MainLayout.jsx";

function MainMenu() {
	return (
		<MainLayout>
			<Center>
				<section id="main-menu">
					<h1>Hello Puppeteer.</h1>
					<p>
						Here are a few navigation links to our test pages implementing
						different tests scenarios
					</p>
					<ul className="bg-blue-50 py-4 px-8 list-disc">
						<li>
							<Link
								className="underline text-sky-400 hover:bg-teal-100"
								to="/waitfor"
							>
								Wait for the Blue Box (will appear after 5secs)
							</Link>
						</li>
						<li>
							<Link
								className="underline text-sky-400 hover:bg-teal-100"
								to="/waitfor?fail=true"
							>
								Wait for the Blue Box (will not appear and throw after
								5secs)
							</Link>
						</li>
					</ul>
				</section>
			</Center>
		</MainLayout>
	);
}

export default MainMenu;
