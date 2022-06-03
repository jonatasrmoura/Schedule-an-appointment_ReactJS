import { useState } from "react";
import Modal from 'react-modal';

import { SchedulesProvider } from './hooks/useSchedulesContext';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewScheduleModal } from "./components/NewScheduleModal";
import { CreateNewUser } from './components/CreateNewUser';
// import { AppRoutes } from "./routes";

import { GlobalStyle } from './styles/global';
import { LoginModal } from "./components/LoginModal";
import { UsersProvider } from "./hooks/useUsersContext";

Modal.setAppElement('#root');

function App() {
  const [isNewScheduleModalOpen, setIsNewScheduleModalOpen] = useState<boolean>(
    false
  );
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(
    false
  );
  const [isNewUserModalOpen, setIsNewUserModalOpen] = useState<boolean>(
    false
  );

  function handleOpenNewScheduleModal() {
    setIsNewScheduleModalOpen(true);
  }

  function handleOpenLoginModal() {
    setIsLoginModalOpen(true);
  }

  function handleOpenNewUserModal() {
    setIsNewUserModalOpen(true);
  }

  function handleCloseNewScheduleModal() {
    setIsNewScheduleModalOpen(false);
  }

  function handleCloseLoginModal() {
    setIsLoginModalOpen(false);
  }

  function handleCloseNewUserModal() {
    setIsNewUserModalOpen(false);
  }

  return (
    <UsersProvider>
      <SchedulesProvider>
        <Header
          onOpenNewScheduleModal={handleOpenNewScheduleModal}
          onOpenNewLoginModal={handleOpenLoginModal}
        />
        <Dashboard />
        <LoginModal
          onOpenNewUserModal={handleOpenNewUserModal}
          isOpen={isLoginModalOpen}
          onRequestClose={handleCloseLoginModal}
        />
        <NewScheduleModal
          isOpen={isNewScheduleModalOpen}
          onRequestClose={handleCloseNewScheduleModal}
        />
        <CreateNewUser
        isOpen={isNewUserModalOpen}
        onRequestClose={handleCloseNewUserModal}
        />
        <GlobalStyle />
      </SchedulesProvider>
    </UsersProvider>
  );
}

export default App;
