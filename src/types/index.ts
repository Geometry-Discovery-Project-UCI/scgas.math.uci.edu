export enum Institute {
  UNKNOWN = "Unknown Institute",
  CIMAT_MAXICO = "CIMAT, Mexico",
  COLUMBIA = "Columbia U",
  IAS_PRINCETON = "IAS, Princeton",
  HARVARD = "Harvard U",
  MIT = "MIT",
  NORTHWESTERN = "Northwestern U",
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
  STONYBROOK_UNIVERSITY = "Stony Brook University",
  LUT = "Lappeenranta University of Technology, Finland",
  UNIVERSITY_OF_PENNSYLVANIA = "University of Pennsylvania",
  WEST_VIRGINIA_UNIVERSITY = "West Virginia University",
  CALPOLY_SLO = "Cal Poly, San Luis Obispo",
  UNAM = "UNAM",
  CUNY = "CUNY",
  WICHITA_U = "Wichita State University",
  CSU_SM = "CSU San Marcos",
  UNIVERSITY_OF_NORTH_ALABAMA = "University of North Alabama",
  UMBB = "UMBB",
  UT_DALLAS = "UT Dallas",
  UNIVERSITY_OF_OREGON = "University of Oregon",
  UNIVERSITY_OF_WASHINGTON_ST_LOUIS = "University of Washington in St. Louis",
  CALTECH = "Caltech",
  MONASH_U = "Monash University",
  OKSTATE = "Oklahoma State University",
  TLEMCEN = "University of Tlemcen",
  KUWAIT_U = "Kuwait University",
  SUNY = "State University of New York",
  FIU_ITU = "Florida International University / Istanbul Technical University",
  CHINESE_U_OF_HK = "The Chinese University of Hong Kong",
  CSULB = "California State University at Long Beach",
  CSUSM = "California State University San Marcos",
}

export interface Participant {
  name: string;
  institute: Institute;
  link?: string;
}
