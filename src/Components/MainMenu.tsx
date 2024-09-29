import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import '../Styles/Components/MainMenu.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTab } from '../Redux/Reducers/TabsSlice';

export const tabsData = () => [
    { label: 'Список сотрудников', contentId: 'employeeList' },
    { label:  'Регламент компании', contentId: 'companyReglament' },
    { label: 'Новости компании', contentId: 'newsCompany' },
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
