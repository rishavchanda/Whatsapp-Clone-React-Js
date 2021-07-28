import React, { useState } from 'react';
import './PhoneAuthCss.css';
import WhatsappLogo from "../../images/whatsapp-logo.png"
import firebase from '../../firebase-Config'

const LoginPage = () => {
    const [PhoneNumber, setPhoneNumber] = useState();
    const [OTPcode, setOTPcode] = useState();
    const setupRecaptcha = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                console.log('recapta resolved')
                onSignInSubmit();
            },
            defaultCountry: "IN",
        });
    }

    const onSignInSubmit = (event) => {
        event.preventDefault();
        setupRecaptcha();
        const phoneNumber = `+91${PhoneNumber}`;
        console.log(phoneNumber);
        const appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
            }).catch((error) => {
                alert('Please try again OTP not sent');
                window.location.reload()
            });
    }
    const getOtp = (e) => {
        e.preventDefault();
        const code = OTPcode;
        window.confirmationResult.confirm(code).then((result) => {
            // User signed in successfully.
            const user = result.user;
            console.log('signed in');
            // ...
        }).catch((error) => {
            alert('Wrong Otp');
            window.location.reload();
        });
    }
    return (
        <div className="containerLogin">
            <img src={WhatsappLogo} className="Logo" />
            <div className="titelLogin">
                Login to Whatsapp
            </div>
            <div style={{ display: "block" }}>
                <div className="title">Enter Your Phone Number Below</div>
                <div id="sign-in-button"></div>
                <form onSubmit={onSignInSubmit}>
                    <input type="text" placeholder="+91-12345-67890" class="number" value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required="required" />
                    <button className="button" type="submit">Continue</button>
                </form>
            </div>
            <div style={{ display: "block" }}>
                <div className="title">Enter OTP send to Mobile Number</div>
                <form onSubmit={getOtp}>
                    <input type="text" placeholder="123456" class="number" value={OTPcode} onChange={(e) => setOTPcode(e.target.value)} required="required" />
                    <button className="button" type="submit">Verify</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;