import { createSlice } from '@reduxjs/toolkit';

const contactInitialState = {
  contacts: [],
  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,

  reducers: {
    addNewContact(state, action) {
     state.contacts.push(action.payload)
    },

    deleteContact(state, action) {
     state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
    },

    setFilter(state, action) {
    state.filter = action.payload
        }
  },
});

export const { addNewContact, deleteContact, setFilter } = contactSlice.actions;

export const contactReducer = contactSlice.reducer;
