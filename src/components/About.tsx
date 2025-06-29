import Image from 'next/image'

export default function About() {
    return (
        <section id="about" className="bg-black py-16 md:py-24">
            <div className="container px-4 mx-auto md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="inline-block rounded-lg bg-red-600/20 px-3 py-1 text-base text-red-600">
                            Excelência em cada detalhe...
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                            Sobre Medeiros Pizzaria
                        </h2>
                        <p className="text-gray-400 md:text-lg">
                            Reconhecida pela qualidade excepcional de nossos produtos, a Medeiros Pizzaria
                            oferece pizzas com sabores autênticos e generoso recheio, conquistando o paladar
                            mais exigente de Laranjeiras do Sul.
                        </p>
                        <p className="text-gray-400 md:text-lg">
                            Nosso compromisso com a excelência se reflete no atendimento personalizado,
                            na agilidade das entregas e na constante busca pela satisfação total de nossos clientes.
                            Cada pizza é preparada com dedicação e ingredientes selecionados.
                        </p>
                        <p className="text-gray-400 md:text-lg">
                            Venha descobrir por que somos a escolha preferida quando o assunto é pizza de qualidade.
                        </p>
                    </div>

                    <div className="overflow-hidden rounded-xl relative aspect-video w-full">
                        <Image
                            src="/hero.png"
                            alt="Medeiros Pizzaria"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
