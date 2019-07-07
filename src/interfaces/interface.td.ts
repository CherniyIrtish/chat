interface IDialog {
  id: number;
  author: string;
  ownerId: string;
  text: string;
  time: number;
}

interface IUser {
  id: number;
  author: string;
}


interface IMessage {
  text: string;
  ownerId: string;
  authorName: string;
  time: number;
}
