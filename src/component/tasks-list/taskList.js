import React from 'react'
import './taskList.css'
import Patient from '../../assets/patient.jpg'

export default function TaskList() {
    return (
        <>
            <div className='task-list-wrapper'>
                <div className='d-flex align-items-center'>
                    <i class="fa-solid fa-list-ul list-img"></i>
                    <p className='list-title m-0'>Tasks List</p>
                </div>
            </div>
            <div className='status-wrapper'>
                <div className='d-flex'>
                    <div className='border-wrapper'></div>
                    <div className='d-flex align-items-center'>
                        <div className="form-check me-2 me-lg-3">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                        </div>
                        <div className='me-2'>
                            <div className='d-flex'>
                                <p className='car-title m-0'>Wash the car</p>
                                <p className='rejected m-0'>Rejected</p>
                            </div>
                            <p className='written m-0'>Written by Bob</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='status-wrapper'>
                <div className='d-flex'>
                    <div className='border-wrapper1'></div>
                    <div className='d-flex align-items-center w-100'>
                        <div className="form-check me-2 me-lg-3">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                        </div>
                        <div className='me-2 w-100'>
                            <div className='d-flex'>
                                <p className='car-title m-0'>Task with dropdown menu</p>
                            </div>
                            <div className='row justify-content-between'>
                                <div className='col-6 p-0'>
                                    <p className='written1 m-0 pe-2'>By Johnny</p>
                                </div>
                                <div className='col-6 col-lg-3'>
                                    <p className='new-btn text-center m-0'>Latest task</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='status-wrapper'>
                <div className='d-flex'>
                    <div className='border-wrapper2'></div>
                    <div className='d-flex align-items-center w-100'>
                        <div className="form-check me-2 me-lg-3">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                        </div>
                        <div className='me-2 w-100'>
                            <div className='d-flex'>
                                <p className='car-title m-0'>Badge on the right task</p>
                            </div>
                            <div className="row justify-content-between">
                                <div className="col-6 p-0">
                                    <p className='written1 m-0'>This task has show on hover actions!</p>
                                </div>
                                <div className='col-6 col-lg-3'>
                                    <p className='new-btn text-center m-0'>Latest task</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='status-wrapper'>
                <div className='d-flex'>
                    <div className='border-wrapper3'></div>
                    <div className='d-flex align-items-center'>
                        <div className="form-check me-2 me-lg-3">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                        </div>
                        <div className='patient-wrapper'>
                            <img src={Patient} alt="" className='patient-wrapper-img' />
                        </div>
                        <div className='me-2'>
                            <div className='d-flex'>
                                <p className='car-title m-0'>Go grocery shopping</p>
                            </div>
                            <p className='written m-0'>A short description for this todo item</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='status-wrapper'>
                <div className='d-flex'>
                    <div className='border-wrapper'></div>
                    <div className='d-flex align-items-center'>
                        <div className="form-check me-2 me-lg-3">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                        </div>
                        <div className='me-2'>
                            <div className='d-flex'>
                                <p className='car-title m-0'>Wash the car</p>
                                <p className='rejected m-0'>Rejected</p>
                            </div>
                            <p className='written m-0'>Written by Bob</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='status-wrapper'>
                <div className='d-flex'>
                    <div className='border-wrapper'></div>
                    <div className='d-flex align-items-center'>
                        <div className="form-check me-2 me-lg-3">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                        </div>
                        <div className='me-2'>
                            <div className='d-flex'>
                                <p className='car-title m-0'>Service the car</p>
                                <p className='rejected m-0'>PLANNED</p>
                            </div>
                            <p className='written m-0'>Written by Bob</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='task-list-wrapper'>
                <div className='d-flex align-items-center justify-content-end'>
                    <p className='cancle m-0'>Cancle</p>
                    <button className='cancle-send' type='button'>Save</button>
                </div>
            </div>

        </>
    )
}
