"use client";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

// Dados dos projetos
const projects = [
  {
    title: "Projeto FullStack",
    image: "/full-stack.png",
    description: "Todo List com autenticação e banco de dados.",
    link: "https://github.com/BrenoVascon/Teste-Fullstack",
  },
  {
    title: "Anime Database",
    image: "/anime-database.png",
    description:
      "Este projeto permite que os usuários pesquisem informações detalhadas sobre animes, incluindo dados dos animes, personagens, trailers e fotos.",
    link: "https://anime-database-drab.vercel.app/",
  },
  {
    title: "Projeto Clone",
    image: "/Clone-site-pixelperfect.png",
    description: "Clone de site seguindo todos os pixels referente ao Figma.",
    link: "https://github.com/BrenoVascon/teste-front-end-jr",
  },
  {
    title: "Em breve...",
    description: "Em breve...",
  },
  {
    title: "Em breve...",
    description: "Em breve...",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-100 py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary">
          Últimos <span className="text-secondary">Projetos</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative w-[320px] h-[320px] group overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            {/* Se não houver imagem, aplicar o estilo cinza */}
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">
                  Em breve...
                </span>
              </div>
            )}

            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
              <h3 className="text-white text-2xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-200 mb-4">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-primary p-2 rounded-full hover:bg-secondary transition-colors duration-300"
                >
                  <FaExternalLinkAlt className="text-xl" />{" "}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
