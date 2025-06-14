import { motion, Variants } from 'framer-motion';

// Função para dividir texto em spans para animação letra por letra
export const splitText = (text: string) =>
    text.split('').map((char, index) => (
        <motion.span
            key={index}
            variants={letterVariants}
            style={{ display: 'inline-block' }}
        >
            {char === ' ' ? '\u00A0' : char}
        </motion.span>
    ));

// Variantes para container com stagger
export const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

// Variantes para animação letra por letra
export const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: 'easeOut',
        },
    },
};

// Variantes para links de navegação ou elementos com deslocamento lateral
export const navLinkVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

// Variantes para botões com efeito "pop"
export const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
            type: 'spring',
            stiffness: 120,
        },
    },
};

// Variantes para parágrafo com deslocamento lateral
export const paragraphVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: 'easeOut',
        },
    },
};

// Variantes para imagem de fundo com efeito parallax
export const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 1.2, y: 50 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 1.5,
            ease: [0.6, 0.01, 0.4, 1],
        },
    },
};