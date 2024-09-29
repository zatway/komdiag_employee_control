import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TFunction } from 'i18next';
import { tabsData } from '../../Components/MainMenu';

interface Tab {
    label: string;
    contentId: string;
    isOpen?: boolean;
    installationId?: number;
    installationName?: string;
}

interface TabsState {
    tabs: Tab[];
    currentIndex: number;
}

const initialState: TabsState = {
    tabs: [],
    currentIndex: 0,
};

const tabsSlice = createSlice({
    name: 'tabs',
    initialState,
    reducers: {
        addTab: (
            state,
            action: PayloadAction<{
                contentId: string;
                isOpen?: boolean;
                installationId?: number;
                installationName?: string;
            }>,
        ) => {
            const { contentId, installationId, installationName } = action.payload;

            const tabs = tabsData();

            const tabInfo = tabs.find((tab) => tab.contentId === contentId);

            if (!tabInfo) {
                console.error(`Tab with contentId '${contentId}' not found`);
                return;
            }

            const existingTabIndex = state.tabs.findIndex((tab) => tab.contentId === contentId);

            if (existingTabIndex >= 0) {
                state.currentIndex = existingTabIndex;
            } else {
                state.tabs.push({
                    label: tabInfo.label,
                    contentId,
                    isOpen: true,
                    installationId,
                    installationName,
                });
                state.currentIndex = state.tabs.length - 1;
            }
        },
        updateTab: (
            state,
            action: PayloadAction<{
                contentId: string;
                installationId: number;
                installationName: string;
            }>,
        ) => {
            const { contentId, installationId, installationName } = action.payload;
            const tab = state.tabs.find((tab) => tab.contentId === contentId);
            if (tab) {
                tab.installationId = installationId;
                tab.installationName = installationName;
            }
        },
        removeTab: (state, action: PayloadAction<number>) => {
            const index = action.payload;
            if (state.tabs.length > 1) {
                state.tabs.splice(index, 1);
                state.currentIndex =
                    index === state.currentIndex
                        ? 0
                        : state.currentIndex > index
                          ? state.currentIndex - 1
                          : state.currentIndex;
            }
        },
        setCurrentIndex: (state, action: PayloadAction<number>) => {
            state.currentIndex = action.payload;
        },
        removeAllTabs(state) {
            state.tabs = [];
            state.currentIndex = 0;
        },
    },
});

export const { addTab, removeTab, setCurrentIndex, removeAllTabs, updateTab } =
    tabsSlice.actions;
export default tabsSlice.reducer;
