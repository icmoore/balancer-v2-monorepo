import { expect } from 'chai';
import { fp } from '@balancer-labs/v2-helpers/src/numbers';

import TokenList from '@balancer-labs/v2-helpers/src/models/tokens/TokenList';
import WeightedPool from '@balancer-labs/v2-helpers/src/models/pools/weighted/WeightedPool';

import { itBehavesAsWeightedPool } from './Simple.behavior';
import { allInOne } from './Simple.behavior';
import { WeightedPoolType } from '@balancer-labs/v2-helpers/src/models/pools/weighted/types';


describe('Simple', function () {

  context('simpleWeightedPoolOperations', () => {
    allInOne(3, WeightedPoolType.WEIGHTED_POOL);
  });  

  //context('for a 3 token pool', () => {
  //  itBehavesAsWeightedPool(3, WeightedPoolType.WEIGHTED_POOL);
  //});

});
