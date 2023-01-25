export enum Institute {
  UNKNOWN = "Unknown Institute",
  CIMAT_MAXICO = "CIMAT, Mexico",
  COLUMBIA = "Columbia U",
  IAS_PRINCETON = "IAS, Princeton",
  HARVARD = "Harvard U",
  MIT = "MIT",
  NORTHWESTERN = "Northwestern U",
  RUTGERS = "Rutgers U",
  STANFORD = "Stanford U",
  UC_BERKELEY = "UC Berkeley",
  UC_IRVINE = "UC Irvine",
  UC_SAN_DIEGO = "UC San Diego",
  UBC = "U of British-Columbia",
  PRINCETON_UNIVERSITY = "Princeton University",
  UNIVERSITY_OF_MARYLAND = "University of Maryland",
  UNIVERSITY_OF_NOTRE_DAME = "University of Notre Dame",
  UNIVERSITY_OF_CONNECTICUT = "University of Connecticut",
  UNIVERSITY_OF_CHICAGO = "University of Chicago",
  LEHIGH_UNIVERSITY = "Lehigh University",
  UNIVERSITY_OF_WASHINGTON = "University of Washington",
  THE_OHIO_STATE_UNIVERSITY = "The Ohio State University",
  BONN_UNIVERSITY = "Bonn University",
  UC_SANTA_BARBARA = "UC Santa Barbara",
  UNIVERSITY_OF_OXFORD = "University of Oxford",
  TAMU = "TAMU",
  DUKE_UNIVERSITY = "Duke University",
  UNIVERSITE_DE_NANTES = "Université de Nantes",
  UC_SANTA_CRUZ = "UC Santa Cruz",
  WESTLAKE_UNIVERSITY = "Westlake University",
  BRANDEIS_UNIVERSITY = "Brandeis University",
  UNIVERSITY_OF_TORONTO = "University of Toronto",
  RUTGERS_UNIVERSITY = "Rutgers University",
  CORNELL_UNIVERSITY = "Cornell University",
  SUN_YAT_SEN_UNIVERSITY_ZHUHAI = "Sun Yat-Sen University (Zhuhai)",
  ISTANBUL_TECHNICAL_UNIVERSITY = "İstanbul Technical University",
}

export interface Participant {
  name: string;
  institute: Institute;
  link?: string;
}
