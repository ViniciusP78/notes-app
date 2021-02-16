import React from 'react';

import { Container, Menu, Segment, Button, Input, Modal, Grid, Header, Card, Divider, Icon } from  'semantic-ui-react';

import Note from './components/Note';

import Masonry from 'react-masonry-css';

export interface INote {
  id: number
  title: string,
  content: string
}

const App = () => {

  const notesData:INote[] = [
    {
      id: 1,
      title: 'Nota 1',
      content: 'Lorem ipsum dolobore et dolore magna aliqua.'
    },
    {
      id: 2,
      title: 'Nota 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscinged do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 3,
      title: 'Nota 3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 4,
      title: 'Nota 4',
      content: 'Lorem ipsum dolor sit amet, consectedo eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },

  ]

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
          {notesData.map(item => <Note {...item} />)}
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
