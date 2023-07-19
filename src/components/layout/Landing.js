import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <section className="landing">
      <div className="landing-inner">
        <div className="landing-content">
          <h1 className="x-large">Developer Connector</h1>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
        <div className="attractive-features">
          <div className="feature">
            <i className="fas fa-code"></i>
            <h3>Build Your Portfolio</h3>
            <p>Showcase your skills and projects to the developer community.</p>
          </div>
          <div className="feature">
            <i className="fas fa-comments"></i>
            <h3>Connect with Developers</h3>
            <p>Engage with other developers, ask questions, and share knowledge.</p>
          </div>
          <div className="feature">
            <i className="fas fa-share"></i>
            <h3>Share Your Ideas</h3>
            <p>Post your thoughts, articles, and insights to inspire others.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
