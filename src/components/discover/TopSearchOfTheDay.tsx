import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {TopSearchOfTheDayProps} from './types';

const {width} = Dimensions.get('window');

const TopSearchOfTheDay: React.FC<TopSearchOfTheDayProps> = ({
  imageUrl,
  hashtag,
}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: imageUrl}}
        style={styles.imageBackground}
        imageStyle={styles.image}>
        <View style={styles.overlay}>
          <Text style={styles.hashtag}>#{hashtag}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 32,
    height: 200,
    marginHorizontal: 16,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  image: {
    borderRadius: 16,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 8,
  },
  hashtag: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
});

export default TopSearchOfTheDay;
