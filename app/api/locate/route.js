import { connectToDB } from "@/utils/database"
import Location from "@/models/location"

export const GET = async () => {
    try {
        await connectToDB()

        const locations = await Location.find()

        return new Response(JSON.stringify(locations), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 