import { connectToDB } from "@/utils/database";
import Location from "@/models/location";

export const POST = async (request) => {

    const { lat , long, aisle_no } = await request.json();
    console.log(lat, long, aisle_no);

    try {
        
        await connectToDB();

        const newLocation = new Location({ latitude: lat, longitude: long, aisle_number: aisle_no});
        await newLocation.save();


        return new Response(JSON.stringify(newLocation), { status: 201 })
        
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}