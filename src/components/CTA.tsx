export default function CTA() {
  return (
    <section className="bg-red-600 py-12 md:py-16">
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
              Pronto para provar a melhor pizza da cidade?
            </h2>
            <p className="text-red-100">
              Peça online para retirada ou delivery e aproveite nossa pizza hoje mesmo.
            </p>
          </div>
          <a href="https://pedido.anota.ai/loja/medeiros-pizzaria">
            <button className="bg-yellow-500 text-black hover:bg-yellow-400 px-8 py-4 rounded-md text-lg font-bold">
              Peça agora
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
