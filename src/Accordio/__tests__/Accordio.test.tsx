import React from 'react';
import Accordio from '../Accordio';
import { shallowRenderer } from './helpers';

describe('Accordio Component', () => {
  let component: JSX.Element;

  describe('when rendered', () => {
    beforeEach(() => {
      component = <Accordio>Hello World</Accordio>;
    });
  
    it('Should match the snapshot', () => {
      const tree = shallowRenderer(component);
      expect(tree).toMatchSnapshot();
    });
  });
});
