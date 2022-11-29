import { Navigate, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from '../components/AppBar';
import APP_ROUTES from './pages.routes'

export default function () {
    return (
        <ResponsiveAppBar>
            <Routes>
                {
                    APP_ROUTES.map(({ path, component }) => (
                        <Route key={path} path={path} element={component} />
                    ))
                }
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </ResponsiveAppBar>
    );
}
