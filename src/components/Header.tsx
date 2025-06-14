'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { containerVariants, imageVariants, paragraphVariants, buttonVariants, splitText, letterVariants, navLinkVariants } from './utils/animationsUitls';

export default function Header() {
    return (
        <motion.header
            className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="container flex h-16 items-center justify-between px-4 mx-auto md:px-6">
                <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                    <motion.span
                        initial="hidden"
                        animate="visible"
                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05 } } }}
                        className="text-xl text-red-600"
                    >
                        {splitText('MEDEIROS')}
                    </motion.span>
                    <motion.span
                        initial="hidden"
                        animate="visible"
                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05 } } }}
                        className="text-xl text-yellow-400"
                    >
                        {splitText('PIZZARIA')}
                    </motion.span>
                </Link>
                <nav className="hidden md:flex gap-8">
                    <motion.div variants={navLinkVariants}>
                        <Link href="#queridinhas" className="text-base font-medium hover:text-yellow-500 transition-colors">
                            Mais pedidas
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
                <div className="flex items-center gap-4">
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