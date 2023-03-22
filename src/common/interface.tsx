interface PersonalDetails {
    firstName:string;
    lastName:string;
    dob:Date|null;
    gender:string;
}

interface Education {
    institute: string;
    degree: string;
    from: Date|null;
    to: Date|null;
}

interface Experience {
    company: string;
    role: string;
    from: Date|null;
    to: Date|null;
}

export interface ResumeState {
  personalDetails: PersonalDetails,
  education: Education[],
  experience: Experience[],
  skills: string[]
}