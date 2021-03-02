import React from 'react';
import { Link } from 'react-router-dom';

import { Icon, List} from  'semantic-ui-react';

import {INote} from '../App';

const Note:React.FC<INote> = ({id, title}) => {
  return (
    <List.Item as={Link} to={`/note/${id}`}>
      <Icon name='sticky note outline' />
      <List.Content>
        <List.Header>
          {title}
        </List.Header>
      </List.Content>
      
    </List.Item>
  //   <Segment>
  //     {title}
  //     <Button.Group icon compact>
  //   <Button basic color='blue'>
  //   <Icon name='edit outline' />
  //   </Button>
  //   <Button basic color='red'>
  //     <Icon name='trash alternate outline' />
  //   </Button>
  // </Button.Group>
  //   </Segment>
    // <Card color='teal'>
    //   <Card.Content>
    //     <Card.Header>{title}</Card.Header>
    //     <Card.Meta>
    //       <span className='date'>Joined in 2015</span>
    //     </Card.Meta>
    //     <Card.Description>
    //       <Icon name='file text' />
    //     </Card.Description>
    //   </Card.Content>
    //   <Card.Content extra>
    //     <Button basic as={Link} to={`/note/${id}`}>View</Button>
    //     <Button basic>Delete</Button>
    //   </Card.Content>
    // </Card>
  )
}

export default Note;