import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { api } from '../services/api';

interface Schedule {
  id: string;
  date: string;
  time: string;
  tel: string;
  status: string;
  description: string;
}

type SchedulesInput = Omit<Schedule, 'id' | 'status'>;

interface SchedulesProviderProps {
  children: ReactNode;
}

interface useSchedulesContext {
  schedules: Schedule[];
  createSchedule: (transaction: SchedulesInput) => Promise<void>;
}

const SchedulesContext = createContext<useSchedulesContext>(
  {} as useSchedulesContext
);

export function SchedulesProvider({ children }: SchedulesProviderProps) {
  const [schedules, setSchedules] = useState<Schedule[]>([]);

  useEffect(() => {
    api.get('schedules')
    .then(response => setSchedules(response.data));
  }, []);

  async function createSchedule(transactionInput: SchedulesInput) {
    const response = await api.post('/schedules/128e56af-0a50-4f07-a509-d00aef9b5602', {
      ...transactionInput,
    });

    const { data } = response;

    setSchedules([
      ...data,
      schedules,
    ]);
  }

  const value = useMemo(() => ({ schedules, createSchedule }), [schedules]);

  return (
    <SchedulesContext.Provider value={value}>
      {children}
    </SchedulesContext.Provider>
  );
}

export function useSchedules() {
  const context = useContext(SchedulesContext);
  return context;
}
