import React from 'react';
import {Content} from '../../components';

export default function ContentContainer({copy}) {
  return (
    <Content>
      {
        copy.map((item, i) => {
          return (
            <Content.Copy key={i + item}>
              {item}
            </Content.Copy>
          )
        })
      }
    </Content>
  );
};
