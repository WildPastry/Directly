import { Card, Group, Text } from '@mantine/core';
import { IconFile } from '@tabler/icons-react';
import classes from './CardWithStats.module.css';

const stats = [
  { title: 'Distance', value: '27.4 km' },
  { title: 'Avg. speed', value: '9.6 km/h' },
  { title: 'Score', value: '88/100' }
];

export function CardWithStats() {
  const items = stats.map((stat) => (
    <div key={stat.title}>
      <Text size='xs' c='dimmed'>
        {stat.title}
      </Text>
      <Text fw={500} size='sm'>
        {stat.value}
      </Text>
    </div>
  ));

  return (
    <Card withBorder padding='lg' className={classes.card}>
      <Card.Section>
        <IconFile size={100} />
      </Card.Section>

      <Group justify='space-between' mt='xl'>
        <Text fz='sm' fw={700} className={classes.title}>
          Running challenge
        </Text>
      </Group>

      <Text mt='sm' mb='md' c='dimmed' fz='xs'>
        56 km this month • 17% improvement compared to last month • 443 place in
        global scoreboard
      </Text>
      <Card.Section className={classes.footer}>{items}</Card.Section>
    </Card>
  );
}
