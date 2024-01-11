import { forwardRef } from 'react';
import { handleMarginInput } from '@nx-example/types';
import { jsx } from 'react/jsx-runtime';

const Container = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    margin,
    ...rest
  } = props;
  const marginDataAttr = handleMarginInput(margin);
  return /*#__PURE__*/jsx("div", {
    ref: ref,
    ...rest,
    children: marginDataAttr.left
  });
});
Container.displayName = 'Container';
Container.defaultProps = {
  margin: 0
};

export { Container, Container as default };
