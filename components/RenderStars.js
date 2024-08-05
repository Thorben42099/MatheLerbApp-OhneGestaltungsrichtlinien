import React from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../styles';

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 3; i++) {
    stars.push(
      <View key={i} style={styles.starWrapper}>
        <FontAwesome name="star-o" size={20} color="#FFD700" />
        {rating >= i ? (
          <FontAwesome name="star" size={20} color="#FFD700" style={styles.starFilled} />
        ) : rating >= i - 0.5 ? (
          <FontAwesome name="star-half-full" size={20} color="#FFD700" style={styles.starFilled} />
        ) : null}
      </View>
    );
  }
  return stars;
};

export default renderStars;
