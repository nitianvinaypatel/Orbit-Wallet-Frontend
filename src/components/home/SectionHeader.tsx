import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {SectionHeaderProps} from './types';

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  onSeeAllPress,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onSeeAllPress}>
        <Text style={styles.seeAllText}>See all</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#40676F',
  },
  seeAllText: {
    fontSize: 16,
    color: '#40676F',
    fontWeight: '500',
  },
});

export default SectionHeader;
