import { User } from '../models/user';

test('it should be ok', () => {
  const user = new User()

  user.name = 'Paulo'

  expect(user.name).toEqual('Paulo')
})
