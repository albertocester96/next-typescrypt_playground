"use server";

import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";
import z from 'zod';

const createIssueSchema = z.object({
    title: z.string().min(1, "Title is required").max(255),
    description: z.string().min(1, "Description is required"),
    slug: z.string().toLowerCase()
});


export async function createIssue(formData: FormData) {

    const validationResult = createIssueSchema.safeParse({
        title: formData.get('title'),
        description: formData.get('description'),
        slug: formData.get('title')?.toString().replace(/\s+/g, "-").toLowerCase()
    });

    if (!validationResult.success) {
        return { error: validationResult.error.flatten() };
    }

    const { title, description, slug } = validationResult.data;

    try {
        const newIssue = await prisma.issue.create({
            data: { title, description, slug }
        });

        revalidatePath("/dashboard")

        return { success: true, issue: newIssue };
    } catch (error) {
        console.error("Failed to create issue:", error);
        return { error: "An error occurred while creating the issue." };
    }
}