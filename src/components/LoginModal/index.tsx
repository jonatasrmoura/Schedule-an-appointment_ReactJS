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
  const { login } = useUsers();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    await login({
      email,
      password
    });

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

      <Container onSubmit={handleLogin}>
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
