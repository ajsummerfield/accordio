import {
  Accordio,
  AccordioItem,
  AccordioHeading,
  AccordioContent
} from 'accordio';

type AccordioWrapperProps = {
  items: any[]
};

const AccordioWrapper = ({ items }: AccordioWrapperProps) => {
  return (
    <Accordio>
      {items.map((item, index) => (
        <AccordioItem key={index} index={index}>
          <AccordioHeading>{item.heading}</AccordioHeading>
          <AccordioContent>{item.content}</AccordioContent>
        </AccordioItem>
      ))}
    </Accordio>
  );
};

export default AccordioWrapper;