"use client"

import React from 'react'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from 'next/navigation';

interface IssueForm {
    title: string
    description: string
}

const NewIssuePage = () => {
    const router = useRouter()
    const {register, handleSubmit} = useForm<IssueForm>();

    const onSubmit: SubmitHandler<IssueForm> = async (data) => {
      try{
          fetch("/api/issues/", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(data)
        });
        router.push('/issue')
      } catch (error) {
        console.error(error)
      }
    }

  return (
    <form className="max-w-xl space-y-5" onSubmit={handleSubmit(onSubmit)}>
    <TextField.Root placeholder="Issue Title" {...register("title")} />
    <TextArea placeholder="Insert the issue description" {...register("description")} />
    <Button>Submit New Issue</Button>
    </form>
  )
}

export default NewIssuePage
