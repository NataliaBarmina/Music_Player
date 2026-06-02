import { QueryClient } from '@tanstack/react-query';

//создание экземпляра клиента React
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, //сколько времени данные считаются свежими
      gcTime: 5 * 60 * 1000, // через сколько неиспользуемый кэш будет удалён
      refetchOnMount: false, // делать ли повторный запрос при монтировании компонента
      refetchOnWindowFocus: false, // делать ли повторный запрос при возврате на вкладку
      refetchOnReconnect: false, // делать ли повторный запрос при восстановлении интернета
      refetchInterval: false, // автообновление
      retry: false, // количество повторных попыток запроса, если он завершился ошибкой
      // refetchIntervalInBackground: false, // обновлять даже если вкладка неактивна
    },
    mutations: {
      retry: false,
    },
  },
});
