// eslint-disable-next-line
const year = 2020;
export const pullRequestUrl = `https://api.github.com/search/issues?q=-label:invalid+created:${year}-09-30T10%3A00%3A00%2B00%3A00..${year}-11-01T12%3A00%3A00%2B00%3A00+type:pr+is:public+author:{user}&per_page=300`;

export const users = ['jfehrman'];
