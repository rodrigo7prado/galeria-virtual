import Image from "next/image";

export default function SobreMim() {
  return (
    <div className="px-3 pb-16 bg-blue-950 text-white">
      <div className="flex flex-col md:flex-row items-start">
        <div className="relative flex-grow-0 flex-shrink-0 h-[300px] w-full md:h-[400px] md:w-[710px] mt-6 md:mt-0">
          <Image
            src="/artes/Preto e Branco.png"
            alt=""
            layout="fill"
            objectFit="cover"
            className="max-h-96 w-auto"
          />
        </div>
        <div className="md:ml-24 md:mr-96 flex flex-col justify-normal md:w-auto w-full">
          <h1 className="pt-4 pb-6 text-3xl font-extrabold">Um pouco sobre Rodrigo Prado</h1>
          <p className="px-4 text-base font-montserrat md:text-lg font-normal md:w-[700px] w-full text-justify">
            Um entusiasta das expressões menos óbvias e imediatas, tenho o sonho de partilhar um pouco dessa experiência diária que me é tão transformativa. A criação visual é um marco na minha vida. Sempre autodidata nas coisas que aprendo, de uma maneira ou de outra, busco me motivar pela sinceridade com que o meu espírito é levado e sensibilizado pelas coisas do mundo, do corpo, da relação com a vida, da superação das divisões no espírito e de tudo o que se mostra capaz de me fornecer uma experiência harmoniosamente orgânica com o que há no âmago dos movimentos e articulações, das mínimas nuances do que me é permitido perceber em mim mesmo e em-tudo-que-existe. Eis neste site um espaço de comunhão, que muito me alimenta, e me faz ter a pretensão de alimentar um pouco do sonho que move, desloca, implica e rege mudanças.
          </p>
        </div>
      </div>
    </div>
  );}