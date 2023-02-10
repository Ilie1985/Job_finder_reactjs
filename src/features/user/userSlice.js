import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  user: null,
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    console.log("register user", user);
  }
);


export const loginUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    console.log("login user", user);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
});

export default userSlice.reducer;
