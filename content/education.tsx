import {IInstitution, ICareerPosition} from "../interfaces";

const TalTech: IInstitution = {
  name: "TalTech",
  websiteURL: "https://taltech.ee/",
};

const KULeuven: IInstitution = {
  name: "KU Leuven",
  websiteURL: "https://www.kuleuven.be/english/kuleuven",
};

const Elia: IInstitution = {
  name: "Elia System Operator",
  websiteURL: "https://www.elia.be/",
};

const ULille: IInstitution = {
  name: "University of Lille",
  websiteURL: "https://www.univ-lille.fr/",
};

const L2EP: IInstitution = {
  name: "L2EP",
  websiteURL: "https://l2ep.univ-lille.fr/",
};

const UofM: IInstitution = {
  name: "University of Manitoba",
  websiteURL: "https://umanitoba.ca/",
};

const UFCG: IInstitution = {
  name: "University of Campina Grande",
  websiteURL: "https://portal.ufcg.edu.br/",
};

const PhDEstonia: ICareerPosition = {
  title: "PhD",
  description: "",
  duration: "2020 - ",
  country: "Estonia",
  countryCode: "ee",
  institutions: [TalTech],
};

const PhDBelgium: ICareerPosition = {
  title: "Researcher",
  description: "",
  duration: "2018 - 2020",
  country: "Belgium",
  countryCode: "be",
  institutions: [KULeuven, Elia],
};

const Masters: ICareerPosition = {
  title: "Master's",
  description: "",
  duration: "2016 - 2017",
  country: "France",
  countryCode: "fr",
  institutions: [ULille, L2EP],
};

const ExchangeProgram: ICareerPosition = {
  title: "Exchange Program",
  description: "",
  duration: "2014 - 2015",
  country: "Canada",
  countryCode: "ca",
  institutions: [UofM],
};

const Bachelors: ICareerPosition = {
  title: "Bachelor's",
  description: "",
  duration: "2011 - 2018",
  country: "Brazil",
  countryCode: "br",
  institutions: [UFCG],
};

export const listCareerPositions = () => {
  return [PhDEstonia, PhDBelgium, Masters, ExchangeProgram, Bachelors];
};
