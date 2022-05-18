import { useState } from "react";
import Modal from 'react-modal';

import { SchedulesProvider } from './hooks/useSchedulesContext';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewScheduleModal } from "./components/NewScheduleModal";
// import { AppRoutes } from "./routes";

import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

function App() {
  const [isNewScheduleModalOpen, setIsNewScheduleModalOpen] = useState<boolean>(
    false
  );

  function handleOpenNewScheduleModal() {
    setIsNewScheduleModalOpen(true);
  }

  function handleCloseNewScheduleModal() {
    setIsNewScheduleModalOpen(false);
  }

  return (
    <SchedulesProvider>
      <Header onOpenNewScheduleModal={handleOpenNewScheduleModal} />
      <Dashboard />
      <NewScheduleModal
        isOpen={isNewScheduleModalOpen}
        onRequestClose={handleCloseNewScheduleModal}
      />
      <GlobalStyle />
    </SchedulesProvider>
  );
}

export default App;
