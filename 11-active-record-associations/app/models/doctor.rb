class Doctor < ActiveRecord::Base

    has_many :doctor_patients
    has_many :patients, through: :doctor_patients
    belongs_to :hospital

    # def hospital
    #     # return the Hospital object for this doctor

    #     # iterate through all the hospitals
    #     # select the ids that are equal to the doctor's hospital id 

    #     # Hospital.all.find do |hospital|
    #     #     hospital.id == self.hospital_id
    #     # end

    #     # x = self.hospital_id
    #     # Hospital.find_by(id: x)
    #     Hospital.find(self.hospital_id)
    # end

    # def patients
    #     # returns an array of all the Patient objects this doctor works with

    #     # go through DoctorPatient join table
    #     # iterate through to get the doctor's DoctorPatients
    #     # map through the DoctorPatients to get the patients
    #     doc_pats = DoctorPatient.all.find_all do |doctorpatient|
    #         doctorpatient.doctor_id == self.id
    #     end
    #     doc_pats.map do |docpat|
    #         Patient.find(docpat.patient_id)
    #     end

    # end

end