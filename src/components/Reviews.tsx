'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const depoimentos = [
    {
        nome: 'João Silva',
        texto: 'Ótima pizza, sempre chega no tempo combinado.\nAtendimento pontual e qualidade garantida.',
    },
    {
        nome: 'Maria Santos',
        texto: 'A pizza é muito boa, muito bem recheada, sempre pedimos a de 15 fatias.\nMedeiros é uma das coisas que mais sentimos saudade da cidade.',
    },
    {
        nome: 'Carlos Oliveira',
        texto: 'Sem dúvidas é a melhor pizzaria da cidade. Sempre oferecem produtos de qualidade.\nPreços excelentes e entrega rápida, desde pizzas simples até complexas.',
    },
    {
        nome: 'Ana Costa',
        texto: 'Muito boa as pizzas, sabor incomparável.\nSempre peço quando quero uma pizza de qualidade.',
    },
    {
        nome: 'Pedro Lima',
        texto: 'Uma das melhores pizzas da cidade. Muito bem recheada, com ingredientes de qualidade.\nEntrega ágil e pizza chega quentinha, como se estivesse saído do fogo.',
    },
    {
        nome: 'Juliana Ferreira',
        texto: 'Amo a pizza de lá, realmente a melhor de Laranjeiras do Sul.\nSabor único e qualidade que não encontro em outro lugar.',
    },
    {
        nome: 'Roberto Almeida',
        texto: 'Atendimento muito bom, e é a melhor pizza da cidade.\nSempre sou bem atendido e a pizza é perfeita.',
    },
    {
        nome: 'Fernanda Rocha',
        texto: 'A melhor de Laranjeiras do Sul, ingredientes de qualidade e muito saborosa.\nFica pronta rápido e sempre surpreende no sabor.',
    },
    {
        nome: 'Lucas Pereira',
        texto: 'Pessoas excelentes, pizza maravilhosa.\nTudo de bom, recomendo para todos os amigos.',
    },
    {
        nome: 'Camila Souza',
        texto: 'A melhor pizza da cidade, assada em forno a lenha.\nA pizza com borda é divina, sabor inigualável.',
    },
];

export default function Reviews() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % depoimentos.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="reviews" className="bg-zinc-900 py-16 md:py-24">
            <div className="container px-4 mx-auto md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="inline-block rounded-lg bg-red-600/20 px-3 py-1 text-base text-red-600">
                        Nossos feedbacks...
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                        O que <span className="text-yellow-500">falam</span> sobre nós
                    </h2>
                    <p className="mx-auto max-w-[700px] text-gray-400 md:text-lg">
                        Não acredite só na nossa palavra – veja o que dizem nossos clientes!
                    </p>
                </div>

                <div className="mx-auto max-w-2xl py-12">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="flex flex-col justify-between rounded-xl bg-zinc-800 p-8 text-center"
                        >
                            <div className="space-y-6">
                                <div className="flex justify-center text-yellow-500 gap-1">
                                    {[...Array(5)].map((_, j) => (
                                        <span key={j} className="text-xl">★</span>
                                    ))}
                                </div>
                                <div className="text-gray-300 text-lg italic leading-relaxed">
                                    {depoimentos[currentIndex].texto.split('\n').map((linha, index) => (
                                        <p key={index} className="mb-2">"{linha}"</p>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-center">
                                <div>
                                    <p className="font-medium text-lg">{depoimentos[currentIndex].nome}</p>
                                    <p className="text-gray-400 text-sm">Cliente verificado</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Indicadores */}
                    <div className="flex justify-center gap-2 mt-8">
                        {depoimentos.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-red-600' : 'bg-gray-600'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
