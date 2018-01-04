import React, { Compose } from "react";
import './index.css';

function Services() {
    return (
        <div className='services-wrapper'>
            <h4>Services:</h4>
            <ul className='services-list'>
                <li className='services-li'>- Catering</li>
                <li className='services-li'>- Delivery</li>
                <li className='services-li'>- Company Parties</li>
                <li className='services-li'>- Private Parties</li>
                <li className='services-li'>- Birthdays</li>
                <li className='services-li'>- Anniversaries</li>
                <li className='services-li'>- Other Events</li>

            </ul>
        </div>
    );
}

export default Services;