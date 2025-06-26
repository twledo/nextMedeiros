import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-zinc-900 py-8 md:py-12">
            <div className="container px-4 mx-auto md:px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-yellow-500">
                            <span className="text-red-600">PIZZARIA</span>MEDEIROS
                        </Link>
                        <p className="mt-2 text-sm text-gray-400">A melhor pizzaria de Laranjeiras do Sul.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium">Links Rápidos</h3>
                        <nav className="mt-4 flex flex-col gap-2">
                            <Link href="https://pedido.anota.ai/loja/medeiros-pizzaria" className="text-sm text-gray-400 hover:text-white">
                                Cardápio
                            </Link>
                            <Link href="#about" className="text-sm text-gray-400 hover:text-white">
                                Sobre Nós
                            </Link>
                            <Link href="#reviews" className="text-sm text-gray-400 hover:text-white">
                                Avaliações
                            </Link>
                            <Link href="#location" className="text-sm text-gray-400 hover:text-white">
                                Localização
                            </Link>
                        </nav>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium">Contato</h3>
                        <address className="mt-4 not-italic">
                            <p className="text-sm text-gray-400">Av. Santos Dumont, 644 - Água Verde</p>
                            <p className="text-sm text-gray-400">Laranjerias do Sul</p>
                            <p className="mt-2 text-sm text-gray-400">(42) 3635-3571</p>
                            <p className="mt-2 text-sm text-gray-400">(42) 99162-9051</p>
                            {/* <p className="mt-2 text-sm text-gray-400"> --email--</p> */}
                        </address>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium">Conecte-se Conosco</h3>
                        <div className="mt-4 flex gap-4">
                            <Link href="https://www.facebook.com/share/1DhHGpQ5as/" className="text-gray-400 hover:text-white transition-colors">
                                <span className="sr-only">Facebook</span>
                                <FaFacebookF size={20} />
                            </Link>
                            <Link href="https://www.instagram.com/medeirospizzarialds" className="text-gray-400 hover:text-white transition-colors">
                                <span className="sr-only">Instagram</span>
                                <FaInstagram size={20} />
                            </Link>
                            <Link href="https://wa.me/+5542991629051" className="text-gray-400 hover:text-white transition-colors">
                                <span className="sr-only">WhatsApp</span>
                                <FaWhatsapp size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-zinc-800 pt-8 text-center">
                    <p className="text-xs text-gray-400">
                        © {new Date().getFullYear()} Pizzaria Medeiros. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
