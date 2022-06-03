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

  async function createSchedule(schedulesInput: SchedulesInput) {
    const response = await api.post('/schedules/a047b01e-e619-43f9-8b4e-60ad17b79fdd', {
      ...schedulesInput,
    });

    const { schedule } = response.data;

    if (schedule) {
      
    }

    setSchedules([
      schedule,
      ...schedules,
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
