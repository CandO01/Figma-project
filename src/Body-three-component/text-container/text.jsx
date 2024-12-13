import React from "react";
import './text.scss';

function Text(){
  return(
    <div className="text-container">
      <h2>How it works</h2>
      <p className="getjob">Get a job helps you find the right job easily. Getajob helps you find the right job easily. Get a job helps you find the right job easily.</p>
      <div className="search">
        <div className="check-box">
          <div className="icon">
            <i className="fas fa-check checkmark"></i>
          </div>
          <p>Search Jobs</p>
        </div>
        <p className="getjob">We have jobs in the most popular industries and with top companies. Plus, you can create alerts so you never miss a job opportunity.</p>
      </div>

      <div className="search">
        <div className="check-box">
          <div className="icon">
            <i className="fas fa-check checkmark"></i>
          </div>
          <p>Create a Profile and Get Noticed</p>
        </div>
        <p className="getjob">Create a profile to showcase your skills and experience so recruiters can find you. Upload your CV so you can apply for jobs quickly and easily.</p>
      </div>

      <div className="search">
        <div className="check-box">
          <div className="icon">
            <i className="fas fa-check checkmark"></i>
          </div>
          <p>Apply for jobs</p>
        </div>
        <p className="getjob">Find the training you need to improve your skills, or visit our Career Center for tips and advice to build your career.</p>
      </div>
    </div>
  )
}
export default Text