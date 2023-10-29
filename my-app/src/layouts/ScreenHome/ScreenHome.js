import { Suspense, lazy } from 'react'
import './ScreenHome.scss'
import LoadingPage from '../../layouts/LoadingPage/LoadingPage.js';

const LoginForm = lazy(() => import('../../components/LoginForm/LoginForm.js'));
export default function ScreenHome() {
    return (
        <>
            <Suspense fallback={<LoadingPage />}>
                <LoginForm />
            </Suspense>
        </>
    )
}
