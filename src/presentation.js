// Import React
import React from 'react';
import preloader from './utils/preloader';

// Import Spectacle Core tags
import {
  CodePane,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Typeface
} from 'spectacle';
// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  authPhoto: require('./media/auth.png'),
  firestorePhoto: require('./media/firestore.png'),
  hostingPhoto: require('./media/hosting.png'),
  patagoniaMatt: require('./media/patagoniaMatt.png'),
  firebaseSigninOptions: require('./media/firebaseSigninOptions.png'),
  feetCoding: require('./media/feetCoding.gif'),
  hellGif: require('./media/hellGif.gif')
};

preloader(images);

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#CECECE',
    secondary: '#2ACC29',
    tertiary: '#36AAFC',
    quartenary: '#5F5F5F',
    quinary: 'white'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <div hasSlideChildren>
        <Deck transition={['slide', 'slide']} transitionDuration={500} theme={theme}>
          <Slide transition={['slide']} bgColor="primary">
            <Image
              style={{ width: '50%' }}
              src="https://firebase.google.com/images/brand-guidelines/logo-standard.png"
            />

            <Heading size={1} fit caps lineHeight={1.3} textColor="quartenary">
              Auth and real-time Listeners
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="quartenary">
              with Firebase and Cloud Firestore
            </Heading>
          </Slide>
          <Slide
            bgImage={images.patagoniaMatt}
            transition={['slide']}
            bgColor="primary"
            textColor="tertiary"
          >
            <Quote textAlign="left" textColor="quartenary" fit>
              We're so glad we hired Matt. He's super awesome.
            </Quote>
            <Cite textAlign="left" textColor="white">
              Future Employer
            </Cite>
          </Slide>
          {/* AUTH SUCKS */}
          <Slide>
            <Image style={{ minWidth: '75%', height: 'auto' }} src={images.hellGif} />
          </Slide>
          <Slide>
            <Image src={images.feetCoding} />
          </Slide>
          {/* WHAT IS FIREBASE */}
          <Slide transition={['slide']} bgColor="primary">
            <Heading size={6} textColor="quartenary" caps>
              <a
                style={{ marginTop: '-15px' }}
                href="https://firebase.google.com/products/#develop-features"
                target="_blank"
              >
                <Image
                  style={{ width: '50%' }}
                  src="https://firebase.google.com/images/brand-guidelines/logo-standard.png"
                />
              </a>
              <div style={{ display: 'flex', marginTop: '.25em' }}>
                <Image style={{ height: '400px', borderRadius: '5px' }} src={images.authPhoto} />
                <Image
                  style={{ height: '400px', borderRadius: '5px' }}
                  src={images.firestorePhoto}
                />
                <Image style={{ height: '400px', borderRadius: '5px' }} src={images.hostingPhoto} />
              </div>
            </Heading>
          </Slide>
          {/* FIREBASE AUTH 101 */}
          <Slide
            notes="<ul>
                    <li>Multiple Providers: Sign-in flows for email, phone authentication, Google,
                        Facebook, Twitter and GitHub sign-in.</li>
                    <li>Account Linking: Flows to safely link user accounts across identity
                        providers.
                    </li>
                    <li>One-tap sign-up and automatic sign-in: Automatic integration with One-tap
                    sign-up for fast cross-device sign-in.
                    </li>
                    <li>
                    Localized UI: Internationalization for over 40 languages.
                    </li>
                    <li>
                    Can use their prebuilt UI options or customize the flow
                    </li>
                    <li>
                    Can also integrate transactional emails for email varification.
                    </li>
                  </ul>"
          >
            <Heading size={1} fit caps lineHeight={1.3} textColor="quartenary">
              Firebase Auth Options
            </Heading>

            <Image style={{ width: '80%' }} src={images.firebaseSigninOptions} />
          </Slide>
          {/* FIREBASE SDK */}
          <Slide>
            <CodePane
              theme="light"
              lang="javascript"
              source="$ yarn add firebase || npm install firebase -- save"
            />
            <CodePane theme="light" lang="javascript" source="import firebase from 'firebase/app" />
            <CodePane theme="light" lang="javascript" source="import 'firebase/auth';" />
          </Slide>
          {/* FIREBASE AUTH */}
          <Slide
            notes="<ul>
                          <li>
                            When working in the Firebase Javascript SDK, you'll be working inside the Auth namespace that returns all the methods you need for Auth
                          </li>
                          <li>
                            There are all the options shown earlier but we are going to work with the Google Login
                          </li>
                          <li>
                            You can sign in with Popup or Redirect or custom flows. We're gonna use the Popup method. 
                          </li>
                          <li>
                            When you call this method, it creates or signs in an existing user, whichever is needed. 
                          </li>
                          <li>
                            This will return a promise so it can only be resolved once. So if you want to motitor auth state you can do the following... 
                          </li>
                        </ul>"
          >
            <CodePane theme="light" lang="javascript" source="const auth = firebase.auth()" />
            <CodePane
              theme="light"
              lang="javascript"
              source="const googleAuthProvider = new firebase.auth.GoogleAuthProvider();"
            />
            <CodePane
              theme="light"
              lang="javascript"
              source="auth.signInWithPopup(googleAuthProvider);"
            />

            <CodePane theme="light" lang="javascript" source="auth.signOut();" />
          </Slide>
          {/* AUTH ON STATE CHANGE */}
          <Slide
            notes="<ul>
                    <li>
                      If you want to monitor the auth state, you'll want to use the onAuthStateChanged method that takes in a callback
                    </li>
                    <li>
                      This callback is fired everytime the auth status is changed and either returns the User object or null depending on Auth state
                    </li>
                  </ul>"
          >
            <CodePane
              theme="light"
              lang="javascript"
              source="auth.onAuthStateChanged(user => {})"
            />
            <CodePane
              theme="light"
              lang="javascript"
              source="const googleAuthProvider = new firebase.auth.GoogleAuthProvider();"
            />
            <CodePane
              theme="light"
              lang="javascript"
              source="auth.signInWithPopup(googleAuthProvider);"
            />
          </Slide>
        </Deck>
      </div>
    );
  }
}
