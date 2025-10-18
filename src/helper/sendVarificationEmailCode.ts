import { resend } from "@/lib/resend";

import VerificationEmail from "../../emails/VarificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVarificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: "Verifiaction Code",
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return {
      success: true,
      message: "Verification sending email successfully",
    };
  } catch (emailError) {
    console.log("Error sending email", emailError);
    return {
      success: false,
      message: "Faild to sending email",
      isAcceptingMessages: false,
    };
  }
}
