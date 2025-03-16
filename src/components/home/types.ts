export interface SectionHeaderProps {
  title: string;
  onSeeAllPress: () => void;
}

export interface TrendingHashtagsProps {
  tag: string;
  imageUrl: string;
  time: number;
}

export interface TopCommunitiesProps {
  name: string;
  imageUrl: string;
  postsCount: number;
}

export interface NomadProfileProps {
  userId: string;
  avatarUrl: string;
  followers: number;
}

export interface TopSearchOfTheDayProps {
  imageUrl: string;
  hashtag: string;
} 