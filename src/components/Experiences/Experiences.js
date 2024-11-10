"use client";
import React from "react";
import Fivebot from "../../../public/fivebot.svg";
import Weber from "../../../public/weber.svg";

export default function Experience() {
  return (
    <section className="w-full px-4 py-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary">
          Experiências <span className="text-secondary">Profissionais</span>
        </h2>
      </div>

      <div className="flex flex-col items-center space-y-8">
        <div className="flex items-center bg-gray-100 p-6 rounded-lg shadow-lg max-w-md xl:max-w-lg w-full">
          <Fivebot className="w-12 h-12 mr-4" />
          <div>
            <p className="font-bold text-gray-700">2024-2024</p>
            <p className="text-lg text-primary font-semibold">
              Desenvolvedor front-end Júnior -{" "}
              <span className="text-primary">FiveBot</span>
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Tecnologias utilizadas: TypeScript, JavaScript, React.js,
              Styled-Components, GitHub e Git.
            </p>
          </div>
        </div>
        <div className="text-center mt-16 mb-8">
          <h2 className="text-4xl font-bold text-primary">
            Voluntário <span className="text-secondary">OpenSource</span>
          </h2>
        </div>

        <div className="flex items-center bg-gray-100 p-6 rounded-lg shadow-lg max-w-md xl:max-w-lg w-full">
          <Weber className="w-12 h-12 mr-4" />{" "}
          <div>
            <p className="font-bold text-gray-700">2023-2024</p>
            <p className="text-lg text-primary font-semibold">
              Desenvolvedor front-end -{" "}
              <span className="text-primary">Weber Technologies</span>
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Tecnologias: Tailwind CSS, TypeScript, Git, JavaScript, HTML,
              React.js, GitHub, CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
