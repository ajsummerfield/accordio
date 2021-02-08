import React from 'react';
import AccordioItemContext from './context/AccordioItemContext';
import useAccordioContext from './hooks/useAccordioContext';
import useAccordioItemContext from './hooks/useAccordioItemContext';

type AccordioItemProps = {
  index: number;
  children: JSX.Element;
};

const AccordioItem = ({ index, children }: AccordioItemProps) => {
  const { activeIndex, setActiveIndex } = useAccordioContext();
  const { setIndex } = useAccordioItemContext();
  const className = `accordio__item 
    ${activeIndex === index ? 'accordio__item--active' : ''}`;

  setIndex(index);

  const handleOnClick = () => {
    setActiveIndex(activeIndex !== index ? index : null);
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
