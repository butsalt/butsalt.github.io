import lang from './lang';
import animation from './animation';
import env from './env';

let _ = {};

lang.extend(
  _,
  lang, animation, env
);

export default _;