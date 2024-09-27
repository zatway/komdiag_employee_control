import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import '../Styles/Components/MainMenu.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../Redux/Store';
import { addTab, updateLabels } from '../Redux/Reducers/TabsSlice';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';

export const tabsData = () => [
    { label: '', contentId: 'objects' },
    { label:  '', contentId: 'desktop' },
    { label: '', contentId: 'archive' },
];

const MainMenu: React.FC = () => {
    const dispatch = useDispatch();

    const handleAddTab = (contentId: string) => {
        dispatch(addTab({ contentId, isOpen: true }));
    };

    useEffect(() => {
        const fetchTabsData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
        };

        fetchTabsData();
    }, [dispatch]);

    return (
        <div className='main-menu'>
            {tabsData().map((tab, index) => (
                <Button
                    key={index}
                    className="alarm-button"
                    variant="contained"
                    onClick={() => handleAddTab(tab.contentId)}
                >
                    {tab.label}
                </Button>
            ))}
        </div>
    );
};

export default MainMenu;
