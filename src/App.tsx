import { useState } from "react";
import Modal from 'react-modal';

import { SchedulesProvider } from './hooks/useSchedulesContext';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewScheduleModal } from "./components/NewScheduleModal";
// import { AppRoutes } from "./routes";

import { GlobalStyle } from './styles/global';
import { LoginModal } from "./components/LoginModal";

Modal.setAppElement('#root');

function App() {
  const [isNewScheduleModalOpen, setIsNewScheduleModalOpen] = useState<boolean>(
    false
  );
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(
    false
  );

  function handleOpenNewScheduleModal() {
    setIsNewScheduleModalOpen(true);
  }

  function handleOpenLoginModal() {
    setIsLoginModalOpen(true);
  }

  function handleCloseNewScheduleModal() {
    setIsNewScheduleModalOpen(false);
  }

  function handleCloseLoginModal() {
    setIsLoginModalOpen(false);
  }

  return (
    <SchedulesProvider>
      <Header
        onOpenNewScheduleModal={handleOpenNewScheduleModal}
        onOpenNewLoginModal={handleOpenLoginModal}
      />
      <Dashboard />
      <LoginModal
        isOpen={isLoginModalOpen}
        onRequestClose={handleCloseLoginModal}
      />
      <NewScheduleModal
        isOpen={isNewScheduleModalOpen}
        onRequestClose={handleCloseNewScheduleModal}
      />
      <GlobalStyle />
    </SchedulesProvider>
  );
}

export default App;
