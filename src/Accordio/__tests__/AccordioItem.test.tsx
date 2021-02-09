import React from 'react';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { shallowRenderer } from './helpers';
import AccordioContext from '../context/AccordioContext';
import { AccordioItem, AccordioHeading, AccordioContent } from '../index';

describe('AccordioItem Component', () => {
  let component: JSX.Element;

  describe('when rendered', () => {
    beforeEach(() => {
      component = (
        <AccordioItem index={0}>
          <AccordioHeading>Heading 1</AccordioHeading>
          <AccordioContent>Content 1</AccordioContent>
        </AccordioItem>
      );
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
      expect(container.firstChild).toHaveClass('accordio__item--active');
    });

    it('should not set the second item as active', () => {
      const { container } = render(component);
      expect(container.lastChild).not.toHaveClass('accordio__item--active');
    });
  });

  describe('when an inactive item is clicked on', () => {
    const context = {
      activeIndex: -1,
      setActiveIndex: jest.fn()
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

      render(component);
    });

    it('should set the first item as active', () => {
      userEvent.click(screen.getByText('Heading 1'));
      expect(context.setActiveIndex).toHaveBeenCalledWith(0);
    });
  });

  describe('when an active item is clicked on', () => {
    const context = {
      activeIndex: 1,
      setActiveIndex: jest.fn()
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

      render(component);
    });

    it('should set the second item as inactive', () => {
      userEvent.click(screen.getByText('Heading 2'));
      expect(context.setActiveIndex).toHaveBeenCalledWith(-1);
    });
  });
});
