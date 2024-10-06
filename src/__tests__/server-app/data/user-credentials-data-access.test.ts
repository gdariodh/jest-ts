import { DataBase } from '../../../app/server-app/data/data-base';
import { UserCredentialsDataAccess } from '../../../app/server-app/data/user-credentials-data-access';

const insertMock = jest.fn();
const getByMock = jest.fn();

jest.mock('../../../app/server-app/data/data-base', () => ({
  DataBase: jest.fn().mockImplementation(() => ({
    insert: insertMock,
    getBy: getByMock,
  })),
}));

describe('UserCredentialsDataAccess test suite', () => {
  let sut: UserCredentialsDataAccess;

  const someAccount = {
    id: '',
    password: 'somePassword',
    userName: 'someUserName',
  };

  const someId = '1234';

  beforeEach(() => {
    sut = new UserCredentialsDataAccess();
    expect(DataBase).toHaveBeenCalledTimes(1);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should add user and return the id', async () => {
    insertMock.mockResolvedValueOnce(someId);

    const actualId = await sut.addUser(someAccount);
    expect(actualId).toBe(someId);
    expect(insertMock).toHaveBeenCalledWith(someAccount);
  });

  it('should get user by id', async () => {
    getByMock.mockResolvedValueOnce(someAccount);
    const actualUser = await sut.getUserById(someId);

    expect(actualUser).toEqual(someAccount);
    expect(getByMock).toHaveBeenCalledWith('id', someId);
  });

  it('should get user by username', async () => {
    getByMock.mockResolvedValueOnce(someAccount);
    const actualUser = await sut.getUserByUserName(someAccount.userName);

    expect(actualUser).toEqual(someAccount);
    expect(getByMock).toHaveBeenCalledWith('userName', someAccount.userName);
  });
});
