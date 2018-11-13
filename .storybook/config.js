import { configure } from '@storybook/react';

const req = require.context('../src/components', true, /\.story\.js$/);

const sortByFileName = (filePath1, filePath2) => {
  const file1 = filePath1.split('\\').pop().split('/').pop();;
  const file2 = filePath2.split('\\').pop().split('/').pop();;
  if (file1 > file2) {
    return 1;
  } else if ( file1 < file2) {
    return -1;
  } else {
    return 0;
  }
}

function loadStories() {
  req.keys().sort(sortByFileName).forEach(fileName => req(fileName))
}

configure(loadStories, module);
