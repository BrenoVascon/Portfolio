"use client";

import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Estado para verificar se a página foi rolada
  const modalRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(true);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Ativa o fundo quando rolar mais de 50px
      } else {
        setIsScrolled(false); // Desativa o fundo quando voltar para o topo
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpeza do evento ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      setTimeout(() => {
        setIsModalVisible(false);
      }, 500); // Delay para esconder o modal após a animação de fechamento
    }
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between pt-1 px-4 lg:pr-12 xl:pr-36 xl:pl-48 xl2:pl-60 text-primary transition-all duration-300">
        <a
          href="#home"
          className="font-bold text-3xl justify-center items-center flex"
        >
          <span className="text-secondary mr-1"> &lt;/&gt;</span>
          <span className="text-secondary font-semibold tracking-normal">
            L
          </span>
          ima
        </a>

        <button
          onClick={handleMenuToggle}
          className="md:hidden text-black focus:outline-none"
        >
          ☰
        </button>

        <ul className="hidden md:flex justify-center space-x-9 p-4 font-bold">
          <li>
            <a href="#" className="text-black hover:text-primary">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-black hover:text-primary">
              Sobre Mim
            </a>
          </li>
          <li>
            <a href="#projects" className="text-black hover:text-primary">
              Projetos
            </a>
          </li>
          <li>
            <a href="#skills" className="text-black hover:text-primary">
              Habilidades
            </a>
          </li>
        </ul>

        {isModalVisible && (
          <div
            ref={modalRef}
            className={`fixed inset-0 bg-white flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
              isMenuOpen
                ? "opacity-100 translate-y-0" // Quando o menu está aberto
                : "opacity-0 translate-y-full" // Quando o menu está fechado
            }`}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-5 right-5 text-3xl text-primary font-bold"
            >
              &times;
            </button>
            <ul className="flex flex-col space-y-6 font-bold text-center text-lg">
              <li>
                <a
                  href="#home"
                  className="text-black hover:text-primary"
                  onClick={handleCloseModal}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-black hover:text-primary"
                  onClick={handleCloseModal}
                >
                  Sobre Mim
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-black hover:text-primary"
                  onClick={handleCloseModal}
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-black hover:text-primary"
                  onClick={handleCloseModal}
                >
                  Habilidades
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
