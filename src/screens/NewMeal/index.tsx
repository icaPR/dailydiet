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
import AsyncStorage from "@react-native-async-storage/async-storage";

export function NewMeal() {
  const [selectedActive, setSelectedActive] = useState<boolean>();
  const [selectedDisable, setSelectedDisable] = useState<boolean>();
  const mealDefaud = {
    nameMeals: "",
    description: "",
    date: "",
    time: "",
    status: true,
  };
  const [meal, setMeal] = useState<MealStorageDTO>(mealDefaud);
  const [datePoint, setDatePoint] = useState<string>("");
  const navigation = useNavigation();

  const route = useRoute();

  function isValidDate(date: string, time: string) {
    const [day, month, year] = date.split("/");
    const [hours, minutes] = time.split(":");
    const parsedDate = new Date(
      `${year}-${month}-${day}T${hours}:${minutes}:00`
    );
    if (
      Number(day) <= 31 &&
      Number(month) <= 12 &&
      parsedDate.getDate() === Number(day) &&
      parsedDate.getMonth() + 1 === Number(month) &&
      parsedDate.getFullYear() === Number(year)
    ) {
      return true;
    } else return false;
  }

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

  async function handleAddMeal(meal: MealStorageDTO | undefined) {
    if (meal !== undefined) {
      if (meal.date && meal.time) {
        if (isValidDate(meal.date, meal.time)) {
          const datePoint = meal.date.replace(/\//g, ".");
          setDatePoint(datePoint);
          console.log(datePoint);
          await createMeal({ ...meal, date: datePoint });
        }
      }
      handleMessage();
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
