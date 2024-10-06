import { SessionTokenDataAccess } from '../data/session-token-data-access';
import { UserCredentialsDataAccess } from '../data/user-credentials-data-access';
import { ITokenValidator } from '../models/token-validator.model';
import { IUsersHandler } from '../models/users-handler.model';

export class Authorizer implements IUsersHandler, ITokenValidator {
  private sessionTokenDataAccess = new SessionTokenDataAccess();
  private userCredentialsDataAccess = new UserCredentialsDataAccess();

  public async validateToken(tokenId: string): Promise<boolean> {
    const isTokenValid = await this.sessionTokenDataAccess.isValidToken(
      tokenId
    );
    return isTokenValid;
  }

  public async registerUser(userName: string, password: string) {
    const userId = await this.userCredentialsDataAccess.addUser({
      id: '',
      password: password,
      userName: userName,
    });
    return userId;
  }

  public async login(userName: string, password: string) {
    const user = await this.userCredentialsDataAccess.getUserByUserName(
      userName
    );
    if (user && user.password === password) {
      const tokenId = await this.sessionTokenDataAccess.generateToken(user);
      return tokenId;
    }
  }

  public async logout(tokenId: string) {
    await this.sessionTokenDataAccess.invalidateToken(tokenId);
  }
}
