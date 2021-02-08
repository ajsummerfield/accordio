import React from 'react';

type AccordioHeadingProps = {
  children: JSX.Element;
};

const AccordioHeading = ({ children }: AccordioHeadingProps) => {
  return (
    <div className="accordio__heading">
      {children}
      <div className="accordio__chevron"></div>
    </div>
  );
};

export default AccordioHeading;
