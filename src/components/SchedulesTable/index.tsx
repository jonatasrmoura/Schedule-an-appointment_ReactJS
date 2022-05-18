import { useSchedules } from "../../hooks/useSchedulesContext";

import { Container } from "./styles";

export function SchedulesTable() {
  const { schedules } = useSchedules();

  return (
    <Container>
      <h1>Lista de consultas</h1>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Horário</th>
            <th>Telefone</th>
            <th>Status</th>
            <th>Motivo</th>
          </tr>
        </thead>

        <tbody>
          {
            schedules.map((schedule) => (
              <tr key={schedule.id}>
                <td>
                  {
                    new Intl.DateTimeFormat('pt-BR').format(
                    new Date(schedule.date)
                  )}
                </td>
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
