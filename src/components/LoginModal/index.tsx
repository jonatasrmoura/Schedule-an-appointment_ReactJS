import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { useUsers } from '../../hooks/useUsersContext';

import closeImg from '../../assets/close.svg';

import { Container } from './styles';

interface LoginModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function LoginModal({
  isOpen,
  onRequestClose
}: LoginModalProps) {
  const { createUser } = useUsers();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createUser({
      name,
      surname,
      email,
      password
    });

    setName('');
    setSurname('');
    setEmail('');
    setPassword('');
    
    onRequestClose();
  };

  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button 
        type="button" 
        className="react-modal-close"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Fazer login</h2>

        <input
          placeholder='E-mail'
          value={email}
          onChange={event => setEmail(event.target.value)}
          required
        />

        <input
          type='password'
          placeholder='Senha'
          value={password}
          onChange={event => setPassword(event.target.value)}
          required
        />

        <button type="submit">
          Login
        </button>
      </Container>
    </Modal>
  );
}
