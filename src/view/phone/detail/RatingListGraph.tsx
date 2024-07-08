import * as React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import getLang from '../../../lang/Lang';

type RatingListGraphProps = {
  graphData: any;
};

export function RatingListGraph(props: RatingListGraphProps) {
  const keys: string[] = Object.keys(props.graphData);

  return (
    <ResponsiveBar
      data={[props.graphData]}
      keys={keys}
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      groupMode="grouped"
      valueScale={{ type: `linear` }}
      indexScale={{ type: `band`, round: true }}
      colors={{ scheme: `accent` }}
      borderColor={{ from: `color`, modifiers: [[`darker`, 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: getLang(`phoneDetail`, `ratingAvg`),
        legendPosition: `middle`,
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: getLang(`phoneDetail`, `ratingCount`),
        legendPosition: `middle`,
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: `color`, modifiers: [[`darker`, 1.6]] }}
      legends={[
        {
          dataFrom: `keys`,
          anchor: `bottom-right`,
          direction: `column`,
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: `left-to-right`,
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: `hover`,
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      animate
      // motionStiffness={90}
      // motionDamping={15}
    />
  );
}
