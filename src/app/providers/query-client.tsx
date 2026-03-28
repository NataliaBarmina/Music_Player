import { QueryClient } from '@tanstack/react-query';

//создание экземпляра клиента React
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // retry: 0, // количество повторных попыток запроса, если он завершился ошибкой
      staleTime: 20 * 1000, //сколько времени данные считаются свежими
      gcTime: 5 * 60 * 1000, // через сколько неиспользуемый кэш будет удалён
      refetchOnMount: true, // делать ли повторный запрос при монтировании компонента
      refetchOnWindowFocus: true, // делать ли повторный запрос при возврате на вкладку
      refetchOnReconnect: true, // делать ли повторный запрос при восстановлении интернета
      refetchInterval: 0, // автообновление
      refetchIntervalInBackground: false, // обновлять даже если вкладка неактивна
    },
  },
});
