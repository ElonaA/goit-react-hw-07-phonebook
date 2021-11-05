import propTypes from 'prop-types';
import Filter from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';
import { useSelector, useDispatch } from 'react-redux';
import {deleteContacts} from '../../redux/contacts/contacts-operations';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { Inner, Title, Wrapper, Button, PersonBadge, TelephonePlus,  XCircle } from './ContactList.styled';

export const ContactList = () => {
  
  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const onDeleteButton = id => dispatch(deleteContacts(id));

  return (
    <>
      {filteredContacts.length > 0 &&
        <Section title="Contacts">
          {filteredContacts.length > 1 &&
            <Filter />
          }
          <Inner>
            <ul>

              {filteredContacts.map(({ id, name, number }) => (
                <li key={id}>
                  <Wrapper>
                    <PersonBadge /> <Title>{name} </Title>  <TelephonePlus /> <Title>{number}</Title>
                    <Button type="button" onClick={() => onDeleteButton(id)}>
                      < XCircle />
                    </Button>
                  </Wrapper>
                </li>
              ))}
            </ul>
          </Inner>
        </Section>
      }
    </>
  );
}

ContactList.propTypes = {
  onDeleteBtn: propTypes.func,
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string,
      name: propTypes.string,
      number: propTypes.string,
    }),
  ),
};
