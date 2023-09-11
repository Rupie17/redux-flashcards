import { createSlice } from "@reduxjs/toolkit";
import { addQuiz } from "../quizzes/quizzesSlice";

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {topics: {}},
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics[id] = {
                id: id,
                name: name,
                icon,
                quizIds: []
              };       
        }
    },
    extraReducers: {
        'quizzes/addQuiz': (state, action) => {
            const { topicId, id } = action.payload;
            state.topics[topicId].quizIds.push(id);
        }
    }
})

export const { addTopic,  addQuizIdForTopic } = topicsSlice.actions;
// selector that grabs the nested object in the initial state
export const selectTopics = state => state.topics.topics; 
export default topicsSlice.reducer;