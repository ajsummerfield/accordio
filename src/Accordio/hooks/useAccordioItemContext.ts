import { useContext } from 'react';
import AccordioItemContext from '../context/AccordioItemContext';

const useAccordioItemContext = () => {
  const context = useContext(AccordioItemContext);
  return context;
};

export default useAccordioItemContext;
