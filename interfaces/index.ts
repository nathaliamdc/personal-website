import {StaticImageData} from "next/image";

/**
 * Represents a personal software project.
 */
export interface ISoftwareProject {
  name: string;
  logo: StaticImageData;
  websiteURL: string;
  description: string;
  /**
   * List of tools and languages used in the project.
   */
  techStack: string[];
  image: StaticImageData;
}

/**
 * IInstitution represents a university or company.
 */
export interface IInstitution {
  name: string;
  websiteURL: string;
}

/**
 * Represents a position in a university or company.
 */
export interface ICareerPosition {
  title: string;
  description: string;
  duration: string;
  country: string;
  countryFlag: string;
  institutions: IInstitution[];
}
