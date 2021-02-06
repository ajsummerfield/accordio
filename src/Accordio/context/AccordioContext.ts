import React from 'react';

const AccordioContext = React.createContext({
  activeIndex: -1,
  setActiveIndex: (index: number) => {}
});

export default AccordioContext;
