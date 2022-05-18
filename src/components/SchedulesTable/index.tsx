import { useSchedules } from "../../hooks/useSchedulesContext";

import { Container } from "./styles";

export function SchedulesTable() {
  const { schedules } = useSchedules();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Contanto</th>
            <th>Motivo</th>
          </tr>
        </thead>

        <tbody>
          {
            schedules.map((schedule) => (
              <tr key={schedule.id}>
                <td>{schedule.date}</td>
                <td>{schedule.time}</td>
                <td>{schedule.tel}</td>
                <td>{schedule.status}</td>
                <td>{schedule.description}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Container>
  );
}
