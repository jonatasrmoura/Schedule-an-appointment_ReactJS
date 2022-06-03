import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';

import { useUsers } from '../../hooks/useUsersContext';

import closeImg from '../../assets/close.svg';

import { Container } from './styles';

interface NewUserModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function CreateNewUser({
  isOpen,
  onRequestClose
}: NewUserModalProps) {
  const { createUser } = useUsers();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function handleCreateNewUser(event: FormEvent) {
    event.preventDefault();

    if (password !== confirmPassword) {
      return toast.error('Dados inválidos!');
    }

    try {
      await createUser({
        name,
        surname,
        email,
        password
      });

      toast.success('Usuário cadastrado com sucesso!');

      setName('');
      setSurname('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      
      onRequestClose();
    } catch {
      toast.error('Usuário não cadastrado!');
    }
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

      <Container onSubmit={handleCreateNewUser}>
        <h2>Cadastrar usuário</h2>
        
        <input
          placeholder='Nome'
          value={name}
          onChange={event => setName(event.target.value)}
          required
        />

        <input
          placeholder='Sobrenome'
          value={surname}
          onChange={event => setSurname(event.target.value)}
          required
        />

        <input
          type='email'
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
        
        <input
          type='password'
          placeholder='Confirmar senha'
          value={confirmPassword}
          onChange={event => setConfirmPassword(event.target.value)}
          required
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}
