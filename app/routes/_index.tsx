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
  const links = [
    {
      title: "Vila Clinic",
      url: "https://wa.me/5588981563429?text=Olá, gostaria de agendar uma consulta com a Dra. Iara Tomaz.",
      location: "Sobral",
    },
    {
      title: "SmartMed",
      url: "https://wa.me/5588992499339?text=Olá, gostaria de agendar uma consulta com a Dra. Iara Tomaz.",
      location: "Massapê",
    },
    {
      title: "Otoneuro",
      url: "https://wa.me/5588988040202?text=Olá, gostaria de agendar uma consulta com a Dra. Iara Tomaz.",
      location: "Itapipoca",
    },
    {
      title: "Clínica Vita",
      url: "https://wa.me/5588992763022?text=Olá, gostaria de agendar uma consulta com a Dra. Iara Tomaz.",
      location: "Camocim",
    },
  ];

  return (
    <div className="w-full h-screen grid place-content-center bg-iara">
      <div className="p-8 rounded-2xl mx-auto flex flex-col justify-center items-center gap-4 border-4 border-white">
        <div className="rounded-full overflow-hidden size-48 -mt-32 border-4 border-white">
          <img src="./iara.jpg" alt="" />
        </div>
        {/* link */}
        <div className="flex flex-col mt-8 gap-2 mx-auto w-full">
          {links.map((link, i) => {
            return (
              <Link
                key={i}
                to={encodeURI(link.url)}
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                <span>{link.title}</span>
                <span className="uppercase text-sm tracking-wider">
                  {link.location}
                </span>
              </Link>
            );
          })}
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
