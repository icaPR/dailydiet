import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import {
  Container,
  Content,
  ContentInput,
  DividLine,
  Header,
  Input,
  InputDate,
  Label,
  Title,
} from "./styles";
import { SelectSide } from "@components/SelectSide";
import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { createMeal } from "@storage/Meal/createMeal";
import { MealStorageDTO } from "@storage/Meal/MealStorageDTO";
import * as yup from "yup";
import { Alert } from "react-native";

const newMealSchema = yup.object({
  nameMeals: yup.string().required("Nome é obrigatória."),
  description: yup.string(),
  date: yup
    .string()
    .matches(/^\d{2}\/\d{2}\/\d{4}$/, "Formato de data inválido (DD/MM/YYYY).")
    .required("Data é obrigatória"),
  time: yup
    .string()
    .matches(/^\d{2}:\d{2}$/, "Formato de hora inválido (HH:mm).")
    .required("Hora é obrigatória"),
  status: yup.boolean().required("Escolha o status dessa refeição."),
});

export function NewMeal() {
  const [selectedActive, setSelectedActive] = useState<boolean>();
  const [selectedDisable, setSelectedDisable] = useState<boolean>();
  const [meal, setMeal] = useState<MealStorageDTO>({} as MealStorageDTO);
  const navigation = useNavigation();

  /*
  const [datePoint, setDatePoint] = useState<string>();
  const datePoint = meal.date?.replace(/\//g, ".");
  setDatePoint(datePoint);
*/

  const route = useRoute();

  function selectRatio(buttonName: string) {
    if (buttonName === "Sim") {
      setMeal({ ...meal, status: true });
      setSelectedActive(true);
      setSelectedDisable(false);
    } else {
      if (buttonName === "Não") {
        setMeal({ ...meal, status: false });
        setSelectedActive(false);
        setSelectedDisable(true);
      }
    }
  }

  function handleHome() {
    navigation.navigate("home");
  }

  function handleMessage() {
    navigation.navigate("messageScreen", meal.status);
  }

  async function handleAddMeal(meal: MealStorageDTO) {
    try {
      await newMealSchema.validate(meal, { abortEarly: false });
      await createMeal(meal);
      handleMessage();
    } catch (validationError) {
      const errors = validationError.errors || [validationError.message];
      Alert.alert("Erro", errors.join("\n"));
    }
  }

  return (
    <Container>
      <Header>
        <ButtonIcon icon="arrow-left" type="NEUTRAL" onPress={handleHome} />
        <Title>Nova refeição</Title>
      </Header>
      <Content>
        <Label>Nome</Label>
        <Input
          value={meal?.nameMeals}
          onChangeText={(e) => setMeal({ ...meal, nameMeals: e })}
        />
        <Label>Descrição</Label>
        <Input
          editable
          multiline
          numberOfLines={4}
          maxLength={80}
          onChangeText={(e) => setMeal({ ...meal, description: e })}
        />
        <DividLine>
          <Label>Data</Label>
          <Label>Hora</Label>
        </DividLine>
        <DividLine>
          <InputDate onChangeText={(e) => setMeal({ ...meal, date: e })} />
          <InputDate onChangeText={(e) => setMeal({ ...meal, time: e })} />
        </DividLine>

        <Label>Está dentro da dieta ?</Label>
        <DividLine>
          <SelectSide
            title="Sim"
            selected={selectedActive}
            iconName="circle-medium"
            typeName="POSITIVE"
            functionSelect={() => selectRatio("Sim")}
          />
          <SelectSide
            title="Não"
            selected={selectedDisable}
            iconName="circle-medium"
            typeName="NEGATIVE"
            functionSelect={() => selectRatio("Não")}
          />
        </DividLine>
        <ContentInput>
          <Button
            title="Cadastrar refeição"
            onPress={() => handleAddMeal(meal)}
          />
        </ContentInput>
      </Content>
    </Container>
  );
}
