import React, { useImperativeHandle } from 'react';
import { MapChildProps } from '../types/global';
import useControlBar from './use-control-bar';

export interface ControlBarProps extends
  MapChildProps,
  AMap.ControlBar.Options {}

type ControlBarType = React.ForwardRefRenderFunction<AMap.ControlBar, ControlBarProps>;

const ControlBar: ControlBarType = (props, ref) => {
  const { controlBar } = useControlBar(props);

  useImperativeHandle(
    ref,
    () => (controlBar as AMap.ControlBar),
    [controlBar]
  );

  return null;
};

export default React.forwardRef(ControlBar);
