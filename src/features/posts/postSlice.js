import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Redux Toolkit",
    content: "Redux Toolkit is same as UseReducer of React",
    date:new Date().toISOString(),
  },
  {
    id: "2",
    title: "UseReducer",
    content: "UseReducer of React is same as Redux Toolkit",
    date:new Date().toISOString()
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    postAdded:{
        reducer(state,action){
            state.push(action.payload)
        },
        prepare(title,content,userId){
            return {
                payload:{
                    id:nanoid(),
                    title:title,
                    content:content,
                    userId:userId,
                    date:new Date().toISOString(),
                }
            }
        }
    }
  },
});

export const selectAllPosts = (state) => state.posts;
export default postSlice.reducer;
export const {postAdded} = postSlice.actions;
