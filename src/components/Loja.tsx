import Produto from "./Produto";

export default function Loja() {
  return(
    <div className="">
      <div className="bg-[hsl(220,60%,15%)]">
        <h2 className="pt-3 pb-4 font-oswald font-semibold text-2xl text-slate-100">LOJA VIRTUAL</h2>
      </div>
      <div className="px-5 pt-2 pb-7">  
        <div className="sticky w-full top-12 bg-slate-400 z-10">
          <div className="text-xs p-1 w-8" >Aumentar detalhes</div>
        </div>
        <Produto/>
      </div>
    </div>
  )
}