# Orbit-Wallet frontend Assignment - React Native

A React Native application featuring a search screen with trending hashtags, top communities, and other dynamic content.

## Features

- **Search Functionality**: Search bar to find destinations, people, and communities
- **Trending Hashtags**: Horizontally scrollable section displaying popular hashtags
- **Top Communities**: Horizontally scrollable section showcasing community content
- **Top Nomads**: Horizontally scrollable section featuring popular user profiles
- **Featured Content**: "Top search of the day" section
- **Bottom Tab Navigation**: Full app navigation with Home, Discover, Create, Community, and Profile tabs

## Screenshots

Screenshot_2025_0316_115804.jpg

## Installation

### Prerequisites

- Node.js (>= 14.0.0)
- npm
- React Native CLI
- Android Studio / Xcode

### Setup

1. Clone the repository:

```bash
git clone https://github.com/nitianvinaypatel/Orbit-Wallet-Frontend.git

```

2. Install dependencies:

```bash
npm install

```

3. Run on Android:

```bash
npm run android

```

4. Run on iOS:

```bash
npm run ios

```

## Project Structure

```
src/
├── components/
│   └── home/
│       ├── Header.tsx
│       ├── SectionHeader.tsx
│       ├── TopCommunities.tsx
│       ├── TopNomad.tsx
│       ├── TopSearchOfTheDay.tsx
│       ├── TrendingHashtags.tsx
│       └── types.ts
├── navigation/
│   ├── BottomTabNavigator.tsx
│   └── types.ts
└── screens/
    ├── CommunityScreen.tsx
    ├── CreateScreen.tsx
    ├── DiscoverScreen.tsx
    ├── HomeScreen.tsx
    └── ProfileScreen.tsx
```

## Technical Details

- **Language**: TypeScript
- **Framework**: React Native
- **Navigation**: React Navigation v6
- **Icons**: Ionicons
- **Image Source**: Random images from picsum.photos

## Design Principles

- **Modularity**: Components are designed to be reusable and follow DRY principles
- **Responsiveness**: UI adapts to different screen sizes using relative dimensions
- **Platform Consistency**: Specific adjustments for iOS and Android platforms
- **Type Safety**: Full TypeScript implementation with interfaces for props
