import React, { useEffect } from 'react';
import AccordioItemContext from '../context/AccordioItemContext';
import useAccordioContext from '../hooks/useAccordioContext';
import useAccordioItemContext from '../hooks/useAccordioItemContext';

type AccordioItemProps = {
  index: number;
  children: any;
};

const AccordioItem = ({ index, children }: AccordioItemProps) => {
  const { activeIndex, setActiveIndex } = useAccordioContext();
  const { setIndex } = useAccordioItemContext();
  const className = `accordio__item 
    ${activeIndex === index ? 'accordio__item--active' : ''}`;

  useEffect(() => {
    setIndex(index);
  }, [index]);

  const handleOnClick = () => {
    setActiveIndex(activeIndex !== index ? index : -1);
  };

  const context = {
    index: index,
    setIndex: setIndex,
  };

  return (
    <AccordioItemContext.Provider value={context}>
      <div className={className} onClick={handleOnClick}>
        {children}
      </div>
    </AccordioItemContext.Provider>
  );
};

export default AccordioItem;
