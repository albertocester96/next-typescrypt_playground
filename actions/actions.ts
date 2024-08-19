"use server";

import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";
import z from 'zod';

const createMatchSchema = z.object({
    numberOfPlayers: z.string({ required_error: "Selezionare un numero di giocatori" })
    // dateTime: z.string().min(1, "Description is required"),
    // location: z.string().toLowerCase()
    // players: z.string()
});


export async function createMatch(formData: FormData) {

    console.log(formData)

    const validationResult = createMatchSchema.safeParse({
        numberOfPlayers: formData.get('numberOfPlayers')
        // description: formData.get('description'),
        // slug: formData.get('title')?.toString().replace(/\s+/g, "-").toLowerCase()
    });

    if (!validationResult.success) {
        return { error: validationResult.error.flatten() };
    } 

    const { numberOfPlayers } = validationResult.data;

    console.log(numberOfPlayers)

    try {
        const newMatch = await prisma.match.create({
            data: { numberOfPlayers }
        });

        console.log(newMatch.numberOfPlayers)

        revalidatePath("/dashboard")

        return console.log({success: true, match: newMatch });
    } catch (error) {
        console.error("Failed to create match:", error);
        return { error: "An error occurred while creating the match." };
    }
}