import { type ComponentPropsWithRef } from 'react';
import { type Margin } from '@nx-example/types';
export interface ContainerProps extends ComponentPropsWithRef<'div'> {
    margin?: Margin;
}
export declare const Container: import("react").ForwardRefExoticComponent<Omit<ContainerProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export default Container;
