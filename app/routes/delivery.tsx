import { useEffect } from "react";

export default function Delivery() {
	useEffect(() => {
		location.href = "https://parkchoppsobral.goomer.app/menu";
	}, []);

	return (
		<div className="grid w-screen text-center h-screen place-content-center p-8 text-sobral bg-iara">
			<div className="mb-8">
				Estamos te levando <br /> para o nosso{" "}
				<strong>DELIVERY...</strong>
			</div>
			<img
				src="/loader.png"
				alt="Estamos te levando para o nosso Delivery..."
				className="animate-spin mx-auto w-12"
			/>
		</div>
	);
}
