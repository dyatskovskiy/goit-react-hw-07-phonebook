import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      return state.items.filter(contact => contact.id !== action.payload);
    },
    setIsLoading(state, action) {
      return state.isLoading.action.payload;
    },
    setError(state, action) {
      return state.error.action.payload;
    },
  },
});
export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact, setIsLoading, setError } =
  contactsSlice.actions;
