import { useCallback } from 'react';

export default function PageTransition({ children }) {
  const transitionOut = useCallback(() => {
    
  }, []);

  return (
    <AnimatePresence onExitComplete={transitionOut}>{children}</AnimatePresence>
  );
}
