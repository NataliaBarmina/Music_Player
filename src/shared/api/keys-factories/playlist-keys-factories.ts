export const playlistKeys = {
  all: ['playlist'],
  lists: () => [...playlistKeys.all, 'lists'], //все плейлисты, в моем приложении не отрисовывала
  myList: (userId?: string) => [...playlistKeys.lists(), userId], // только плейлисты добавленные мной
};
