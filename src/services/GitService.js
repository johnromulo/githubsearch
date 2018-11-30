import { BaseService } from './BaseService';

export class GitService {
  static getUserFromServer(username) {
    return BaseService.get(`users/${username}`);
  }

  static getUserReposFromServer(username) {
    return BaseService.get(`users/${username}/repos`);
  }
}
