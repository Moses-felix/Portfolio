import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            A propos
          </p>
        </div>

        <p className="text-xl mt-5">
        Je suis Data analyst, travaillant à la fois en programmation backend et frontend. 
        J'ai hâte d'améliorer mes compétences et d'apprendre de nouvelles technologies. Je suis ouvert à apprendre et à 
        travailler avec n'importe quelle technologie dans le secteur de la data.</p>

        <br />

        <p className="text-xl">
        J'aime coder les choses à partir de zéro et j'aime l'idée de donner vie aux pensées. Contactez-moi pour réaliser votre projet.<br /> <br />
        J'apprécie les conceptions minimalistes, l'image de marque réfléchie du contenu et l'expérience client. Découvrons ensemble comment nous pouvons mieux convertir votre projet !<br /> <br />
        J'aime créer ou reconcevoir une identité distincte pour un produit ou un service, obtenir plus de trafic à partir des moteurs de recherche et des plateformes sociales.
        </p>
      </div>
    </div>
  );
};

export default About;
