import Contato from "@/components/Contato";
import ImagemApresentacao from "@/components/ImagemApresentacao";
import Loja from "@/components/Loja";
import SobreMim from "@/components/SobreMim";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative bg-white text-center">
        <div className="sticky top-0 z-10  flex px-5 gap-4 pt-2 pb-2 bg-[hsl(220,60%,15%)] text-slate-200">
          <div>
            <a href="https://www.instagram.com/rodrigo7prado">
              <Image src={"/instagram.png"} alt={""} layout="intrinsic" width={25} height={25}/>
            </a>
          </div>
          <h1 className="text-slate-300 text-xs">Rodrigo Prado<br/>Galeria Virtual</h1>
        </div>
        <ImagemApresentacao />
        <Loja />
        <Contato />
        <SobreMim />

        {/* Ícone do WhatsApp fixo na parte inferior direita */}
        <div className="fixed bottom-4 right-4 cursor-pointer">
          <Image
            src="/whatsapp.png"
            alt="WhatsApp"
            width={70}
            height={70}
          />
        </div>
      </div>
    </>
  );
}