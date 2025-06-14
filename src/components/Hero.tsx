import Link from 'next/link';
import Image from 'next/image'

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            {/* Imagem de fundo ocupando toda a área */}
            <div className="absolute inset-0 z-0 brightness-[0.3]">
                <Image
                    src="/hero.png"          // imagem na pasta public
                    alt="Fundo Hero"
                    fill                   // faz a imagem preencher o container pai
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    priority               // para carregar rápido no LCP
                />
            </div>

            {/* Conteúdo em cima */}
            <div className="container relative z-10 flex flex-col items-center justify-center px-4 py-20 text-center mx-auto sm:py-24 md:py-32 lg:py-[250px]">
                <div className="space-y-6 sm:space-y-8">
                    <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-8xl">
                        <span className="text-white">A melhor</span>
                        <span className="text-yellow-500"> pizza</span>
                        <span className="block text-red-600 text-4xl sm:text-6xl lg:text-7xl">
                            de Laranjeiras do Sul
                        </span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-xl text-gray-200 sm:text-lg md:text-2xl">
                        A pizza que virou tradição.
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                        <Link href="https://pedido.anota.ai/loja/medeiros-pizzaria" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 transition-colors text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-md font-bold">
                                Peça agora sua pizza!
                            </button>
                        </Link>
                        <Link href="#queridinhas" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 transition-colors text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-md font-bold">
                                Queridinhas do cardápio
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
