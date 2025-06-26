'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { containerVariants, imageVariants, paragraphVariants, buttonVariants } from './utils/animationsUitls';

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            {/* Imagem de fundo para mobile e lateral para desktop */}
            <motion.div
                className="absolute inset-0 z-0 lg:hidden"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
            >
                <Image
                    src="/hero.png"
                    alt="Fundo Hero"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    className="rounded-none"
                    priority
                />
                <div className="absolute inset-0 bg-black/75" aria-hidden="true"></div>
            </motion.div>
            {/* Imagem à direita no desktop */}
            <motion.div
                className="hidden lg:block absolute top-0 right-0 h-full w-1/2 z-0"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
            >
                <Image
                    src="/hero.png"
                    alt="Fundo Hero"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    className="rounded-none"
                    priority
                />
                <div className="absolute inset-0 bg-black/15" aria-hidden="true"></div>
            </motion.div>
            <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between px-4 py-20 mx-auto sm:py-24 md:py-32 lg:py-[180px]">
                {/* Texto à esquerda */}
                <motion.div
                    className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
                        }}
                    >
                        <span className="text-red-600 font-truculenta"> Quem prova,</span>
                        <span className="block text-white text-5xl sm:text-6xl md:text-8xl lg:text-[7.3rem] leading-tight font-truculenta">
                            comprova:<span className="text-yellow-500 font-truculenta"><br /> é a melhor!</span>
                        </span>
                    </motion.h1>
                    <motion.p
                        variants={paragraphVariants}
                        className="mx-auto lg:mx-0 max-w-2xl text-xl text-gray-200 sm:text-lg md:text-3xl"
                    >
                        Amor à primeira fatia!
                    </motion.p>
                    <motion.div
                        variants={buttonVariants}
                        className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start mt-6"
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
                </motion.div>
            </div>
        </section>
    );
}