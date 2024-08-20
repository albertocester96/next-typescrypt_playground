"use server";

import prisma from "@/prisma/client";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import { redirect } from "next/navigation";
import z from 'zod';


dayjs.extend(utc);


const createMatchSchema = z.object({
    numberOfPlayers: z.string({ required_error: "Selezionare un numero di giocatori" }),
    dateTime: z.coerce.date()
})
    // location: z.string().toLowerCase()
    // players: z.string();


export async function createMatch(formData: FormData) {

    const date = formData.get('dateTime')?.toString()
    const utcDate = dayjs(date).utc().format()

    console.log('data selezionata:' + date, 'data utc:' + utcDate)

    const validationResult = createMatchSchema.safeParse({
        numberOfPlayers: formData.get('numberOfPlayers'),
        dateTime: utcDate
        
        // slug: formData.get('title')?.toString().replace(/\s+/g, "-").toLowerCase()
    });   

    if (!validationResult.success) {
        return { error: validationResult.error.errors };
    } else {
        console.log("Validation passed:", validationResult.data);
    }

    const { numberOfPlayers, dateTime } = validationResult.data;

    console.log(numberOfPlayers, dateTime)

    try {
        const newMatch = await prisma.match.create({
            data: { numberOfPlayers, 
                    dateTime: dateTime}
        },
        )
        console.log({success: true, match: newMatch })

    } catch (error) {

        if (error instanceof z.ZodError) {
            console.log("Failed to create match:", error.errors);
            return { error: "An error occurred while creating the match." }
        }
        
    }

    redirect("/teams")
}