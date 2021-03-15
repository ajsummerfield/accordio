import { useContext } from 'react';
import AccordioItemContext, { AccordioItemContextValue } from '../context/AccordioItemContext';

const useAccordioItemContext = () => {
  const context = useContext<AccordioItemContextValue>(AccordioItemContext);
  return context;
};

export default useAccordioItemContext;
