import React from 'react';
import PropTypes from 'prop-types';

import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

const AuthorTimeline = ({ bio }) => (
  <Timeline lineColor="#ddd" className="mt-3">
    {bio.map(item => (
      <TimelineItem
        key="001"
        dateText={item.year}
        dateInnerStyle={{ background: 'tomato' }}
        style={{ color: 'tomato' }}
      >
        <p>
          {item.text}
        </p>
      </TimelineItem>
    ))}
  </Timeline>
);

AuthorTimeline.propTypes = {
  bio: PropTypes.arrayOf(PropTypes.shape({
    year: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
};

export default AuthorTimeline;
