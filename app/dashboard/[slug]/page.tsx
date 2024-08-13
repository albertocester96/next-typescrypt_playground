import prisma from '@/prisma/client'
import React from 'react'

async function IssueDescription ({ params }: any) {

  const issue = await prisma.issue.findUnique({ 
    where: { 
      slug: params.slug,
     }
   }
  )

  return (
    <div>
        <h1> The {issue?.title} issue </h1>
        <p> {issue?.description}</p>
      
    </div>
  )
}

export default IssueDescription
