import React from 'react';
import AccordioHeading from '../AccordioHeading';
import { shallowRenderer } from './helpers';

describe('AccordioHeading Component', () => {
  let component: JSX.Element;

  describe('when rendered', () => {
    beforeEach(() => {
      component = <AccordioHeading>Hello World</AccordioHeading>;
    });
  
    it('Should match the snapshot', () => {
      const tree = shallowRenderer(component);
      expect(tree).toMatchSnapshot();
    });
  });
});
