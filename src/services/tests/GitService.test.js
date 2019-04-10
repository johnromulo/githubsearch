import mockAxios from "axios";
import { GitService } from "../GitService";

describe("fetches data from GitService", async () => {

  afterEach(() => {
    jest.clearAllMocks()
  });

  test('test getUserFromServer', async () => {

    const response = {
      "login": "johnromulo",
      "id": 28927870,
      "node_id": "MDQ6VXNlcjI4OTI3ODcw",
      "avatar_url": "https://avatars0.githubusercontent.com/u/28927870?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/johnromulo",
      "html_url": "https://github.com/johnromulo",
      "followers_url": "https://api.github.com/users/johnromulo/followers",
      "following_url": "https://api.github.com/users/johnromulo/following{/other_user}",
      "gists_url": "https://api.github.com/users/johnromulo/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/johnromulo/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/johnromulo/subscriptions",
      "organizations_url": "https://api.github.com/users/johnromulo/orgs",
      "repos_url": "https://api.github.com/users/johnromulo/repos",
      "events_url": "https://api.github.com/users/johnromulo/events{/privacy}",
      "received_events_url": "https://api.github.com/users/johnromulo/received_events",
      "type": "User",
      "site_admin": false,
      "name": "John Rômulo",
      "company": null,
      "blog": "",
      "location": null,
      "email": null,
      "hireable": null,
      "bio": null,
      "public_repos": 6,
      "public_gists": 0,
      "followers": 0,
      "following": 0,
      "created_at": "2017-05-24T15:03:45Z",
      "updated_at": "2018-08-25T10:28:28Z"
    }


    // setup
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: response
      })
    );

    // work
    const images = await GitService.getUserFromServer("johnromulo");

    // expect
    expect(images).toEqual({
      data: response
    });
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(
      'https://api.github.com/users/johnromulo',
      { crossDomain: true, params: undefined }
    );
  });

  test('test getUserReposFromServer', async () => {

    const response = [
      {
        "id": 119759156,
        "node_id": "MDEwOlJlcG9zaXRvcnkxMTk3NTkxNTY=",
        "name": "angular-shots",
        "full_name": "johnromulo/angular-shots",
        "private": false,
        "owner": {
          "login": "johnromulo",
          "id": 28927870,
          "node_id": "MDQ6VXNlcjI4OTI3ODcw",
          "avatar_url": "https://avatars0.githubusercontent.com/u/28927870?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/johnromulo",
          "html_url": "https://github.com/johnromulo",
          "followers_url": "https://api.github.com/users/johnromulo/followers",
          "following_url": "https://api.github.com/users/johnromulo/following{/other_user}",
          "gists_url": "https://api.github.com/users/johnromulo/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/johnromulo/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/johnromulo/subscriptions",
          "organizations_url": "https://api.github.com/users/johnromulo/orgs",
          "repos_url": "https://api.github.com/users/johnromulo/repos",
          "events_url": "https://api.github.com/users/johnromulo/events{/privacy}",
          "received_events_url": "https://api.github.com/users/johnromulo/received_events",
          "type": "User",
          "site_admin": false
        },
        "html_url": "https://github.com/johnromulo/angular-shots",
        "description": null,
        "fork": false,
        "url": "https://api.github.com/repos/johnromulo/angular-shots",
        "forks_url": "https://api.github.com/repos/johnromulo/angular-shots/forks",
        "keys_url": "https://api.github.com/repos/johnromulo/angular-shots/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/johnromulo/angular-shots/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/johnromulo/angular-shots/teams",
        "hooks_url": "https://api.github.com/repos/johnromulo/angular-shots/hooks",
        "issue_events_url": "https://api.github.com/repos/johnromulo/angular-shots/issues/events{/number}",
        "events_url": "https://api.github.com/repos/johnromulo/angular-shots/events",
        "assignees_url": "https://api.github.com/repos/johnromulo/angular-shots/assignees{/user}",
        "branches_url": "https://api.github.com/repos/johnromulo/angular-shots/branches{/branch}",
        "tags_url": "https://api.github.com/repos/johnromulo/angular-shots/tags",
        "blobs_url": "https://api.github.com/repos/johnromulo/angular-shots/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/johnromulo/angular-shots/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/johnromulo/angular-shots/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/johnromulo/angular-shots/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/johnromulo/angular-shots/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/johnromulo/angular-shots/languages",
        "stargazers_url": "https://api.github.com/repos/johnromulo/angular-shots/stargazers",
        "contributors_url": "https://api.github.com/repos/johnromulo/angular-shots/contributors",
        "subscribers_url": "https://api.github.com/repos/johnromulo/angular-shots/subscribers",
        "subscription_url": "https://api.github.com/repos/johnromulo/angular-shots/subscription",
        "commits_url": "https://api.github.com/repos/johnromulo/angular-shots/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/johnromulo/angular-shots/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/johnromulo/angular-shots/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/johnromulo/angular-shots/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/johnromulo/angular-shots/contents/{+path}",
        "compare_url": "https://api.github.com/repos/johnromulo/angular-shots/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/johnromulo/angular-shots/merges",
        "archive_url": "https://api.github.com/repos/johnromulo/angular-shots/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/johnromulo/angular-shots/downloads",
        "issues_url": "https://api.github.com/repos/johnromulo/angular-shots/issues{/number}",
        "pulls_url": "https://api.github.com/repos/johnromulo/angular-shots/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/johnromulo/angular-shots/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/johnromulo/angular-shots/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/johnromulo/angular-shots/labels{/name}",
        "releases_url": "https://api.github.com/repos/johnromulo/angular-shots/releases{/id}",
        "deployments_url": "https://api.github.com/repos/johnromulo/angular-shots/deployments",
        "created_at": "2018-02-01T00:02:56Z",
        "updated_at": "2018-11-28T22:48:47Z",
        "pushed_at": "2018-02-16T11:45:57Z",
        "git_url": "git://github.com/johnromulo/angular-shots.git",
        "ssh_url": "git@github.com:johnromulo/angular-shots.git",
        "clone_url": "https://github.com/johnromulo/angular-shots.git",
        "svn_url": "https://github.com/johnromulo/angular-shots",
        "homepage": null,
        "size": 7617,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": "CSS",
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "open_issues_count": 0,
        "license": null,
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "master"
      }
    ]


    // setup
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: response
      })
    );

    // work
    const images = await GitService.getUserReposFromServer("johnromulo");

    // expect
    expect(images).toEqual({
      data: response
    });
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(
      'https://api.github.com/users/johnromulo/repos',
      { crossDomain: true, params: undefined }
    );
  });
});
