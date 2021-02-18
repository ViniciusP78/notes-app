import React from 'react';

import {Segment, Header, Divider} from 'semantic-ui-react';

const AddNote = () => {
  return (
    <Segment stacked>
      <Header as='h2' textAlign='center'>New Note</Header>
      <Divider />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </Segment>
  )
  
}

export default AddNote