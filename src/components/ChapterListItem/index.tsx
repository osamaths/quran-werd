import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {APITypes} from '../../types/api.types';
import {TOUCHABLE_OPACITY} from '../../utils/constants';
import {SHADOWS} from '../../styles/shadow.style';
import {useNavigation} from '@react-navigation/native';
import {ChaptesrProps} from '../../routes/ChaptersStack';

interface IProps {
  chapter: APITypes.Chapter;
}

export default function ChapterListItem({chapter}: IProps) {
  const {
    id: chapterNumber,
    name_simple,
    name_arabic,
    verses_count,
    pages,
    revelation_place,
  } = chapter;
  const [startPage] = pages;

  const navigation = useNavigation<ChaptesrProps['navigation']>();

  const handleChapterPress = () =>
    navigation.navigate('Page', {
      chapterNumber,
    });

  return (
    <TouchableOpacity
      style={[styles.container]}
      activeOpacity={TOUCHABLE_OPACITY}
      onPress={handleChapterPress}>
      <View style={styles.row}>
        <Text style={styles.chapterNumber}>{chapterNumber}</Text>
        <Text style={styles.name}>{name_simple}</Text>
        <Text style={[styles.name, styles.arabicName]}>{name_arabic}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.info}>Ayat: {verses_count}</Text>
        <Text style={styles.info}>Page: {startPage}</Text>
        <Text style={styles.info}>{revelation_place}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#343a40',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 16,
    gap: 4,
    ...SHADOWS.regular,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 16,
  },
  chapterNumber: {
    color: '#ddd',
    fontSize: 14,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ddd',
  },
  arabicName: {
    flexGrow: 1,
    textAlign: 'right',
  },
  info: {
    fontSize: 16,
    fontWeight: '400',
    color: '#ddd',
  },
});
