import React from 'react';

import { Container, Menu, Segment, Button, Input, Modal, Grid, Header, Card, Divider } from  'semantic-ui-react';

import Note from './components/Note';

export interface INotesData {
  id: number
  title: string,
  content: string
}

const App = () => {
  return (
    <Container>
      <Menu>
        <Menu.Item header>Notes-app</Menu.Item>

        <Menu.Item>
          <Button primary>
            Add note
          </Button>

        </Menu.Item>

        <Menu.Item position='right'>
          <Input className='icon' icon='search' placeholder='Search...' />
        </Menu.Item>
      </Menu>

      <Grid>
        <Grid.Column width={8}>
          <Card.Group itemsPerRow={2}>
            <Card color='teal'>
              <Card.Content>
                <Card.Header>Title</Card.Header>
                <Card.Meta>
                  <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Description>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>Title</Card.Header>
                <Card.Meta>
                  <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        </Grid.Column>
        <Grid.Column width={8}>
          <Segment>
            <Header as='h2' textAlign='center'>Welcome</Header>
            <Divider />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Segment>
          
        </Grid.Column>
      </Grid>

      
    </Container>

    
      

  );
}

export default App;
