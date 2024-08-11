"use server";

import prisma from "@/prisma/client";
import z from 'zod';

const createIssueSchema = z.object({
    title: z.string().min(1, "Title is required").max(255),
    description: z.string().min(1, "Description is required" )
});


export async function createIssue(formData: FormData) {

    const validationResult = createIssueSchema.safeParse({
        title: formData.get('title'),
        description: formData.get('description')
    });

    if (!validationResult.success) {
        return { error: validationResult.error.flatten() };
    }

    const { title, description } = validationResult.data;

    try {
        const newIssue = await prisma.issue.create({
            data: { title, description }
        });

        return { success: true, issue: newIssue };
    } catch (error) {
        console.error("Failed to create issue:", error);
        return { error: "An error occurred while creating the issue." };
    }
}