import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts;
export const getLoading = state => state.loading;
export const getFilter = state => state.filter;
export const getError = state => state.error;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    ),
);

export const getIsAdded = createSelector([getContacts], contacts => {
  const isAdded = name => contacts.map(contact => contact.name).includes(name);
  return isAdded;
});
