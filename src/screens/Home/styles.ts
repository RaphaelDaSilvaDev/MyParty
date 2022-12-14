import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#292929",
  },
  Title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f5f5f5",
    paddingTop: 48,
  },
  Description: {
    fontSize: 18,
    color: "#ccc",
    marginTop: 16,
  },
  List: {
    marginTop: 16,
  },
  Button: {
    width: 56,
    height: 56,
    backgroundColor: "#31cf67",
    borderRadius: 5,

    alignItems: "center",
    justifyContent: "center",

    position: "absolute",
    bottom: 20,
    right: 24,
  },
  ButtonText: {
    fontSize: 20,
    color: "#f5f5f5",
  },
  EmptyList: {
    flex: 1,
    alignItems: "center",
  },
  EmptyListText: {
    width: "80%",
    textAlign: "center",
    fontSize: 18,
    color: "#f5f5f5",
  },
  ErrorText: {
    color: "#ff0000",
    textAlign: "center",
  },
  Loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
