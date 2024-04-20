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
import { useCallback, useState } from "react";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { createMeal } from "@storage/Meal/createMeal";
import { MealStorageDTO } from "@storage/Meal/MealStorageDTO";
import * as yup from "yup";
import { Alert } from "react-native";
import { removeMeal } from "@storage/Meal/removeMeal";

type RouteParams = {
  meal: MealStorageDTO;
};

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

export function EditCard() {
  const route = useRoute();

  const { meal } = route.params as RouteParams;
  const [mealData, setMealData] = useState<MealStorageDTO>(meal);
  const [selectedActive, setSelectedActive] = useState<boolean>();
  const [selectedDisable, setSelectedDisable] = useState<boolean>();
  const navigation = useNavigation();
  /*
  const [datePoint, setDatePoint] = useState<string>();
  const datePoint = meal.date?.replace(/\//g, ".");
  setDatePoint(datePoint);
*/

  function selectRatio(buttonName: string) {
    if (buttonName === "Sim") {
      setMealData({ ...mealData, status: true });
      setSelectedActive(true);
      setSelectedDisable(false);
    } else {
      if (buttonName === "Não") {
        setMealData({ ...mealData, status: false });
        setSelectedActive(false);
        setSelectedDisable(true);
      }
    }
  }

  function handleHome() {
    navigation.navigate("home");
  }

  function handleMessage() {
    navigation.navigate("messageScreen", mealData.status);
  }

  async function handleUpdateMeal(meal: MealStorageDTO) {
    console.log(meal);
    await removeMeal(meal);
    await createMeal(mealData);
    navigation.navigate("home");
  }

  useFocusEffect(
    useCallback(() => {
      if (meal.status === true) {
        setSelectedActive(true);
        setSelectedDisable(false);
      } else {
        setSelectedActive(false);
        setSelectedDisable(true);
      }
    }, [])
  );

  return (
    <Container>
      <Header>
        <ButtonIcon icon="arrow-left" type="NEUTRAL" onPress={handleHome} />
        <Title>Editar refeição</Title>
      </Header>
      <Content>
        <Label>Nome</Label>
        <Input
          onChangeText={(e) => setMealData({ ...mealData, nameMeals: e })}
          value={mealData.nameMeals}
        />
        <Label>Descrição</Label>
        <Input
          editable
          multiline
          numberOfLines={4}
          maxLength={80}
          onChangeText={(e) => setMealData({ ...mealData, description: e })}
          value={mealData.description}
        />
        <DividLine>
          <Label>Data</Label>
          <Label>Hora</Label>
        </DividLine>
        <DividLine>
          <InputDate
            onChangeText={(e) => setMealData({ ...mealData, date: e })}
            value={mealData.date}
          />
          <InputDate
            onChangeText={(e) => setMealData({ ...mealData, time: e })}
            value={mealData.time}
          />
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
            title="Salvar alteração"
            onPress={() => handleUpdateMeal(mealData)}
          />
        </ContentInput>
      </Content>
    </Container>
  );
}
