"use client"

import React from 'react'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import { createIssue } from '@/actions/actions';


const NewIssuePage = () => {
  return (
    <form className="max-w-xl space-y-5" action={createIssue}>
      <TextField.Root placeholder="Issue Title" name='title' />
      <TextArea placeholder="Insert the issue description" name='description' />
      <Button>Submit New Issue </Button>
    </form>
  )
}

export default NewIssuePage
