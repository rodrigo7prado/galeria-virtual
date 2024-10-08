export default function Contato() {
  return (
    <div className="w-full pt-3 pb-5 px-3 bg-rp7verdeLimao-700 text-white gap-y-7">
      <h2 className="pb-4 font-heading font-bold text-xl">Contato</h2>
      <div className="flex flex-col gap-3 md:flex-row md:justify-center">
        <div className="w-full md:w-3/12">Nome: 
          <input className="py-1 w-full bg-rp7verdeLimao-200 focus:outline-none focus:ring-2 focus:ring-rp7verdeLimao-750" />
        </div>
        <div className="w-full md:w-3/12">Email: 
          <input className="py-1 w-full bg-rp7verdeLimao-200 focus:outline-none focus:ring-2 focus:ring-rp7verdeLimao-750" />
        </div>
        <button className="px-4 py-1 bg-slate-50 text-sm text-blue-700 items-center justify-center">
          Cadastrar com o Google
        </button>
      </div>
    </div>
  )
}