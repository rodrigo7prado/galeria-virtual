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
              <div className={item.imagemComMoldura ? "" : "p-[22px] bg-neutral-50 relative border-[16px] border-gray-500"}>
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
            <p className="mt-4">"{item.descricao}"</p>
            <p>R$ {item.valorInicio}</p>
            {/* Adicione mais detalhes conforme necessário */}
          </div>
          <div className="flex flex-col p-8 md:min-w-80">
            <div>R$ {item.valorInicio}</div>
            <label htmlFor="">Dimensões da imagem</label>
            <select name="" id="">
              <option value="">40cm</option>
            </select>
            <label htmlFor="">Moldura: </label>
            <select name="" id="">
              <option value="">Fina 2cm</option>
            </select>            
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}