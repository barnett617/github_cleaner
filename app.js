const access_token = ''
const octokit = new octokit({ auth: access_token });

const {
  data: { login }
} = await octokit.rest.users.getAuthenticated();

console.log('login', login)