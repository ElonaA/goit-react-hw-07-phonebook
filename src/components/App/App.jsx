import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contacts-operations';
import { getLoading } from '../../redux/contacts/contacts-selectors';


import Preloader from '../Loader/Loader';
import { Section } from 'components/Section/Section';
import { ContactList } from 'components/ContactList/ContactList';
import  ContactForm  from 'components/ContactForm/ContactForm';

import { Inner} from './App.styled';

import { Toaster } from 'react-hot-toast';



export function App() {

  const loading = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
    <Inner>
      <Section title="Phonebook">
        <ContactForm  />
      </Section>
      {loading ? (
        <Preloader />
      ) : null}

      <ContactList />
      <Toaster />
    </Inner>
  );
}
