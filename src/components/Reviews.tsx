import Image from 'next/image';

const depoimentos = [
    {
        nome: 'Ana Clara',
        texto: 'A melhor pizza da região! Atendimento incrível e entrega super rápida.',
        avatar: '/hero.png',
    },
    {
        nome: 'Carlos Eduardo',
        texto: 'Sabores diferenciados e ingredientes frescos. Recomendo de olhos fechados!',
        avatar: '/pizza.png',
    },
    {
        nome: 'Juliana Souza',
        texto: 'Experiência excelente. A pizza doce é maravilhosa!',
        avatar: '/hero.png',
    },
];

export default function Reviews() {
    return (
        <section id="reviews" className="bg-zinc-900 py-16 md:py-24">
            <div className="container px-4 mx-auto md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="inline-block rounded-lg bg-red-600/20 px-3 py-1 text-base text-red-600">
                        Nossos feedbacks...
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                        O que <span className="text-white-500">falam </span> sobre nós
                    </h2>
                    <p className="mx-auto max-w-[700px] text-gray-400 md:text-lg">
                        Não acredite só na nossa palavra – veja o que dizem nossos clientes!
                    </p>
                </div>
                <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                    {depoimentos.map((dep, i) => (
                        <div key={i} className="flex flex-col justify-between rounded-xl bg-zinc-800 p-6">
                            <div className="space-y-2">
                                <div className="flex text-yellow-500 gap-1">
                                    {[...Array(5)].map((_, j) => (
                                        <i key={j} className="fas fa-star text-sm"></i>
                                    ))}
                                </div>
                                <p className="text-gray-300">{dep.texto}</p>
                            </div>
                            <div className="mt-6 flex items-center gap-4">
                                <Image
                                    src={dep.avatar}
                                    alt={`Avatar de ${dep.nome}`}
                                    width={50}
                                    height={50}
                                    className="rounded-full aspect-square object-cover"
                                />
                                <div>
                                    <p className="font-medium">{dep.nome}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
