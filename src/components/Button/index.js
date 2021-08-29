import React from 'react';

import { Btn, BtnText } from './styles';

export default function Button({ text, onPress, bgcolor }) {
  return (
    <Btn
      onPress={onPress}
      bgcolor={bgcolor}
    >
      <BtnText>{text}</BtnText>
    </Btn>);
}