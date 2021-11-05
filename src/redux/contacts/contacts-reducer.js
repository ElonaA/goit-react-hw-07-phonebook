import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  changeFilter,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions';

// Создание редюсера для массива
const contacts = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

// Создание редюсера для фильтра в контактах
const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

// Создание редюсера индикации загрузки
const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,

  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

// Создание редюсера обработки ошибок
const error = createReducer(null, {
  [fetchContactsError]: (_, { payload }) => payload,
  [addContactError]: (_, { payload }) => payload,
  [deleteContactError]: (_, { payload }) => payload,

  [fetchContactsRequest]: () => null,
  [fetchContactsSuccess]: () => null,

  [addContactRequest]: () => null,
  [addContactSuccess]: () => null,

  [deleteContactRequest]: () => null,
  [deleteContactSuccess]: () => null,
});

// Экспорт всех редюсеров через комбайн
export default combineReducers({ contacts, filter, loading, error });
