import * as React from "react";
import { StyleSheet } from "react-native";
import { Snackbar } from "react-native-paper";

export default function CustomSnackBar() {
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  return (
    <Snackbar
      visible={visible}
      onDismiss={onDismissSnackBar}
      action={{
        label: "Undo",
        onPress: () => {
          // Do something
        },
      }}
    >
      Hey there! I'm a Snackbar.
    </Snackbar>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});
