// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CnuTrashCanuserRequests } = initSchema(schema);

export {
  CnuTrashCanuserRequests
};