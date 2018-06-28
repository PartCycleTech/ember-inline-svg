import { helper } from '@ember/component/helper';
import { inlineSvg } from 'ember-inline-svg/helpers/inline-svg';
import SVGs from '../svgs';

export default helper(function([path], options) {
  return inlineSvg(SVGs, path, options);
});