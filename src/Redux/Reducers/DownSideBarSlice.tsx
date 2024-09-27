import { createSlice } from '@reduxjs/toolkit';

interface DownSideBarState {
    isDownSideBarHidden: boolean;
}

const initialState: DownSideBarState = {
    isDownSideBarHidden: false,
};

const downSideBarSlice = createSlice({
    name: 'downSideBar',
    initialState,
    reducers: {
        toggleDownSideBar: (state) => {
            state.isDownSideBarHidden = !state.isDownSideBarHidden;
        },
    },
});

export const { toggleDownSideBar } = downSideBarSlice.actions;
export default downSideBarSlice.reducer;
