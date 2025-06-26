import Image from 'next/image'

export default function About() {
    return (
        <section id="about" className="bg-black py-16 md:py-24">
            <div className="container px-4 mx-auto md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="inline-block rounded-lg bg-red-600/20 px-3 py-1 text-base text-red-600">
                            Sobre a melhor pizzaria...
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                            Sobre <span className="text-white-500">Medeiros</span> <span className="text-white-600">Pizzaria</span>
                        </h2>
                        <p className="text-gray-400 md:text-lg">
                            Há mais de [X anos] servindo as melhores pizzas de Laranjeiras do Sul,
                            a Medeiros Pizzaria se tornou referência em sabor e qualidade na região.
                        </p>
                        <p className="text-gray-400 md:text-lg">
                            Com ingredientes frescos e receitas tradicionais, oferecemos uma
                            experiência gastronômica única que conquista clientes em cada fatia.
                        </p>
                    </div>

                    <div className="overflow-hidden rounded-xl relative aspect-video w-full">
                        <Image
                            src="/hero.png"
                            alt="Medeiros Pizzaria"
                            fill  // faz a imagem preencher o container pai
                            className="object-cover"
                            priority
                        />
                    </div>

                </div>
            </div>
        </section >
    );
}
