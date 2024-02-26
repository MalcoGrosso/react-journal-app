import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'
import { AddOutlined } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from '../../store/journal/thunks'

export const JournalPage = () => {

  const dispatch = useDispatch();
  const { isSaving, active } = useSelector(state => state.journal)

  const onClickNewNote = () => {

    dispatch(startNewNote());


  }

  return (
    <JournalLayout>
      
          {/* <Typography> Consectetur laboris in minim esse duis laboris. Anim consectetur non quis et velit labore et do commodo ipsum aliquip ipsum. Voluptate voluptate excepteur commodo est aute. Officia qui do mollit veniam irure officia culpa tempor pariatur ex velit.</Typography> */}
          
          {
            (!!active) ? <NoteView/> : <NothingSelectedView/>
          }
          
          
          {/* <NothingSelectedView/> */}
          {/* <NoteView/> */}

          <IconButton 
          onClick={onClickNewNote}
          size='large'
          disabled={isSaving} 
          sx={{color:'white',
                backgroundColor: 'red',
                ':hover': {backgroundColor:'red', opacity: 0.9},
                position:'fixed',
                right: 50,
                bottom: 50
                }} >
          <AddOutlined sx={{fontSize:30}}/>

          </IconButton>

          
    </JournalLayout>
  )
}
