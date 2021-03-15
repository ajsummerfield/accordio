import { useContext } from 'react';
import AccordioContext, { AccordioContextValue } from '../context/AccordioContext';

const useAccordioContext = () => {
  const context = useContext<AccordioContextValue>(AccordioContext);
  return context;
};

export default useAccordioContext;
