import OpenAI from 'openai';
import { O_K } from './constants';

const openai = new OpenAI({
  apiKey: O_K,
  dangerouslyAllowBrowser: true,
});

export default openai;