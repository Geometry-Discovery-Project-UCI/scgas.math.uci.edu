import * as participantsData from "@/participants";
import { Institute, Participant } from "@/types";
import config from "@/config.json";

export function ordinalize(i: number) {
  const j = i % 10,
    k = i % 100;
  if (j == 1 && k != 11) {
    return i + "st";
  }
  if (j == 2 && k != 12) {
    return i + "nd";
  }
  if (j == 3 && k != 13) {
    return i + "rd";
  }
  return i + "th";
}

function sortByLastName(a: Participant, b: Participant) {
  const lastNameOfA = a.name.split(" ").pop() as string;
  const lastNameOfB = b.name.split(" ").pop() as string;
  return lastNameOfA.localeCompare(lastNameOfB);
}

let sortedParticipants: Participant[] | undefined = undefined;

export function geSortedParticipants() {
  if (sortedParticipants === undefined) {
    const participants: Participant[] = [];
    for (const key in participantsData) {
      // eslint-disable-next-line
      const participant = participantsData[key as keyof {}] as Participant;
      participants.push(participant);
    }
    participants.sort(sortByLastName);
    sortedParticipants = participants;
  }

  return sortedParticipants;
}

let participantMap: Map<string, Participant> | undefined = undefined;

export function getParticipantsMap() {
  if (participantMap === undefined) {
    const participants = geSortedParticipants();
    const map = new Map<string, Participant>();
    participants.forEach((participant) => {
      map.set(participant.name, participant);
    });
    participantMap = map;
  }

  return participantMap;
}

export function getParticipantByFullName(fullName: string) {
  const map = getParticipantsMap();
  return map.get(fullName);
}

let sortedSpeakers: Participant[] | undefined = undefined;

export function getSortedSpeakers() {
  if (sortedSpeakers === undefined) {
    const speakers: Participant[] = [];
    config.speakers.forEach((fullName) =>
      speakers.push(
        getParticipantByFullName(fullName) || {
          name: `${fullName} Not Existed!`,
          institute: Institute.UNKNOWN,
        }
      )
    );
    speakers.sort(sortByLastName);
    sortedSpeakers = speakers;
  }
  return sortedSpeakers;
}

let sortedOrganizingCommittee: Participant[] | undefined = undefined;

export function getSortedOrganizingCommittee() {
  if (sortedOrganizingCommittee === undefined) {
    const committee: Participant[] = [];
    config.organizingCommittee.forEach((fullName) =>
      committee.push(
        getParticipantByFullName(fullName) || {
          name: `${fullName} Not Existed!`,
          institute: Institute.UNKNOWN,
        }
      )
    );
    committee.sort(sortByLastName);
    sortedOrganizingCommittee = committee;
  }
  return sortedOrganizingCommittee;
}
