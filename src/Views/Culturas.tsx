import React from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import { List, Text } from "react-native-paper";

const DATA = [
  {
    id: "1",
    title: "Cebolinha",
  },
  {
    id: "2",
    title: "Coentro",
  },
  {
    id: "3",
    title: "Hortelã",
  },
];

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View>
    <Text>{title}</Text>
  </View>
);

export default function Culturas({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text variant="bodySmall">Culturas Lista</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              navigation.navigate("CadastroCultura", { itemId: item.id })
            }
          >
            {/* <Item title={item.title} /> */}
            <List.Item title={item.title} />
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FFF4",
    gap: 4,
    paddingHorizontal: 8,
  },
  headLineStyle: {
    padding: 8,
    backgroundColor: "#fff",
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
  },
  headerStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
