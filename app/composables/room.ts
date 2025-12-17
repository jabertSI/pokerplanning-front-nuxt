import { io } from "socket.io-client";

export const useRoom = () => {
  const config = useRuntimeConfig();

  const connected = ref();
  const socket = ref();
  const players = ref();
  const result = ref();
  const urlWS = ref(config.public.URL_WS);

  const router = useRouter();

  urlWS.value = config.public.URL_WS;


  async function joinRoom(roomUuid, name) {
    socket.value = io(urlWS.value);
    socket.value.on("connect", () => {
      console.log("CONECTED");
      connected.value = true;
      console.info(ClientEvents.JOIN_ROOM, roomUuid);
      socket.value.emit(ClientEvents.JOIN_ROOM, { name: name, room: roomUuid });
      socket.value.on(ClientEvents.JOIN_ROOM, (res) => {
        players.value = res;
      });
      socket.value.on(ClientEvents.SEND_VOTE, (res) => {
        players.value = res;
      });
      socket.value.on(ClientEvents.RETRIEVE_VOTES, (res) => {
        players.value = res.clients;
        result.value = res.result;
      });
      socket.value.on(ClientEvents.NEW_VOTE, async (res) => {
        console.log(res);
        players.value = null;
        result.value = null;
        socket.value.disconnect();
        joinRoom(roomUuid, name);
      });
    });
  }

  function sendVote(vote, roomUuid) {
    socket.value.emit(ClientEvents.SEND_VOTE, { vote: vote, room: roomUuid });
  }

  function retrieveVote( roomUuid) {
    socket.value.emit(ClientEvents.RETRIEVE_VOTES, roomUuid);
  }

  return { connected, socket, joinRoom, players, result, sendVote, retrieveVote };
};
