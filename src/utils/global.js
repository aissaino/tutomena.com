import urljoin from 'url-join';
import moment from 'moment';
import config from '../../data/SiteConfig';

import 'moment/locale/ar';
moment.locale('ar');

const formatDate = date => moment.utc(date).format(config.dateFormat);

const editOnGithub = post => {
  const date = moment.utc(post.date).format(config.dateFromFormat);
  return urljoin(
    config.repo,
    '/blob/master/content/posts',
    `${date}-${post.slug}.md`
  );
};

export { formatDate, editOnGithub };
