import React from 'react'
import Cards from './Cards'
import Card from "../../assets/media/svg/icon-card.svg";
import List from "../../assets/media/svg/icon-list.svg";
import Bell from "../../assets/media/svg/icon-bell.svg";


const SectionCards = () => {
    return (
        <div>
            <div class="container mx-auto grid grid-cols-3 gap-14 w-10/12">
                <Cards 
                title="Remember your payments" 
                msg={<span><span className='text-yellow-300'>Remind Pay</span> will keep you updated on your subscriptions and send you an alert before they expire.</span>} 
                icon={Card}></Cards>
                <Cards 
                title="Keep track of your subscriptions" 
                msg="Get full control of all your subscriptions." 
                icon={List}></Cards>
                <Cards 
                title="Alerts you to subscription offers" 
                msg="Receive a notification when the subscription you want is at a low cost" 
                icon={Bell}></Cards>
            </div>
        </div>
    )
}

export default SectionCards