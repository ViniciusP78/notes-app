import React, { useEffect, useState } from 'react';

import { Container, Menu, Button, Input, Grid, Icon } from  'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Note from './components/Note';
import AddNote from './components/AddNote';
import Home from './components/Home';
import ViewNote from './components/ViewNote';

import Masonry from 'react-masonry-css';

export interface INote {
  id: string,
  title: string,
  content: string
}

const App = () => {

  const [notesData, setNotesData] = useState<INote[]>([]);

  useEffect(() => {
    let data = localStorage.getItem('notesData');
    if (data) {
      setNotesData(JSON.parse(data));
    } else {
      console.log('Empty Storage')
    }
  }, []);

  const handleClearStorage = (): void => {
    localStorage.clear();

    setNotesData([]);
  }

  const handleViewNote = (id: string): INote | null => {
    let viewNoteData = null;

    notesData.map(item => {
      if (item.id === id) {
        viewNoteData = item;
      }
    })
    return viewNoteData
  }


  return (
    <Container>
      <Router basename='notes-app'>
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
          <Masonry
            breakpointCols={2}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {notesData.map(item => <Note key={item.id} {...item} />)}
          </Masonry>

          </Grid.Column>
          <Grid.Column width={8}>
            <Switch>
              <Route path='/new'>
                <AddNote updateNotesData={setNotesData} />
              </Route>

              <Route path={'/note/:id'} >
                <ViewNote handleViewNote={handleViewNote}/>
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
