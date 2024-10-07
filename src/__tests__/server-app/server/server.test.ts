import { Authorizer } from '../../../app/server-app/auth/authorizer';
import { ReservationsDataAccess } from '../../../app/server-app/data/reservations-data-access';
import { Server } from '../../../app/server-app/server/server';

jest.mock('../../../app/server-app/auth/authorizer');
jest.mock('../../../app/server-app/data/reservations-data-access');
jest.mock('../../../app/server-app/handlers/login.handler');
jest.mock('../../../app/server-app/handlers/register.handler');
jest.mock('../../../app/server-app/handlers/reservations.handler');

const requestMock = {
  url: '',
  headers: {
    'user-agent': 'jest-test',
  },
};

const responseMock = {
  end: jest.fn(),
  writeHead: jest.fn(),
};

const serverMock = {
  listen: jest.fn(),
  close: jest.fn(),
};

jest.mock('http', () => ({
  createServer: (cb: Function) => {
    cb(requestMock, responseMock);
    return serverMock;
  },
}));

describe('Server test suite', () => {
  let sut: Server;

  beforeEach(() => {
    sut = new Server();
    expect(Authorizer).toHaveBeenCalledTimes(1);
    expect(ReservationsDataAccess).toHaveBeenCalledTimes(1);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should work by now', () => {
    sut.startServer();
  });
});
