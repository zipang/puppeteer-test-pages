import React, { useEffect, useState } from "react";
import { MainLayout } from "../../layout/MainLayout.jsx";
import { Center } from "../../layout/Center.jsx";
import { useQueryParameters } from "../../hooks/useQueryParameters.js";

const Countdown = ({ value }) => (
	<div className="flex items-center justify-center h-32 w-32 bg-gray-400 text-black text-6xl">
		{value}
	</div>
);

const InvisibleBox = () => <div className="h-32 w-32 bg-sky-50 animate-pulse"></div>;
const BlueBox = () => (
	<div id="blue-box" className="h-32 w-32 bg-sky-500 animate-spin ready"></div>
);

function WaitForPage() {
	const params = useQueryParameters();
	const { duration = 5, fail = false } = params;
	const [countdown, setCountdown] = useState(duration);

	const decreaseCountDown = () => {
		console.log(countdown);
		if (countdown === 1 && fail) {
			throw new Error(`You'll never see the magical blue box`);
		}
		if (countdown === 0) {
			return;
		}
		setCountdown(countdown - 1);
	};

	useEffect(() => {
		setTimeout(decreaseCountDown, 1000);
	}, [countdown]);

	useEffect(() => {
		console.log(
			`Page 'waitfor' received some query parameters`,
			JSON.stringify(params)
		);
	}, [params]);

	return (
		<MainLayout>
			<Center>
				<Countdown value={countdown} />
				<h1 className="my-16">
					{`${
						countdown > 0
							? "Waiting for the magical blue box to appear."
							: "Wow..."
					}`}
				</h1>
				{countdown === 0 ? <BlueBox /> : <InvisibleBox />}
			</Center>
		</MainLayout>
	);
}

export default WaitForPage;
