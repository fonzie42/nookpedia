import { BaseCritter } from 'types/critterpedia'
import { UserCritterpediaData } from './personal'

export interface CritterpediaBugs extends BaseCritter {}

export interface UserCritterPediaBugs
  extends CritterpediaBugs,
    UserCritterpediaData {}
