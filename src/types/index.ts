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
  UBC = "U of British Columbia",
  UC_BERKELEY = "UC Berkeley",
  UC_IRVINE = "UC Irvine",
  UC_SAN_DIEGO = "UC San Diego",
}

export interface Participant {
  name: string;
  institute: Institute;
  link?: string;
}
