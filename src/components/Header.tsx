export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm">
            <div className="container flex h-16 items-center justify-between px-4 mx-auto md:px-6">
                <a href="/" className="flex items-center gap-2 text-xl font-bold">
                    <span className="text-xl text-red-600">MEDEIROS</span>
                    <span className="text-xl text-yellow-400">PIZZARIA</span>
                </a>
                <nav className="hidden md:flex gap-8">
                    <a href="#queridinhas" className="text-base font-medium hover:text-yellow-500 transition-colors">
                        Mais pedidas
                    </a>
                    <a href="#about" className="text-base font-medium hover:text-yellow-500 transition-colors">
                        Sobre
                    </a>
                    <a href="#reviews" className="text-base font-medium hover:text-yellow-500 transition-colors">
                        Avaliações
                    </a>
                    <a href="#location" className="text-base font-medium hover:text-yellow-500 transition-colors">
                        Localização
                    </a>
                </nav>
                <div className="flex items-center gap-4">
                    <a href="https://pedido.anota.ai/loja/medeiros-pizzaria" className="hidden md:block">
                        <button className="bg-red-600 transition-colors hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium">
                            Peça agora!
                        </button>
                    </a>
                    <a href="https://pedido.anota.ai/loja/medeiros-pizzaria">
                        <button className="md:hidden border border-red-600 text-red-600 p-2 rounded-md">
                            <i data-lucide="phone" className="h-4 w-4"></i>
                            <span className="sr-only">Peça agora!</span>
                        </button>
                    </a>
                </div>
            </div>
        </header>
    );
}