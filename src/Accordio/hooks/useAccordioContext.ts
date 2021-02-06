import { useContext } from 'react';
import AccordioContext from '../context/AccordioContext';

const useAccordioContext = () => {
  const context = useContext(AccordioContext);
  return context;
};

export default useAccordioContext;
