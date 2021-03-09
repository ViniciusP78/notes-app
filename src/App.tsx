import React, { useContext } from 'react';

import { Container, Menu, Button, Input, Grid, Icon, Message, List } from  'semantic-ui-react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Note from './components/Note';
import AddNote from './components/AddNote';
import Home from './components/Home';
import ViewNote from './components/ViewNote';

import { NotesContext } from './contexts/NotesContext';

export interface INote {
  id: string,
  title: string,
  content: string
}

const App = () => {

  const {notes, clearNotes} = useContext(NotesContext);

  const handleClearStorage = (): void => {
    localStorage.clear();

    clearNotes();
  }

  return (
    <Container>
      <Router>
        <Menu>
          <Menu.Item header>Notes-app</Menu.Item>

          <Menu.Item>
            <Button basic as={Link} to='/'>
              Home
            </Button>
          </Menu.Item>

          <Menu.Item>
            <Button primary as={Link} to='/new'>

            <Icon name='add' />
              New note
            </Button>
          </Menu.Item>

          <Menu.Item>
            <Button basic negative onClick={handleClearStorage}>
              Clear Storage
            </Button>
          </Menu.Item>

          <Menu.Item position='right'>
            <Input className='icon' icon='search' placeholder='Search...' />
          </Menu.Item>
        </Menu>

        <Grid>
          <Grid.Column width={8}>
            {
              (!notes[0]) &&
              <Message info>No notes added. Add a new note using the button above.</Message>
            }
          {/* <Masonry
            breakpointCols={2}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          > */}
          <List divided selection>
            {notes.map(item => <Note key={item.id} {...item} />)}
          </List>
            
          {/* </Masonry> */}

          </Grid.Column>
          <Grid.Column width={8}>
            <Switch>
              <Route path='/new'>
                <AddNote/>
              </Route>

              <Route path={'/note/:id'} >
                <ViewNote/>
              </Route>

              <Route path='/'>
                <Home />
              </Route>
              
            </Switch>
            
            
          </Grid.Column>
        </Grid>

      </Router>
    </Container>
  );
}

export default App;
