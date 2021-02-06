import React from 'react';

type AccordioHeadingProps = {
  children: any
};

const AccordioHeading = ({ children }: AccordioHeadingProps) => {
  return (
    <div className="accordio__heading">
      {children}
    </div>
  );
};

export default AccordioHeading;
