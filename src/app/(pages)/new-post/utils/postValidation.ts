import { IJobList } from "@/app/shared/utils/types";

const jobPostingValidation = (jobObject: IJobList) => {
    const {
      name,
      phoneNumber,
      jComBenefit,
      jDescription,
      jExpectation,
      jcomBlurb,
      jMinEducation,
      otherEducationRequired,
      jobType,
      salary,
      companyEmail,
      address,
      Company,
    } = jobObject;
  
    if(
      !name.trim() || !jComBenefit.trim() || !jDescription.trim() || !jExpectation.trim() || !jcomBlurb.trim() || !jobType.trim() || salary.trim() || !address.trim() || !Company.trim()
    ){
      return {error: true, message: "Required fields cannot be left empty"}
    }

    if(jMinEducation === 'Other' && otherEducationRequired.trim() === '' ) {
      return {error: true, message: "Minimum education has to be specified"}
    }

    if(phoneNumber.trim() && !RegExp(/^\d{10}$/).test(phoneNumber.trim())) {
      return {error: true, message: "Phone number has to be a 10 digit number"}
    }

    if(companyEmail.trim() && !RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(companyEmail.trim())) {
      return {error: true, message: "Email entered is not valid"}
    }

    if(!RegExp(/^-?\d+(\.\d+)?$/).test(salary.trim())) {
      return {error: true, message: "Salary entered is not a number"}
    }

    else {
      return {error: false, message: "Form data is valid"}
    }
}; 

export default jobPostingValidation;
