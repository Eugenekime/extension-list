export const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const itemVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0.5,
    y: -20,
  },
};
