'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { containerVariants, buttonVariants, navLinkVariants } from './utils/animationsUitls';

export default function Header() {
    return (
        <motion.header
            className="sticky top-0 z-50 bg-black/95 md:bg-black/60 md:backdrop-blur-md border-b border-zinc-900 shadow-lg"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="container flex h-16 items-center justify-between px-2 sm:px-4 md:px-6 max-w-full">
                <Link href="/" className="flex items-center gap-1 sm:gap-2 text-lg sm:text-xl font-bold">
                    <motion.span
                        initial="hidden"
                        animate="visible"
                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05 } } }}
                        className="text-lg sm:text-xl text-red-600"
                    >
                        MEDEIROS
                    </motion.span>
                    <motion.span
                        initial="hidden"
                        animate="visible"
                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05 } } }}
                        className="text-lg sm:text-xl text-yellow-400"
                    >
                        PIZZARIA
                    </motion.span>
                </Link>
                <nav className="hidden md:flex gap-4 sm:gap-8">
                    <motion.div variants={navLinkVariants}>
                        <Link href="#queridinhas" className="text-base font-medium hover:text-yellow-500 transition-colors">
                            Queridinhas
                        </Link>
                    </motion.div>
                    <motion.div variants={navLinkVariants}>
                        <Link href="#about" className="text-base font-medium hover:text-yellow-500 transition-colors">
                            Sobre
                        </Link>
                    </motion.div>
                    <motion.div variants={navLinkVariants}>
                        <Link href="#reviews" className="text-base font-medium hover:text-yellow-500 transition-colors">
                            Avaliações
                        </Link>
                    </motion.div>
                    <motion.div variants={navLinkVariants}>
                        <Link href="#location" className="text-base font-medium hover:text-yellow-500 transition-colors">
                            Localização
                        </Link>
                    </motion.div>
                </nav>
                <div className="flex items-center gap-2 sm:gap-4">
                    <motion.div variants={buttonVariants} className="hidden md:block">
                        <Link href="https://pedido.anota.ai/loja/medeiros-pizzaria">
                            <motion.button
                                variants={buttonVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-red-600 transition-colors hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium"
                            >
                                Peça agora!
                            </motion.button>
                        </Link>
                    </motion.div>
                    <motion.div variants={buttonVariants} className="md:hidden">
                        <Link href="https://pedido.anota.ai/loja/medeiros-pizzaria">
                            <motion.button
                                variants={buttonVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border border-red-600 text-red-600 p-2 rounded-md"
                            >
                                <i data-lucide="phone" className="h-4 w-4"></i>
                                <span className="sr-only">Peça agora!</span>
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.header>
    );
}