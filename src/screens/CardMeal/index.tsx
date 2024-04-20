import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Container,
  Content,
  ContentButton,
  ContentStatus,
  Header,
  ModalButton,
  ModalCenteredView,
  ModalView,
  ModalViewButton,
  Text,
  TextModal,
  TextStatus,
  TextTitle,
  TextTitleTime,
  Title,
} from "./styles";
import { MealStorageDTO } from "@storage/Meal/MealStorageDTO";
import { useState } from "react";
import { ButtonIcon } from "@components/ButtonIcon";
import { Button } from "@components/Button";
import { Icon } from "@components/Icon";
import { Modal } from "react-native";
import { removeMeal } from "@storage/Meal/removeMeal";

type RouteParams = {
  meal: MealStorageDTO;
};
export function CardMeal() {
  const navigation = useNavigation();
  const route = useRoute();
  const { meal } = route.params as RouteParams;
  const [modalVisible, setModalVisible] = useState(false);

  function handleHome() {
    navigation.navigate("home");
  }
  function handleEditCard() {
    navigation.navigate("editCard", { meal });
  }

  async function handleRemoveMeal(meal: MealStorageDTO) {
    await removeMeal(meal);
    handleHome();
  }

  return (
    <Container>
      <Modal
        transparent={true}
        statusBarTranslucent={true}
        visible={modalVisible}
      >
        <ModalCenteredView>
          <ModalView>
            <TextModal>
              Deseja realmente excluir o registro da refeição?
            </TextModal>
            <ModalViewButton>
              <ModalButton>
                <Button
                  title="Cancelar"
                  type="WHITE"
                  onPress={() => setModalVisible(!modalVisible)}
                />
              </ModalButton>
              <ModalButton>
                <Button
                  title="Sim, excluir"
                  onPress={() => handleRemoveMeal(meal)}
                />
              </ModalButton>
            </ModalViewButton>
          </ModalView>
        </ModalCenteredView>
      </Modal>
      {meal.status ? (
        <Header type={"POSITIVE"}>
          <ButtonIcon icon="arrow-left" type="NEUTRAL" onPress={handleHome} />
          <Title>Refeição</Title>
        </Header>
      ) : (
        <Header type={"NEGATIVE"}>
          <ButtonIcon icon="arrow-left" type="NEUTRAL" onPress={handleHome} />
          <Title>Refeição</Title>
        </Header>
      )}
      <Content>
        <TextTitle>{meal.nameMeals}</TextTitle>
        <Text>{meal.description}</Text>
        <TextTitleTime>Data e Hora</TextTitleTime>
        <Text>
          {meal.date} às {meal.time}
        </Text>
        {meal.status ? (
          <ContentStatus>
            <Icon iconName="circle-medium" type="POSITIVE" />
            <TextStatus>dentro da dieta</TextStatus>
          </ContentStatus>
        ) : (
          <ContentStatus>
            <Icon iconName="circle-medium" type="NEGATIVE" />
            <TextStatus>fora da dieta</TextStatus>
          </ContentStatus>
        )}
        <ContentButton>
          <Button
            title="Editar refeição"
            iconName="pencil-outline"
            onPress={() => handleEditCard()}
          />
          <Button
            title="Excluir refeição"
            iconName="trash-can-outline"
            type="WHITE"
            colorIcon="DARK"
            onPress={() => setModalVisible(true)}
          />
        </ContentButton>
      </Content>
    </Container>
  );
}
