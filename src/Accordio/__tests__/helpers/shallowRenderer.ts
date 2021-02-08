import ShallowRenderer from 'react-test-renderer/shallow';

const shallowRenderer = (component: JSX.Element) => {
  const renderer = ShallowRenderer.createRenderer();
  renderer.render(component);
  return renderer.getRenderOutput();
}

export default shallowRenderer;
