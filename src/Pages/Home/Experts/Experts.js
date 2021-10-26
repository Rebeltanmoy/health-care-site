import React from 'react';
import doctor1 from '../../../images/Doctor/Doctor-1 (1).jpg'
import doctor2 from '../../../images/Doctor/Doctor-1 (2).jpg'
import doctor3 from '../../../images/Doctor/Doctor-1 (3).jpg'
import doctor4 from '../../../images/Doctor/Doctor-1 (4).jpg'
import Expert from '../Expert/Expert';
import doctor5 from '../../../images/Doctor/Doctor-1 (5).jpg'

const experts = [
    {
        img: doctor1,
        name: 'Alexa bless',
        expertize: '-Dental Expert-'
    },
    {
        img: doctor2,
        name: 'Jhon Anderson',
        expertize: '-Dental Expert-'
    },
    {
        img: doctor3,
        name: 'Zakira Smith',
        expertize: '-Dental Expert-'
    },
    {
        img: doctor4,
        name: 'Sakib Anderson',
        expertize: '-Dental Expert-'
    },
    {
        img: doctor5,
        name: 'Andrew Smith',
        expertize: '-Dental Expert-'
    },
]

const Experts = () => {
    return (
        <div id="experts" className="container">
            <h2 className="text-primary">Our Doctors</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;