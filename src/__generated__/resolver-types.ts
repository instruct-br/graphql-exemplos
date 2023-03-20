import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/**
 * Um tipo da categoria objeto é uma coleção de valores (scalar)
 * e/ou outros objetos
 */
export type Cluster = {
  __typename?: 'Cluster';
  kubernetesVersion: Scalars['String'];
  /** Esse campo é obrigatório porque seu tipo termina com uma exclamação */
  name: Scalars['String'];
  owner: Customer;
  /**
   * Ao invés de usar uma string aqui e deixar o campo status aberto, nós fechamos
   * as possibilidades usando um Enum
   */
  status: Status;
};

export type Customer = {
  __typename?: 'Customer';
  /**
   * Quando temos uma lista de objetos você geralmente usa duas exclamações: uma
   * para indicar que a lista não vai ser nula e a interna para indicar que nenhum
   * elemento da lista pode ser nulo
   */
  clusters: Array<Cluster>;
  /** Esse campo não tem exclamação, ele é opcional e pode ser nulo */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
};

/**
 * As operações de consulta e escrita podem receber parâmetros, uma forma de
 * agrupar esses parâmetros e documentá-los melhor é através do uso de um tipo
 * input
 */
export type DeactivateCustomerInput = {
  customerId: Scalars['ID'];
};

/**
 * É uma boa prática você "envelopar" o retorno de suas mutações em tipos
 * específicos, isso facilita a evolução gradual do schema
 */
export type DeactivateCustomerPayload = {
  __typename?: 'DeactivateCustomerPayload';
  customer?: Maybe<Customer>;
};

/**
 * O tipo com nome "Mutation" é especial, ele define quais operações de escrita
 * são suportadas pelo seu servidor de GraphQL
 */
export type Mutation = {
  __typename?: 'Mutation';
  deactivateCustomer: DeactivateCustomerPayload;
};


/**
 * O tipo com nome "Mutation" é especial, ele define quais operações de escrita
 * são suportadas pelo seu servidor de GraphQL
 */
export type MutationDeactivateCustomerArgs = {
  input: DeactivateCustomerInput;
};

/**
 * O tipo com nome "Query" funciona de forma similar à "Mutation", mas descreve
 * as operações de consulta
 */
export type Query = {
  __typename?: 'Query';
  allClusters: Array<Cluster>;
  myClusters: Array<Cluster>;
};

/**
 * Um tipo enum para declarar exatamente quais status
 * são possíveis para um cluster
 */
export enum Status {
  Healthy = 'HEALTHY',
  Unhealthy = 'UNHEALTHY'
}

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Cluster: ResolverTypeWrapper<Cluster>;
  Customer: ResolverTypeWrapper<Customer>;
  DeactivateCustomerInput: DeactivateCustomerInput;
  DeactivateCustomerPayload: ResolverTypeWrapper<DeactivateCustomerPayload>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Status: Status;
  String: ResolverTypeWrapper<Scalars['String']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  Cluster: Cluster;
  Customer: Customer;
  DeactivateCustomerInput: DeactivateCustomerInput;
  DeactivateCustomerPayload: DeactivateCustomerPayload;
  ID: Scalars['ID'];
  Mutation: {};
  Query: {};
  String: Scalars['String'];
}>;

export type ClusterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cluster'] = ResolversParentTypes['Cluster']> = ResolversObject<{
  kubernetesVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Customer'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer']> = ResolversObject<{
  clusters?: Resolver<Array<ResolversTypes['Cluster']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeactivateCustomerPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeactivateCustomerPayload'] = ResolversParentTypes['DeactivateCustomerPayload']> = ResolversObject<{
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  deactivateCustomer?: Resolver<ResolversTypes['DeactivateCustomerPayload'], ParentType, ContextType, RequireFields<MutationDeactivateCustomerArgs, 'input'>>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  allClusters?: Resolver<Array<ResolversTypes['Cluster']>, ParentType, ContextType>;
  myClusters?: Resolver<Array<ResolversTypes['Cluster']>, ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Cluster?: ClusterResolvers<ContextType>;
  Customer?: CustomerResolvers<ContextType>;
  DeactivateCustomerPayload?: DeactivateCustomerPayloadResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;

