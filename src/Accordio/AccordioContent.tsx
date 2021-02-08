import React, { useEffect, useRef, useState } from 'react';
import useAccordioContext from './hooks/useAccordioContext';
import useAccordioItemContext from './hooks/useAccordioItemContext';

type AccordioContentProps = {
  children: JSX.Element;
};

const AccordioContent = ({ children }: AccordioContentProps) => {
  const [height, setHeight] = useState(0);
  const { activeIndex } = useAccordioContext();
  const { index } = useAccordioItemContext();
  const panel = useRef(null);

  useEffect(() => {
    setHeight(activeIndex === index ? panel.current.scrollHeight : 0);
  }, [activeIndex]);

  return (
    <div
      className="accordio__panel"
      style={{ maxHeight: `${height}px` }}
      ref={panel}
    >
      <div className="accordio__content">{children}</div>
    </div>
  );
};

export default AccordioContent;
