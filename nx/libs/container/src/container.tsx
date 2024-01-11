import { type ComponentPropsWithRef, forwardRef } from 'react';
import { type Margin, handleMarginInput } from '@nx-example/types';

export interface ContainerProps extends ComponentPropsWithRef<'div'> {
  margin?: Margin;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
  const { margin, ...rest } = props;
  const marginDataAttr = handleMarginInput(margin);

  return (
    <div ref={ref} {...rest}>
      {marginDataAttr.left}
    </div>
  );
});

Container.displayName = 'Container';

Container.defaultProps = {
  margin: 0,
};

export default Container;
