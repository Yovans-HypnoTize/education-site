import { createContext, useContext, useState } from 'react';

type CardState = '' | 'login' | 'signup' | 'verifyOtp' | 'forgotPassword';

const CardContext = createContext<{
  cardState: CardState;
  setCardState: (val: CardState) => void;
}>({
  cardState: '',
  setCardState: () => {},
});

export const useCardContext = () => useContext(CardContext);

export const CardProvider = ({ children }: { children: React.ReactNode }) => {
  const [cardState, setCardState] = useState<CardState>('');

  return (
    <CardContext.Provider value={{ cardState, setCardState }} >
      {children}
    </CardContext.Provider>
  );
};
