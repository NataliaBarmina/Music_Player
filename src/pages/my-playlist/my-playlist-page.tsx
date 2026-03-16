import { Track } from '@/shared/ui/track';

const arr = [
  'f23c1f4f-57bb-4fa6-b36a-1a1400e754fa',
  '72f23e44-8775-4a29-bb81-2679f58ebf5d',
  '60d16045-9d93-4a3f-ac54-10b14444488e',
];

export const MyPlayListPage = () => {
  return (
    <div className="w-full">
      <h1>Мои плейлисты</h1>
      {arr.map((id) => (
        <ul key={id}>
          <Track id={id} title={'title'} url={'url'} />
        </ul>
      ))}
    </div>
  );
};
