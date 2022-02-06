import React, { Component, useEffect, useState } from 'react';
import Head from 'next/head';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import axios from 'axios';
import moment from 'moment';
// import video from '../assets/video/glitch.mp4';
import { 
    MDBMask, MDBCard, MDBCardBody, MDBContainer, MDBRow, 
    MDBCol, MDBBtn, MDBModal, MDBModalBody, MDBIcon, MDBFooter 
} from 'mdbreact';
import styles from '../styles/Home.module.css'

// export class VideoHeader{
export default function VideoHeader() {

    const [isLive, setIsLive] = useState(false);

    useEffect(() => {
        if ( true ) {
            setIsLive(true);
        }
    }, [])

    return (
        <div>
            <header>
                <div className="view" style={{maxHeight:"100vh"}}>
                    <video className="video-fluid" playsInline="playsinline" autoPlay="autoplay" muted={true} loop="loop">
                        {/* <source src="./assets/video/glitch.mp4" type="video/mp4"/> */}
                        <source src="./assets/video/countdown.mp4" type="video/mp4"/>
                    </video>
                    <div className="mask flex-center ">
                    </div>
                    <MDBMask className="d-flex justify-content-center align-items-center">
                        <MDBContainer className="d-flex justify-content-center align-items-center">
                            { 
                                true
                                ?
                                    <MDBCard style={{ position: "fixed", bottom: 5, width:"500px", backgroundColor:"transparent"}}>
                                        <MDBCardBody className='text-center text-white transparent' s>
                                            {/* <MDBRow>
                                                <MDBCol style={{ width: "100%", padding: "0px"}}>
                                                    <button style={{ width: "100%", backgroundColor: "#4c09a9" }} type="button" className="btn" onClick={() => { console.log("Test") }} hover>
                                                        Wallet Connect
                                                    </button>
                                                </MDBCol>
                                                <MDBCol>
                                                    <button style={{ width: "100%", backgroundColor: "#4c09a9" }} type="button" className="btn" onClick={() => { console.log("Test") }} hover>
                                                        Wallet Connect
                                                    </button>
                                                </MDBCol>
                                            </MDBRow> */}
                                            <MDBRow>
                                                <MDBCol style={{ width: "100%", padding: "0px"}}>
                                                    <button style={{ width: "100%", backgroundColor: "#4c09a9" }} type="button" className="btn" onClick={() => { console.log("Test") }} hover>
                                                        Wallet Connect
                                                    </button>
                                                </MDBCol>
                                                <MDBCol>
                                                    <button style={{ width: "100%", backgroundColor: "#4c09a9" }} type="button" className="btn" onClick={() => { console.log("Test") }} hover>
                                                        Wallet Connect
                                                    </button>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCardBody>
                                    </MDBCard>
                                :
                                    <MDBCard style={{ position: "fixed", bottom: 20, width:"500px"}}>
                                        <MDBCardBody>
                                            <MDBIcon far icon="comment-alt" color="#680de4" style={{ color: "#680de4" }}/>
                                        </MDBCardBody>
                                    </MDBCard>
                            }
                        </MDBContainer>
                    </MDBMask>
                    
                    <MDBContainer>
                        {/* <MDBModal isOpen={this.state.modal8} toggle={this.toggle(8)} side position="top-right">
                            <MDBModalBody toggle={this.toggle(8)}  className="form">
                                <SignUpForm/>
                            </MDBModalBody>
                        </MDBModal>
                        <MDBModal isOpen={this.state.modal9} toggle={this.toggle(9)} side position="top-right">
                            <MDBModalBody toggle={this.toggle(9)} className="form">
                                <SignInForm/>
                            </MDBModalBody>
                        </MDBModal> */}
                    </MDBContainer>
                </div>
            </header>
        </div>
    )
}