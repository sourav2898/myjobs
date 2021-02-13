import React from 'react'
import './styles/landing.css';
import assets from '../../assets/assets';
import msgs from '../../assets/msg';

const Landing = () => {

    const Achieve = ({title,desc}) => {
        return( 
            <div className="content">
                <p className="tittle">{title}</p>
                <p className="desc">{desc}</p>
            </div>
        )
    }

    return (
        <>
            <div className="intro">
            <div className="info">
                <div className="greet">
                    <p>Welcome to My<span>Jobs</span></p>
                    <a href='/login' className="action"> Get Started </a>
                </div>
                <div className="image">
                    <img width="622px" height="395px" scr={assets.landing} alt="landing asset" />
                </div>
            </div>
            </div>
            <div className="about">
                <div className="goal">
                    <p className="heading">Why Us</p>
                    <div className="achieve">
                        {
                            msgs.landingAchieve.map((value,index) => {
                                return <Achieve key={index} title={value.title} desc={value.desc} />
                            })
                        }
                    </div>
                </div>

                <div className="partners">
                    <p className="header">Companies who trust us</p>
                    <div className="companies">
                        
                    </div>
                </div>
            </div>  

        </>
    )
}

export default Landing
