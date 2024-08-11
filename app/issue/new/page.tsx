"use client"

import React from 'react'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import { useForm, SubmitHandler } from "react-hook-form";

interface IssueForm {
    title: string
    description: string
}

const NewIssuePage = () => {
    const {register, handleSubmit} = useForm<IssueForm>();
    const onSubmit: SubmitHandler<IssueForm> = (data) => console.log(data)

  return (
    <form className="max-w-xl space-y-5" onSubmit={handleSubmit(onSubmit)}>
    <TextField.Root placeholder="Issue Title" {...register("title")} />
    <TextArea placeholder="Insert the issue description" {...register("description")} />
    <Button>Submit New Issue</Button>
    </form>
  )
}

export default NewIssuePage
