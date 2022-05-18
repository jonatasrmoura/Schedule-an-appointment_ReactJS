import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { useSchedules } from '../../hooks/useSchedulesContext';

import closeImg from '../../assets/close.svg';

import { Container } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewScheduleModal({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) {
  const { createSchedule } = useSchedules();

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [tel, setTel] = useState('');
  const [description, setDescription] = useState('');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createSchedule({
      date,
      time,
      tel,
      description
    });

    setDate('');
    setTime('');
    setTel('');
    setDescription('');
    
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
        <h2>Cadastrar transação</h2>
        
        <input
          placeholder='Dia'
          value={date}
          onChange={event => setDate(event.target.value)}
        />

        <input
          placeholder='Horário'
          value={time}
          onChange={event => setTime(event.target.value)}
        />

        <input
          placeholder='Telefone'
          value={tel}
          onChange={event => setTel(event.target.value)}
        />

        <input
          placeholder='Motivo'
          value={description}
          onChange={event => setDescription(event.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}
