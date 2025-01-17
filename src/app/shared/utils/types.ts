export interface ICompanyDataPayload {
    password: string;
    size: string;
    uid: string;
    name: string;
    jobListing: { id: string; title: string }[];
    email: string;
    image: string;
    wallpaper: string;
  }

  interface IVendor {
    Company: string;
    address: string;
    photoUrl: string;
    uid: string;
  }

  interface ICoordinates {
    latitude: string;
    longitude: string;
  }

  interface ILocation {
    coordinates: ICoordinates;
    country: string;
    locationIsSet: boolean;
    state: string;
    town: string;
  }

 export interface IJobList {
      name: string;
      postedFrom: string;
      phoneNumber: string;
      companyEmail: string;
      consultType: string;
      otherEducationRequired: string;
      externalLink: string;
      jComBenefit: string;
      jDescription: string;
      jExpectation: string;
      jMinEducation: string;
      jcomBlurb: string;
      jtravelReq: string;
      jobType: string;
      location?: ILocation;
      salary: string;
      status: string;
      viewCount?: string[];
      vendor?: IVendor;
      address: string;
      Company: string;
      datePosted?: string;
      lastEdited?: string;
  } 

  