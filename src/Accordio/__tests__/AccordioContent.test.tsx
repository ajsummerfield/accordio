import React from 'react';
import AccordioContent from '../AccordioContent';
import { shallowRenderer } from './helpers';

describe('AccordioContent Component', () => {
  let component: JSX.Element;

  beforeEach(() => {
    component = <AccordioContent>Hello World</AccordioContent>;
  });

  it('Should match the snapshot', () => {
    const tree = shallowRenderer(component);
    expect(tree).toMatchSnapshot();
  });
});
