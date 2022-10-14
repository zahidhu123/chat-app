import React, { useState } from 'react'
import Patient from '../../assets/patient.jpg'
import Charli from '../../assets/charli.jpg'
import './message.css'

export default function Message() {
   


    const demoMessageList = [
        {
            message: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complate account of the system.',
            type: 'sender',
        },
        {
            message: 'Expound the actual teachings of the great explore of the truth,the master-builder of human happiness.',
            type: 'receiver',
        },
        {
            message: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complate account of the system.',
            type: 'sender',
        },
        {
            message: 'denouncing pleasure and praising pain was born and I will give you a complate account of the system.',
            type: 'receiver',
        },
        {
            message: 'Where are you from',
            type: 'sender',
        },
        {
            message: 'I am from Bhopal ',
            type: 'receiver',
        },
        {
            message: 'What are you doing now',
            type: 'sender',
        },
        {
            message: 'Currently I am freelincing work',
            type: 'receiver',
        },
    ];

    const [chatValue, setChatValue] = useState("");
    const [messageList, setMessageList] = useState(demoMessageList);

    function sendMessage() {
      const data = {
        message: chatValue,
        type: 'sender',
    };

    setMessageList(oldArray => [...oldArray, data]);
    setChatValue('');
    }
    return (
        <>
            <div className='message-area active-wrapper1'>

                <div className='message-header'>
                    <div className='d-flex align-items-center'>
                        <i class="fa-solid fa-print print-img me-2"></i>
                        <p className='m-0'>Chat Box</p>
                    </div>
                </div>
                <div className='message-content'>
                    {messageList.map((data) => { 
                        return <>
                           { data.type == 'sender' && <div className='receiver-area'>
                                <div className='position-relative'>
                                    <img src={Patient} alt="" className='receiver-photo' />
                                    <div className="square"></div>
                                </div>
                                <div>
                                    <p className='receiver-content'>{data.message}</p>
                                    <div className='d-flex align-items-center mt-2'>
                                        <i class="fa-regular fa-calendar-days calender-img"></i>
                                        <div className='receiver-time'>
                                            <p className=''>10.40 pm | Yesterday</p>
                                        </div>
                                    </div>
                                </div>
                            </div>}

                            { data.type == 'receiver' && <div className='sender-area'>

                                <div>
                                    <p className='sender-content'>{data.message}</p>
                                    <div className='d-flex align-items-center justify-content-end mt-2'>
                                        <i class="fa-regular fa-calendar-days calender-img"></i>
                                        <div className='receiver-time'>
                                            <p className=''>10.20 pm | Yesterday</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='position-relative ms-2'>
                                    <img src={Charli} alt="" className='receiver-photo' />
                                    <div className="square"></div>
                                </div>
                            </div>}
                        </>
                    })}

                </div>
                <div className='message-footer'>
                    <div className='d-flex w-100'>
                        <div className='d-flex w-100 align-items-center'>
                            <input type="text" className='search-message m-0 w-100' placeholder='Write here and hit enter to send...' value={chatValue} onChange={(e)=>setChatValue(e.target.value)}/>
                            <button type='button' className='btn' onClick={()=>{sendMessage()}}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

