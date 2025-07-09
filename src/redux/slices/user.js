import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "../../utils/http/auth";

const initialState = {
    isUserAvailable: false,
    userInfo: null,
    err: {
        login: null,
        register: null,
        logout:null,
    },
    isPending: false,
    isRejected: false,
    isFulfilled: false,
};

const loginThunk = createAsyncThunk("/api/auth/login", async({body, cb, errorCb, nextCb}, { rejectWithValue }) => {
    try {
          const {data} = await loginUser(body);
        // console.log(data)
          if (cb) cb(data)
          return data
      } catch (err) {
        // console.log(err)
          const errObj = {
              status: err.response.status,
              message: err.response.data.message,
          }
          errorCb(err);
        //   console.log(errObj)
          return rejectWithValue(errObj)
      } finally {
        nextCb()
      }
});

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logOut(prevState) {
            return {
                ...prevState,
              isUserAvailable: false,
              isPending: false,
              isFulfilled: true,
              token:null,
              userInfo: null,
            }
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginThunk.pending, (prevState) => {
            return {
                ...prevState,
                isPending: true,
                isRejected: false,
                isFulfilled: false,
                err: null,
            }
        })
        .addCase(loginThunk.rejected, (prevState, {payload}) => {
            return {
                ...prevState,
                isPending: false,
                isRejected: true,
                err: {
                    ...prevState.err,
                    login: payload,
                }
            }
        })
        .addCase(loginThunk.fulfilled, (prevState, {payload}) => {
            return {
                ...prevState,
                isUserAvailable: true,
                isPending: false,
                isFulfilled: true,
                userInfo: payload,
            }
        })
    }
})

export const userAction = {
    ...userSlice.actions,
};

export { loginThunk };

export const { logOut } = userSlice.actions;

export default userSlice.reducer