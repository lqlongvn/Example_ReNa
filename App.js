import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';

const DATA = [
  {
    id: '1',
    iconAvatar: require("./assets/exit.jpg"),
    title: 'First Item',
  },
  {
    id: '2',
    iconAvatar: require("./assets/exit_1.png"),
    title: 'Second Item',
  },
  {
    id: '3',
    iconAvatar: require("./assets/see_detail.png"),
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <View>
    <Image source={item.iconAvatar} style={styles.avatarStory} />
    <Item title={item.title} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  avatarStory: {
    width: 50,
    height: 50,
  },
});

export default App;
