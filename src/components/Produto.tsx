import { ProdutoData } from "@/database/database";
import Image from "next/image";
import React from "react";

export default function Produto() {
  const data = ProdutoData
  const dataView = data.map(item => ({
    ...item,
    status: item.vendas === item.tiragens ? "esgotado" : `A partir de: R$ ${item.valorInicio}`
  }));



  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {data.map((item, index) => {
        let displayContent, twdClass;

        if (item.vendas === 0 && item.tiragens === 0) {
          twdClass = "bg-rp7verdeLimao-650 text-gray-500"
          displayContent = (
            <span title="" className="inline-block pt-0.5 pb-1.5 px-2 italic">Manifestar desejo</span>
          );
        }
        else if (item.vendas === item.tiragens) {
          twdClass = "bg-cyan-600 text-gray-100"
          displayContent = (
            <span title="Item não disponível à venda" className="inline-block pt-0.5 pb-1.5 px-2 italic">Obra de Galeria</span>
          );
        } else {
          twdClass = ""
          displayContent = (
            <span className="">A partir de: R$ {item.valorInicio}</span>
          );
        }

        return (
          <div key={index} className="rounded-md overflow-hidden bg-slate-100">
            <div className="relative min-h-32 min-w-80 md:h-56 md:min-w-80 flex items-center justify-center">
              <Image
                src={"/" + item.src}
                alt={item.titulo}
                layout="fill"
                // width={400}
                // height={100}
                objectFit="contain"
                objectPosition="center center"
              />
            </div>
            <div className="z-20 pt-2 pb-1.5 px-3">{item.titulo}</div>
            <div className={`text-sm px-3 py-0.5 ${twdClass}`}>
              {displayContent}
            </div>
          </div>
        );
      })}
    </div>
  );
}