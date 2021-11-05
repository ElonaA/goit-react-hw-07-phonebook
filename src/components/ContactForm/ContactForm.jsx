import propTypes from 'prop-types';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-operations';
import { getIsAdded } from '../../redux/contacts/contacts-selectors';
import { Button, Inner, Form, Input, Label,  } from './ContactForm.styled';

import toast from 'react-hot-toast';



export default function ContactForm() {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const isAdded = useSelector(getIsAdded);
  const dispatch = useDispatch();
  
  //При отправке формы передает контакт через пропсы в Арр и проверяет на дубли и пустое поле
  const onSubmitContactForm = e => {
    e.preventDefault();

    if (isAdded(name)) {
      return toast.error(`${name} is already in contacts`);
    } else {
      dispatch(addContact(name, number));
    }

    reset();
  };

  //Следит за инпутом и обновляет состояние переменной имя  
  const onChangeName = e => {
    setName(e.target.value);
  };

  
  //Следит за инпутом и обновляет переменную состояния имя 
   const onChangeNumber = e => {
    setNumber(e.target.value);
  };

    //Чистим форму (сбрасываем поля после отправки)
  const reset = () => {
    setName('');
    setNumber('');
  };

    return (
      <Inner>
        <Form onSubmit={onSubmitContactForm}>
          <Label >
            Name
          <Input
              name="name"
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={onChangeName}
            />
          </Label>
          <Label>
            Phone
          <Input
              name="number"
              type="text"
              placeholder="Enter Phone Number"
              value={number}
              onChange={onChangeNumber}
            />
          </Label>
          <Button type="submit">Add contacts</Button>
        </Form>
      </Inner>
    );
};

ContactForm.propTypes = {
  onAddContacts: propTypes.func,
};