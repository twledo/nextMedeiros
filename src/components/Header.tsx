import Link from 'next/link';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm">
            <div className="container flex h-16 items-center justify-between px-4 mx-auto md:px-6">
                <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                    <span className="text-xl text-red-600">MEDEIROS</span>
                    <span className="text-xl text-yellow-400">PIZZARIA</span>
                </Link>
                <nav className="hidden md:flex gap-8">
                    <Link href="#queridinhas" className="text-base font-medium hover:text-yellow-500 transition-colors">
                        Mais pedidas
                    </Link>
                    <Link href="#about" className="text-base font-medium hover:text-yellow-500 transition-colors">
                        Sobre
                    </Link>
                    <Link href="#reviews" className="text-base font-medium hover:text-yellow-500 transition-colors">
                        Avaliações
                    </Link>
                    <Link href="#location" className="text-base font-medium hover:text-yellow-500 transition-colors">
                        Localização
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Link href="https://pedido.anota.ai/loja/medeiros-pizzaria" className="hidden md:block">
                        <button className="bg-red-600 transition-colors hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium">
                            Peça agora!
                        </button>
                    </Link>
                    <Link href="https://pedido.anota.ai/loja/medeiros-pizzaria">
                        <button className="md:hidden border border-red-600 text-red-600 p-2 rounded-md">
                            <i data-lucide="phone" className="h-4 w-4"></i>
                            <span className="sr-only">Peça agora!</span>
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
}