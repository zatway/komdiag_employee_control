import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tabsReducer from './Reducers/TabsSlice';
import leftSideBarReducer from './Reducers/LeftSideBarSlice';
import downSideBarReducer from './Reducers/DownSideBarSlice';
import selectedInstallationReducer from './Reducers/SelectedInstallationSlice';

const rootReducer = combineReducers({
    leftSideBar: leftSideBarReducer,
    tabs: tabsReducer,
    downSideBar: downSideBarReducer,
    selectedInstallation: selectedInstallationReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default store;
