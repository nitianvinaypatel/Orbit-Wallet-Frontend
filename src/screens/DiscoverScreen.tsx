import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  ListRenderItem,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SectionHeader from '../components/home/SectionHeader';
import TrendingHashtags from '../components/home/TrendingHashtags';
import TopCommunities from '../components/home/TopCommunities';
import TopNomad from '../components/home/TopNomad';
import TopSearchOfTheDay from '../components/home/TopSearchOfTheDay';
import Header from '../components/home/Header';

// Mock data
const FEATURED_DATA = {
  imageUrl: 'https://picsum.photos/800/400',
  hashtag: 'Top search of the day',
};

const HASHTAGS_DATA = Array.from({length: 10}, (_, i) => ({
  id: `${i}`,
  tag: [
    'explore',
    'journey',
    'roadway',
    'trips',
    'roam',
    'remote',
    'nomad',
    'globet',
    'escape',
    'voyage',
  ][i],
  imageUrl: `https://picsum.photos/200/200?random=${i}`,
  time: Number((Math.random() * 5 + 1).toFixed(1)),
}));

const COMMUNITIES_DATA = Array.from({length: 10}, (_, i) => ({
  id: `${i}`,
  name: [
    'France',
    'Taiwan',
    'Sweden',
    'Brazil',
    'Mexico',
    'Latvia',
    'Israel',
    'Jordan',
    'Turkey',
    'Greece',
  ][i],
  imageUrl: `https://picsum.photos/300/200?random=${i}`,
  postsPerDay: Math.floor(Math.random() * 500) + 100,
}));

const NOMADS_DATA = [
  {
    id: '1',
    userId: 'nomadicmatt',
    avatarUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
    followers: 450000,
  },
  {
    id: '2',
    userId: 'expertvagabond',
    avatarUrl: 'https://randomuser.me/api/portraits/men/45.jpg',
    followers: 380000,
  },
  {
    id: '3',
    userId: 'theblondeabroad',
    avatarUrl: 'https://randomuser.me/api/portraits/women/32.jpg',
    followers: 350000,
  },
  {
    id: '4',
    userId: 'nomadcapitalist',
    avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    followers: 340000,
  },
  {
    id: '5',
    userId: 'heyciara',
    avatarUrl: 'https://randomuser.me/api/portraits/women/45.jpg',
    followers: 310000,
  },
  {
    id: '6',
    userId: 'oneikatraveller',
    avatarUrl: 'https://randomuser.me/api/portraits/women/55.jpg',
    followers: 270000,
  },
  {
    id: '7',
    userId: 'lostleblanc',
    avatarUrl: 'https://randomuser.me/api/portraits/men/49.jpg',
    followers: 250000,
  },
  {
    id: '8',
    userId: 'wheresmollie',
    avatarUrl: 'https://randomuser.me/api/portraits/women/78.jpg',
    followers: 210000,
  },
  {
    id: '9',
    userId: 'thebudgetmindedtraveler',
    avatarUrl: 'https://randomuser.me/api/portraits/women/89.jpg',
    followers: 180000,
  },
  {
    id: '10',
    userId: 'glographics',
    avatarUrl: 'https://randomuser.me/api/portraits/women/12.jpg',
    followers: 150000,
  },
];

const DiscoverScreen: React.FC = () => {
  // Will be used for filtering content when search is implemented
  const [_searchQuery, setSearchQuery] = useState('');

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    // TODO: Implement search functionality
    console.log('Searching for:', text);
  };

  const renderHashtagItem: ListRenderItem<(typeof HASHTAGS_DATA)[0]> = ({
    item,
  }) => (
    <TrendingHashtags
      tag={item.tag}
      imageUrl={item.imageUrl}
      time={item.time}
    />
  );

  const renderCommunityItem: ListRenderItem<(typeof COMMUNITIES_DATA)[0]> = ({
    item,
  }) => (
    <TopCommunities
      name={item.name}
      imageUrl={item.imageUrl}
      postsPerDay={item.postsPerDay}
    />
  );

  const renderNomadItem: ListRenderItem<(typeof NOMADS_DATA)[0]> = ({item}) => (
    <TopNomad
      userId={item.userId}
      avatarUrl={item.avatarUrl}
      followers={item.followers}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboardAvoidingView}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps="handled">
          {/* Header */}
          <View style={styles.header}>
            <Header onSearch={handleSearch} />
          </View>

          {/* Featured Item */}
          <TopSearchOfTheDay {...FEATURED_DATA} />

          {/* Trending Hashtags */}
          <SectionHeader title="Trending Hashtags" onSeeAllPress={() => {}} />
          <FlatList
            data={HASHTAGS_DATA}
            renderItem={renderHashtagItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
            keyExtractor={item => item.id}
          />

          {/* Top Communities */}
          <SectionHeader title="Top Communities" onSeeAllPress={() => {}} />
          <FlatList
            data={COMMUNITIES_DATA}
            renderItem={renderCommunityItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
            keyExtractor={item => item.id}
          />

          {/* Top Nomads */}
          <SectionHeader title="Top Nomads" onSeeAllPress={() => {}} />
          <FlatList
            data={NOMADS_DATA}
            renderItem={renderNomadItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 24,
  },
  header: {
    padding: 16,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
});

export default DiscoverScreen;
