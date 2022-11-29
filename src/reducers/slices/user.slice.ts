import { createSlice } from '@reduxjs/toolkit';

import { Users, iUser } from '../../db';

const initialState: iUser = {
  avatar: '',
  name: '',
  cpf: '',
  email: '',
  password: '',
  isLogged: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser(state, { payload }) {
      Users.push(payload);

      return { ...state, isLogged: false, success: true, ...payload };
    },
    loginUser(state, { payload }) {
      const { email, password } = payload;

      const findUser = Users.find((obj) => obj.email === email && obj.password === password);

      if (!findUser) return { ...state, ...initialState, error: true };

      return { ...state, isLogged: true, error: false, success: false, ...findUser };
    },
    logoutUser(state) {
      return { ...state, ...initialState };
    },
  },
});

export const { loginUser, logoutUser, registerUser } = userSlice.actions;

export const selectUser = (state: iUser) => state;

export default userSlice.reducer;
