import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {NomadProfileProps} from './types';

const TopNomad: React.FC<NomadProfileProps> = ({
  userId,
  avatarUrl,
  followers,
}) => {
  const formatFollowers = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M followers`;
    }
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k followers`;
    }
    return `${count} followers`;
  };

  return (
    <View style={styles.container}>
      <Image source={{uri: avatarUrl}} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.userId} numberOfLines={1}>
          @{userId}
        </Text>
        <Text style={styles.followers} numberOfLines={1}>
          {formatFollowers(followers)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    marginRight: 16,
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
  },
  info: {
    alignItems: 'center',
    width: '100%',
  },
  userId: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    textAlign: 'center',
  },
  followers: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
    textAlign: 'center',
  },
});

export default TopNomad;
