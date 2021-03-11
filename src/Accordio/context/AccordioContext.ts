import React from 'react';

interface AccordioContextValue {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const contextValue: AccordioContextValue = {
  activeIndex: -1,
  setActiveIndex: (index: number) => {}
};

const AccordioContext = React.createContext<AccordioContextValue>(contextValue);

export default AccordioContext;
