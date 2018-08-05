// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  CodePane,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from 'spectacle';

// Import Media
import authPhoto from './media/auth.png';
import firestorePhoto from './media/firestore.png';
import hostingPhoto from './media/hosting.png';
import patagoniaMatt from './media/patagoniaMatt.png';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

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
              Auth and Realtime Listeners
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="quartenary">
              with Firebase and Cloud Firestore
            </Heading>
          </Slide>
          <Slide
            bgImage={patagoniaMatt}
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
                <Image style={{ height: '400px', borderRadius: '5px' }} src={authPhoto} />
                <Image style={{ height: '400px', borderRadius: '5px' }} src={firestorePhoto} />
                <Image style={{ height: '400px', borderRadius: '5px' }} src={hostingPhoto} />
              </div>
            </Heading>
          </Slide>
          <Slide />
          {/* <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide> */}
          <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
              Standard List
            </Heading>
            <List>
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
            </List>
          </Slide>
        </Deck>
      </div>
    );
  }
}
