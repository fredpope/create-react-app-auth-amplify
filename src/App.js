import { Amplify} from 'aws-amplify';
import React from 'react';
import './App.css'

import { withAuthenticator } from '@aws-amplify/ui-react';
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Home } from "./Home";
import { SignInHeader } from "./SignInHeader";
import { SignInFooter } from "./SignInFooter";
import '@aws-amplify/ui-react/styles.css';
import "./styles.css";

import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App({signOut, user}) {
 
  return (
    <Home/>
  );
}

export default withAuthenticator(App, {
  components: {
    Header,
    SignIn: {
      Header: SignInHeader,
      Footer: SignInFooter
    },
    Footer
  }
});

