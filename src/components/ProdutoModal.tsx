import { IProdutoData, ProdutoData } from "@/database/database";
import Image from "next/image";
import { createPortal } from "react-dom";

export function ProdutoModal({ item, onClose }: { item: IProdutoData; onClose: () => void }) {
  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
      <div className="flex flex-col bg-white p-5 rounded-md max-w-lg md:max-w-5xl w-full relative">
        <div>
          <h2 className="text-2xl mb-4">{item.titulo}</h2>
          <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-gray-300 rounded-full p-2 text-sm"
          >
            ✕
          </button>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full">
            <div className={"relative min-h-40 md:min-h-96 flex items-center justify-center p-4"}>
              <div className="shadow-md shadow-black/25">
                <div className={item.imagemComMoldura ? "" : "p-[22px] bg-neutral-50 relative border-[16px] border-gray-500 shadow-black shadow-inner"}>
                  <Image
                    src={"/" + item.src}
                    alt={item.titulo}
                    layout="intrinsic"
                    width={500}  // Ajuste conforme necessário
                    height={500} // Ajuste conforme necessário
                    objectFit="contain"
                    objectPosition="center"
                  />
                </div>
              </div>
            </div>
            <p className="mt-4">{item.descricao}</p>
            <p>R$ {item.valorInicio}</p>
            {/* Adicione mais detalhes conforme necessário */}
          </div>
          <div className="flex flex-col p-8 md:min-w-80">
            <div>R$ {item.valorInicio}</div>
            <label htmlFor="">Dimensões da imagem: </label>
            <div className="relative inline-block">
              <select className="border-2 border-solid border-black p-2 pr-8 bg-white appearance-none w-full">
                <option value="">40cm</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>

            <label htmlFor="">Moldura: </label>
            <div className="relative inline-block">
              <select className="border-2 border-solid border-black p-2 pr-8 bg-white appearance-none w-full">
                <option value="">Fina 2cm</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>          
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}