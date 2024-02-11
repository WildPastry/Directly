/* eslint-disable no-unused-vars */
import { Card, Group, Text } from '@mantine/core';
import { IconEye, IconFile, IconX } from '@tabler/icons-react';
import { ISortableItem } from '../../models/data.model';
import { UniqueIdentifier } from '@dnd-kit/core';
import classes from './CardWithStats.module.css';

interface CardWithStatsProps extends ISortableItem {
  handleRemove: (id: UniqueIdentifier) => void;
  handleView: (file: ISortableItem) => void;
}

const CardWithStats: React.FC<CardWithStatsProps> = (
  props: CardWithStatsProps
): JSX.Element => {
  const stats = [
    { title: 'Type', value: props.data.type },
    { title: 'Size', value: props.data.size },
    { title: 'Last modified', value: props.data.lastModified }
  ];

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

  const viewIconClicked = (file: ISortableItem) => {
    props.handleView(file);
  };

  const closeIconClicked = (id: UniqueIdentifier) => {
    props.handleRemove(id);
  };

  return (
    <Card withBorder padding='lg' className={classes.card}>
      <Card.Section className={classes.iconWrapper}>
        <IconFile size={50} />
        <div className={classes.innerIconWrapper}>
          <IconEye
            size={20}
            className={classes.icon}
            onClick={() => viewIconClicked(props)}
          />
          <IconX
            size={20}
            className={classes.icon}
            onClick={() => closeIconClicked(props.id)}
          />
        </div>
      </Card.Section>

      <Group justify='space-between' mt='sm'>
        <Text fz='sm' fw={700} className={classes.title}>
          {props.name}
        </Text>
      </Group>

      <Text mt='sm' mb='md' c='dimmed' fz='xs'>
        {props.id}
      </Text>
      <Card.Section className={classes.footer}>{items}</Card.Section>
    </Card>
  );
};

export default CardWithStats;
