import React from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

const AuthorTimeline = () => (
  <Timeline lineColor={'#ddd'} className="mt-3">
    <TimelineItem
      key="001"
      dateText="1891"
      dateInnerStyle={{ background: 'tomato'}}
      style={{ color: 'tomato' }}
    >
      <p>
        Bahdanovič was born in Minsk in the family of Adam Bahdanovič,
        an important Belarusian ethnographer.
      </p>
    </TimelineItem>
    <TimelineItem
      key="002"
      dateText="1892"
      dateInnerStyle={{ background: 'tomato'}}
      style={{ color: 'tomato' }}
    >
      <p>
        The family moved to Hrodna where Maksim's father received a job at local bank.
      </p>
    </TimelineItem>
    <TimelineItem
      key="003"
      dateText="1896"
      dateInnerStyle={{ background: 'tomato'}}
      style={{ color: 'tomato' }}
    >
      <p>
        The future poet's mother, Maria, died of tuberculosis.
        Adam Bahdanovič moved with his children to Nizhny Novgorod, Russia.
        At that time Maksim wrote his first poems in the Belarusian language.
      </p>
    </TimelineItem>
    <TimelineItem
      key="004"
      dateText="1902"
      dateInnerStyle={{ background: 'tomato'}}
      style={{ color: 'tomato' }}
    >
      <p>
        Bahdanovič attended a gymnasium.
        During the Revolution of 1905 he was an active participant of the strikes.
      </p>
    </TimelineItem>
  </Timeline>
);

export default AuthorTimeline;
