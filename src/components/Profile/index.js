import React from 'react';
import { View, Image } from 'react-native';

import { ProfileContainer } from './styles';

export default function Profile() {
  return (
    <ProfileContainer>
      <Image source={{ uri: "https://randomuser.me/api/portraits/men/29.jpg" }} />
    </ProfileContainer>
  );
}

