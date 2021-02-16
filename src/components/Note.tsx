import React from 'react';

import { Button, Card, Icon } from  'semantic-ui-react';


interface INote {
  id: number
}

const Note = () => {
  return (
    <Card color='teal'>
              <Card.Content>
                <Card.Header>Title</Card.Header>
                <Card.Meta>
                  <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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