import React from 'react'
import './Error404.scss'
import { useNavigate } from 'react-router-dom'

export default function Error404() {
    const nav = useNavigate();
    return (
        <section className="page_404">
            <div>
                <div>
                    <div>
                        <div className="text">
                            <h1>404</h1>
                            <div className="four_zero_four_bg">
                            </div>
                            <div className="contant_box_404">
                                <h3 className="h2">
                                    Look like you're lost
                                </h3>

                                <p>The page you are looking for not avaible!</p>

                                <button onClick={() => nav('/')} className='btn_go-to-home'>Go to home</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
