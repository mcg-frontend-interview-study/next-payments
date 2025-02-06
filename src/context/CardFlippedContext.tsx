import {createContext, useContext, useState} from 'react';

type CardFlippedContextType = {
  isFlipped: boolean;
  setIsFlipped: React.Dispatch<React.SetStateAction<boolean>>;
};

const CardFlippedContext = createContext<CardFlippedContextType | null>(null);

export const useCardFlippedContext = () => {
  const context = useContext(CardFlippedContext);

  if (!context) {
    throw new Error('useCardFlippedContext는 CardFlippedContextProvider 내부에서 사용해야합니다.');
  }

  return context;
};

export const CardFlippedContextProvider = ({children}: React.PropsWithChildren) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return <CardFlippedContext.Provider value={{isFlipped, setIsFlipped}}>{children}</CardFlippedContext.Provider>;
};
