import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

const SignIn = (props) => (
  <div className="container">
    <ol className="breadcrumb">
      <li className="breadcrumb-item active"><Link to="/">Home</Link></li>
    </ol>
    <div className="col col-lg-4">
      <h3 className="contact-header">Please sign in with Google</h3>
      <Button href="/auth/google" id="googleButton">
        <Icon name='google' /> Google+
      </Button>
    </div>
  </div>
);

export default SignIn;
