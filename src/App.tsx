import React from 'react';

import { Container, Menu, Segment, Button, Input, Modal, Grid, Header, Card, Divider, Icon } from  'semantic-ui-react';

import Note from './components/Note';

import Masonry from 'react-masonry-css';

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
          <Icon name='add' />
            New note
          </Button>

        </Menu.Item>

        <Menu.Item position='right'>
          <Input className='icon' icon='search' placeholder='Search...' />
        </Menu.Item>
      </Menu>

      <Grid>
        <Grid.Column width={8}>
        <Masonry
          breakpointCols={2}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          <Note />
          <Note />
        </Masonry>

        </Grid.Column>
        <Grid.Column width={8}>
          <Segment stacked>
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
