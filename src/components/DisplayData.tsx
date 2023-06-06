import { Feather } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";

interface Props {
  label?: string;
  iconName: any;
  data?: string | number | null;
}

export default function DisplayData({ iconName, label, data }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>{label}</Text>
      <Avatar.Icon
        size={54}
        icon={({ color, size }) => {
          return <Feather name={iconName} color={color} size={size} />;
        }}
        color="#000"
        style={{ backgroundColor: "transparent" }}
      />
      <Text style={styles.dataStyle}>{data}</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7CD8A4",
    padding: 28,
    gap: 8,
  },
  labelStyle: {
    textAlign: "center",
    fontSize: 16,
  },
  dataStyle: {
    textAlign: "center",
    fontSize: 32,
  },
});
