import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Styles/App.css';
import MainPage from './Components/Pages/MainPage';
import store from './Redux/Store';
import { Provider } from 'react-redux';

const App = (): React.ReactElement => {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
};

export default App;
