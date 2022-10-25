import {IProject} from "../interfaces";
import KubisLogo from "../public/kubis.svg";
import KubisImage from "../public/mymlops_preview.png";
import MyMLOpsLogo from "../public/mymlops.svg";
import MyMLOpsImage from "../public/mymlops_preview.png";

const Kubis: IProject = {
  name: "Kubis",
  logo: KubisLogo,
  websiteURL: "https://www.kubis.ai",
  description:
    "Kubis is a tool that manages infrastructure for data scientists, letting them scale workloads to the cloud.",
  techStack: [
    "React",
    "JavaScript",
    "TypeScript",
    "Go",
    "Postgres",
    "Kubernetes",
    "AWS",
    "Docker",
    "Terraform",
  ],
  image: KubisImage,
};

const MyMLOps: IProject = {
  name: "MyMLOps",
  logo: MyMLOpsLogo,
  websiteURL: "https://www.mymlops.com",
  description:
    "MyMLOps lets you build a machine learning stack from 50+ open source tools.",
  techStack: [
    "NextJS",
    "JavaScript",
    "TypeScript",
    "Go",
    "Postgres",
    "Kubernetes",
    "AWS",
    "Docker",
    "Terraform",
  ],
  image: MyMLOpsImage,
};

export const listProjects = () => {
  return [MyMLOps, Kubis];
};
