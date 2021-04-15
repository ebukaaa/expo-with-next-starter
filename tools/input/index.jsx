import { React, onChange, TextInput } from "./utils";

export function useInput({
  id,
  style,
  placeholder,
  value,
  setValue,
  onSubmitEditing,
}) {
  return (
    <TextInput
      style={style}
      defaultValue={value}
      placeholder={placeholder}
      onChange={onChange.bind(this, setValue, id)}
      onSubmitEditing={onSubmitEditing}
    />
  );
}
