import React from 'react';
import AccordioItem from '../AccordioItem';
import { shallowRenderer } from './helpers';

describe('AccordioItem Component', () => {
  let component: JSX.Element;

  beforeEach(() => {
    component = <AccordioItem index={0}>Hello World</AccordioItem>;
  });

  it('Should match the snapshot', () => {
    const tree = shallowRenderer(component);
    expect(tree).toMatchSnapshot();
  });
});
