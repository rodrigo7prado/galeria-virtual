import Image from "next/image";

export default function ImagemApresentacao() {
  let twdSans = "leading-none tracking-[-0.025em] scale-x-[0.7]"
  return(
    <div className="relative w-full h-80 md:h-[600px]">
      <Image src="/artes/Dorsais.png" alt={""} layout="fill" objectFit="cover"/>
      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
        <div className="flex-col">
          <p className="font-openSans text-white md:text-[88px] text-center leading-none tracking-[-0.025em] scale-x-[0.66]">
            RODRIGO PRADO<br/>GALERIA VIRTUAL
          </p>
          <p className="text-white font-oswald font-[200] text-lg md:text-4xl text-center">
            Abstrato e Digital
          </p>
          <p >
            {/* O virtual e o abstrato permeiam os horizontes que me movimentam nesta incrível e tortuosa descoberta de ser: Humano! Então aqui está um convite para um desfrute das expressões do que esteve e está vivo na minha jornada de criação. */}
          </p>
          <p>
            {/* Sejam muito bem-vindos! Que as forças das linhas, retas ou curvas, das cores e dos ângulos nos seduzam mais e demais! */}
          </p>
        </div>
      </div>
      {/* <img src="/artes/Nascimento e Navegações.jpg"/> */}
    </div>
  )
}