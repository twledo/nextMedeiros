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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nihil soluta voluptates numquam dolorem sequi error doloribus.
                        </p>
                        <p className="text-gray-400 md:text-lg">
                            Quidem dicta asperiores, quam ipsam nam voluptate magni, deleniti dignissimos voluptatem esse quis corrupti recusandae.
                        </p>
                    </div>
                    <div className="overflow-hidden rounded-xl">
                        <img
                            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1374&q=80"
                            alt="Our restaurant interior"
                            className="aspect-video object-cover w-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
