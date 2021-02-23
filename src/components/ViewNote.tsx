import React, { useEffect, useState } from 'react';
import { Remark } from 'react-remark';

import { useParams } from 'react-router-dom';

import {Segment, Header, Divider} from 'semantic-ui-react';

import {INote} from '../App'

interface IParams {
  id : string
}

interface IViewNote {
  handleViewNote: (id: string) => INote | null
}

const ViewNote:React.FC<IViewNote> = ({handleViewNote}) => {
  const [ viewData , setViewData ] = useState<INote>();


  const { id } = useParams<IParams>();
  console.log(id);
  
  useEffect(() => {
    if (id) {
      let data = handleViewNote(id);
      console.log(data);
      if (data) {
        setViewData(data)
      }
    }
  }, [handleViewNote, id])

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