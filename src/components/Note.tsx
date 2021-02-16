import React from 'react';

interface INote {
  id: number
}

const Note:React.FC<INote> = ({id}) => {
  return (
    <>
      <p>{id}</p>
      <h1>Note</h1>
      <p>content</p>
    </>
  )
}

export default Note;