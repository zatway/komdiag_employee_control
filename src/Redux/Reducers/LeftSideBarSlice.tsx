import { createSlice } from '@reduxjs/toolkit';

interface LeftSideBarState {
    isLeftSideBarHidden: boolean;
}

const initialState: LeftSideBarState = {
    isLeftSideBarHidden: false,
};

const leftSideBarSlice = createSlice({
    name: 'leftSideBar',
    initialState,
    reducers: {
        toggleLeftSideBar: (state) => {
            state.isLeftSideBarHidden = !state.isLeftSideBarHidden;
        },
    },
});

export const { toggleLeftSideBar } = leftSideBarSlice.actions;
export default leftSideBarSlice.reducer;
