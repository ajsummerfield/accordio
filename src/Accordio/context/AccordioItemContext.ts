import React from 'react';

interface AccordioItemContextValue {
  index: number;
  setIndex: (index: number) => void;
}

const contextValue: AccordioItemContextValue = {
  index: -1,
  setIndex: (index: number) => {}
};

const AccordioItemContext = React.createContext<AccordioItemContextValue>(contextValue);

export default AccordioItemContext;
