import {StaticImageData} from "next/image";

/**
 * IProject represents a personal software project.
 */
interface IProject {
  name: string;
  logo: StaticImageData;
  websiteURL: string;
  /**
   * One liner exmplaining what is this tool.
   */
  description: string;
  /**
   * List of tools and languages used in the project.
   */
  techStack: string[];
  /**
   * An image to illustrate the project.
   */
  image: StaticImageData;
}

export type {IProject};
