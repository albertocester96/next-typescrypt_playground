import prisma from "@/prisma/client"
import Link from "next/link";

 async function Dashboard() {

  const  issues = await prisma.issue.findMany();

  return (
    <div>
      <h1 className="text-xl text-center text-bold mb-5"> Issues </h1>
      <ul className="border-t pt-5 text-center border-b pb-5"> 
        {issues.map((issue) => 
          <li className="cursor-pointer"> 
          <Link href={`/dashboard/${issue.slug}`}> {issue.title}</Link> </li>
        )}

      </ul>
    </div>
  )
}

export default Dashboard
