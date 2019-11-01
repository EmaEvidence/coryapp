import React from 'react';

import { storiesOf } from '@storybook/react-native';

// eslint-disable-next-line import/extensions
import App from './App';
import NumberOfBins from './NumberOfBins';
import SetUp from './SetUp';
import BinRefill from './BinRefill';
import Confirmation from './Confirmation';
import Commission from './Commission';
import LotteryCount from './LotteryCount';
import LotteryRefill from './LotteryRefill';
import ExpiredRoll from './ExpiredRoll';


storiesOf('Number', module).add('of Bin', () => <NumberOfBins />);
storiesOf('Confirmation', module).add('note', () => <Confirmation />);
storiesOf('Commission', module).add('rate', () => <Commission />);
storiesOf('Set', module).add('Up', () => <SetUp />);
storiesOf('Bin', module).add('Refill', () => <BinRefill />);
storiesOf('App', module).add('entry', () => <App />);
storiesOf('LotteryCount', module).add('count', () => <LotteryCount />);
storiesOf('LotteryRefill', module).add('refill', () => <LotteryRefill />);
storiesOf('ExpiredRoll', module).add('roll', () => <ExpiredRoll />);
