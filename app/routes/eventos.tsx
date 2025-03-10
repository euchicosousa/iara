import { useEffect } from "react";

export default function Eventos() {
	useEffect(() => {
		location.href =
			"https://wa.me/558821440310?text=Quero realizar um evento no PARK.";
	}, []);

	return (
		<div className="grid w-screen text-center h-screen place-content-center p-8 text-sobral bg-iara">
			<div className="mb-8">
				Estamos te levando <br /> para o nosso WHATSAPP...
			</div>
			<img
				src="/loader.png"
				alt="Estamos te levando para o nosso WHATSAPP..."
				className="animate-spin mx-auto w-12"
			/>
		</div>
	);
}
