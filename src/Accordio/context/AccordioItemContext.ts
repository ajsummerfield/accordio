import React from 'react';

const AccordioItemContext = React.createContext({
  index: null,
  setIndex: (index: number) => {}
});

export default AccordioItemContext;
