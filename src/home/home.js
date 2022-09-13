import React from 'react'
import Message from '../component/message/message'
import Navbar from '../component/navbar/navbar'
import TaskList from '../component/tasks-list/taskList'
import './home.css'

export default function Home() {
    return (
        <div className='main-wrapper'>
            <Navbar />
            <div className='message-main-box'>
                <div className="container-fluid ">
                    <div className="row py-3 navbar-box">
                        <div className="col-lg-8 p-0">
                            <div className='d-flex '>
                                <div className='plane-wrapper shadow-sm'>
                                    <i class="fa-solid fa-plane-up plane-img"></i>
                                </div>
                                <div className='plane-title-wrapper'>
                                    <p className='title-analy m-0'>Analytics Dashboard</p>
                                    <p className='title-subanly m-0'>Dashboard is an online report where your website data from ecammerce to web analytics is displayed.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-0">
                            <div className='create-now-wrapper'>
                                <i class="fa-solid fa-star me-3 star"></i>
                                <button className='btn btn-primary d-flex align-items-center create'>
                                    <i class="fa-solid fa-plus me-2"></i>Create Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-0 mt-lg-4 py-3 navbar-box">
                        <div className="col-lg-6 mb-3 mb-lg-0">
                            <TaskList />
                        </div>
                        <div className="col-lg-6">
                            <Message />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
