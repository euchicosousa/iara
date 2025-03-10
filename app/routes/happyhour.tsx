import { useEffect } from "react";

export default function HappyHour() {
	useEffect(() => {
		location.href =
			"https://parkchoppsobral.goomer.app/menu?hash=2eNZw#1498899";
	}, []);

	return (
		<div className="grid w-screen text-center h-screen place-content-center p-8 text-sobral bg-iara">
			<div className="mb-8">
				Estamos te levando <br /> para o nosso{" "}
				<strong>CARDÁPIO...</strong>
			</div>
			<img
				src="/loader.png"
				alt="Estamos te levando para o nosso cardápio..."
				className="animate-spin mx-auto w-12"
			/>
		</div>
	);
}
