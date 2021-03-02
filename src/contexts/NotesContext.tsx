import React, { createContext, ReactNode, useEffect, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

export interface INote {
  id: string,
  title: string,
  content: string,
  createAt: string,
  tags?: string[]
}

interface INotesContext {
  notes: INote[],
  saveNote: (title: string, content: string) => void,
  clearNotes: () => void
}

export const NotesContext = createContext({} as INotesContext);

export function NotesProvider({children} : {children: ReactNode}) {

  const [notes, setNotes] = useState<INote[]>([]);

  useEffect(() => {
    let JSONNotes = localStorage.getItem('notes');
    if (JSONNotes) {
      let ParsedNotes = JSON.parse(JSONNotes);
      setNotes(ParsedNotes);
    }
  },[])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  function saveNote(title: string, content: string) {
    let note = {
      id: uuidv4(),
      title,
      content,
      createAt: 'agora'
    };

    setNotes([...notes, note]);
  }

  function clearNotes() {
    setNotes([]);
  }

  return (
    <NotesContext.Provider value={{
      notes,
      saveNote,
      clearNotes
    }}>
      {children}
    </NotesContext.Provider>
  )
}
