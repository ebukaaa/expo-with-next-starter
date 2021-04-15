import React from "react";
import { TextInput } from "react-native";

export function onChange(setValue, id, { nativeEvent: { text } }) {
  if (!id) {
    setValue(text);
    return;
  }
  setValue((old) => ({
    ...old,
    [id]: text,
  }));
}

export { React, TextInput };
