import React, { useState } from 'react';
import AccordioContext from './context/AccordioContext';

type AccordioProps = {
  children: any;
};

const Accordio = ({ children }: AccordioProps) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const context = { activeIndex, setActiveIndex };

  return (
    <AccordioContext.Provider value={context}>
      <div className="accordio">{children}</div>
    </AccordioContext.Provider>
  );
};

export default Accordio;
