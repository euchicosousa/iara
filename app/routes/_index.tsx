import { Link } from "@remix-run/react";
import { MetaFunction } from "@vercel/remix";

export const meta: MetaFunction = () => {
	return [
		{ title: "Dra. Iara Tomaz - Ginecologista e Obstetra" },
		{
			name: "description",
			content:
				"Médica ginecologista e obstetra em Sobral e região norte. Atendimento humanizado e personalizado.",
		},
	];
};

export default function Index() {
	return (
		<div className="w-full h-screen grid place-content-center bg-iara">
			<div className="p-8 rounded-2xl mx-auto flex flex-col justify-center items-center gap-4 border-4">
				<div className="rounded-full overflow-hidden size-48 -mt-32 border-4 border-white">
					<img src="./iara.jpg" alt="" />
				</div>
				{/* link */}
				<div className="flex flex-col mt-8 gap-2 mx-auto w-full">
					<Link
						to={encodeURI(
							"https://wa.me/5588981563429?text=Olá, gostaria de agendar uma consulta com a Dra. Iara Tomaz."
						)}
						target="_blank"
						rel="noreferrer"
						className="link"
					>
						<span>Vila Clinic </span>
						<span className="uppercase text-sm tracking-wider">
							Sobral
						</span>
					</Link>
					<Link
						to={encodeURI(
							"https://wa.me/5588997925279?text=Olá, gostaria de agendar uma consulta com a Dra. Iara Tomaz."
						)}
						target="_blank"
						rel="noreferrer"
						className="link"
					>
						<span>SmartMed </span>
						<span className="uppercase text-sm tracking-wider">
							Massapê
						</span>
					</Link>
					<Link
						to={encodeURI(
							"https://wa.me/5588996555900?text=Olá, gostaria de agendar uma consulta com a Dra. Iara Tomaz."
						)}
						target="_blank"
						rel="noreferrer"
						className="link"
					>
						<span>Laboclisa</span>
						<span className="uppercase text-sm tracking-wider">
							Santana
						</span>
					</Link>
				</div>
				<img src="./logo.svg" alt="" className="h-16 mt-12" />
				{/* Social */}

				{/* Copyrights */}
				{/* <div className="text-xs opacity-50 pb-8  text-center">
					© {new Date().getFullYear()} PARK - Sua aventura culinária
					em Sobral
				</div> */}
			</div>
		</div>
	);
}
