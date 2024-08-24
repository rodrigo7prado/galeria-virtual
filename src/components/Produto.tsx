"use client";

import { IProdutoData, ProdutoData } from "@/database/database";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { ProdutoModal } from "./ProdutoModal";

export default function Produto() {
  const data = ProdutoData;
  const [visibleItems, setVisibleItems] = useState(8); // Inicialmente, mostrar 8 itens

  const handleShowMore = () => {
    setVisibleItems((prev) => prev + 8); // Exibe mais 8 itens ao clicar no botão
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data.slice(0, visibleItems).map((item, index) => (
          <ProdutoItem key={index} item={item} />
        ))}
      </div>

      {visibleItems < data.length && (
        <div className="flex justify-center mt-5 py-6">
          <button
            onClick={handleShowMore}
            className="border-2 border-slate-600 px-4 py-2 font-openSans rounded-sm"
          >
            Ver mais
          </button>
        </div>
      )}
    </>
  );
}

function ProdutoItem({ item }: { item: IProdutoData }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  let displayContent, twdClass;

  if (item.vendas === 0 && item.tiragens === 0) {
    twdClass = "bg-rp7verdeLimao-650 text-gray-500";
    displayContent = (
      <span title="" className="inline-block pt-0.5 pb-1.5 px-2 italic">
        Manifestar desejo
      </span>
    );
  } else if (item.vendas === item.tiragens) {
    twdClass = "bg-cyan-600 text-gray-100";
    displayContent = (
      <span
        title="Item não disponível à venda"
        className="inline-block pt-0.5 pb-1.5 px-2 italic"
      >
        Obra de Galeria
      </span>
    );
  } else {
    twdClass = "";
    displayContent = (
      <span className="font-montserrat font-[500] italic text-[1.25em] text-cyan-600">
        A partir de: R$ {item.valorInicio}
      </span>
    );
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null);

  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth: width, naturalHeight: height } = event.currentTarget;
    setDimensions({ width, height });
  };

  return (
    <>
      <div
        className="rounded-md overflow-hidden bg-slate-100 cursor-pointer relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleOpenModal}
      >
        <div className="relative min-h-32 min-w-80 md:h-56 md:min-w-80 flex items-center justify-center">
          <Image
            src={"/" + item.src}
            alt={item.titulo}
            layout="fill"
            objectFit="contain"
            objectPosition="center center"
            className="p-3"
            onLoad={handleImageLoad}
          />
          {isHovered && (
            <div className="absolute bottom-0 left-0 w-full h-12 bg-rp7verdeLimao-650 bg-opacity-90 flex items-center justify-center text-white font-bold">
              Visualizar de detalhes
            </div>
          )}
        </div>
        <div className="z-20 pt-0 pb-1.5 px-3 text-slate-600">{item.titulo}</div>
        <div className={`text-sm px-3 py-0.5 ${twdClass}`}>{displayContent}</div>
        {dimensions && (
          <p>
            A largura da imagem é: {dimensions.width}px, altura: {dimensions.height}px
          </p>
        )}
      </div>

      {isModalOpen && <ProdutoModal item={item} onClose={handleCloseModal} />}
    </>
  );
}
