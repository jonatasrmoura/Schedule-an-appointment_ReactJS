import { AiTwotoneStar } from 'react-icons/ai';

import { Container, Content } from "./styles";

interface IHeaderProps {
  onOpenNewScheduleModal: () => void;
  onOpenNewLoginModal: () => void;
}

export function Header({
  onOpenNewScheduleModal,
  onOpenNewLoginModal
}: IHeaderProps) {
  return (
    <Container>
      <Content>
        <h1>
          <AiTwotoneStar />
          Schedule an appointment
        </h1>
        <div>
          <button type="button" onClick={onOpenNewLoginModal}>
            Login
          </button>
          <button type="button" onClick={onOpenNewScheduleModal}>
            Nova consulta
          </button>
        </div>
      </Content>
    </Container>
  );
}
