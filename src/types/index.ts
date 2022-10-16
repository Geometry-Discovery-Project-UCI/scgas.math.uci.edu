export enum Institute {
  UNKNOWN = "Unknown Institute",
  IAS_PRINCETON = "IAS, Princeton",
  UC_BERKELEY = "UC Berkeley",
  STANFORD = "Stanford",
  CIMAT_MAXICO = "CIMAT, Mexico",
  RUTGERS = "Rutgers",
  HARVARD = "Harvard",
  UC_IRVINE = "UC Irvine",
  UC_SAN_DIEGO = "UC San Diego",
}

export interface Participant {
  name: string;
  institute: Institute;
  link?: string;
}
