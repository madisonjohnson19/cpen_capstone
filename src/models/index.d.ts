import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerCnuTrashCanuserRequests = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CnuTrashCanuserRequests, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly PK?: string | null;
  readonly SK?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCnuTrashCanuserRequests = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CnuTrashCanuserRequests, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly PK?: string | null;
  readonly SK?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CnuTrashCanuserRequests = LazyLoading extends LazyLoadingDisabled ? EagerCnuTrashCanuserRequests : LazyCnuTrashCanuserRequests

export declare const CnuTrashCanuserRequests: (new (init: ModelInit<CnuTrashCanuserRequests>) => CnuTrashCanuserRequests) & {
  copyOf(source: CnuTrashCanuserRequests, mutator: (draft: MutableModel<CnuTrashCanuserRequests>) => MutableModel<CnuTrashCanuserRequests> | void): CnuTrashCanuserRequests;
}