import React, { useState, createContext } from 'react'

export const AnimationContext = createContext();

export default function AnimationProvider({ children }) {
  const [animate, setAnimate] = useState(() => () => {});

  return (
    <AnimationContext.Provider value={{ animate }}>
      {children}
    </AnimationContext.Provider>
  );
}