import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { removeAllTabs, removeTab, setCurrentIndex } from '../Redux/Reducers/TabsSlice';
import { AppState } from '../Redux/Store';
import '../Styles/Components/MainTabs.css';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            className="custom-tab-panel"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
};

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const MainTabs: React.FC = () => {

    const dispatch = useDispatch();
    const tabs = useSelector((state: AppState) => state.tabs.tabs);
    const value = useSelector((state: AppState) => state.tabs.currentIndex);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        dispatch(setCurrentIndex(newValue));
    };

    const handleRemoveTab = (index: number) => {
        dispatch(removeTab(index));
    };

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCloseAllTabs = () => {
        dispatch(removeAllTabs());
        handleClose();
    };

    const renderTabContent = (contentId: string) => {
        switch (contentId) {
            case 'objects':
                return '';
            case 'desktop':
                return '';
            case 'archive':
                return '';
            default:
                return null;
        }
    };

    return (
        <Box
            className={`main-tabs`}
        >
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    sx={{
                        '& .MuiTabs-indicator': {
                            backgroundColor: 'rgba(131, 246, 8, 0.75)',
                        },
                        '& .MuiTab-root': {
                            fontSize: '0.6rem',
                            color: 'rgba(255, 255, 255, 0.7)',
                            '&.Mui-selected': {
                                color: 'rgb(255,255,255)',
                            },
                            '&:hover': {
                                color: 'rgba(131, 246, 8, 0.75)',
                            },
                        },
                    }}
                >
                    {tabs.map((tab, index) => (
                        <Tab
                            key={index}
                            label={
                                <span>
                                    {tab.label}
                                    <IconButton
                                        sx={{
                                            color: 'white',
                                        }}
                                        size="small"
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            handleRemoveTab(index);
                                        }}
                                    >
                                        <CloseIcon
                                            fontSize="small"
                                            sx={{ width: 15, height: 15 }}
                                        />
                                    </IconButton>
                                </span>
                            }
                            {...a11yProps(index)}
                        />
                    ))}
                </Tabs>
            </Box>
            {tabs.map((tab, index) => (
                <CustomTabPanel value={value} index={index} key={index}>
                    {renderTabContent(tab.contentId)}
                </CustomTabPanel>
            ))}
        </Box>
    );
};

export default MainTabs;
