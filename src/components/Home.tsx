import React from 'react';

import {Segment, Header, Divider, List} from 'semantic-ui-react';


const Home = () => {
  return (
    <Segment stacked>
      <Header as='h2' textAlign='center'>Notes-app</Header>
      <Divider />
      <p>Just a simple project to learn some of the React properties.</p>

      <Header as='h3'>
        Tecnologies used:
      </Header>

      <List>
        <List.Item>
          <List.Header as='a' href='https://reactjs.org'>
            React
          </List.Header>
          <List.Description>
            Provides the basic rendering.
          </List.Description>
        </List.Item>

        <List.Item>
          <List.Header as='a' href='https://reactrouter.com'>
            React Router
          </List.Header>
          <List.Description>
            A library that provides routing for a react page.
          </List.Description>
        </List.Item>

        <List.Item>
          <List.Header as='a' href='https://react.semantic-ui.com'>
            Semantic UI - React
          </List.Header>
          <List.Description>
            A nice and clean ui framework tailored for react.
          </List.Description>
        </List.Item>

        <List.Item>
          <List.Header as='a' href='https://www.npmjs.com/package/uuid'>
            Uuid
          </List.Header>
          <List.Description>
            A library for generating unique Ids.
          </List.Description>
        </List.Item>

        <List.Item>
          <List.Header as='a' href='https://github.com/remarkjs/react-remark'>
            React-Remark
          </List.Header>
          <List.Description>
            A react library to display markdown components.
          </List.Description>
        </List.Item>
      </List>
    </Segment>
  )
  
}

export default Home;