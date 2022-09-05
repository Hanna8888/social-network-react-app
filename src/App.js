import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Routes, Navigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// actions
import { getInitializeThunk } from '../src/state/app/actions';

// components
import Preloader from './components/common/Preloader';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Profile from "./components/Profile";
import Login from './components/Login';
import Footer from './components/Footer';

import './App.css';

// lazyload components
const Dialogs = lazy(() => import('./components/Dialogs'));
const Users = lazy(() => import('./components/Users'));

function App() {
    const dispatch = useDispatch();
    const initialized = useSelector(state => state.app.initialized);

    useEffect(() => {
        dispatch(getInitializeThunk());
    }, [dispatch])

    if (!initialized) {
        return <Preloader />
    }
    return (
        <div className="container">
            <Header />
            <Sidebar />

            <div className="content">
                <Routes>
                    <Route path="/profile" element={<Profile />} />

                    <Route exact path='/' element={<Navigate to="/profile" replace/>}/>

                    <Route path='/profile/:userId' element={<Profile/>}/>

                    <Route path='/dialogs' element={<Suspense fallback={<div>Loading...</div>}>
                        <Dialogs />
                    </Suspense>} />

                    <Route path='/users' element={<Suspense fallback={<div>Loading...</div>}>
                        <Users />
                    </Suspense>} />

                    <Route path="/login" element={<Login />} />

                    <Route path="*" element={<div>404 page</div>} />

                </Routes>
            </div>

            <Footer />
        </div>
    )
}

export default App;
