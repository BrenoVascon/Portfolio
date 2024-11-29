import { FaLocationArrow } from "react-icons/fa";

export default function Hero() {
  return (
    <div
      id="hero"
      className="flex flex-col gap-2 justify-center h-screen pb-[120px] items-start px-4 xl:px-[15%] transition-all duration-300"
    >
      <h1 className="text-5xl text-primary font-bold">
        Olá, <br /> eu sou o Breno!{" "}
      </h1>
      <h2 className="text-2xl items-start justify-start text-primary font-semibold">
        Desenvolvedor <span className="text-secondary">Front-End</span>
      </h2>
      <h3 className="text-lg text-primary">
        Buscando oportunidades de estágio com foco
        <br /> em desenvolvimento full-stack
      </h3>
      <div className="flex">
        <a
          href="https://api.whatsapp.com/send/?phone=5511974815802"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-secondary mt-4 text-white font-bold py-3 px-4 rounded-lg mr-6 transition-transform transform hover:scale-95">
            Fale comigo
          </button>
        </a>
      </div>
    </div>
  );
}
