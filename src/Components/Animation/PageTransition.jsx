import { useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';

export default function PageTransition({ children }) {
  const transitionOut = useCallback(() => {
    
  }, []);

  return (
    <AnimatePresence onExitComplete={transitionOut}>{children}</AnimatePresence>
  );
}
