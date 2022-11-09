#!/usr/bin/env node

import minimist from 'minimist';
import { roll } from "../lib/roll.js";

const args = minimist(process.argv.slice(2));
const sides = args.sides? args.sides:6 ;
const dice = args.dice? args.dice:2;
const rolls = args.rolls? args.rolls:1;

const out = roll(sides, dice, rolls);
console.log(JSON.stringify(out));
