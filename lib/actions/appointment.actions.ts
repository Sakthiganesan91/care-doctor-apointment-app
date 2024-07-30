import { ID } from "node-appwrite";
import {
  APPOINTMENT_COLLECTION_ID,
  databases,
  PATIENT_COLLECTION_ID,
} from "../appwrite.config";
import { parseStringify } from "../utils";

export const createAppointment = async (
  appointment: CreateAppointmentParams
) => {
  try {
    const newAppointment = await databases.createDocument(
      "668d4a8100340c3f7ef8",

      APPOINTMENT_COLLECTION_ID!,

      ID.unique(),
      {
        appointment,
      }
    );

    return parseStringify(newAppointment);
  } catch (error) {
    console.log(error);
  }
};
