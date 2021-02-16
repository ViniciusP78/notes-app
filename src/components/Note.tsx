import React from 'react';

import { Button, Card, Icon } from  'semantic-ui-react';

import {INote} from '../App';



const Note:React.FC<INote> = ({id, title, content}) => {
  return (
    <Card color='teal'>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className='date'>Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          {content}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button basic>View</Button>
        <Button basic>Delete</Button>
      </Card.Content>
    </Card>
  )
}

export default Note;