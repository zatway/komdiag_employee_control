import React, { FC, ReactNode } from 'react';
import MainMenu from '../MainMenu';
import MainTabs from '../MainTabs';

interface MainPageProps {
    children?: ReactNode;
}

const MainPage: FC<MainPageProps> = () => {
    return (
        <React.Fragment>
            <MainMenu />
            <MainTabs />
        </React.Fragment>
    );
};

export default MainPage;
