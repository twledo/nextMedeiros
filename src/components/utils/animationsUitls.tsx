import { motion, Variants } from 'framer-motion';

// Container com efeito de fade, scale e leve blur e neon sutil
export const containerVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.98,
        filter: 'blur(4px) drop-shadow(0 0 12px #E5393515)', // neon bem sutil
    },
    visible: {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px) drop-shadow(0 0 8px #E5393510)', // neon ainda mais suave
        transition: {
            staggerChildren: 0.10,
            delayChildren: 0.2,
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1], // easeOutQuart
        },
    },
    exit: {
        opacity: 0,
        scale: 0.99,
        filter: 'blur(4px) drop-shadow(0 0 12px #E5393515)',
        transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
};

// Letras com bounce, overshoot e sombra mais suave
export const letterVariants: Variants = {
    hidden: { opacity: 0, y: 24, scale: 0.97, filter: 'blur(1px)' },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 0.9,
            type: 'spring',
            stiffness: 350,
            damping: 40,
            mass: 1,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exit: {
        opacity: 0,
        y: -10,
        scale: 0.97,
        filter: 'blur(1px)',
        transition: { duration: 0.4 },
    },
};

// Links de navegação com underline animado e glow mais sutil
export const navLinkVariants: Variants = {
    hidden: { opacity: 0, y: -8, filter: 'blur(1px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exit: {
        opacity: 0,
        y: 8,
        filter: 'blur(1px)',
        transition: { duration: 0.4 },
    },
};

// Botões com efeito pop, glow e bounce mais suave
export const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 12, boxShadow: '0 0 0 #E53935' },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        boxShadow: '0 2px 16px #E5393522',
        transition: {
            duration: 0.7,
            type: 'spring',
            stiffness: 120,
            damping: 18,
        },
    },
    exit: {
        opacity: 0,
        scale: 0.97,
        y: 6,
        boxShadow: '0 0 0 #E53935',
        transition: { duration: 0.4 },
    },
};

// Parágrafo com fade, slide e blur mais leve
export const paragraphVariants: Variants = {
    hidden: { opacity: 0, x: -30, filter: 'blur(2px)' },
    visible: {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exit: {
        opacity: 0,
        x: 20,
        filter: 'blur(2px)',
        transition: { duration: 0.4 },
    },
};

// Imagem com parallax, fade e escala suave
export const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 1.03, y: 40, filter: 'blur(3px)' },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exit: {
        opacity: 0,
        scale: 1.01,
        y: 20,
        filter: 'blur(3px)',
        transition: { duration: 0.7 },
    },
};