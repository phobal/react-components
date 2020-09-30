import React from 'react';
// @ts-ignore
import { Map, ControlBar } from '@pansy/react-amap';

export default () => {
  return (
    <div>
      <div style={{width: '100%', height: 500}}>
        <Map zoom={6}>
          <ControlBar
            visiable={true}
            offset={[10, 10]}
            position="RB"
          />
        </Map>
      </div>
    </div>
  )
}
