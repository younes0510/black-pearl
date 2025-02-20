import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#1d232a]">
      <div className="relative">
        <img src="black.jpg" className="w-full h-[550px] object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-7xl font-bold">Black Pearl</h1>
          
        </div>
      </div>

      <div className="text-center text-white text-3xl py-10 font-bold">
        <h1 className="mb-10">NOTRE MENU</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 max-w-7xl mx-auto">
   <Link href={'/menu'}>   <div className="flex flex-col items-center cursor-pointer">
            <img
              src="appetizer.jpg"
              className="w-full h-[500px] object-cover"
              alt="Appetizer"
            />
            <h1 className="mt-4">Appetizer</h1>
          </div></Link>
        <Link href={'/menu'}>  <div className="flex flex-col items-center cursor-pointer">
            <img
              src="caviar.jpg"
              className="w-full h-[500px] object-cover"
              alt="Caviar"
            />
            <h1 className="mt-4">MAIN COURSE</h1>
          </div></Link>
         <Link href={'/menu'}> <div className="flex flex-col items-center cursor-pointer">
            <img
              src="dessert.jpg"
              className="w-full h-[500px] object-cover"
              alt="Dessert"
            />
            <h1 className="mt-4">Dessert</h1>
          </div></Link>
        </div>
      </div>

      {/* Notre Nourriture Section */}
      <div className="text-center text-white text-3xl py-10 font-bold flex items-center max-w-7xl mx-auto gap-6">
        <div>
          <h1 className="mb-10">NOTRE NOURRITURE</h1>
          <p className="text-lg">
            Découvrez nos plats exquis préparés avec les ingrédients les plus
            frais et de la plus haute qualité. Nos chefs talentueux mettent tout
            leur savoir-faire et leur passion dans chaque plat pour vous offrir
            une expérience culinaire inoubliable. Que vous préfériez les entrées
            délicates, les plats principaux savoureux ou les desserts décadents,
            notre menu a quelque chose à ravir tous les palais.
          </p>
        </div>
        <img src="chef.jpg" className="w-1/2 h-auto rounded-lg" />
      </div>

      {/* La Qualité du Nourriture Section */}

      <div className="text-center text-white text-3xl py-10 font-bold flex items-center max-w-7xl mx-auto gap-6">
        <img src="poisson.jpg" className="w-1/2 h-auto rounded-lg" />
        <div>
          <h1 className="mb-10">LA QUALITÉ DU NOURRITURE</h1>
          <p className="text-lg">
            Nous prenons la qualité de notre nourriture très au sérieux. Chaque
            ingrédient est soigneusement sélectionné pour garantir une fraîcheur
            optimale et une saveur inégalée. Nos chefs s'engagent à respecter
            les normes les plus élevées en matière de préparation et de
            présentation des plats, vous assurant ainsi une expérience culinaire
            exceptionnelle à chaque visite.
          </p>
        </div>
      </div>
    </div>
  );
}
