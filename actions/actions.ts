"use server";

import prisma from "@/prisma/client";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import { redirect } from "next/navigation";
import z from 'zod';
import 'dayjs/locale/it'
import custom from 'dayjs/plugin/customParseFormat'


dayjs.extend(utc);
dayjs.extend(custom);


const createMatchSchema = z.object({
    numberOfPlayers: z.string({ required_error: "Selezionare un numero di giocatori" }),
    dateTime: z.coerce.date(), //validate a Date object
    location: z.string()
})


export async function createMatch(formData: FormData) {

    //...value from form formatted to string, passed to parse in italian and converted to utc to store
    const date = formData.get('dateTime')?.toString()
    const parsedDate = dayjs(date, 'DD/MM/YYYY HH:mm', 'it')
    const utcDate = dayjs.utc(parsedDate)
    //...

    const validationResult = createMatchSchema.safeParse({
        numberOfPlayers: formData.get('numberOfPlayers'),
        dateTime: utcDate
        
    });   

    if (!validationResult.success) {
        return { error: validationResult.error.errors };
    } else {
        console.log("Validation passed:", validationResult.data);
    }

    const { numberOfPlayers, dateTime , location} = validationResult.data;

    console.log(numberOfPlayers, dateTime, location)

    try {
        const newMatch = await prisma.match.create({
            data: { numberOfPlayers, 
                    dateTime: dateTime,
                    location}
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