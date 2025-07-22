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
                        <div className="aspect-[16/16] min-h-[540px]">
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
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="rounded-xl bg-zinc-800 p-5">
                            <div className="p-6 space-y-6">
                                <h3 className="text-xl font-bold mb-2 text-red-500">Apenas delivery</h3>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-4 mb-2">
                                        <MapPin className="h-5 w-5 text-red-600" />
                                        <span className="font-medium">Avenida Santos Dumont, 644 <br /> Água Verde, Laranjeiras do Sul</span>
                                    </div>
                                    <div className="flex items-center gap-4 mb-2">
                                        <Phone className="h-5 w-5 text-red-600" />
                                        <span className="font-medium">(42) 3635-3571 <br /> (42) 99162-9051</span>
                                    </div>
                                    <div className="flex items-center gap-4 mb-2">
                                        <Clock className="h-5 w-5 text-red-600" />
                                        <span className="font-medium">Segunda: Fechado <br />Terça a Domingo: 18h às 22h</span>
                                    </div>
                                </div>
                                <div className="flex gap-6 mt-4">
                                    <div className="flex-1 bg-zinc-900 rounded-lg p-4 flex flex-col items-center">
                                        <span className="text-sm text-gray-400">Taxa de entrega</span>
                                        <span className="text-lg font-bold text-red-500">R$ 5,00</span>
                                    </div>
                                    <div className="flex-1 bg-zinc-900 rounded-lg p-4 flex flex-col items-center">
                                        <span className="text-sm text-gray-400">Tempo médio</span>
                                        <span className="text-lg font-bold text-red-500">30-45 min</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 mt-4">
                                    <Link href="https://wa.me/+5542991629051">
                                        <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md font-medium transition-colors">
                                            Peça pelo WhatsApp
                                        </button>
                                    </Link>
                                    <Link href="https://pedido.anota.ai/loja/medeiros-pizzaria">
                                        <button className="w-full border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 py-2 rounded-md font-medium transition-colors">
                                            Fazer Pedido Online
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
