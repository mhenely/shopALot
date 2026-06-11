import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, register, demoLogin } from "../../api/auth";
import { loadUser, saveUser, clearUser, saveDemoCreds, clearDemoCreds } from "../../api/client";

// Pull a readable message out of an axios error.
const errorMessage = (error) =>
  error.response?.data?.error || error.message || 'Something went wrong'

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const user = await login(credentials)
      saveUser(user)
      return user
    } catch (error) {
      return rejectWithValue(errorMessage(error))
    }
  }
)

// Register, then immediately log in so the user lands authenticated.
export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ username, name, password }, { rejectWithValue }) => {
    try {
      await register({ username, name, password })
      const user = await login({ username, password })
      saveUser(user)
      return user
    } catch (error) {
      return rejectWithValue(errorMessage(error))
    }
  }
)

// Provision + sign into a throwaway demo account. We persist the returned
// credentials so the "Your demo account" panel can show them again later.
export const enterDemo = createAsyncThunk(
  'auth/enterDemo',
  async (_, { rejectWithValue }) => {
    try {
      const { token, username, name, password } = await demoLogin()
      const user = { token, username, name }
      saveUser(user)
      saveDemoCreds({ username, password })
      return user
    } catch (error) {
      return rejectWithValue(errorMessage(error))
    }
  }
)

const initialState = {
  user: loadUser(), // { token, username, name } or null
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      clearUser()
      clearDemoCreds()
      state.user = null
      state.status = 'idle'
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.user = action.payload
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.user = action.payload
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
      .addCase(enterDemo.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(enterDemo.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.user = action.payload
      })
      .addCase(enterDemo.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
  }
})

export const { logout } = authSlice.actions

export default authSlice.reducer
