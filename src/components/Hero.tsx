'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { containerVariants, imageVariants, paragraphVariants, buttonVariants, splitText } from './utils/animationsUitls';

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            <motion.div
                className="absolute inset-0 z-0 brightness-[0.3]"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
            >
                <Image
                    src="/hero.png"         // imagem na pasta public
                    alt="Fundo Hero"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    priority
                />
            </motion.div>

            <motion.div
                className="container relative z-10 flex flex-col items-center justify-center px-4 py-20 text-center mx-auto sm:py-24 md:py-32 lg:py-[250px]"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="space-y-6 sm:space-y-8">
                    <motion.h1
                        className="text-5xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-8xl"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
                        }}
                    >
                        <span className="text-white">{splitText('A melhor')}</span>{' '}
                        <span className="text-yellow-500">{splitText('pizza')}</span>
                        <span className="block text-red-600 text-4xl sm:text-6xl lg:text-7xl">
                            {splitText('de Laranjeiras do Sul')}
                        </span>
                    </motion.h1>
                    <motion.p
                        variants={paragraphVariants}
                        className="mx-auto max-w-2xl text-xl text-gray-200 sm:text-lg md:text-2xl"
                    >
                        A pizza que virou tradição.
                    </motion.p>
                    <motion.div
                        variants={buttonVariants}
                        className="flex flex-col gap-3 sm:flex-row sm:justify-center"
                    >
                        <Link href="https://pedido.anota.ai/loja/medeiros-pizzaria" className="w-full sm:w-auto">
                            <motion.button
                                variants={buttonVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 transition-colors text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-md font-bold"
                            >
                                Peça agora sua pizza!
                            </motion.button>
                        </Link>
                        <Link href="#queridinhas" className="w-full sm:w-auto">
                            <motion.button
                                variants={buttonVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 transition-colors text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-md font-bold"
                            >
                                Queridinhas do cardápio
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}