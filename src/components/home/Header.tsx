import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  Platform,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface SearchBarProps {
  onSearch: (text: string) => void;
  placeholder?: string;
}

const Header: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = 'Search destinations, people, communities...',
}) => {
  const [searchText, setSearchText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    setSearchText('');
    onSearch('');
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    onSearch(searchText);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Discover the world</Text>
      <View
        style={[styles.searchContainer, isFocused && styles.containerFocused]}>
        <Icon
          name="search-outline"
          size={20}
          color="#666666"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.input}
          value={searchText}
          onChangeText={setSearchText}
          placeholder={placeholder}
          placeholderTextColor="#666666"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onSubmitEditing={handleSubmit}
          returnKeyType="search"
          clearButtonMode="never"
          autoCapitalize="none"
          autoCorrect={false}
        />
        {searchText.length > 0 && (
          <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
            <Icon name="close-circle" size={20} color="#666666" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#40676F',
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 48,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  containerFocused: {
    borderColor: '#40676F',
    shadowOpacity: 0.2,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#1a1a1a',
    paddingVertical: Platform.OS === 'ios' ? 8 : 6,
    paddingRight: 8,
  },
  clearButton: {
    padding: 4,
  },
});

export default Header;
