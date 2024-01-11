'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var types = require('@nx-example/types');

const Container = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
    margin,
    ...rest
  } = props;
  const marginDataAttr = types.handleMarginInput(margin);
  return jsxRuntime.jsx("div", {
    ref: ref,
    ...rest,
    children: marginDataAttr.left
  });
});
Container.displayName = 'Container';
Container.defaultProps = {
  margin: 0
};

exports.Container = Container;
exports["default"] = Container;
