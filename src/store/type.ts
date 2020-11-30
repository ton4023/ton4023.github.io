export interface About {
  [index: number]: string;
}

export interface Contact {
  name: string;
  email: string;
  phone: string;
  line: string;
  github: string;
}

export interface Programming {
  languages: Languages;
  frameworks: Frameworks;
}

export interface Languages {
  [index: number]: string;
}

export interface Frameworks {
  [index: number]: string;
}

export interface Education {
  name: string;
  branch: string;
  year: string;
}
export interface Experience {
  name: string;
  year: string;
  detail: string[];
}
export default interface RootState {
  myAbout: About[];
  myContact: Contact[];
  myProgram: Programming[];
  myEducation: Education[];
  myExperience: Experience[];
  theme: String;
}
