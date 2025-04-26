import { useQuery } from '@tanstack/react-query';
import users from '../data/users.json';

type User = { id: number; name: string };

export function useUsers() {
  return useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: async () => {
      // Web API の代わりにローカル JSON を返す
      return Promise.resolve(users);
    },
  });
}