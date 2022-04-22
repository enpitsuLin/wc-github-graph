import { css } from 'lit'

const style = css`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  h2.contributions-header {
    margin-bottom: 0;
  }
  .ContributionCalendar.days-selected .ContributionCalendar-day {
    opacity: 0.5;
  }
  .ContributionCalendar.days-selected .ContributionCalendar-day.active {
    opacity: 1;
  }
  .ContributionCalendar-label {
    font-size: 9px;
    fill: var(--color-text-primary);
  }
  .ContributionCalendar-day,
  .ContributionCalendar-day[data-level='0'] {
    fill: var(--color-calendar-graph-day-bg);
    shape-rendering: geometricPrecision;
    outline: 1px solid var(--color-calendar-graph-day-border);
    outline-offset: -1px;
  }
  .ContributionCalendar-day[data-level='1'] {
    fill: var(--color-calendar-graph-day-L1-bg);
    outline: 1px solid var(--color-calendar-graph-day-L1-border);
  }
  .ContributionCalendar-day[data-level='2'] {
    fill: var(--color-calendar-graph-day-L2-bg);
    outline: 1px solid var(--color-calendar-graph-day-L2-border);
  }
  .ContributionCalendar-day[data-level='3'] {
    fill: var(--color-calendar-graph-day-L3-bg);
    outline: 1px solid var(--color-calendar-graph-day-L3-border);
  }
  .ContributionCalendar-day[data-level='4'] {
    fill: var(--color-calendar-graph-day-L4-bg);
    outline: 1px solid var(--color-calendar-graph-day-L4-border);
  }
  .ContributionCalendar[data-holiday='halloween'] .ContributionCalendar-day[data-level='1'] {
    fill: var(--color-calendar-halloween-graph-day-L1-bg);
  }
  .ContributionCalendar[data-holiday='halloween'] .ContributionCalendar-day[data-level='2'] {
    fill: var(--color-calendar-halloween-graph-day-L2-bg);
  }
  .ContributionCalendar[data-holiday='halloween'] .ContributionCalendar-day[data-level='3'] {
    fill: var(--color-calendar-halloween-graph-day-L3-bg);
  }
  .ContributionCalendar[data-holiday='halloween'] .ContributionCalendar-day[data-level='4'] {
    fill: var(--color-calendar-halloween-graph-day-L4-bg);
  }
  .contributions {
    --color-calendar-graph-day-bg: #ebedf0;
    --color-calendar-graph-day-border: rgba(27, 31, 35, 0.06);
    --color-calendar-graph-day-L1-bg: #9be9a8;
    --color-calendar-graph-day-L2-bg: #40c463;
    --color-calendar-graph-day-L3-bg: #30a14e;
    --color-calendar-graph-day-L4-bg: #216e39;
    --color-calendar-graph-day-L4-border: rgba(27, 31, 35, 0.06);
    --color-calendar-graph-day-L3-border: rgba(27, 31, 35, 0.06);
    --color-calendar-graph-day-L2-border: rgba(27, 31, 35, 0.06);
    --color-calendar-graph-day-L1-border: rgba(27, 31, 35, 0.06);
    animation: fadein 1s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .contributions svg {
    cursor: default;
    max-width: 100%;
    width: 100%;
  }
  .contributions svg text {
    font-size: 12px;
  }
  .contributions rect:hover {
    opacity: 0.5;
  }
`

export default style
