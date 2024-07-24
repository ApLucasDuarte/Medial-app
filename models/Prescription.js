import {mongoose} from "mongoose";

const Schema=mongoose.Schema;
const prescriptionSchema= new Schema ({
date:{
    tipe: Date,
    required:[true,'Date of prescription is required.']
},
appointmentId:{
    type: String,
    required: [true, 'Appointment Id is rquired.']
},
medicine:{
    type: String,
    required: [true, 'Medicine is required.']
},
dosage:{
    type: String,
    required: [true, 'Dosage is required.']
},
instructions:{
    type: String
},
createAt:{
    type: Date,
    default: Date.now
}
}
);

const prescrption = mongoose.model('Prescription', prescriptionSchema);

export default prescription;