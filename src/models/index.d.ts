import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type AccomplishmentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Accomplishment {
  readonly id: string;
  readonly image_url?: string | null;
  readonly description?: string | null;
  readonly title?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Accomplishment, AccomplishmentMetaData>);
  static copyOf(source: Accomplishment, mutator: (draft: MutableModel<Accomplishment, AccomplishmentMetaData>) => MutableModel<Accomplishment, AccomplishmentMetaData> | void): Accomplishment;
}