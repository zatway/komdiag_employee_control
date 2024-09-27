import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectedInstallationState {
    selectedInstallationId: number | null;
    selectedInstallationName: string | null;
}

const initialState: SelectedInstallationState = {
    selectedInstallationId: null,
    selectedInstallationName: null,
};

const selectedInstallationSlice = createSlice({
    name: 'selectedInstallation',
    initialState,
    reducers: {
        setSelectedInstallationId(state, action: PayloadAction<number>) {
            state.selectedInstallationId = action.payload;
        },
        setSelectedInstallationName(state, action: PayloadAction<string>) {
            state.selectedInstallationName = action.payload;
        },
    },
});

export const { setSelectedInstallationId } = selectedInstallationSlice.actions;
export const { setSelectedInstallationName } = selectedInstallationSlice.actions;

export default selectedInstallationSlice.reducer;
