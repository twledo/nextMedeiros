export default function Highlights() {
  return (
    <section id="queridinhas" className="bg-zinc-900 py-16 md:py-24">
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-red-600/20 px-3 py-1 text-base text-red-600">
            Pelos nossos clientes...
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
            Nossas <span className="text-white-500">queridinhas</span>
          </h2>
          <p className="mx-auto max-w-[800px] text-gray-400 md:text-xl">
            As líderes de vendas, feitas com os melhores ingredientes para conquistar seu paladar.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl bg-zinc-800">
              <div className="aspect-square overflow-hidden">
                <img
                  src={`https://source.unsplash.com/random/400x400?pizza&sig=${i}`}
                  alt={`Pizza ${i}`}
                  className="object-cover w-full h-full transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-white">Lorem</h3>
                <p className="mt-1 text-sm text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis soluta eos suscipit unde quae iste.
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <a href="https://pedido.anota.ai/loja/medeiros-pizzaria">
            <button className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 px-4 py-2 rounded-md flex items-center">
              Ver nosso cardápio <i data-lucide="chevron-right" className="ml-2 h-4 w-4"></i>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
