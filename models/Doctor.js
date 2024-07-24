import {mongoose} from "mongoose";

const Schema = mongoose.Schema;

const doctorSchema = new Schema ( {
     doctorId:{
        type: String,
        required: [true, 'DoctorId is required.']
    },
    nome:{
        type: String,
        required:[true, 'Doctor name is required.']
    },
    login: {
        type:String,
        required: [true, 'Login is required.'],
        unique: true
    },
    password: {
        type:String,
        required: [true, 'Password is required.'],
    },
    medicaSpecialty:{
        type: String,
        required: [true, 'Medical Specialty is required']
    },
    medicalRegistration: {
        type: String,
        required: [true,'Medical registration is required'],
        unique: true
    },
    email: {
        type: String,
        required: [true,'Email is required']
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required']
    },
     createdAt: {
        type: Date,
        default: Date.now
    }}
);

const doctor = mongoose.model('Doctor', doctorSchema);

export default doctor;