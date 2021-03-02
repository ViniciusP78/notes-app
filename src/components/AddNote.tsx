import React, { useState, FormEvent, ChangeEvent, useContext, } from 'react';


import {Segment, Header, Divider, Form, Message, Icon} from 'semantic-ui-react';

import { NotesContext } from '../contexts/NotesContext';


const AddNote = () => {
  const {saveNote} = useContext(NotesContext);

  const [formData, setFormData] = useState({title:'',content:''});

  const handleAddNote = (event: FormEvent) => {
    event.preventDefault(); // impede que o browser atualize
    
    saveNote(formData.title, formData.content)
    
    setFormData({title:'',content:''});
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
    <>
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
      <Message info>
        <Icon name='info circle' />
        We use <strong>Markdown</strong> for formatting. Click <a target='_blank' rel="noreferrer" href='https://www.markdownguide.org/cheat-sheet/'>here</a> to learn more.
      </Message>
    </>
  )
  
}

export default AddNote