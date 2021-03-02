import React, { useContext, useEffect, useState } from 'react';
import { Remark } from 'react-remark';

import { useParams } from 'react-router-dom';

import {Segment, Header, Divider} from 'semantic-ui-react';

import {INote} from '../App'
import { NotesContext } from '../contexts/NotesContext';

interface IParams {
  id : string
}

const ViewNote = () => {

  const { notes } = useContext(NotesContext);

  const [ viewData , setViewData ] = useState<INote>();


  const { id } = useParams<IParams>();
  console.log(id)
  
  useEffect(() => { // This component re-renders 3 times. Need to fix this
    notes.forEach(item => {
      if (item.id === id) {
        setViewData(item);
      }
    })
  }, [notes, id])

  return (
    <Segment stacked>
      <Header as='h2' textAlign='center'>{(viewData)? viewData.title : "404"}</Header>
      <Divider />
      {
        viewData &&
        <Remark>
          {viewData.content}
        </Remark>
      }
      
    </Segment>
  )
  
}

export default ViewNote;