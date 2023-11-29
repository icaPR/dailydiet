import { Button } from "@components/Button";
import {
  Container,
  ContainerButton,
  MessageImg,
  Subtitle,
  SubtitleBold,
  Title,
} from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

export function MessageScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const status = route.params;
  function handleHome() {
    navigation.navigate("home");
  }
  return status ? (
    <Container>
      <Title statusColor={status as unknown as boolean}>Continue assim!</Title>
      <Subtitle>
        Você continua <SubtitleBold>dentro da dieta</SubtitleBold>. Muiro bem!
      </Subtitle>
      <MessageImg source={require("../../assets/Illustration_happy.png")} />
      <ContainerButton>
        <Button title="Ir para a página inicial" onPress={() => handleHome()} />
      </ContainerButton>
    </Container>
  ) : (
    <Container>
      <Title statusColor={status as unknown as boolean}>Que pena!</Title>
      <Subtitle>
        Você<SubtitleBold> saiu da dieta</SubtitleBold>dessa vez, mas continue
        se esforçando e não desista!
      </Subtitle>
      <MessageImg source={require("../../assets/Illustration_sad.png")} />
      <ContainerButton>
        <Button title="Ir para a página inicial" onPress={() => handleHome()} />
      </ContainerButton>
    </Container>
  );
}
