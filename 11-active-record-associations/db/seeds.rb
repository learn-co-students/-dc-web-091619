sh = Hospital.find_or_create_by(name: "Sacred Heart")

jd = Doctor.find_or_create_by(name: "John Dorian", 
    specialty: "Internal Medicine", hospital_id: sh.id)
eliot = Doctor.find_or_create_by(name: "Eliot Reid", specialty: "Endocrinology", 
    hospital_id: sh.id)
turk = Doctor.find_or_create_by(name: "Chris Turk", specialty: "Surgery", 
    hospital_id: sh.id)

wilke = Patient.find_or_create_by(name: "Mrs Wilke")
johnny = Patient.find_or_create_by(name: "Johnny the Tackling Alzheimers Patient")
harvey = Patient.find_or_create_by(name: "Harvey", doctor: jd)

DoctorPatient.find_or_create_by(patient_id: wilke.id, doctor_id: turk.id)
DoctorPatient.find_or_create_by(patient_id: wilke.id, doctor_id: jd.id)
DoctorPatient.find_or_create_by(patient_id: wilke.id, doctor_id: eliot.id)
DoctorPatient.find_or_create_by(patient_id: johnny.id, doctor_id: turk.id)