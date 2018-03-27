import { helper } from '@ember/component/helper';

export function isAnd(params/*, hash*/) {
  let longNum = params;

  return Math.round(longNum);
}

export default helper(isAnd);
