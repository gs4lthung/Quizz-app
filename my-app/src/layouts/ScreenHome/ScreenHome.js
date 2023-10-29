import { Suspense, lazy } from 'react'
import './ScreenHome.scss'
<<<<<<< Updated upstream
import LoadingPage from '../../components/LoadingPage/LoadingPage';
=======
import LoadingPage from '../LoadingPage/LoadingPage';
>>>>>>> Stashed changes

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
