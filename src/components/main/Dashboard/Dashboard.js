import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid'

import { Header } from './Header/Header';
import { LeftPane } from './LeftPane/LeftPane';
import { RightPane } from './RightPane/RightPane';
import { usePrevious } from '../../../customHooks/usePrevious';
import { decrypt, encrypt } from '../../../services/services';

import { mockData as notes } from './mockData';

export const Dashboard = () => {
  const [data, setData] = useState(notes)
  const [editMode, setEditMode] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [activeNote, setActiveNote] = useState(null)
  const [formData, setFormData] = useState({ title: '', text: '' })

  const prevActiveNote = usePrevious(activeNote)

  useEffect(() => {
    if (activeNote && activeNote !== prevActiveNote) {
      const formDataCopy = { ...formData }
      formDataCopy.title = data.find(note => note.id === activeNote).title
      formDataCopy.text = data.find(note => note.id === activeNote).text
      setFormData(formDataCopy)
    }
  }, [activeNote, data, formData, prevActiveNote])

  const onSelectNoteHandler = async (id) => {
    if (!editMode) {
      setIsLoading(true)
      const activeNoteData = data.find(note => note.id === id)
      const decryptedData = await decrypt(activeNoteData.text)
      if (decryptedData) {
        setIsLoading(false)
        setActiveNote(id)
      }
    }
  }

  const onChangeHandler = (e, name) => {
    setFormData({
      ...formData,
      [name]: e.target.value
    })
  }

  const onSaveHandler = async () => {
    if (activeNote) {
      setIsLoading(true)
      const dataCopy = [...data]
      const activeNoteData = dataCopy.find(note => note.id === activeNote)
      activeNoteData.title = formData.title
      activeNoteData.text = formData.text
      const encryptedData = await encrypt(activeNoteData.text)
      if (encryptedData) {
        setData(dataCopy)
        setEditMode(false)
        setIsLoading(false)
      }
    }
  }

  const onDeleteHandler = () => {
    if (activeNote) {
      const activeNoteData = data.find(note => note.id === activeNote)
      if (activeNoteData) {
        const dataCopy = [...data]
        dataCopy.splice(dataCopy.indexOf(activeNoteData), 1)
        setActiveNote(null)
        setFormData({ title: '', text: '' })
        setData(dataCopy)
        setEditMode(false)
      }
    }
  }

  const onEnableNewNote = () => {
    setActiveNote(null)
    setFormData({ title: '', text: '' })
    setEditMode(true)
  }

  const onCreateNewNoteHandler = () => {
    setIsLoading(true)
    const dataCopy = [...data]
    dataCopy.push({ id: uuid(), title: formData.title, text: formData.text })
    const encryptedData = encrypt(formData.title)
    if (encryptedData) {
      setData(dataCopy)
      setEditMode(false)
      setFormData({ title: '', text: '' })
      setIsLoading(false)
    }
  }

  const onCancelHandler = () => {
    setActiveNote(null)
    setFormData({ title: '', text: '' })
    setEditMode(false)
  }

  const onSubmitFormHandler = (e) => {
    e.preventDefault()
    if (activeNote) {
      onSaveHandler()
    } else {
      onCreateNewNoteHandler()
    }
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <Header
          editMode={editMode}
          onEnableNewNote={onEnableNewNote} />

        <LeftPane
          data={data}
          activeNote={activeNote}
          onSelectNoteHandler={(noteId) => onSelectNoteHandler(noteId)} />

        <RightPane
          editMode={editMode}
          formData={formData}
          isLoading={isLoading}
          activeNote={activeNote}
          onCancelHandler={onCancelHandler}
          onDeleteHandler={onDeleteHandler}
          onSubmitFormHandler={onSubmitFormHandler}
          setEditMode={(value) => setEditMode(value)}
          onChangeHandler={(e, title) => onChangeHandler(e, title)} />
      </div>
    </div>
  )
}