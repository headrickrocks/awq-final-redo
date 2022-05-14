// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Accomplishment } = initSchema(schema);

export {
  Accomplishment
};