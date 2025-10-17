import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";

import { sendVarificationEmail } from "@/helper/sendVarificationEmailCode"; 
import { ApiResponse } from "@/types/ApiResponse";

export async function POST(request: Request) {

    await dbConnect();
    
    try {



        const { usserName, email, password } = await request.json();

          return {
            success: true,
            message: "User Successfully Registered "
        };
        
    } catch (error) {

        console.error("Error Registering User", error);
        return Response.json({
            success: false,
            message: "Error Registering User",
            status: 500
        });
        
    }
    
}