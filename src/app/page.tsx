import { getUsers } from '@/data-acces/user';
import Button from '@mui/material/Button';

const HomePage = async () => {
  const users = await getUsers();
  return (
    <main>
      <Button variant='text' color='primary'>
        Hello world
      </Button>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </main>
  );
};

export default HomePage;
