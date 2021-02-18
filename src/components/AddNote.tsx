import React, { useState, FormEvent, ChangeEvent, } from 'react';

import { v4 as uuidv4 } from 'uuid';

import {Segment, Header, Divider, Form} from 'semantic-ui-react';

import {INote} from '../App';

interface IAddNote {
  updateNotesData : (notesData : INote[]) => void
}

const AddNote:React.FC<IAddNote> = ({updateNotesData}) => {

  const [formData, setFormData] = useState<INote>({id:uuidv4(),title:'',content:''});

  const handleAddNote = (event: FormEvent) => {
    event.preventDefault(); // impede que o browser atualize

    setFormData({...formData, id:uuidv4()}); // Adicionar o uuid aqui não funciona

    let data = localStorage.getItem('notesData');

    let fusedData:INote[] = [];

    if (data) {fusedData = JSON.parse(data);}

    fusedData.push(formData);
    localStorage.setItem('notesData',JSON.stringify(fusedData));

    updateNotesData(fusedData)
    
    setFormData({id:uuidv4(),title:'',content:''});
    
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  }

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  }

  return (
    <Segment stacked>
      <Header as='h2' textAlign='center'>New Note</Header>
      <Divider />
      <Form onSubmit={handleAddNote}>
        <Form.Input label='Title' placeholder='Title' name='title' value={formData.title} onChange={handleInputChange}  required/>
        <Form.TextArea label='Content' placeholder='Content' style={{ minHeight: 400 }} name='content' value={formData.content} onChange={handleTextAreaChange} required/>
        <Form.Button primary type='submit'>
          Create Note
        </Form.Button>
      </Form>
    </Segment>
  )
  
}

export default AddNote