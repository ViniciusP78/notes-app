import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Button, Card, Icon } from  'semantic-ui-react';

import {INote} from '../App';

interface INoteProp {
  note: INote,
  handleViewNote: (id: string) => void
}

const Note:React.FC<INoteProp> = ({note, handleViewNote}) => {
  return (
    <Card color='teal'>
      <Card.Content>
        <Card.Header>{note.title}</Card.Header>
        <Card.Meta>
          <span className='date'>Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          {note.content}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button basic as={Link} to={{pathname:`/note/${note.id}`, state: {note}}}>View</Button>
        <Button basic>Delete</Button>
      </Card.Content>
    </Card>
  )
}

export default Note;