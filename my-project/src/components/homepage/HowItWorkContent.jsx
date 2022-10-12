import React from 'react';
import Laptop from '../../assets/media/img/laptop-remindpay.png'

const HowItWorkContent = () => {
    return (
        <>
            <div className="grid grid-cols-2 items-center mt-16 mb-16">
               
                    <div className="relative -left-4 w-7/12 h-full  bg-purple-half-dark rounded-full">
                        <p className='m-4 ml-20 my-44 text-left text-4xl text-white'>
                            Remind Pay will help you <br></br> manage your <br></br>subscriptions and <br></br>remind you when to<br></br> renew them.
                        </p>
                </div>

                <div className="">
                    <img src={Laptop} className="max-w-full h-auto -ml-14" alt="Laptop" />
                </div>
            </div>
        </>
    )

};

export default HowItWorkContent;