import { useEffect } from "react";

export default function Cardapio() {
  useEffect(() => {
    location.href =
      "https://www.google.com/search?q=Dra+Iara+Tomaz#lrd=0x7eac738022b00f5:0xb962a2823b8b04bb,3";
  }, []);

  return (
    <div className="grid w-screen text-center h-screen place-content-center p-8 text-white bg-iara">
      <div className="mb-8">
        Estamos te levando <br /> para a nossa <strong>AVALIAÇÃO.</strong>
      </div>
    </div>
  );
}
