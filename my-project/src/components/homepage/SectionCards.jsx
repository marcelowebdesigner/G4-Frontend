import React from 'react'
import Cards from './Cards'


const SectionCards = () => {
    return (
        <div class="h-80 ">
            <div class="container mx-auto grid grid-cols-3 gap-14 mt-10">
                <Cards title="Remember your payments" msg="Remind Pay will keep you updated on your subscriptions and send you an alert before they expire." ></Cards>
                <Cards title="Keep track of your subscriptions" msg="Get full control of all your subscriptions."></Cards>
                <Cards title="Alerts you to subscription offers" msg="Receive a notification when the subscription you want is at a low cost"></Cards>
            </div>
        </div>
    )
}

export default SectionCards