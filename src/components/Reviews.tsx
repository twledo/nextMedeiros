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
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex flex-col justify-between rounded-xl bg-zinc-800 p-6">
                            <div className="space-y-2">
                                <div className="flex text-yellow-500">
                                    {[...Array(5)].map((_, j) => (
                                        <i key={j} className="fas fa-star"></i>
                                    ))}
                                </div>
                                <p className="text-gray-300">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis unde aspernatur iste minima, ullam explicabo mollitia.
                                </p>
                            </div>
                            <div className="mt-6 flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-zinc-700"></div>
                                <div>
                                    <p className="font-medium">Nome {i}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
