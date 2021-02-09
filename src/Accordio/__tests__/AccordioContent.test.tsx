import React from 'react';
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import { shallowRenderer } from './helpers';
import AccordioContext from '../context/AccordioContext';
import { AccordioItem, AccordioHeading, AccordioContent } from '../index';

describe('AccordioContent Component', () => {
  let component: JSX.Element;

  describe('when rendered', () => {
    beforeEach(() => {
      component = <AccordioContent>Hello World</AccordioContent>;
    });
  
    it('Should match the snapshot', () => {
      const tree = shallowRenderer(component);
      expect(tree).toMatchSnapshot();
    });
  });

  describe('when the activeItem in context matches the items index', () => {
    const context = {
      activeIndex: 0,
      setActiveIndex: jest.fn(),
    };
    
    beforeEach(() => {
      component = (
        <AccordioContext.Provider value={context}>
          <AccordioItem index={0}>
            <AccordioHeading>Heading 1</AccordioHeading>
            <AccordioContent>Content 1</AccordioContent>
          </AccordioItem>
          <AccordioItem index={1}>
            <AccordioHeading>Heading 2</AccordioHeading>
            <AccordioContent>Content 2</AccordioContent>
          </AccordioItem>
        </AccordioContext.Provider>
      );
    });

    it('should set the first item as active', () => {
      const { container } = render(component);
      expect(container.firstChild).not.toHaveStyle('max-height: 0');
    });
  });
});
