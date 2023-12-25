import { splitNameEmail } from '@/lib/splitNameEmail';

test('mengembalikan name email arsat', () => {
  const test1 = splitNameEmail('arsat@gmail.com');
  const test2 = splitNameEmail('arsat.co.id');
  const test3 = splitNameEmail('arsat.company@gmail.com');
  const test4 = splitNameEmail('arsat');

  expect(test1).toEqual('arsat');
  expect(test2).toEqual('arsat');
  expect(test3).toEqual('arsat');
  expect(test4).toEqual('arsat');
});
