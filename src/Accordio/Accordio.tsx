import React, { useState } from 'react';
import AccordioContext from './context/AccordioContext';

type AccordioProps = {
  children: JSX.Element;
};

const Accordio = ({ children }: AccordioProps) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const context = { activeIndex, setActiveIndex };

  return (
    <AccordioContext.Provider value={context}>
      <div className="accordio">{children}</div>
    </AccordioContext.Provider>
  );
};

export default Accordio;
