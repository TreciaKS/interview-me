import React from 'react'
import { Player } from "@lottiefiles/react-lottie-player";
import EmailAnimation from '../email-animation/Email_Animation.json'
import AppLayout from './AppLayout';

const EmailSubmission = () => {
  return (
    <AppLayout>
      <section className="grid items-center justify-center h-full">
        <Player
          src={EmailAnimation}
          loop
          autoplay
          style={{
            height: "250px",
            width: "250px",
            marginTop: "80px",
          }}
        />
        <div className="-mt-60">
          <h2 className="-mt-32 text-3xl font-semibold text-center text-gray-800">
            Check your email
          </h2>

          <p className="text-center text-gray-500 text-md">
            We&apos;ve sent a verification like to &nbsp;
            <span className="font-medium text-gray-700">user@email.com</span>
          </p>
        </div>
      </section>
    </AppLayout>
  );
};

export default EmailSubmission