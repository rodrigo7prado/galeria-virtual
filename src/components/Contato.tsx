export default function Contato() {
  return(
    <div className="w-full py-6 px-3 bg-rp7verdeLimao-700 text-white gap-y-7">
      <h2 className="pb-4 font-heading font-bold text-xl">Contato</h2>
      <div className="flex gap-3 justify-center">
        <div className="w-3/12">Nome: <input className="py-1 w-full bg-rp7verdeLimao-200 focus:outline-none focus:ring-2 focus:ring-rp7verdeLimao-750"></input></div>        
        <div className="w-2/12">Email: <input className="py-1 w-full bg-rp7verdeLimao-200 focus:outline-none focus:ring-2 focus:ring-rp7verdeLimao-750"></input></div>
        <button className="px-4 py-1 bg-slate-50 text-sm text-blue-700 items-center justify-center">Cadastrar com Google</button>
      </div>
    </div>
  )
}