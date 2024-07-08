import * as React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { GraphBarData } from './GraphProps';

export function GraphBar(props: GraphBarData) {
  return (
    <ResponsiveBar
      data={props.data}
      keys={props.keys}
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      groupMode="grouped"
      valueScale={{ type: `linear` }}
      indexScale={{ type: `band`, round: true }}
      colors={{ scheme: `nivo` }}
      defs={[
        {
          id: `dots`,
          type: `patternDots`,
          background: `inherit`,
          color: `#38BCB2`,
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: `lines`,
          type: `patternLines`,
          background: `inherit`,
          color: `#EED312`,
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      borderColor={{ from: `color`, modifiers: [[`darker`, 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: `Hodnocení`,
        legendPosition: `middle`,
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: `Počet`,
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
