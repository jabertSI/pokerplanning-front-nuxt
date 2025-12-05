export const VoteStatus = {
  NOT_VOTED: "not_voted",
  VOTED: "voted",
};

export const enum ClientEvents {
  JOIN_ROOM = "joinRoom",
  SEND_VOTE = "sendVote",
  RETRIEVE_VOTES = "retrieveVotes",
  NEW_VOTE = "newVote",
}
