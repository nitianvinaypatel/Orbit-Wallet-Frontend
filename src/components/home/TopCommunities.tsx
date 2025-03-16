import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const ITEM_WIDTH = width * 0.4;

interface Props {
  name: string;
  imageUrl: string;
  postsPerDay: number;
}

const TopCommunities: React.FC<Props> = ({name, imageUrl, postsPerDay}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: imageUrl}} style={styles.image} resizeMode="cover" />
      <View style={styles.postsOverlay}>
        <Text style={styles.postsText}>{postsPerDay} posts/day</Text>
      </View>
      <View style={styles.titleOverlay}>
        <Text style={styles.titleLabel}>Places of</Text>
        <Text style={styles.titleText}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
    marginRight: 12,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  postsOverlay: {
    position: 'absolute',
    top: 1,
    right: 1,
    paddingHorizontal: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 4,
    borderBottomLeftRadius: 16,
  },
  postsText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#ffffff',
  },
  titleOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  titleLabel: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: '400',
  },
  titleText: {
    fontSize: 32,
    color: '#ffffff',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default TopCommunities;
