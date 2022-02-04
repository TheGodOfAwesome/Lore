import React, { Component } from 'react';
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

// export class VideoHeader{
export default function VideoHeader() {

    return (
        <div>
            <header>
                <div className="view" style={{maxHeight:"100vh"}}>
                    <video className="video-fluid" playsInline="playsinline" autoPlay="autoplay" muted={true} loop="loop">
                        <source src="./assets/video/glitch.mp4" type="video/mp4"/>
                        {/* <source src="./assets/video/countdown.mp4" type="video/mp4"/> */}
                    </video>
                    <div className="mask flex-center ">
                    </div>
                    <MDBMask className="rgba-black-light d-flex justify-content-center align-items-center">
                        <MDBContainer>
                            {/* <MDBCard style={{float: "bottom"}}>
                                <MDBCardBody><MDBIcon far icon="comment-alt" color="#680de4" style={{ color: "#680de4" }}/> </MDBCardBody>
                            </MDBCard> */}
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