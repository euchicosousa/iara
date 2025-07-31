import { useEffect } from "react";

export default function Cardapio() {
  useEffect(() => {
    location.href = "https://maps.app.goo.gl/uWG3PfgJgSBJdS9B9";
  }, []);

  return (
    <div className="grid w-screen text-center h-screen place-content-center p-8 text-white bg-iara">
      <div className="mb-8">
        Estamos te levando <br /> para a nossa <strong>LOCALIZAÇÃO.</strong>
      </div>
    </div>
  );
}
