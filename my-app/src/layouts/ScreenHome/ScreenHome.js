import { Suspense, lazy } from 'react'
import './ScreenHome.scss'
import LoadingPage from '../../components/LoadingPage';

const LoginForm = lazy(() => import('../../components/LoginForm'));
export default function ScreenHome() {
    return (
        <>
            <Suspense fallback={<LoadingPage/>}>
                <LoginForm />
            </Suspense>
        </>
    )
}
