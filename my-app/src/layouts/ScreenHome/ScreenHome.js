import { Suspense, lazy } from 'react'
import './Screenhome.scss'

const LoginForm = lazy(() => import('../../components/LoginForm'));
export default function ScreenHome() {
    return (
        <>
            <Suspense fallback={<div>...LOADING...</div>}>
                <LoginForm />
            </Suspense>
        </>
    )
}
