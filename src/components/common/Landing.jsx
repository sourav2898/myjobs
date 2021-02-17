import React,{useEffect} from 'react'
import './styles/landing.css';
import assets from '../../assets/assets';
import desk from "../../static/img/desk.jpg";
import msgs from '../../assets/msg';
import {useHistory} from 'react-router-dom';

const Landing = () => {
    const ls = JSON.parse( localStorage.getItem("data"));
    let history = useHistory();

    useEffect(() => {
        if(ls && ls[0]?.userRole===1){
            history.push('/home');
        }
        else if(ls && ls[0]?.userRole===0){
            history.push('/home-recruiter');
        }
        else history.push('/');
    }, [])

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
                    <img width="590px" height="350px" src={desk} alt="landing asset" />
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
