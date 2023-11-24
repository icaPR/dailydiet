import { Icon } from "@components/Icon";
import { Container, NameButton, SelectButton, SelectedButton } from "./styles";
import { useState } from "react";
import { ColorStyle } from "src/@types/styled";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type PropsSelectSide = {
  title: string;
  iconName?: keyof typeof MaterialCommunityIcons.glyphMap;
  typeName: ColorStyle;
  selected: boolean | undefined;
  functionSelect: (nameButton: string) => void;
};

export function SelectSide({
  title,
  iconName,
  typeName,
  selected,
  functionSelect,
}: PropsSelectSide) {
  return (
    <Container>
      {selected === true ? (
        <SelectedButton type={typeName} onPress={() => functionSelect(title)}>
          <Icon iconName={iconName} type={typeName} />
          <NameButton>{title}</NameButton>
        </SelectedButton>
      ) : (
        <SelectButton onPress={() => functionSelect(title)}>
          <Icon iconName={iconName} type={typeName} />
          <NameButton>{title}</NameButton>
        </SelectButton>
      )}
    </Container>
  );
}
