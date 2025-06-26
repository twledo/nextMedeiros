import { MapPin, Phone, Clock } from 'lucide-react'
import Link from 'next/link';

export default function Location() {
    return (
        <section id="location" className="bg-black py-16 md:py-24">
            <div className="container px-4 mx-auto md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="inline-block rounded-lg bg-red-600/20 px-3 py-1 text-base text-red-600">
                        Marque um encontro conosco...
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                        Localização <span className="text-white-500">&</span> <span>Horários</span>
                    </h2>
                    <p className="mx-auto max-w-[700px] text-gray-400 md:text-lg">
                        Faça uma visita ou receba suas pizzas preferidas no conforto de casa.
                    </p>
                </div>
                <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2">
                    <div className="overflow-hidden rounded-xl bg-zinc-800">
                        <div className="aspect-video">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.407387364538!2d-52.470000000000006!3d-25.407000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e6fbdbf5fef2cb%3A0xXXXXXXXXXXXXXXXX!2sAv.%20Santos%20Dumont%2C%20644%20-%20%C3%81gua%20Verde%2C%20Laranjeiras%20do%20Sul!5e0!3m2!1spt-BR!2sbr!4v1710000000000"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-xl w-full h-full"
                            ></iframe>
                        </div>

                        <div className="p-6 space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-red-600 mt-1" />
                                <div>
                                    <h3 className="font-medium">Endereço</h3>
                                    <p className="text-gray-400">Av. Santos Dumont, 644 - Água Verde</p>
                                    <p className="text-gray-400">Laranjeiras do Sul</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Phone className="h-5 w-5 text-red-600 mt-1" />
                                <div>
                                    <h3 className="font-medium">Telefone</h3>
                                    <p className="text-gray-400">(42) 3635-3571</p>
                                    <p className="text-gray-400">(42) 99162-9051</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Clock className="h-5 w-5 text-red-600 mt-1" />
                                <div>
                                    <h3 className="font-medium">Horários</h3>
                                    <div className="grid grid-cols-2 gap-x-4 text-gray-400">
                                        <p>Segunda-feira:</p>
                                        <p>Fechado</p>
                                        <p>Terça-feira à Domingo:</p>
                                        <p>18:00 – 22:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center space-y-6">
                        <div className="rounded-xl bg-zinc-800 p-6">
                            <h3 className="text-xl font-bold">Informações de delivery</h3>
                            <p className="mt-2 text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nobis quaerat ad quis unde autem quia.
                            </p>
                            <Link href="https://wa.me/+5542991629051">
                                <button className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md">
                                    Peça por delivery agora
                                </button>
                            </Link>
                        </div>
                        <div className="rounded-xl bg-zinc-800 p-6">
                            <h3 className="text-xl font-bold">Atendimento</h3>
                            <p className="mt-2 text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil totam commodi ratione vero cum, optio laborum.
                            </p>
                            <p className="mt-2 text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum facere magni quas fugit, veritatis fugiat soluta.
                            </p>
                            <Link href="https://pedido.anota.ai/loja/medeiros-pizzaria">
                                <button className="mt-4 w-full border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 py-2 rounded-md">
                                    Fazer Pedido
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
