import { Container, Tab } from "../styles/components/ScrollableTabs";

const ScrollableTabs: React.FC = () => {
  return(
    <Container>
      <Tab>
        Burguers
      </Tab>
      <Tab>
        Acompanhamentos
      </Tab>
      <Tab>
        Bebidas
      </Tab>
      <Tab>
        Combos
      </Tab>
    </Container>
  );
}

export default ScrollableTabs;