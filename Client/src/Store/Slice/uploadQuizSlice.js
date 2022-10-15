import { axio } from "../../Config/Config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const postQuizData = createAsyncThunk("quiz", async (data) => {
    return axio.post("/api/addquiz", data)
})
export const UploadQuizReducer = createSlice({
    name: "quizdata",
    initialState: {
        quizData: [],
        quizLoading: true
    },
    reducers: {},
    extraReducers: {
        [postQuizData.pending]: (state, action) => {
            state.quizLoading = true;
        },
        [postQuizData.fulfilled]: (state, action) => {
            state.quizData = action.payload
            state.quizLoading = false;
        },
        [postQuizData.rejected]: (state, action) => {
            state.quizLoading = false;
        }
    }
    });

    const quizuploadReducer =UploadQuizReducer.reducer;
    export default quizuploadReducer;