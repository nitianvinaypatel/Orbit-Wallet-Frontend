import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {TrendingHashtagsProps} from './types';

const {width} = Dimensions.get('window');
const ITEM_WIDTH = width * 0.4;

const TrendingHashtags: React.FC<TrendingHashtagsProps> = ({
  tag,
  imageUrl,
  time,
}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: imageUrl}}
        style={styles.imageBackground}
        imageStyle={styles.image}>
        <View style={styles.overlay}>
          <Text style={styles.hashtagText}>#{tag}</Text>
          <Text style={styles.timeText}>{time}m</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
    marginRight: 12,
    borderRadius: 12,
    overflow: 'hidden',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  image: {
    borderRadius: 12,
  },
  overlay: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hashtagText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  timeText: {
    color: '#ffffff',
    fontSize: 12,
    marginTop: 4,
  },
});

export default TrendingHashtags;
