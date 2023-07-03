import { createContext } from "react";
import db from "../db/db";
export const selectedPatientContext = createContext({selectedPatient: db.pacientes[0].id,  setSelectedPatient: null})