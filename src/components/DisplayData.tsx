import { Feather } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, useTheme } from "react-native-paper";

interface Props {
  label?: string;
  iconName: any;
  data?: string | number;
}

export default function DisplayData({ iconName, label, data }: Props) {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.colors.surfaceVariant },
      ]}
    >
      <Text style={styles.labelStyle}>{label}</Text>
      <Avatar.Icon
        size={54}
        icon={({ color, size }) => {
          return (
            <Feather name={iconName} color={theme.colors.primary} size={size} />
          );
        }}
        style={{ backgroundColor: "transparent" }}
      />
      <Text style={styles.dataStyle}>{data}</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexGrow: 1,
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
