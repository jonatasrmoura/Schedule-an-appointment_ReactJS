import { AiTwotoneStar } from 'react-icons/ai';

import { Container, Content } from "./styles";

interface IHeaderProps {
  onOpenNewScheduleModal: () => void;
}

export function Header({ onOpenNewScheduleModal }: IHeaderProps) {
  return (
    <Container>
      <Content>
        <h1>
          <AiTwotoneStar />
          Schedule an appointment
        </h1>
        <button type="button" onClick={onOpenNewScheduleModal}>
          Nova consulta
        </button>
      </Content>
    </Container>
  );
}
