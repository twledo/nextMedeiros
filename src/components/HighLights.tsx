"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const pizzas = [
  {
    id: 1,
    src: '/hero.png',
    alt: 'Pizza Margherita',
    title: 'Pizza Margherita',
    description: 'Deliciosa pizza com molho de tomate, mussarela e manjericão.',
  },
  {
    id: 2,
    src: '/pizza.png',
    alt: 'Pizza Calabresa',
    title: 'Pizza Calabresa',
    description: 'Saborosa pizza com calabresa fatiada, cebola e azeitonas.',
  },
  {
    id: 3,
    src: '/hero.png',
    alt: 'Pizza Portuguesa',
    title: 'Pizza Portuguesa',
    description: 'Combinação clássica com presunto, ovos, cebola e ervilhas.',
  },
];

export default function Highlights() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % pizzas.length);
    }, 4000); // Alterna a cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="queridinhas" className="bg-zinc-900 py-16 md:py-24">
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-red-600/20 px-3 py-1 text-base text-red-600">
            Pelos nossos clientes...
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
            Nossas <span className="text-white-500">queridinhas</span>
          </h2>
          <p className="mx-auto max-w-[800px] text-gray-400 md:text-xl">
            As líderes de vendas, feitas com os melhores ingredientes para conquistar seu paladar.
          </p>
        </div>

        {/* Mobile Card Fixo */}
        <div className="md:hidden py-12">
          <div className="max-w-sm mx-auto">
            <div className="group relative overflow-hidden rounded-xl bg-zinc-800">
              <div className="aspect-square overflow-hidden relative">
                {pizzas.map((pizza, index) => (
                  <Image
                    key={pizza.id}
                    src={pizza.src}
                    alt={pizza.alt}
                    width={320}
                    height={320}
                    className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                  />
                ))}
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-white transition-all duration-300">
                  {pizzas[currentIndex].title}
                </h3>
                <p className="mt-1 text-sm text-gray-400 transition-all duration-300">
                  {pizzas[currentIndex].description}
                </p>
              </div>
            </div>

            {/* Indicadores */}
            <div className="flex justify-center mt-4 space-x-2">
              {pizzas.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                      ? 'bg-red-600 scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid mx-auto max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3 px-4">
          {pizzas.map(({ id, src, alt, title, description }) => (
            <div key={id} className="group relative overflow-hidden rounded-xl bg-zinc-800 max-w-[320px] mx-auto">
              <div className="aspect-square overflow-hidden">
                <Image
                  src={src}
                  alt={alt}
                  width={320}
                  height={320}
                  className="object-cover w-full h-full transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="mt-1 text-sm text-gray-400">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="https://pedido.anota.ai/loja/medeiros-pizzaria">
            <button className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 px-4 py-2 rounded-md flex items-center">
              Ver nosso cardápio
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
