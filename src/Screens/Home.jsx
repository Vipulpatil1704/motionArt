import React from 'react'
import Navbar from '../Components/Navbar'
import motionartLogo from '../assets/MotionArtEffect-logo.png'
import Review from '../Components/Review'
import motionartLogo1 from '../assets/motionarteffect-img1.png'
import motionartLogo3 from '../assets/motionarteffect-img3.png'
import navLogo from '../assets/motionarteffect-img2.png'
import star from '../assets/motionarteffect-img4.png'
import wand from '../assets/motionarteffect-img5.png'
import browserSupport from '../assets/motionarteffect-img8.png'
import Apply from '../Components/Apply'
import Card from '../Components/Card'
import card1 from '../assets/motionarteffect-img9.png'
import card2 from '../assets/motionarteffect-img6.png'
import card3 from '../assets/motionarteffect-img7.png'
import sectionImg1 from '../assets/motionarteffect-img11.png'
import sectionImg2 from '../assets/motionarteffect-img10.png'
export default function Home() {
    return (
        <div>
            <Navbar />
            <div className='main-content container-fluid'>
                <div className='top-bar row'>
                    <div className='col-lg-6'><img src={motionartLogo} /></div>
                    <div className='col-lg-6'><a href="" className='btn btn-lg'>Purchase Now</a></div>
                </div>
                <div className='main-heading-section row'>
                    <div className='col-lg-2 col-sm-12 me-5 my-5'>
                        <div className='gradient-color main-heading-first'>Transform Your Website</div>
                        <div className='main-heading-first'>With Motion Art Effect</div>
                    </div>
                    <div className='col-lg-7 col-sm-12'>
                        <div className='main-heading-second mb-4'>
                            Attract Your Visitors Attention With Colorful <span className='gradient-color'> Motion Art Effect</span>
                        </div>
                        <div className='grey-text grey-text-first-heading'>Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website. </div>
                    </div>
                </div>
                <div className='text-align-center grey-white-color grey-white-first-heading my-5'>Trusted by thousands of users around the world</div>
                <div className='reviews row'>
                    <div className='col-lg-4 col-sm-12 '>
                        <Review src={navLogo} star={star} />
                    </div>
                    <div className='col-lg-4 col-sm-12'>
                        <Review src={motionartLogo1} star={star} />
                    </div>
                    <div className='col-lg-4 col-sm-12'>
                        <Review src={motionartLogo3} star={star} />
                    </div>
                </div>
                <div className='magical-wand-section row my-5'>
                    <div className='col-lg-8 col-sm-12'>
                        <div className='grey-white-color grey-white-third-heading'>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</div>
                        <div className='grey-text grey-text-first-heading'>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</div>
                        <button className='btn gradient-background wand-button py-3 my-3'>Purchase From Envato<i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div className='col-lg-4 col-sm-12 magical-wand'><img src={wand} /></div>
                </div>
                <div className='grey-white-color grey-white-third-heading text-align-center my-5'>
                    Apply On Any Section Or Enable For Whole Page
                </div>
                <div className='apply row'>
                    <div className='col-lg-6 col-sm-12'>
                        <Apply src={sectionImg1} mainHeading="Apply On Section" bottomHeading="Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. " />
                    </div>
                    <div className='apply-second-div col-lg-6 col-sm-12'>
                        <Apply src={sectionImg2} mainHeading="Apply On Page" bottomHeading="Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation." />
                    </div>
                </div>
                <div className='browser-support py-5 box-shadow'>
                    <div>
                        <div className='grey-white-color grey-white-second-heading  my-2'>Supported by All Popular Browsers</div>
                        <div className='grey-text grey-text-first-heading my-3'>Rest assured, Motion Art is designed to be compatible with all major web browsers.</div>
                        <img className='my-3 browser-support-image' src={browserSupport} />
                    </div>
                </div>
                <div className='features-div mb-5'>
                    <div className='grey-white-color grey-white-second-heading my-3'>An All-Round Plugin With Powerful Features</div>
                    <div className='grey-text grey-text-first-heading'>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</div>
                </div>
                <div className='row cardd'>
                    <div className='col-lg-4 col-sm-12'>
                        <Card src={card1} mainHeading={"Light Weight"} bottomHeading={"Motion Art for Elementor is designed to be lightweight."} />
                    </div>
                    <div className='col-lg-4 col-sm-12'>
                        <Card src={card2} mainHeading={"100% Responsive"} bottomHeading={"Create a consistent visual experience across all devices."} />
                    </div>
                    <div className='col-lg-4 col-sm-12'>
                        <Card src={card3} mainHeading={"User Friendly Interface"} bottomHeading={"Ensure a smooth experience for both applicants and administrators."} />
                    </div>

                </div>
            </div>
            <div className='gradient-background container-fluid'>   
                <div className='footer row p-3'>
                    <div className='grey-white-color col-lg-8 col-sm-12 my-2'>© 2024 Copywrite. All rights reserved by QodeMatrix Created by Vipul Patil for Practise</div>
                    <div className='col-lg-4 col-sm-12 row'>
                        <div className='grey-text col-lg-6'>Documentation</div>
                        <div className='grey-text col-lg-6'>Support</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
