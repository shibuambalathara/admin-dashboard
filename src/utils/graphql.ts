import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
  Upload: any;
};

export type AuthenticatedItem = User;

export type Bid = {
  __typename?: 'Bid';
  amount?: Maybe<Scalars['Int']>;
  bidVehicle?: Maybe<Vehicle>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
};

export type BidCreateInput = {
  amount?: InputMaybe<Scalars['Int']>;
  bidVehicle?: InputMaybe<VehicleRelateToOneForCreateInput>;
  name?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

/**  A custom Bid History for Vehicle  */
export type BidHistory = {
  __typename?: 'BidHistory';
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type BidManyRelationFilter = {
  every?: InputMaybe<BidWhereInput>;
  none?: InputMaybe<BidWhereInput>;
  some?: InputMaybe<BidWhereInput>;
};

export type BidOrderByInput = {
  amount?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type BidRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<BidWhereUniqueInput>>;
  create?: InputMaybe<Array<BidCreateInput>>;
};

export type BidRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<BidWhereUniqueInput>>;
  create?: InputMaybe<Array<BidCreateInput>>;
  disconnect?: InputMaybe<Array<BidWhereUniqueInput>>;
  set?: InputMaybe<Array<BidWhereUniqueInput>>;
};

export type BidUpdateArgs = {
  data: BidUpdateInput;
  where: BidWhereUniqueInput;
};

export type BidUpdateInput = {
  amount?: InputMaybe<Scalars['Int']>;
  bidVehicle?: InputMaybe<VehicleRelateToOneForUpdateInput>;
  name?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type BidWhereInput = {
  AND?: InputMaybe<Array<BidWhereInput>>;
  NOT?: InputMaybe<Array<BidWhereInput>>;
  OR?: InputMaybe<Array<BidWhereInput>>;
  amount?: InputMaybe<IntNullableFilter>;
  bidVehicle?: InputMaybe<VehicleWhereInput>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type BidWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilter>;
};

export type CreateInitialUserInput = {
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EmdUpdate = {
  __typename?: 'EmdUpdate';
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  emdNo?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  payment?: Maybe<Payment>;
  specialVehicleBuyingLimitIncrement?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
  vehicleBuyingLimitIncrement?: Maybe<Scalars['Int']>;
};

export type EmdUpdateCreateInput = {
  createdBy?: InputMaybe<UserRelateToOneForCreateInput>;
  emdNo?: InputMaybe<Scalars['Int']>;
  payment?: InputMaybe<PaymentRelateToOneForCreateInput>;
  specialVehicleBuyingLimitIncrement?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
  vehicleBuyingLimitIncrement?: InputMaybe<Scalars['Int']>;
};

export type EmdUpdateManyRelationFilter = {
  every?: InputMaybe<EmdUpdateWhereInput>;
  none?: InputMaybe<EmdUpdateWhereInput>;
  some?: InputMaybe<EmdUpdateWhereInput>;
};

export type EmdUpdateOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  emdNo?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  specialVehicleBuyingLimitIncrement?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  vehicleBuyingLimitIncrement?: InputMaybe<OrderDirection>;
};

export type EmdUpdateRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<EmdUpdateWhereUniqueInput>>;
  create?: InputMaybe<Array<EmdUpdateCreateInput>>;
};

export type EmdUpdateRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<EmdUpdateWhereUniqueInput>>;
  create?: InputMaybe<Array<EmdUpdateCreateInput>>;
  disconnect?: InputMaybe<Array<EmdUpdateWhereUniqueInput>>;
  set?: InputMaybe<Array<EmdUpdateWhereUniqueInput>>;
};

export type EmdUpdateUpdateArgs = {
  data: EmdUpdateUpdateInput;
  where: EmdUpdateWhereUniqueInput;
};

export type EmdUpdateUpdateInput = {
  createdBy?: InputMaybe<UserRelateToOneForUpdateInput>;
  emdNo?: InputMaybe<Scalars['Int']>;
  payment?: InputMaybe<PaymentRelateToOneForUpdateInput>;
  specialVehicleBuyingLimitIncrement?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
  vehicleBuyingLimitIncrement?: InputMaybe<Scalars['Int']>;
};

export type EmdUpdateWhereInput = {
  AND?: InputMaybe<Array<EmdUpdateWhereInput>>;
  NOT?: InputMaybe<Array<EmdUpdateWhereInput>>;
  OR?: InputMaybe<Array<EmdUpdateWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  emdNo?: InputMaybe<IntFilter>;
  id?: InputMaybe<IdFilter>;
  payment?: InputMaybe<PaymentWhereInput>;
  specialVehicleBuyingLimitIncrement?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
  vehicleBuyingLimitIncrement?: InputMaybe<IntNullableFilter>;
};

export type EmdUpdateWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Event = {
  __typename?: 'Event';
  ExcelFile?: Maybe<ExcelUpload>;
  Report?: Maybe<Scalars['JSON']>;
  bidLock?: Maybe<EventBidLockType>;
  createdAt?: Maybe<Scalars['DateTime']>;
  downloadableFile?: Maybe<FileFieldOutput>;
  endDate?: Maybe<Scalars['DateTime']>;
  eventCategory?: Maybe<Scalars['String']>;
  eventNo?: Maybe<Scalars['Int']>;
  eventType?: Maybe<Array<EventType>>;
  eventTypeCount?: Maybe<Scalars['Int']>;
  extraTime?: Maybe<Scalars['Int']>;
  extraTimeTrigerIn?: Maybe<Scalars['Int']>;
  gapInBetweenVehicles?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  isSpecialEvent?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Location>;
  noOfBids?: Maybe<Scalars['Int']>;
  pauseDate?: Maybe<Scalars['DateTime']>;
  pausedTotalTime?: Maybe<Scalars['Int']>;
  seller?: Maybe<Seller>;
  startDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<EventStatusType>;
  termsAndConditions?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  vehicleLiveTimeIn?: Maybe<Scalars['Int']>;
  vehicles?: Maybe<Array<Vehicle>>;
  vehiclesCount?: Maybe<Scalars['Int']>;
};


export type EventEventTypeArgs = {
  orderBy?: Array<EventTypeOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: EventTypeWhereInput;
};


export type EventEventTypeCountArgs = {
  where?: EventTypeWhereInput;
};


export type EventVehiclesArgs = {
  orderBy?: Array<VehicleOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: VehicleWhereInput;
};


export type EventVehiclesCountArgs = {
  where?: VehicleWhereInput;
};

export enum EventBidLockType {
  Locked = 'locked',
  Unlocked = 'unlocked'
}

export type EventBidLockTypeNullableFilter = {
  equals?: InputMaybe<EventBidLockType>;
  in?: InputMaybe<Array<EventBidLockType>>;
  not?: InputMaybe<EventBidLockTypeNullableFilter>;
  notIn?: InputMaybe<Array<EventBidLockType>>;
};

export type EventCreateInput = {
  ExcelFile?: InputMaybe<ExcelUploadRelateToOneForCreateInput>;
  bidLock?: InputMaybe<EventBidLockType>;
  downloadableFile?: InputMaybe<FileFieldInput>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  eventCategory?: InputMaybe<Scalars['String']>;
  eventNo?: InputMaybe<Scalars['Int']>;
  eventType?: InputMaybe<EventTypeRelateToManyForCreateInput>;
  extraTime?: InputMaybe<Scalars['Int']>;
  extraTimeTrigerIn?: InputMaybe<Scalars['Int']>;
  gapInBetweenVehicles?: InputMaybe<Scalars['Int']>;
  isSpecialEvent?: InputMaybe<Scalars['Boolean']>;
  location?: InputMaybe<LocationRelateToOneForCreateInput>;
  noOfBids?: InputMaybe<Scalars['Int']>;
  pauseDate?: InputMaybe<Scalars['DateTime']>;
  pausedTotalTime?: InputMaybe<Scalars['Int']>;
  seller?: InputMaybe<SellerRelateToOneForCreateInput>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<EventStatusType>;
  termsAndConditions?: InputMaybe<Scalars['String']>;
  vehicleLiveTimeIn?: InputMaybe<Scalars['Int']>;
  vehicles?: InputMaybe<VehicleRelateToManyForCreateInput>;
};

export type EventManyRelationFilter = {
  every?: InputMaybe<EventWhereInput>;
  none?: InputMaybe<EventWhereInput>;
  some?: InputMaybe<EventWhereInput>;
};

export type EventOrderByInput = {
  bidLock?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  endDate?: InputMaybe<OrderDirection>;
  eventCategory?: InputMaybe<OrderDirection>;
  eventNo?: InputMaybe<OrderDirection>;
  extraTime?: InputMaybe<OrderDirection>;
  extraTimeTrigerIn?: InputMaybe<OrderDirection>;
  gapInBetweenVehicles?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isSpecialEvent?: InputMaybe<OrderDirection>;
  noOfBids?: InputMaybe<OrderDirection>;
  pauseDate?: InputMaybe<OrderDirection>;
  pausedTotalTime?: InputMaybe<OrderDirection>;
  startDate?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  termsAndConditions?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  vehicleLiveTimeIn?: InputMaybe<OrderDirection>;
};

export type EventRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  create?: InputMaybe<Array<EventCreateInput>>;
};

export type EventRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  create?: InputMaybe<Array<EventCreateInput>>;
  disconnect?: InputMaybe<Array<EventWhereUniqueInput>>;
  set?: InputMaybe<Array<EventWhereUniqueInput>>;
};

export type EventRelateToOneForCreateInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  create?: InputMaybe<EventCreateInput>;
};

export type EventRelateToOneForUpdateInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  create?: InputMaybe<EventCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export enum EventStatusType {
  Active = 'active',
  Blocked = 'blocked',
  Inactive = 'inactive',
  Pause = 'pause',
  Pending = 'pending',
  Stop = 'stop'
}

export type EventStatusTypeNullableFilter = {
  equals?: InputMaybe<EventStatusType>;
  in?: InputMaybe<Array<EventStatusType>>;
  not?: InputMaybe<EventStatusTypeNullableFilter>;
  notIn?: InputMaybe<Array<EventStatusType>>;
};

export type EventType = {
  __typename?: 'EventType';
  createdAt?: Maybe<Scalars['DateTime']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  seller?: Maybe<Array<Seller>>;
  sellerCount?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<User>;
};


export type EventTypeEventsArgs = {
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: EventWhereInput;
};


export type EventTypeEventsCountArgs = {
  where?: EventWhereInput;
};


export type EventTypeSellerArgs = {
  orderBy?: Array<SellerOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: SellerWhereInput;
};


export type EventTypeSellerCountArgs = {
  where?: SellerWhereInput;
};

export type EventTypeCreateInput = {
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars['String']>;
  seller?: InputMaybe<SellerRelateToManyForCreateInput>;
  users?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type EventTypeManyRelationFilter = {
  every?: InputMaybe<EventTypeWhereInput>;
  none?: InputMaybe<EventTypeWhereInput>;
  some?: InputMaybe<EventTypeWhereInput>;
};

export type EventTypeOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type EventTypeRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<EventTypeWhereUniqueInput>>;
  create?: InputMaybe<Array<EventTypeCreateInput>>;
};

export type EventTypeRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<EventTypeWhereUniqueInput>>;
  create?: InputMaybe<Array<EventTypeCreateInput>>;
  disconnect?: InputMaybe<Array<EventTypeWhereUniqueInput>>;
  set?: InputMaybe<Array<EventTypeWhereUniqueInput>>;
};

export type EventTypeUpdateArgs = {
  data: EventTypeUpdateInput;
  where: EventTypeWhereUniqueInput;
};

export type EventTypeUpdateInput = {
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']>;
  seller?: InputMaybe<SellerRelateToManyForUpdateInput>;
  users?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type EventTypeWhereInput = {
  AND?: InputMaybe<Array<EventTypeWhereInput>>;
  NOT?: InputMaybe<Array<EventTypeWhereInput>>;
  OR?: InputMaybe<Array<EventTypeWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  seller?: InputMaybe<SellerManyRelationFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  users?: InputMaybe<UserWhereInput>;
};

export type EventTypeWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type EventUpdateArgs = {
  data: EventUpdateInput;
  where: EventWhereUniqueInput;
};

export type EventUpdateInput = {
  ExcelFile?: InputMaybe<ExcelUploadRelateToOneForUpdateInput>;
  bidLock?: InputMaybe<EventBidLockType>;
  downloadableFile?: InputMaybe<FileFieldInput>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  eventCategory?: InputMaybe<Scalars['String']>;
  eventNo?: InputMaybe<Scalars['Int']>;
  eventType?: InputMaybe<EventTypeRelateToManyForUpdateInput>;
  extraTime?: InputMaybe<Scalars['Int']>;
  extraTimeTrigerIn?: InputMaybe<Scalars['Int']>;
  gapInBetweenVehicles?: InputMaybe<Scalars['Int']>;
  isSpecialEvent?: InputMaybe<Scalars['Boolean']>;
  location?: InputMaybe<LocationRelateToOneForUpdateInput>;
  noOfBids?: InputMaybe<Scalars['Int']>;
  pauseDate?: InputMaybe<Scalars['DateTime']>;
  pausedTotalTime?: InputMaybe<Scalars['Int']>;
  seller?: InputMaybe<SellerRelateToOneForUpdateInput>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<EventStatusType>;
  termsAndConditions?: InputMaybe<Scalars['String']>;
  vehicleLiveTimeIn?: InputMaybe<Scalars['Int']>;
  vehicles?: InputMaybe<VehicleRelateToManyForUpdateInput>;
};

export type EventWhereInput = {
  AND?: InputMaybe<Array<EventWhereInput>>;
  ExcelFile?: InputMaybe<ExcelUploadWhereInput>;
  NOT?: InputMaybe<Array<EventWhereInput>>;
  OR?: InputMaybe<Array<EventWhereInput>>;
  bidLock?: InputMaybe<EventBidLockTypeNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  endDate?: InputMaybe<DateTimeFilter>;
  eventCategory?: InputMaybe<StringNullableFilter>;
  eventNo?: InputMaybe<IntFilter>;
  eventType?: InputMaybe<EventTypeManyRelationFilter>;
  extraTime?: InputMaybe<IntNullableFilter>;
  extraTimeTrigerIn?: InputMaybe<IntNullableFilter>;
  gapInBetweenVehicles?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IdFilter>;
  isSpecialEvent?: InputMaybe<BooleanFilter>;
  location?: InputMaybe<LocationWhereInput>;
  noOfBids?: InputMaybe<IntFilter>;
  pauseDate?: InputMaybe<DateTimeNullableFilter>;
  pausedTotalTime?: InputMaybe<IntNullableFilter>;
  seller?: InputMaybe<SellerWhereInput>;
  startDate?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<EventStatusTypeNullableFilter>;
  termsAndConditions?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  vehicleLiveTimeIn?: InputMaybe<IntNullableFilter>;
  vehicles?: InputMaybe<VehicleManyRelationFilter>;
};

export type EventWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ExcelUpload = {
  __typename?: 'ExcelUpload';
  createdAt?: Maybe<Scalars['DateTime']>;
  event?: Maybe<Event>;
  file?: Maybe<FileFieldOutput>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  vehicles?: Maybe<Array<Vehicle>>;
  vehiclesCount?: Maybe<Scalars['Int']>;
};


export type ExcelUploadVehiclesArgs = {
  orderBy?: Array<VehicleOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: VehicleWhereInput;
};


export type ExcelUploadVehiclesCountArgs = {
  where?: VehicleWhereInput;
};

export type ExcelUploadCreateInput = {
  event?: InputMaybe<EventRelateToOneForCreateInput>;
  file?: InputMaybe<FileFieldInput>;
  name?: InputMaybe<Scalars['String']>;
  vehicles?: InputMaybe<VehicleRelateToManyForCreateInput>;
};

export type ExcelUploadOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type ExcelUploadRelateToOneForCreateInput = {
  connect?: InputMaybe<ExcelUploadWhereUniqueInput>;
  create?: InputMaybe<ExcelUploadCreateInput>;
};

export type ExcelUploadRelateToOneForUpdateInput = {
  connect?: InputMaybe<ExcelUploadWhereUniqueInput>;
  create?: InputMaybe<ExcelUploadCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type ExcelUploadUpdateArgs = {
  data: ExcelUploadUpdateInput;
  where: ExcelUploadWhereUniqueInput;
};

export type ExcelUploadUpdateInput = {
  event?: InputMaybe<EventRelateToOneForUpdateInput>;
  file?: InputMaybe<FileFieldInput>;
  name?: InputMaybe<Scalars['String']>;
  vehicles?: InputMaybe<VehicleRelateToManyForUpdateInput>;
};

export type ExcelUploadWhereInput = {
  AND?: InputMaybe<Array<ExcelUploadWhereInput>>;
  NOT?: InputMaybe<Array<ExcelUploadWhereInput>>;
  OR?: InputMaybe<Array<ExcelUploadWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  event?: InputMaybe<EventWhereInput>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  vehicles?: InputMaybe<VehicleManyRelationFilter>;
};

export type ExcelUploadWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type FileFieldInput = {
  upload: Scalars['Upload'];
};

export type FileFieldOutput = {
  __typename?: 'FileFieldOutput';
  filename: Scalars['String'];
  filesize: Scalars['Int'];
  url: Scalars['String'];
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']>>;
};

export enum ImageExtension {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png',
  Webp = 'webp'
}

export type ImageFieldInput = {
  upload: Scalars['Upload'];
};

export type ImageFieldOutput = {
  __typename?: 'ImageFieldOutput';
  extension: ImageExtension;
  filesize: Scalars['Int'];
  height: Scalars['Int'];
  id: Scalars['ID'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUiFieldGroupMeta = {
  __typename?: 'KeystoneAdminUIFieldGroupMeta';
  description?: Maybe<Scalars['String']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  label: Scalars['String'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  fieldMeta?: Maybe<Scalars['JSON']>;
  isFilterable: Scalars['Boolean'];
  isOrderable: Scalars['Boolean'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
  fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = 'form',
  Sidebar = 'sidebar'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  groups: Array<KeystoneAdminUiFieldGroupMeta>;
  hideCreate: Scalars['Boolean'];
  hideDelete: Scalars['Boolean'];
  initialColumns: Array<Scalars['String']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean'];
  isSingleton: Scalars['Boolean'];
  itemQueryName: Scalars['String'];
  key: Scalars['String'];
  label: Scalars['String'];
  labelField: Scalars['String'];
  listQueryName: Scalars['String'];
  pageSize: Scalars['Int'];
  path: Scalars['String'];
  plural: Scalars['String'];
  singular: Scalars['String'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type Location = {
  __typename?: 'Location';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  state?: Maybe<State>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type LocationEventsArgs = {
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: EventWhereInput;
};


export type LocationEventsCountArgs = {
  where?: EventWhereInput;
};

export type LocationCreateInput = {
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<StateRelateToOneForCreateInput>;
};

export type LocationManyRelationFilter = {
  every?: InputMaybe<LocationWhereInput>;
  none?: InputMaybe<LocationWhereInput>;
  some?: InputMaybe<LocationWhereInput>;
};

export type LocationOrderByInput = {
  city?: InputMaybe<OrderDirection>;
  country?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type LocationRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<LocationWhereUniqueInput>>;
  create?: InputMaybe<Array<LocationCreateInput>>;
};

export type LocationRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<LocationWhereUniqueInput>>;
  create?: InputMaybe<Array<LocationCreateInput>>;
  disconnect?: InputMaybe<Array<LocationWhereUniqueInput>>;
  set?: InputMaybe<Array<LocationWhereUniqueInput>>;
};

export type LocationRelateToOneForCreateInput = {
  connect?: InputMaybe<LocationWhereUniqueInput>;
  create?: InputMaybe<LocationCreateInput>;
};

export type LocationRelateToOneForUpdateInput = {
  connect?: InputMaybe<LocationWhereUniqueInput>;
  create?: InputMaybe<LocationCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type LocationUpdateArgs = {
  data: LocationUpdateInput;
  where: LocationWhereUniqueInput;
};

export type LocationUpdateInput = {
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<StateRelateToOneForUpdateInput>;
};

export type LocationWhereInput = {
  AND?: InputMaybe<Array<LocationWhereInput>>;
  NOT?: InputMaybe<Array<LocationWhereInput>>;
  OR?: InputMaybe<Array<LocationWhereInput>>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  state?: InputMaybe<StateWhereInput>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type LocationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum MagicLinkRedemptionErrorCode {
  Failure = 'FAILURE',
  TokenExpired = 'TOKEN_EXPIRED',
  TokenRedeemed = 'TOKEN_REDEEMED'
}

export type Mutation = {
  __typename?: 'Mutation';
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createBid?: Maybe<Bid>;
  createBids?: Maybe<Array<Maybe<Bid>>>;
  createEmdUpdate?: Maybe<EmdUpdate>;
  createEmdUpdates?: Maybe<Array<Maybe<EmdUpdate>>>;
  createEvent?: Maybe<Event>;
  createEventType?: Maybe<EventType>;
  createEventTypes?: Maybe<Array<Maybe<EventType>>>;
  createEvents?: Maybe<Array<Maybe<Event>>>;
  createExcelUpload?: Maybe<ExcelUpload>;
  createExcelUploads?: Maybe<Array<Maybe<ExcelUpload>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createLocation?: Maybe<Location>;
  createLocations?: Maybe<Array<Maybe<Location>>>;
  createPayment?: Maybe<Payment>;
  createPayments?: Maybe<Array<Maybe<Payment>>>;
  createSeller?: Maybe<Seller>;
  createSellers?: Maybe<Array<Maybe<Seller>>>;
  createState?: Maybe<State>;
  createStates?: Maybe<Array<Maybe<State>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  createVehicle?: Maybe<Vehicle>;
  createVehicles?: Maybe<Array<Maybe<Vehicle>>>;
  deleteBid?: Maybe<Bid>;
  deleteBids?: Maybe<Array<Maybe<Bid>>>;
  deleteEmdUpdate?: Maybe<EmdUpdate>;
  deleteEmdUpdates?: Maybe<Array<Maybe<EmdUpdate>>>;
  deleteEvent?: Maybe<Event>;
  deleteEventType?: Maybe<EventType>;
  deleteEventTypes?: Maybe<Array<Maybe<EventType>>>;
  deleteEvents?: Maybe<Array<Maybe<Event>>>;
  deleteExcelUpload?: Maybe<ExcelUpload>;
  deleteExcelUploads?: Maybe<Array<Maybe<ExcelUpload>>>;
  deleteLocation?: Maybe<Location>;
  deleteLocations?: Maybe<Array<Maybe<Location>>>;
  deletePayment?: Maybe<Payment>;
  deletePayments?: Maybe<Array<Maybe<Payment>>>;
  deleteSeller?: Maybe<Seller>;
  deleteSellers?: Maybe<Array<Maybe<Seller>>>;
  deleteState?: Maybe<State>;
  deleteStates?: Maybe<Array<Maybe<State>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  deleteVehicle?: Maybe<Vehicle>;
  deleteVehicles?: Maybe<Array<Maybe<Vehicle>>>;
  endSession: Scalars['Boolean'];
  redeemUserMagicAuthToken: RedeemUserMagicAuthTokenResult;
  sendUserMagicAuthLink: Scalars['Boolean'];
  updateBid?: Maybe<Bid>;
  updateBids?: Maybe<Array<Maybe<Bid>>>;
  updateEmdUpdate?: Maybe<EmdUpdate>;
  updateEmdUpdates?: Maybe<Array<Maybe<EmdUpdate>>>;
  updateEvent?: Maybe<Event>;
  updateEventType?: Maybe<EventType>;
  updateEventTypes?: Maybe<Array<Maybe<EventType>>>;
  updateEvents?: Maybe<Array<Maybe<Event>>>;
  updateExcelUpload?: Maybe<ExcelUpload>;
  updateExcelUploads?: Maybe<Array<Maybe<ExcelUpload>>>;
  updateLocation?: Maybe<Location>;
  updateLocations?: Maybe<Array<Maybe<Location>>>;
  updatePayment?: Maybe<Payment>;
  updatePayments?: Maybe<Array<Maybe<Payment>>>;
  updateSeller?: Maybe<Seller>;
  updateSellers?: Maybe<Array<Maybe<Seller>>>;
  updateState?: Maybe<State>;
  updateStates?: Maybe<Array<Maybe<State>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
  updateVehicle?: Maybe<Vehicle>;
  updateVehicles?: Maybe<Array<Maybe<Vehicle>>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  mobile: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateBidArgs = {
  data: BidCreateInput;
};


export type MutationCreateBidsArgs = {
  data: Array<BidCreateInput>;
};


export type MutationCreateEmdUpdateArgs = {
  data: EmdUpdateCreateInput;
};


export type MutationCreateEmdUpdatesArgs = {
  data: Array<EmdUpdateCreateInput>;
};


export type MutationCreateEventArgs = {
  data: EventCreateInput;
};


export type MutationCreateEventTypeArgs = {
  data: EventTypeCreateInput;
};


export type MutationCreateEventTypesArgs = {
  data: Array<EventTypeCreateInput>;
};


export type MutationCreateEventsArgs = {
  data: Array<EventCreateInput>;
};


export type MutationCreateExcelUploadArgs = {
  data: ExcelUploadCreateInput;
};


export type MutationCreateExcelUploadsArgs = {
  data: Array<ExcelUploadCreateInput>;
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreateLocationArgs = {
  data: LocationCreateInput;
};


export type MutationCreateLocationsArgs = {
  data: Array<LocationCreateInput>;
};


export type MutationCreatePaymentArgs = {
  data: PaymentCreateInput;
};


export type MutationCreatePaymentsArgs = {
  data: Array<PaymentCreateInput>;
};


export type MutationCreateSellerArgs = {
  data: SellerCreateInput;
};


export type MutationCreateSellersArgs = {
  data: Array<SellerCreateInput>;
};


export type MutationCreateStateArgs = {
  data: StateCreateInput;
};


export type MutationCreateStatesArgs = {
  data: Array<StateCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationCreateVehicleArgs = {
  data: VehicleCreateInput;
};


export type MutationCreateVehiclesArgs = {
  data: Array<VehicleCreateInput>;
};


export type MutationDeleteBidArgs = {
  where: BidWhereUniqueInput;
};


export type MutationDeleteBidsArgs = {
  where: Array<BidWhereUniqueInput>;
};


export type MutationDeleteEmdUpdateArgs = {
  where: EmdUpdateWhereUniqueInput;
};


export type MutationDeleteEmdUpdatesArgs = {
  where: Array<EmdUpdateWhereUniqueInput>;
};


export type MutationDeleteEventArgs = {
  where: EventWhereUniqueInput;
};


export type MutationDeleteEventTypeArgs = {
  where: EventTypeWhereUniqueInput;
};


export type MutationDeleteEventTypesArgs = {
  where: Array<EventTypeWhereUniqueInput>;
};


export type MutationDeleteEventsArgs = {
  where: Array<EventWhereUniqueInput>;
};


export type MutationDeleteExcelUploadArgs = {
  where: ExcelUploadWhereUniqueInput;
};


export type MutationDeleteExcelUploadsArgs = {
  where: Array<ExcelUploadWhereUniqueInput>;
};


export type MutationDeleteLocationArgs = {
  where: LocationWhereUniqueInput;
};


export type MutationDeleteLocationsArgs = {
  where: Array<LocationWhereUniqueInput>;
};


export type MutationDeletePaymentArgs = {
  where: PaymentWhereUniqueInput;
};


export type MutationDeletePaymentsArgs = {
  where: Array<PaymentWhereUniqueInput>;
};


export type MutationDeleteSellerArgs = {
  where: SellerWhereUniqueInput;
};


export type MutationDeleteSellersArgs = {
  where: Array<SellerWhereUniqueInput>;
};


export type MutationDeleteStateArgs = {
  where: StateWhereUniqueInput;
};


export type MutationDeleteStatesArgs = {
  where: Array<StateWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationDeleteVehicleArgs = {
  where: VehicleWhereUniqueInput;
};


export type MutationDeleteVehiclesArgs = {
  where: Array<VehicleWhereUniqueInput>;
};


export type MutationRedeemUserMagicAuthTokenArgs = {
  mobile: Scalars['String'];
  token: Scalars['String'];
};


export type MutationSendUserMagicAuthLinkArgs = {
  mobile: Scalars['String'];
};


export type MutationUpdateBidArgs = {
  data: BidUpdateInput;
  where: BidWhereUniqueInput;
};


export type MutationUpdateBidsArgs = {
  data: Array<BidUpdateArgs>;
};


export type MutationUpdateEmdUpdateArgs = {
  data: EmdUpdateUpdateInput;
  where: EmdUpdateWhereUniqueInput;
};


export type MutationUpdateEmdUpdatesArgs = {
  data: Array<EmdUpdateUpdateArgs>;
};


export type MutationUpdateEventArgs = {
  data: EventUpdateInput;
  where: EventWhereUniqueInput;
};


export type MutationUpdateEventTypeArgs = {
  data: EventTypeUpdateInput;
  where: EventTypeWhereUniqueInput;
};


export type MutationUpdateEventTypesArgs = {
  data: Array<EventTypeUpdateArgs>;
};


export type MutationUpdateEventsArgs = {
  data: Array<EventUpdateArgs>;
};


export type MutationUpdateExcelUploadArgs = {
  data: ExcelUploadUpdateInput;
  where: ExcelUploadWhereUniqueInput;
};


export type MutationUpdateExcelUploadsArgs = {
  data: Array<ExcelUploadUpdateArgs>;
};


export type MutationUpdateLocationArgs = {
  data: LocationUpdateInput;
  where: LocationWhereUniqueInput;
};


export type MutationUpdateLocationsArgs = {
  data: Array<LocationUpdateArgs>;
};


export type MutationUpdatePaymentArgs = {
  data: PaymentUpdateInput;
  where: PaymentWhereUniqueInput;
};


export type MutationUpdatePaymentsArgs = {
  data: Array<PaymentUpdateArgs>;
};


export type MutationUpdateSellerArgs = {
  data: SellerUpdateInput;
  where: SellerWhereUniqueInput;
};


export type MutationUpdateSellersArgs = {
  data: Array<SellerUpdateArgs>;
};


export type MutationUpdateStateArgs = {
  data: StateUpdateInput;
  where: StateWhereUniqueInput;
};


export type MutationUpdateStatesArgs = {
  data: Array<StateUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};


export type MutationUpdateVehicleArgs = {
  data: VehicleUpdateInput;
  where: VehicleWhereUniqueInput;
};


export type MutationUpdateVehiclesArgs = {
  data: Array<VehicleUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PasswordFilter = {
  isSet: Scalars['Boolean'];
};

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean'];
};

export type Payment = {
  __typename?: 'Payment';
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  emdUpdate?: Maybe<Array<EmdUpdate>>;
  emdUpdateCount?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  image?: Maybe<ImageFieldOutput>;
  paymentFor?: Maybe<Scalars['String']>;
  refNo?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
};


export type PaymentEmdUpdateArgs = {
  orderBy?: Array<EmdUpdateOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: EmdUpdateWhereInput;
};


export type PaymentEmdUpdateCountArgs = {
  where?: EmdUpdateWhereInput;
};

export type PaymentCreateInput = {
  amount?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  emdUpdate?: InputMaybe<EmdUpdateRelateToManyForCreateInput>;
  image?: InputMaybe<ImageFieldInput>;
  paymentFor?: InputMaybe<Scalars['String']>;
  refNo?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type PaymentManyRelationFilter = {
  every?: InputMaybe<PaymentWhereInput>;
  none?: InputMaybe<PaymentWhereInput>;
  some?: InputMaybe<PaymentWhereInput>;
};

export type PaymentOrderByInput = {
  amount?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  paymentFor?: InputMaybe<OrderDirection>;
  refNo?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type PaymentRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  create?: InputMaybe<Array<PaymentCreateInput>>;
};

export type PaymentRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  create?: InputMaybe<Array<PaymentCreateInput>>;
  disconnect?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  set?: InputMaybe<Array<PaymentWhereUniqueInput>>;
};

export type PaymentRelateToOneForCreateInput = {
  connect?: InputMaybe<PaymentWhereUniqueInput>;
  create?: InputMaybe<PaymentCreateInput>;
};

export type PaymentRelateToOneForUpdateInput = {
  connect?: InputMaybe<PaymentWhereUniqueInput>;
  create?: InputMaybe<PaymentCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type PaymentUpdateArgs = {
  data: PaymentUpdateInput;
  where: PaymentWhereUniqueInput;
};

export type PaymentUpdateInput = {
  amount?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  emdUpdate?: InputMaybe<EmdUpdateRelateToManyForUpdateInput>;
  image?: InputMaybe<ImageFieldInput>;
  paymentFor?: InputMaybe<Scalars['String']>;
  refNo?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type PaymentWhereInput = {
  AND?: InputMaybe<Array<PaymentWhereInput>>;
  NOT?: InputMaybe<Array<PaymentWhereInput>>;
  OR?: InputMaybe<Array<PaymentWhereInput>>;
  amount?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  emdUpdate?: InputMaybe<EmdUpdateManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  paymentFor?: InputMaybe<StringFilter>;
  refNo?: InputMaybe<IntFilter>;
  status?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type PaymentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  authenticatedItem?: Maybe<AuthenticatedItem>;
  bid?: Maybe<Bid>;
  bids?: Maybe<Array<Bid>>;
  bidsCount?: Maybe<Scalars['Int']>;
  /** complied Events */
  compliedEvents?: Maybe<Array<Maybe<Event>>>;
  emdUpdate?: Maybe<EmdUpdate>;
  emdUpdates?: Maybe<Array<EmdUpdate>>;
  emdUpdatesCount?: Maybe<Scalars['Int']>;
  event?: Maybe<Event>;
  eventType?: Maybe<EventType>;
  eventTypes?: Maybe<Array<EventType>>;
  eventTypesCount?: Maybe<Scalars['Int']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']>;
  excelUpload?: Maybe<ExcelUpload>;
  excelUploads?: Maybe<Array<ExcelUpload>>;
  excelUploadsCount?: Maybe<Scalars['Int']>;
  keystone: KeystoneMeta;
  /** Live Events */
  liveEvents?: Maybe<Array<Maybe<Event>>>;
  location?: Maybe<Location>;
  locations?: Maybe<Array<Location>>;
  locationsCount?: Maybe<Scalars['Int']>;
  payment?: Maybe<Payment>;
  payments?: Maybe<Array<Payment>>;
  paymentsCount?: Maybe<Scalars['Int']>;
  seller?: Maybe<Seller>;
  sellers?: Maybe<Array<Seller>>;
  sellersCount?: Maybe<Scalars['Int']>;
  state?: Maybe<State>;
  states?: Maybe<Array<State>>;
  statesCount?: Maybe<Scalars['Int']>;
  /** Bid History for open auction */
  sudoBids?: Maybe<Array<Maybe<BidHistory>>>;
  /** User Pan Cards Count */
  sudoUsersCount?: Maybe<Scalars['Int']>;
  /** Server Time */
  time?: Maybe<Scalars['String']>;
  /** Upcoming Events */
  upcomingEvents?: Maybe<Array<Maybe<Event>>>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']>;
  vehicle?: Maybe<Vehicle>;
  vehicles?: Maybe<Array<Vehicle>>;
  vehiclesCount?: Maybe<Scalars['Int']>;
};


export type QueryBidArgs = {
  where: BidWhereUniqueInput;
};


export type QueryBidsArgs = {
  orderBy?: Array<BidOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: BidWhereInput;
};


export type QueryBidsCountArgs = {
  where?: BidWhereInput;
};


export type QueryCompliedEventsArgs = {
  orderBy?: InputMaybe<Array<InputMaybe<EventOrderByInput>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
  where?: InputMaybe<EventWhereInput>;
};


export type QueryEmdUpdateArgs = {
  where: EmdUpdateWhereUniqueInput;
};


export type QueryEmdUpdatesArgs = {
  orderBy?: Array<EmdUpdateOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: EmdUpdateWhereInput;
};


export type QueryEmdUpdatesCountArgs = {
  where?: EmdUpdateWhereInput;
};


export type QueryEventArgs = {
  where: EventWhereUniqueInput;
};


export type QueryEventTypeArgs = {
  where: EventTypeWhereUniqueInput;
};


export type QueryEventTypesArgs = {
  orderBy?: Array<EventTypeOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: EventTypeWhereInput;
};


export type QueryEventTypesCountArgs = {
  where?: EventTypeWhereInput;
};


export type QueryEventsArgs = {
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: EventWhereInput;
};


export type QueryEventsCountArgs = {
  where?: EventWhereInput;
};


export type QueryExcelUploadArgs = {
  where: ExcelUploadWhereUniqueInput;
};


export type QueryExcelUploadsArgs = {
  orderBy?: Array<ExcelUploadOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ExcelUploadWhereInput;
};


export type QueryExcelUploadsCountArgs = {
  where?: ExcelUploadWhereInput;
};


export type QueryLiveEventsArgs = {
  orderBy?: InputMaybe<Array<InputMaybe<EventOrderByInput>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
  where?: InputMaybe<EventWhereInput>;
};


export type QueryLocationArgs = {
  where: LocationWhereUniqueInput;
};


export type QueryLocationsArgs = {
  orderBy?: Array<LocationOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: LocationWhereInput;
};


export type QueryLocationsCountArgs = {
  where?: LocationWhereInput;
};


export type QueryPaymentArgs = {
  where: PaymentWhereUniqueInput;
};


export type QueryPaymentsArgs = {
  orderBy?: Array<PaymentOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: PaymentWhereInput;
};


export type QueryPaymentsCountArgs = {
  where?: PaymentWhereInput;
};


export type QuerySellerArgs = {
  where: SellerWhereUniqueInput;
};


export type QuerySellersArgs = {
  orderBy?: Array<SellerOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: SellerWhereInput;
};


export type QuerySellersCountArgs = {
  where?: SellerWhereInput;
};


export type QueryStateArgs = {
  where: StateWhereUniqueInput;
};


export type QueryStatesArgs = {
  orderBy?: Array<StateOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: StateWhereInput;
};


export type QueryStatesCountArgs = {
  where?: StateWhereInput;
};


export type QuerySudoBidsArgs = {
  orderBy?: InputMaybe<Array<InputMaybe<BidOrderByInput>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
  where?: InputMaybe<BidWhereInput>;
};


export type QuerySudoUsersCountArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUpcomingEventsArgs = {
  orderBy?: InputMaybe<Array<InputMaybe<EventOrderByInput>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
  where?: InputMaybe<EventWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};


export type QueryVehicleArgs = {
  where: VehicleWhereUniqueInput;
};


export type QueryVehiclesArgs = {
  orderBy?: Array<VehicleOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: VehicleWhereInput;
};


export type QueryVehiclesCountArgs = {
  where?: VehicleWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RedeemUserMagicAuthTokenFailure = {
  __typename?: 'RedeemUserMagicAuthTokenFailure';
  code: MagicLinkRedemptionErrorCode;
  message: Scalars['String'];
};

export type RedeemUserMagicAuthTokenResult = RedeemUserMagicAuthTokenFailure | RedeemUserMagicAuthTokenSuccess;

export type RedeemUserMagicAuthTokenSuccess = {
  __typename?: 'RedeemUserMagicAuthTokenSuccess';
  item: User;
  token: Scalars['String'];
};

export type Seller = {
  __typename?: 'Seller';
  GSTNumbber?: Maybe<Scalars['String']>;
  bannedUsers?: Maybe<Array<User>>;
  bannedUsersCount?: Maybe<Scalars['Int']>;
  billingContactPerson?: Maybe<Scalars['String']>;
  contactPerson?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nationalHead?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  vehicleCategory?: Maybe<Array<EventType>>;
  vehicleCategoryCount?: Maybe<Scalars['Int']>;
};


export type SellerBannedUsersArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type SellerBannedUsersCountArgs = {
  where?: UserWhereInput;
};


export type SellerEventsArgs = {
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: EventWhereInput;
};


export type SellerEventsCountArgs = {
  where?: EventWhereInput;
};


export type SellerVehicleCategoryArgs = {
  orderBy?: Array<EventTypeOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: EventTypeWhereInput;
};


export type SellerVehicleCategoryCountArgs = {
  where?: EventTypeWhereInput;
};

export type SellerCreateInput = {
  GSTNumbber?: InputMaybe<Scalars['String']>;
  bannedUsers?: InputMaybe<UserRelateToManyForCreateInput>;
  billingContactPerson?: InputMaybe<Scalars['String']>;
  contactPerson?: InputMaybe<Scalars['String']>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  mobile?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  nationalHead?: InputMaybe<Scalars['String']>;
  vehicleCategory?: InputMaybe<EventTypeRelateToManyForCreateInput>;
};

export type SellerManyRelationFilter = {
  every?: InputMaybe<SellerWhereInput>;
  none?: InputMaybe<SellerWhereInput>;
  some?: InputMaybe<SellerWhereInput>;
};

export type SellerOrderByInput = {
  GSTNumbber?: InputMaybe<OrderDirection>;
  billingContactPerson?: InputMaybe<OrderDirection>;
  contactPerson?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  mobile?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  nationalHead?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type SellerRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<SellerWhereUniqueInput>>;
  create?: InputMaybe<Array<SellerCreateInput>>;
};

export type SellerRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<SellerWhereUniqueInput>>;
  create?: InputMaybe<Array<SellerCreateInput>>;
  disconnect?: InputMaybe<Array<SellerWhereUniqueInput>>;
  set?: InputMaybe<Array<SellerWhereUniqueInput>>;
};

export type SellerRelateToOneForCreateInput = {
  connect?: InputMaybe<SellerWhereUniqueInput>;
  create?: InputMaybe<SellerCreateInput>;
};

export type SellerRelateToOneForUpdateInput = {
  connect?: InputMaybe<SellerWhereUniqueInput>;
  create?: InputMaybe<SellerCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type SellerUpdateArgs = {
  data: SellerUpdateInput;
  where: SellerWhereUniqueInput;
};

export type SellerUpdateInput = {
  GSTNumbber?: InputMaybe<Scalars['String']>;
  bannedUsers?: InputMaybe<UserRelateToManyForUpdateInput>;
  billingContactPerson?: InputMaybe<Scalars['String']>;
  contactPerson?: InputMaybe<Scalars['String']>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  mobile?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  nationalHead?: InputMaybe<Scalars['String']>;
  vehicleCategory?: InputMaybe<EventTypeRelateToManyForUpdateInput>;
};

export type SellerWhereInput = {
  AND?: InputMaybe<Array<SellerWhereInput>>;
  GSTNumbber?: InputMaybe<StringFilter>;
  NOT?: InputMaybe<Array<SellerWhereInput>>;
  OR?: InputMaybe<Array<SellerWhereInput>>;
  bannedUsers?: InputMaybe<UserManyRelationFilter>;
  billingContactPerson?: InputMaybe<StringFilter>;
  contactPerson?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  mobile?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nationalHead?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  vehicleCategory?: InputMaybe<EventTypeManyRelationFilter>;
};

export type SellerWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type State = {
  __typename?: 'State';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  locations?: Maybe<Array<Location>>;
  locationsCount?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']>;
};


export type StateLocationsArgs = {
  orderBy?: Array<LocationOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: LocationWhereInput;
};


export type StateLocationsCountArgs = {
  where?: LocationWhereInput;
};


export type StateUsersArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type StateUsersCountArgs = {
  where?: UserWhereInput;
};

export type StateCreateInput = {
  locations?: InputMaybe<LocationRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<UserRelateToManyForCreateInput>;
};

export type StateManyRelationFilter = {
  every?: InputMaybe<StateWhereInput>;
  none?: InputMaybe<StateWhereInput>;
  some?: InputMaybe<StateWhereInput>;
};

export type StateOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type StateRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<StateWhereUniqueInput>>;
  create?: InputMaybe<Array<StateCreateInput>>;
};

export type StateRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<StateWhereUniqueInput>>;
  create?: InputMaybe<Array<StateCreateInput>>;
  disconnect?: InputMaybe<Array<StateWhereUniqueInput>>;
  set?: InputMaybe<Array<StateWhereUniqueInput>>;
};

export type StateRelateToOneForCreateInput = {
  connect?: InputMaybe<StateWhereUniqueInput>;
  create?: InputMaybe<StateCreateInput>;
};

export type StateRelateToOneForUpdateInput = {
  connect?: InputMaybe<StateWhereUniqueInput>;
  create?: InputMaybe<StateCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type StateUpdateArgs = {
  data: StateUpdateInput;
  where: StateWhereUniqueInput;
};

export type StateUpdateInput = {
  locations?: InputMaybe<LocationRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<UserRelateToManyForUpdateInput>;
};

export type StateWhereInput = {
  AND?: InputMaybe<Array<StateWhereInput>>;
  NOT?: InputMaybe<Array<StateWhereInput>>;
  OR?: InputMaybe<Array<StateWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  locations?: InputMaybe<LocationManyRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  users?: InputMaybe<UserManyRelationFilter>;
};

export type StateWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** New Live Bids */
  liveBid?: Maybe<Bid>;
  time?: Maybe<Time>;
};


export type SubscriptionLiveBidArgs = {
  id: Scalars['ID'];
};

export type Time = {
  __typename?: 'Time';
  iso: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  activeBids?: Maybe<Array<Vehicle>>;
  activeBidsCount?: Maybe<Scalars['Int']>;
  bannedSellers?: Maybe<Array<Seller>>;
  bannedSellersCount?: Maybe<Scalars['Int']>;
  businessName?: Maybe<Scalars['String']>;
  category?: Maybe<Array<EventType>>;
  categoryCount?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currentVehicleBuyingLimit?: Maybe<VehicleBuyingLimits>;
  dealerId?: Maybe<Scalars['String']>;
  dealership?: Maybe<ImageFieldOutput>;
  email?: Maybe<Scalars['String']>;
  emdUpdates?: Maybe<Array<EmdUpdate>>;
  emdUpdatesByAdmin?: Maybe<Array<EmdUpdate>>;
  emdUpdatesByAdminCount?: Maybe<Scalars['Int']>;
  emdUpdatesCount?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  idNo?: Maybe<Scalars['Int']>;
  idProof?: Maybe<ImageFieldOutput>;
  idProofBack?: Maybe<ImageFieldOutput>;
  idProofNo?: Maybe<Scalars['String']>;
  idProofType?: Maybe<UserIdProofTypeType>;
  image?: Maybe<ImageFieldOutput>;
  lastName?: Maybe<Scalars['String']>;
  magicAuthIssuedAt?: Maybe<Scalars['DateTime']>;
  magicAuthRedeemedAt?: Maybe<Scalars['DateTime']>;
  magicAuthToken?: Maybe<PasswordState>;
  mobile?: Maybe<Scalars['String']>;
  pancard?: Maybe<ImageFieldOutput>;
  pancardNo?: Maybe<Scalars['String']>;
  password?: Maybe<PasswordState>;
  payments?: Maybe<Array<Payment>>;
  paymentsCount?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  quotedBids?: Maybe<Array<Bid>>;
  quotedBidsCount?: Maybe<Scalars['Int']>;
  role?: Maybe<UserRoleType>;
  specialVehicleBuyingLimit?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  states?: Maybe<Array<State>>;
  statesCount?: Maybe<Scalars['Int']>;
  status?: Maybe<UserStatusType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
  vehicleBuyingLimit?: Maybe<Scalars['Int']>;
  watchList?: Maybe<Array<Vehicle>>;
  watchListCount?: Maybe<Scalars['Int']>;
};


export type UserActiveBidsArgs = {
  orderBy?: Array<VehicleOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: VehicleWhereInput;
};


export type UserActiveBidsCountArgs = {
  where?: VehicleWhereInput;
};


export type UserBannedSellersArgs = {
  orderBy?: Array<SellerOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: SellerWhereInput;
};


export type UserBannedSellersCountArgs = {
  where?: SellerWhereInput;
};


export type UserCategoryArgs = {
  orderBy?: Array<EventTypeOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: EventTypeWhereInput;
};


export type UserCategoryCountArgs = {
  where?: EventTypeWhereInput;
};


export type UserEmdUpdatesArgs = {
  orderBy?: Array<EmdUpdateOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: EmdUpdateWhereInput;
};


export type UserEmdUpdatesByAdminArgs = {
  orderBy?: Array<EmdUpdateOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: EmdUpdateWhereInput;
};


export type UserEmdUpdatesByAdminCountArgs = {
  where?: EmdUpdateWhereInput;
};


export type UserEmdUpdatesCountArgs = {
  where?: EmdUpdateWhereInput;
};


export type UserPaymentsArgs = {
  orderBy?: Array<PaymentOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: PaymentWhereInput;
};


export type UserPaymentsCountArgs = {
  where?: PaymentWhereInput;
};


export type UserQuotedBidsArgs = {
  orderBy?: Array<BidOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: BidWhereInput;
};


export type UserQuotedBidsCountArgs = {
  where?: BidWhereInput;
};


export type UserStatesArgs = {
  orderBy?: Array<StateOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: StateWhereInput;
};


export type UserStatesCountArgs = {
  where?: StateWhereInput;
};


export type UserWatchListArgs = {
  orderBy?: Array<VehicleOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: VehicleWhereInput;
};


export type UserWatchListCountArgs = {
  where?: VehicleWhereInput;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String'];
};

export type UserCreateInput = {
  activeBids?: InputMaybe<VehicleRelateToManyForCreateInput>;
  bannedSellers?: InputMaybe<SellerRelateToManyForCreateInput>;
  businessName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<EventTypeRelateToManyForCreateInput>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  dealerId?: InputMaybe<Scalars['String']>;
  dealership?: InputMaybe<ImageFieldInput>;
  email?: InputMaybe<Scalars['String']>;
  emdUpdates?: InputMaybe<EmdUpdateRelateToManyForCreateInput>;
  emdUpdatesByAdmin?: InputMaybe<EmdUpdateRelateToManyForCreateInput>;
  firstName?: InputMaybe<Scalars['String']>;
  idNo?: InputMaybe<Scalars['Int']>;
  idProof?: InputMaybe<ImageFieldInput>;
  idProofBack?: InputMaybe<ImageFieldInput>;
  idProofNo?: InputMaybe<Scalars['String']>;
  idProofType?: InputMaybe<UserIdProofTypeType>;
  image?: InputMaybe<ImageFieldInput>;
  lastName?: InputMaybe<Scalars['String']>;
  magicAuthIssuedAt?: InputMaybe<Scalars['DateTime']>;
  magicAuthRedeemedAt?: InputMaybe<Scalars['DateTime']>;
  magicAuthToken?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  pancard?: InputMaybe<ImageFieldInput>;
  pancardNo?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  payments?: InputMaybe<PaymentRelateToManyForCreateInput>;
  phone?: InputMaybe<Scalars['String']>;
  quotedBids?: InputMaybe<BidRelateToManyForCreateInput>;
  role?: InputMaybe<UserRoleType>;
  specialVehicleBuyingLimit?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<Scalars['String']>;
  states?: InputMaybe<StateRelateToManyForCreateInput>;
  status?: InputMaybe<UserStatusType>;
  username?: InputMaybe<Scalars['String']>;
  vehicleBuyingLimit?: InputMaybe<Scalars['Int']>;
  watchList?: InputMaybe<VehicleRelateToManyForCreateInput>;
};

export enum UserIdProofTypeType {
  Aadhar = 'aadhar',
  DrivingLicense = 'drivingLicense',
  Passport = 'passport'
}

export type UserIdProofTypeTypeNullableFilter = {
  equals?: InputMaybe<UserIdProofTypeType>;
  in?: InputMaybe<Array<UserIdProofTypeType>>;
  not?: InputMaybe<UserIdProofTypeTypeNullableFilter>;
  notIn?: InputMaybe<Array<UserIdProofTypeType>>;
};

export type UserManyRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserOrderByInput = {
  businessName?: InputMaybe<OrderDirection>;
  city?: InputMaybe<OrderDirection>;
  country?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  dealerId?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  firstName?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  idNo?: InputMaybe<OrderDirection>;
  idProofNo?: InputMaybe<OrderDirection>;
  idProofType?: InputMaybe<OrderDirection>;
  lastName?: InputMaybe<OrderDirection>;
  magicAuthIssuedAt?: InputMaybe<OrderDirection>;
  magicAuthRedeemedAt?: InputMaybe<OrderDirection>;
  mobile?: InputMaybe<OrderDirection>;
  pancardNo?: InputMaybe<OrderDirection>;
  phone?: InputMaybe<OrderDirection>;
  role?: InputMaybe<OrderDirection>;
  specialVehicleBuyingLimit?: InputMaybe<OrderDirection>;
  state?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  username?: InputMaybe<OrderDirection>;
  vehicleBuyingLimit?: InputMaybe<OrderDirection>;
};

export type UserRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  create?: InputMaybe<Array<UserCreateInput>>;
};

export type UserRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  create?: InputMaybe<Array<UserCreateInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserRelateToOneForCreateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export enum UserRoleType {
  Admin = 'admin',
  Dealer = 'dealer',
  Seller = 'seller',
  Staff = 'staff'
}

export type UserRoleTypeNullableFilter = {
  equals?: InputMaybe<UserRoleType>;
  in?: InputMaybe<Array<UserRoleType>>;
  not?: InputMaybe<UserRoleTypeNullableFilter>;
  notIn?: InputMaybe<Array<UserRoleType>>;
};

export enum UserStatusType {
  Active = 'active',
  Blocked = 'blocked',
  Inactive = 'inactive',
  Pending = 'pending'
}

export type UserStatusTypeNullableFilter = {
  equals?: InputMaybe<UserStatusType>;
  in?: InputMaybe<Array<UserStatusType>>;
  not?: InputMaybe<UserStatusTypeNullableFilter>;
  notIn?: InputMaybe<Array<UserStatusType>>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  activeBids?: InputMaybe<VehicleRelateToManyForUpdateInput>;
  bannedSellers?: InputMaybe<SellerRelateToManyForUpdateInput>;
  businessName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<EventTypeRelateToManyForUpdateInput>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  dealerId?: InputMaybe<Scalars['String']>;
  dealership?: InputMaybe<ImageFieldInput>;
  email?: InputMaybe<Scalars['String']>;
  emdUpdates?: InputMaybe<EmdUpdateRelateToManyForUpdateInput>;
  emdUpdatesByAdmin?: InputMaybe<EmdUpdateRelateToManyForUpdateInput>;
  firstName?: InputMaybe<Scalars['String']>;
  idNo?: InputMaybe<Scalars['Int']>;
  idProof?: InputMaybe<ImageFieldInput>;
  idProofBack?: InputMaybe<ImageFieldInput>;
  idProofNo?: InputMaybe<Scalars['String']>;
  idProofType?: InputMaybe<UserIdProofTypeType>;
  image?: InputMaybe<ImageFieldInput>;
  lastName?: InputMaybe<Scalars['String']>;
  magicAuthIssuedAt?: InputMaybe<Scalars['DateTime']>;
  magicAuthRedeemedAt?: InputMaybe<Scalars['DateTime']>;
  magicAuthToken?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  pancard?: InputMaybe<ImageFieldInput>;
  pancardNo?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  payments?: InputMaybe<PaymentRelateToManyForUpdateInput>;
  phone?: InputMaybe<Scalars['String']>;
  quotedBids?: InputMaybe<BidRelateToManyForUpdateInput>;
  role?: InputMaybe<UserRoleType>;
  specialVehicleBuyingLimit?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<Scalars['String']>;
  states?: InputMaybe<StateRelateToManyForUpdateInput>;
  status?: InputMaybe<UserStatusType>;
  username?: InputMaybe<Scalars['String']>;
  vehicleBuyingLimit?: InputMaybe<Scalars['Int']>;
  watchList?: InputMaybe<VehicleRelateToManyForUpdateInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  activeBids?: InputMaybe<VehicleManyRelationFilter>;
  bannedSellers?: InputMaybe<SellerManyRelationFilter>;
  businessName?: InputMaybe<StringFilter>;
  category?: InputMaybe<EventTypeManyRelationFilter>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  dealerId?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  emdUpdates?: InputMaybe<EmdUpdateManyRelationFilter>;
  emdUpdatesByAdmin?: InputMaybe<EmdUpdateManyRelationFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  idNo?: InputMaybe<IntFilter>;
  idProofNo?: InputMaybe<StringFilter>;
  idProofType?: InputMaybe<UserIdProofTypeTypeNullableFilter>;
  lastName?: InputMaybe<StringFilter>;
  magicAuthIssuedAt?: InputMaybe<DateTimeNullableFilter>;
  magicAuthRedeemedAt?: InputMaybe<DateTimeNullableFilter>;
  magicAuthToken?: InputMaybe<PasswordFilter>;
  mobile?: InputMaybe<StringFilter>;
  pancardNo?: InputMaybe<StringFilter>;
  password?: InputMaybe<PasswordFilter>;
  payments?: InputMaybe<PaymentManyRelationFilter>;
  phone?: InputMaybe<StringFilter>;
  quotedBids?: InputMaybe<BidManyRelationFilter>;
  role?: InputMaybe<UserRoleTypeNullableFilter>;
  specialVehicleBuyingLimit?: InputMaybe<IntNullableFilter>;
  state?: InputMaybe<StringFilter>;
  states?: InputMaybe<StateManyRelationFilter>;
  status?: InputMaybe<UserStatusTypeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  username?: InputMaybe<StringFilter>;
  vehicleBuyingLimit?: InputMaybe<IntNullableFilter>;
  watchList?: InputMaybe<VehicleManyRelationFilter>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  mobile?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type Vehicle = {
  __typename?: 'Vehicle';
  ExcelFile?: Maybe<ExcelUpload>;
  additionalRemarks?: Maybe<Scalars['String']>;
  approxParkingCharges?: Maybe<Scalars['String']>;
  area?: Maybe<Scalars['String']>;
  auctionManager?: Maybe<Scalars['String']>;
  autobseContact?: Maybe<Scalars['String']>;
  autobse_contact_person?: Maybe<Scalars['String']>;
  backImage?: Maybe<Scalars['String']>;
  bidAmountUpdate?: Maybe<Scalars['Int']>;
  bidStartTime?: Maybe<Scalars['DateTime']>;
  bidStatus?: Maybe<VehicleBidStatusType>;
  bidTimeExpire?: Maybe<Scalars['DateTime']>;
  buyerFees?: Maybe<Scalars['String']>;
  categoty?: Maybe<Scalars['String']>;
  chassisNo?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  clientContactNo?: Maybe<Scalars['String']>;
  clientContactPerson?: Maybe<Scalars['String']>;
  climateControl?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currentBidAmount?: Maybe<Scalars['Int']>;
  currentBidUser?: Maybe<User>;
  dateOfRegistration?: Maybe<Scalars['DateTime']>;
  doorCount?: Maybe<Scalars['Int']>;
  engineNo?: Maybe<Scalars['String']>;
  event?: Maybe<Event>;
  fitness?: Maybe<Scalars['String']>;
  fitnessPermit?: Maybe<Scalars['String']>;
  frontImage?: Maybe<Scalars['String']>;
  fuel?: Maybe<Scalars['String']>;
  gearBox?: Maybe<Scalars['String']>;
  hypothication?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image5?: Maybe<Scalars['String']>;
  image6?: Maybe<Scalars['String']>;
  inspectionLink?: Maybe<Scalars['String']>;
  insurance?: Maybe<Scalars['String']>;
  insuranceStatus?: Maybe<Scalars['String']>;
  insuranceValidTill?: Maybe<Scalars['DateTime']>;
  kmReading?: Maybe<Scalars['Int']>;
  leftImage?: Maybe<Scalars['String']>;
  loanAgreementNo?: Maybe<Scalars['String']>;
  make?: Maybe<Scalars['String']>;
  mileage?: Maybe<Scalars['Int']>;
  model?: Maybe<Scalars['String']>;
  myBidRank?: Maybe<Scalars['Int']>;
  ownership?: Maybe<Scalars['Int']>;
  parkingCharges?: Maybe<Scalars['String']>;
  parkingRate?: Maybe<Scalars['String']>;
  paymentTerms?: Maybe<Scalars['String']>;
  permit?: Maybe<Scalars['String']>;
  powerSteering?: Maybe<Scalars['String']>;
  quoteIncreament?: Maybe<Scalars['Int']>;
  rcStatus?: Maybe<Scalars['String']>;
  registeredOwnerName?: Maybe<Scalars['String']>;
  registrationNumber?: Maybe<Scalars['String']>;
  repoDt?: Maybe<Scalars['DateTime']>;
  reservePrice?: Maybe<Scalars['Float']>;
  rightImage?: Maybe<Scalars['String']>;
  rtoFine?: Maybe<Scalars['String']>;
  shape?: Maybe<Scalars['String']>;
  startBidAmount?: Maybe<Scalars['Float']>;
  startPrice?: Maybe<Scalars['Float']>;
  state?: Maybe<Scalars['String']>;
  tax?: Maybe<Scalars['String']>;
  taxValidityDate?: Maybe<Scalars['DateTime']>;
  totalBids?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userVehicleBids?: Maybe<Array<Bid>>;
  userVehicleBidsCount?: Maybe<Scalars['Int']>;
  varient?: Maybe<Scalars['String']>;
  vehicleCondition?: Maybe<Scalars['String']>;
  vehicleEventStatus?: Maybe<VehicleEventStatus>;
  vehicleIndexNo?: Maybe<Scalars['Int']>;
  vehicleRemarks?: Maybe<Scalars['String']>;
  veicleLocation?: Maybe<Scalars['String']>;
  watchedBy?: Maybe<Array<User>>;
  watchedByCount?: Maybe<Scalars['Int']>;
  yardLocation?: Maybe<Scalars['String']>;
  yearOfManufacture?: Maybe<Scalars['Int']>;
};


export type VehicleUserVehicleBidsArgs = {
  orderBy?: Array<BidOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: BidWhereInput;
};


export type VehicleUserVehicleBidsCountArgs = {
  where?: BidWhereInput;
};


export type VehicleWatchedByArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type VehicleWatchedByCountArgs = {
  where?: UserWhereInput;
};

export enum VehicleBidStatusType {
  Approved = 'approved',
  Declined = 'declined',
  Fulfilled = 'fulfilled',
  Pending = 'pending'
}

export type VehicleBidStatusTypeNullableFilter = {
  equals?: InputMaybe<VehicleBidStatusType>;
  in?: InputMaybe<Array<VehicleBidStatusType>>;
  not?: InputMaybe<VehicleBidStatusTypeNullableFilter>;
  notIn?: InputMaybe<Array<VehicleBidStatusType>>;
};

export type VehicleCreateInput = {
  ExcelFile?: InputMaybe<ExcelUploadRelateToOneForCreateInput>;
  additionalRemarks?: InputMaybe<Scalars['String']>;
  approxParkingCharges?: InputMaybe<Scalars['String']>;
  area?: InputMaybe<Scalars['String']>;
  auctionManager?: InputMaybe<Scalars['String']>;
  autobseContact?: InputMaybe<Scalars['String']>;
  autobse_contact_person?: InputMaybe<Scalars['String']>;
  backImage?: InputMaybe<Scalars['String']>;
  bidAmountUpdate?: InputMaybe<Scalars['Int']>;
  bidStartTime?: InputMaybe<Scalars['DateTime']>;
  bidStatus?: InputMaybe<VehicleBidStatusType>;
  bidTimeExpire?: InputMaybe<Scalars['DateTime']>;
  buyerFees?: InputMaybe<Scalars['String']>;
  categoty?: InputMaybe<Scalars['String']>;
  chassisNo?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  clientContactNo?: InputMaybe<Scalars['String']>;
  clientContactPerson?: InputMaybe<Scalars['String']>;
  climateControl?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  currentBidAmount?: InputMaybe<Scalars['Int']>;
  currentBidUser?: InputMaybe<UserRelateToOneForCreateInput>;
  dateOfRegistration?: InputMaybe<Scalars['DateTime']>;
  doorCount?: InputMaybe<Scalars['Int']>;
  engineNo?: InputMaybe<Scalars['String']>;
  event?: InputMaybe<EventRelateToOneForCreateInput>;
  fitness?: InputMaybe<Scalars['String']>;
  fitnessPermit?: InputMaybe<Scalars['String']>;
  frontImage?: InputMaybe<Scalars['String']>;
  fuel?: InputMaybe<Scalars['String']>;
  gearBox?: InputMaybe<Scalars['String']>;
  hypothication?: InputMaybe<Scalars['String']>;
  image5?: InputMaybe<Scalars['String']>;
  image6?: InputMaybe<Scalars['String']>;
  inspectionLink?: InputMaybe<Scalars['String']>;
  insurance?: InputMaybe<Scalars['String']>;
  insuranceStatus?: InputMaybe<Scalars['String']>;
  insuranceValidTill?: InputMaybe<Scalars['DateTime']>;
  kmReading?: InputMaybe<Scalars['Int']>;
  leftImage?: InputMaybe<Scalars['String']>;
  loanAgreementNo?: InputMaybe<Scalars['String']>;
  make?: InputMaybe<Scalars['String']>;
  mileage?: InputMaybe<Scalars['Int']>;
  model?: InputMaybe<Scalars['String']>;
  ownership?: InputMaybe<Scalars['Int']>;
  parkingCharges?: InputMaybe<Scalars['String']>;
  parkingRate?: InputMaybe<Scalars['String']>;
  paymentTerms?: InputMaybe<Scalars['String']>;
  permit?: InputMaybe<Scalars['String']>;
  powerSteering?: InputMaybe<Scalars['String']>;
  quoteIncreament?: InputMaybe<Scalars['Int']>;
  rcStatus?: InputMaybe<Scalars['String']>;
  registeredOwnerName?: InputMaybe<Scalars['String']>;
  registrationNumber?: InputMaybe<Scalars['String']>;
  repoDt?: InputMaybe<Scalars['DateTime']>;
  reservePrice?: InputMaybe<Scalars['Float']>;
  rightImage?: InputMaybe<Scalars['String']>;
  rtoFine?: InputMaybe<Scalars['String']>;
  shape?: InputMaybe<Scalars['String']>;
  startBidAmount?: InputMaybe<Scalars['Float']>;
  startPrice?: InputMaybe<Scalars['Float']>;
  state?: InputMaybe<Scalars['String']>;
  tax?: InputMaybe<Scalars['String']>;
  taxValidityDate?: InputMaybe<Scalars['DateTime']>;
  type?: InputMaybe<Scalars['String']>;
  userVehicleBids?: InputMaybe<BidRelateToManyForCreateInput>;
  varient?: InputMaybe<Scalars['String']>;
  vehicleCondition?: InputMaybe<Scalars['String']>;
  vehicleIndexNo?: InputMaybe<Scalars['Int']>;
  vehicleRemarks?: InputMaybe<Scalars['String']>;
  veicleLocation?: InputMaybe<Scalars['String']>;
  watchedBy?: InputMaybe<UserRelateToManyForCreateInput>;
  yardLocation?: InputMaybe<Scalars['String']>;
  yearOfManufacture?: InputMaybe<Scalars['Int']>;
};

export type VehicleManyRelationFilter = {
  every?: InputMaybe<VehicleWhereInput>;
  none?: InputMaybe<VehicleWhereInput>;
  some?: InputMaybe<VehicleWhereInput>;
};

export type VehicleOrderByInput = {
  additionalRemarks?: InputMaybe<OrderDirection>;
  approxParkingCharges?: InputMaybe<OrderDirection>;
  area?: InputMaybe<OrderDirection>;
  auctionManager?: InputMaybe<OrderDirection>;
  autobseContact?: InputMaybe<OrderDirection>;
  autobse_contact_person?: InputMaybe<OrderDirection>;
  backImage?: InputMaybe<OrderDirection>;
  bidAmountUpdate?: InputMaybe<OrderDirection>;
  bidStartTime?: InputMaybe<OrderDirection>;
  bidStatus?: InputMaybe<OrderDirection>;
  bidTimeExpire?: InputMaybe<OrderDirection>;
  buyerFees?: InputMaybe<OrderDirection>;
  categoty?: InputMaybe<OrderDirection>;
  chassisNo?: InputMaybe<OrderDirection>;
  city?: InputMaybe<OrderDirection>;
  clientContactNo?: InputMaybe<OrderDirection>;
  clientContactPerson?: InputMaybe<OrderDirection>;
  climateControl?: InputMaybe<OrderDirection>;
  color?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  currentBidAmount?: InputMaybe<OrderDirection>;
  dateOfRegistration?: InputMaybe<OrderDirection>;
  doorCount?: InputMaybe<OrderDirection>;
  engineNo?: InputMaybe<OrderDirection>;
  fitness?: InputMaybe<OrderDirection>;
  fitnessPermit?: InputMaybe<OrderDirection>;
  frontImage?: InputMaybe<OrderDirection>;
  fuel?: InputMaybe<OrderDirection>;
  gearBox?: InputMaybe<OrderDirection>;
  hypothication?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  image5?: InputMaybe<OrderDirection>;
  image6?: InputMaybe<OrderDirection>;
  inspectionLink?: InputMaybe<OrderDirection>;
  insurance?: InputMaybe<OrderDirection>;
  insuranceStatus?: InputMaybe<OrderDirection>;
  insuranceValidTill?: InputMaybe<OrderDirection>;
  kmReading?: InputMaybe<OrderDirection>;
  leftImage?: InputMaybe<OrderDirection>;
  loanAgreementNo?: InputMaybe<OrderDirection>;
  make?: InputMaybe<OrderDirection>;
  mileage?: InputMaybe<OrderDirection>;
  model?: InputMaybe<OrderDirection>;
  ownership?: InputMaybe<OrderDirection>;
  parkingCharges?: InputMaybe<OrderDirection>;
  parkingRate?: InputMaybe<OrderDirection>;
  paymentTerms?: InputMaybe<OrderDirection>;
  permit?: InputMaybe<OrderDirection>;
  powerSteering?: InputMaybe<OrderDirection>;
  quoteIncreament?: InputMaybe<OrderDirection>;
  rcStatus?: InputMaybe<OrderDirection>;
  registeredOwnerName?: InputMaybe<OrderDirection>;
  registrationNumber?: InputMaybe<OrderDirection>;
  repoDt?: InputMaybe<OrderDirection>;
  reservePrice?: InputMaybe<OrderDirection>;
  rightImage?: InputMaybe<OrderDirection>;
  rtoFine?: InputMaybe<OrderDirection>;
  shape?: InputMaybe<OrderDirection>;
  startBidAmount?: InputMaybe<OrderDirection>;
  startPrice?: InputMaybe<OrderDirection>;
  state?: InputMaybe<OrderDirection>;
  tax?: InputMaybe<OrderDirection>;
  taxValidityDate?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  varient?: InputMaybe<OrderDirection>;
  vehicleCondition?: InputMaybe<OrderDirection>;
  vehicleIndexNo?: InputMaybe<OrderDirection>;
  vehicleRemarks?: InputMaybe<OrderDirection>;
  veicleLocation?: InputMaybe<OrderDirection>;
  yardLocation?: InputMaybe<OrderDirection>;
  yearOfManufacture?: InputMaybe<OrderDirection>;
};

export type VehicleRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<VehicleWhereUniqueInput>>;
  create?: InputMaybe<Array<VehicleCreateInput>>;
};

export type VehicleRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<VehicleWhereUniqueInput>>;
  create?: InputMaybe<Array<VehicleCreateInput>>;
  disconnect?: InputMaybe<Array<VehicleWhereUniqueInput>>;
  set?: InputMaybe<Array<VehicleWhereUniqueInput>>;
};

export type VehicleRelateToOneForCreateInput = {
  connect?: InputMaybe<VehicleWhereUniqueInput>;
  create?: InputMaybe<VehicleCreateInput>;
};

export type VehicleRelateToOneForUpdateInput = {
  connect?: InputMaybe<VehicleWhereUniqueInput>;
  create?: InputMaybe<VehicleCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type VehicleUpdateArgs = {
  data: VehicleUpdateInput;
  where: VehicleWhereUniqueInput;
};

export type VehicleUpdateInput = {
  ExcelFile?: InputMaybe<ExcelUploadRelateToOneForUpdateInput>;
  additionalRemarks?: InputMaybe<Scalars['String']>;
  approxParkingCharges?: InputMaybe<Scalars['String']>;
  area?: InputMaybe<Scalars['String']>;
  auctionManager?: InputMaybe<Scalars['String']>;
  autobseContact?: InputMaybe<Scalars['String']>;
  autobse_contact_person?: InputMaybe<Scalars['String']>;
  backImage?: InputMaybe<Scalars['String']>;
  bidAmountUpdate?: InputMaybe<Scalars['Int']>;
  bidStartTime?: InputMaybe<Scalars['DateTime']>;
  bidStatus?: InputMaybe<VehicleBidStatusType>;
  bidTimeExpire?: InputMaybe<Scalars['DateTime']>;
  buyerFees?: InputMaybe<Scalars['String']>;
  categoty?: InputMaybe<Scalars['String']>;
  chassisNo?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  clientContactNo?: InputMaybe<Scalars['String']>;
  clientContactPerson?: InputMaybe<Scalars['String']>;
  climateControl?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  currentBidAmount?: InputMaybe<Scalars['Int']>;
  currentBidUser?: InputMaybe<UserRelateToOneForUpdateInput>;
  dateOfRegistration?: InputMaybe<Scalars['DateTime']>;
  doorCount?: InputMaybe<Scalars['Int']>;
  engineNo?: InputMaybe<Scalars['String']>;
  event?: InputMaybe<EventRelateToOneForUpdateInput>;
  fitness?: InputMaybe<Scalars['String']>;
  fitnessPermit?: InputMaybe<Scalars['String']>;
  frontImage?: InputMaybe<Scalars['String']>;
  fuel?: InputMaybe<Scalars['String']>;
  gearBox?: InputMaybe<Scalars['String']>;
  hypothication?: InputMaybe<Scalars['String']>;
  image5?: InputMaybe<Scalars['String']>;
  image6?: InputMaybe<Scalars['String']>;
  inspectionLink?: InputMaybe<Scalars['String']>;
  insurance?: InputMaybe<Scalars['String']>;
  insuranceStatus?: InputMaybe<Scalars['String']>;
  insuranceValidTill?: InputMaybe<Scalars['DateTime']>;
  kmReading?: InputMaybe<Scalars['Int']>;
  leftImage?: InputMaybe<Scalars['String']>;
  loanAgreementNo?: InputMaybe<Scalars['String']>;
  make?: InputMaybe<Scalars['String']>;
  mileage?: InputMaybe<Scalars['Int']>;
  model?: InputMaybe<Scalars['String']>;
  ownership?: InputMaybe<Scalars['Int']>;
  parkingCharges?: InputMaybe<Scalars['String']>;
  parkingRate?: InputMaybe<Scalars['String']>;
  paymentTerms?: InputMaybe<Scalars['String']>;
  permit?: InputMaybe<Scalars['String']>;
  powerSteering?: InputMaybe<Scalars['String']>;
  quoteIncreament?: InputMaybe<Scalars['Int']>;
  rcStatus?: InputMaybe<Scalars['String']>;
  registeredOwnerName?: InputMaybe<Scalars['String']>;
  registrationNumber?: InputMaybe<Scalars['String']>;
  repoDt?: InputMaybe<Scalars['DateTime']>;
  reservePrice?: InputMaybe<Scalars['Float']>;
  rightImage?: InputMaybe<Scalars['String']>;
  rtoFine?: InputMaybe<Scalars['String']>;
  shape?: InputMaybe<Scalars['String']>;
  startBidAmount?: InputMaybe<Scalars['Float']>;
  startPrice?: InputMaybe<Scalars['Float']>;
  state?: InputMaybe<Scalars['String']>;
  tax?: InputMaybe<Scalars['String']>;
  taxValidityDate?: InputMaybe<Scalars['DateTime']>;
  type?: InputMaybe<Scalars['String']>;
  userVehicleBids?: InputMaybe<BidRelateToManyForUpdateInput>;
  varient?: InputMaybe<Scalars['String']>;
  vehicleCondition?: InputMaybe<Scalars['String']>;
  vehicleIndexNo?: InputMaybe<Scalars['Int']>;
  vehicleRemarks?: InputMaybe<Scalars['String']>;
  veicleLocation?: InputMaybe<Scalars['String']>;
  watchedBy?: InputMaybe<UserRelateToManyForUpdateInput>;
  yardLocation?: InputMaybe<Scalars['String']>;
  yearOfManufacture?: InputMaybe<Scalars['Int']>;
};

export type VehicleWhereInput = {
  AND?: InputMaybe<Array<VehicleWhereInput>>;
  ExcelFile?: InputMaybe<ExcelUploadWhereInput>;
  NOT?: InputMaybe<Array<VehicleWhereInput>>;
  OR?: InputMaybe<Array<VehicleWhereInput>>;
  additionalRemarks?: InputMaybe<StringFilter>;
  approxParkingCharges?: InputMaybe<StringFilter>;
  area?: InputMaybe<StringFilter>;
  auctionManager?: InputMaybe<StringFilter>;
  autobseContact?: InputMaybe<StringFilter>;
  autobse_contact_person?: InputMaybe<StringFilter>;
  backImage?: InputMaybe<StringFilter>;
  bidAmountUpdate?: InputMaybe<IntNullableFilter>;
  bidStartTime?: InputMaybe<DateTimeFilter>;
  bidStatus?: InputMaybe<VehicleBidStatusTypeNullableFilter>;
  bidTimeExpire?: InputMaybe<DateTimeFilter>;
  buyerFees?: InputMaybe<StringFilter>;
  categoty?: InputMaybe<StringFilter>;
  chassisNo?: InputMaybe<StringFilter>;
  city?: InputMaybe<StringFilter>;
  clientContactNo?: InputMaybe<StringFilter>;
  clientContactPerson?: InputMaybe<StringFilter>;
  climateControl?: InputMaybe<StringFilter>;
  color?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  currentBidAmount?: InputMaybe<IntNullableFilter>;
  currentBidUser?: InputMaybe<UserWhereInput>;
  dateOfRegistration?: InputMaybe<DateTimeNullableFilter>;
  doorCount?: InputMaybe<IntNullableFilter>;
  engineNo?: InputMaybe<StringFilter>;
  event?: InputMaybe<EventWhereInput>;
  fitness?: InputMaybe<StringFilter>;
  fitnessPermit?: InputMaybe<StringFilter>;
  frontImage?: InputMaybe<StringFilter>;
  fuel?: InputMaybe<StringFilter>;
  gearBox?: InputMaybe<StringFilter>;
  hypothication?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  image5?: InputMaybe<StringFilter>;
  image6?: InputMaybe<StringFilter>;
  inspectionLink?: InputMaybe<StringFilter>;
  insurance?: InputMaybe<StringFilter>;
  insuranceStatus?: InputMaybe<StringFilter>;
  insuranceValidTill?: InputMaybe<DateTimeNullableFilter>;
  kmReading?: InputMaybe<IntNullableFilter>;
  leftImage?: InputMaybe<StringFilter>;
  loanAgreementNo?: InputMaybe<StringFilter>;
  make?: InputMaybe<StringFilter>;
  mileage?: InputMaybe<IntNullableFilter>;
  model?: InputMaybe<StringFilter>;
  ownership?: InputMaybe<IntNullableFilter>;
  parkingCharges?: InputMaybe<StringFilter>;
  parkingRate?: InputMaybe<StringFilter>;
  paymentTerms?: InputMaybe<StringFilter>;
  permit?: InputMaybe<StringFilter>;
  powerSteering?: InputMaybe<StringFilter>;
  quoteIncreament?: InputMaybe<IntNullableFilter>;
  rcStatus?: InputMaybe<StringFilter>;
  registeredOwnerName?: InputMaybe<StringFilter>;
  registrationNumber?: InputMaybe<StringFilter>;
  repoDt?: InputMaybe<DateTimeNullableFilter>;
  reservePrice?: InputMaybe<FloatNullableFilter>;
  rightImage?: InputMaybe<StringFilter>;
  rtoFine?: InputMaybe<StringFilter>;
  shape?: InputMaybe<StringFilter>;
  startBidAmount?: InputMaybe<FloatNullableFilter>;
  startPrice?: InputMaybe<FloatNullableFilter>;
  state?: InputMaybe<StringFilter>;
  tax?: InputMaybe<StringFilter>;
  taxValidityDate?: InputMaybe<DateTimeNullableFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userVehicleBids?: InputMaybe<BidManyRelationFilter>;
  varient?: InputMaybe<StringFilter>;
  vehicleCondition?: InputMaybe<StringFilter>;
  vehicleIndexNo?: InputMaybe<IntFilter>;
  vehicleRemarks?: InputMaybe<StringFilter>;
  veicleLocation?: InputMaybe<StringFilter>;
  watchedBy?: InputMaybe<UserManyRelationFilter>;
  yardLocation?: InputMaybe<StringFilter>;
  yearOfManufacture?: InputMaybe<IntNullableFilter>;
};

export type VehicleWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type VehicleBuyingLimits = {
  __typename?: 'vehicleBuyingLimits';
  specialVehicleBuyingLimit?: Maybe<Scalars['Int']>;
  vehicleBuyingLimit?: Maybe<Scalars['Int']>;
};

export enum VehicleEventStatus {
  Abnormal = 'abnormal',
  Completed = 'completed',
  Live = 'live',
  Upcoming = 'upcoming'
}

export type ActiveBidsPerUserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type ActiveBidsPerUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, activeBidsCount?: number | null, states?: Array<{ __typename?: 'State', id: string, name?: string | null }> | null, activeBids?: Array<{ __typename?: 'Vehicle', bidAmountUpdate?: number | null, startBidAmount?: number | null, currentBidAmount?: number | null, id: string, registrationNumber?: string | null, bidStatus?: VehicleBidStatusType | null, bidTimeExpire?: any | null, totalBids?: number | null, userVehicleBidsCount?: number | null }> | null } | null };

export type CreateEventMutationVariables = Exact<{
  data: EventCreateInput;
}>;


export type CreateEventMutation = { __typename?: 'Mutation', createEvent?: { __typename?: 'Event', id: string, eventCategory?: string | null, startDate?: any | null, endDate?: any | null, noOfBids?: number | null, status?: EventStatusType | null, termsAndConditions?: string | null, bidLock?: EventBidLockType | null, isSpecialEvent?: boolean | null, extraTime?: number | null, extraTimeTrigerIn?: number | null, vehicleLiveTimeIn?: number | null, gapInBetweenVehicles?: number | null, seller?: { __typename?: 'Seller', name?: string | null, id: string } | null, eventType?: Array<{ __typename?: 'EventType', name?: string | null, id: string }> | null, location?: { __typename?: 'Location', city?: string | null, id: string } | null, downloadableFile?: { __typename?: 'FileFieldOutput', url: string } | null } | null };

export type CreateUserMutationVariables = Exact<{
  data: UserCreateInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', mobile?: string | null, username?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, city?: string | null, businessName?: string | null, role?: UserRoleType | null, status?: UserStatusType | null, idProofType?: UserIdProofTypeType | null, idProofNo?: string | null, state?: string | null, country?: string | null, password?: { __typename?: 'PasswordState', isSet: boolean } | null, image?: { __typename?: 'ImageFieldOutput', url: string } | null, pancard?: { __typename?: 'ImageFieldOutput', url: string } | null, idProof?: { __typename?: 'ImageFieldOutput', id: string } | null, idProofBack?: { __typename?: 'ImageFieldOutput', url: string } | null, dealership?: { __typename?: 'ImageFieldOutput', url: string } | null, category?: Array<{ __typename?: 'EventType', name?: string | null }> | null } | null };

export type LoginMutationVariables = Exact<{
  mobile: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', authenticateUserWithPassword?: { __typename?: 'UserAuthenticationWithPasswordFailure', message: string } | { __typename?: 'UserAuthenticationWithPasswordSuccess', sessionToken: string, item: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, role?: UserRoleType | null } } | null };

export type BidsTableQueryVariables = Exact<{ [key: string]: never; }>;


export type BidsTableQuery = { __typename?: 'Query', bids?: Array<{ __typename?: 'Bid', id: string, amount?: number | null, name?: string | null, createdAt?: any | null, updatedAt?: any | null, bidVehicle?: { __typename?: 'Vehicle', id: string, registrationNumber?: string | null } | null, user?: { __typename?: 'User', firstName?: string | null, lastName?: string | null, id: string } | null }> | null };

export type BidDetailsPerVehicleQueryVariables = Exact<{
  where: VehicleWhereUniqueInput;
}>;


export type BidDetailsPerVehicleQuery = { __typename?: 'Query', vehicle?: { __typename?: 'Vehicle', registrationNumber?: string | null, currentBidAmount?: number | null, userVehicleBidsCount?: number | null, vehicleEventStatus?: VehicleEventStatus | null, watchedByCount?: number | null, userVehicleBids?: Array<{ __typename?: 'Bid', amount?: number | null, id: string, createdAt?: any | null, user?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, mobile?: string | null } | null }> | null, currentBidUser?: { __typename?: 'User', id: string, username?: string | null, firstName?: string | null, lastName?: string | null } | null, watchedBy?: Array<{ __typename?: 'User', id: string, username?: string | null, firstName?: string | null }> | null } | null };

export type DeleteBidMutationVariables = Exact<{
  where: BidWhereUniqueInput;
}>;


export type DeleteBidMutation = { __typename?: 'Mutation', deleteBid?: { __typename?: 'Bid', id: string } | null };

export type BuyingLimitQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type BuyingLimitQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, emdUpdates?: Array<{ __typename?: 'EmdUpdate', id: string, emdNo?: number | null, vehicleBuyingLimitIncrement?: number | null, createdAt?: any | null, payment?: { __typename?: 'Payment', amount?: number | null, id: string } | null, createdBy?: { __typename?: 'User', id: string, firstName?: string | null } | null }> | null } | null };

export type CountQueryVariables = Exact<{ [key: string]: never; }>;


export type CountQuery = { __typename?: 'Query', usersCount?: number | null, paymentsCount?: number | null, emdUpdatesCount?: number | null, eventsCount?: number | null, vehiclesCount?: number | null, bidsCount?: number | null, eventTypesCount?: number | null, locationsCount?: number | null, statesCount?: number | null, excelUploadsCount?: number | null, sellersCount?: number | null };

export type DeleteUserMutationVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser?: { __typename?: 'User', id: string } | null };

export type EditEventMutationVariables = Exact<{
  where: EventWhereUniqueInput;
  data: EventUpdateInput;
}>;


export type EditEventMutation = { __typename?: 'Mutation', updateEvent?: { __typename?: 'Event', id: string, eventCategory?: string | null, startDate?: any | null, endDate?: any | null, noOfBids?: number | null, status?: EventStatusType | null, termsAndConditions?: string | null, bidLock?: EventBidLockType | null, isSpecialEvent?: boolean | null, extraTimeTrigerIn?: number | null, extraTime?: number | null, vehicleLiveTimeIn?: number | null, gapInBetweenVehicles?: number | null, seller?: { __typename?: 'Seller', name?: string | null, id: string } | null, eventType?: Array<{ __typename?: 'EventType', id: string, name?: string | null }> | null, location?: { __typename?: 'Location', id: string, name?: string | null } | null, downloadableFile?: { __typename?: 'FileFieldOutput', url: string } | null } | null };

export type CreateEmdUpdateMutationVariables = Exact<{
  data: EmdUpdateCreateInput;
}>;


export type CreateEmdUpdateMutation = { __typename?: 'Mutation', createEmdUpdate?: { __typename?: 'EmdUpdate', vehicleBuyingLimitIncrement?: number | null, payment?: { __typename?: 'Payment', id: string } | null } | null };

export type EmdTableQueryVariables = Exact<{ [key: string]: never; }>;


export type EmdTableQuery = { __typename?: 'Query', emdUpdates?: Array<{ __typename?: 'EmdUpdate', id: string, emdNo?: number | null, specialVehicleBuyingLimitIncrement?: number | null, vehicleBuyingLimitIncrement?: number | null, createdAt?: any | null, updatedAt?: any | null, user?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } | null, createdBy?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } | null }> | null };

export type DeleteEmdUpdateMutationVariables = Exact<{
  where: EmdUpdateWhereUniqueInput;
}>;


export type DeleteEmdUpdateMutation = { __typename?: 'Mutation', deleteEmdUpdate?: { __typename?: 'EmdUpdate', id: string, emdNo?: number | null } | null };

export type EmdUpdateQueryVariables = Exact<{
  where: EmdUpdateWhereUniqueInput;
}>;


export type EmdUpdateQuery = { __typename?: 'Query', emdUpdate?: { __typename?: 'EmdUpdate', id: string, emdNo?: number | null, vehicleBuyingLimitIncrement?: number | null, payment?: { __typename?: 'Payment', amount?: number | null, image?: { __typename?: 'ImageFieldOutput', url: string } | null } | null, user?: { __typename?: 'User', id: string, firstName?: string | null, username?: string | null } | null } | null };

export type EventQueryVariables = Exact<{
  where: EventWhereUniqueInput;
}>;


export type EventQuery = { __typename?: 'Query', event?: { __typename?: 'Event', id: string, eventCategory?: string | null, startDate?: any | null, endDate?: any | null, noOfBids?: number | null, status?: EventStatusType | null, termsAndConditions?: string | null, bidLock?: EventBidLockType | null, isSpecialEvent?: boolean | null, extraTime?: number | null, extraTimeTrigerIn?: number | null, vehicleLiveTimeIn?: number | null, gapInBetweenVehicles?: number | null, seller?: { __typename?: 'Seller', name?: string | null, id: string } | null, eventType?: Array<{ __typename?: 'EventType', name?: string | null, id: string }> | null, location?: { __typename?: 'Location', name?: string | null, id: string } | null, downloadableFile?: { __typename?: 'FileFieldOutput', url: string } | null } | null };

export type EventStartTimeQueryVariables = Exact<{
  where: EventWhereUniqueInput;
}>;


export type EventStartTimeQuery = { __typename?: 'Query', event?: { __typename?: 'Event', id: string, startDate?: any | null } | null };

export type CreateEventTypeMutationVariables = Exact<{
  data: EventTypeCreateInput;
}>;


export type CreateEventTypeMutation = { __typename?: 'Mutation', createEventType?: { __typename?: 'EventType', name?: string | null } | null };

export type DeleteEventTypeMutationVariables = Exact<{
  where: EventTypeWhereUniqueInput;
}>;


export type DeleteEventTypeMutation = { __typename?: 'Mutation', deleteEventType?: { __typename?: 'EventType', id: string } | null };

export type EventsPerSellerQueryVariables = Exact<{
  where: SellerWhereUniqueInput;
}>;


export type EventsPerSellerQuery = { __typename?: 'Query', seller?: { __typename?: 'Seller', id: string, name?: string | null, events?: Array<{ __typename?: 'Event', id: string, eventNo?: number | null, eventCategory?: string | null, startDate?: any | null, status?: EventStatusType | null, endDate?: any | null, vehiclesCount?: number | null, location?: { __typename?: 'Location', name?: string | null } | null, seller?: { __typename?: 'Seller', name?: string | null } | null }> | null } | null };

export type EventTableQueryVariables = Exact<{ [key: string]: never; }>;


export type EventTableQuery = { __typename?: 'Query', events?: Array<{ __typename?: 'Event', id: string, eventNo?: number | null, eventCategory?: string | null, startDate?: any | null, status?: EventStatusType | null, endDate?: any | null, vehiclesCount?: number | null, Report?: any | null, location?: { __typename?: 'Location', name?: string | null } | null, seller?: { __typename?: 'Seller', name?: string | null } | null }> | null };

export type EventTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type EventTypesQuery = { __typename?: 'Query', eventTypes?: Array<{ __typename?: 'EventType', name?: string | null, id: string, events?: Array<{ __typename?: 'Event', eventNo?: number | null }> | null, users?: { __typename?: 'User', id: string } | null }> | null };

export type CreateExcelUploadMutationVariables = Exact<{
  data: ExcelUploadCreateInput;
}>;


export type CreateExcelUploadMutation = { __typename?: 'Mutation', createExcelUpload?: { __typename?: 'ExcelUpload', id: string, name?: string | null, file?: { __typename?: 'FileFieldOutput', url: string, filename: string } | null, event?: { __typename?: 'Event', id: string } | null, vehicles?: Array<{ __typename?: 'Vehicle', id: string, registrationNumber?: string | null }> | null } | null };

export type ExcelUploadsQueryVariables = Exact<{ [key: string]: never; }>;


export type ExcelUploadsQuery = { __typename?: 'Query', excelUploads?: Array<{ __typename?: 'ExcelUpload', name?: string | null, file?: { __typename?: 'FileFieldOutput', filename: string } | null, event?: { __typename?: 'Event', id: string, eventNo?: number | null } | null }> | null };

export type LocationsQueryVariables = Exact<{ [key: string]: never; }>;


export type LocationsQuery = { __typename?: 'Query', locations?: Array<{ __typename?: 'Location', name?: string | null, id: string, country?: string | null, state?: { __typename?: 'State', name?: string | null } | null }> | null };

export type AddLocationMutationVariables = Exact<{
  data: LocationCreateInput;
}>;


export type AddLocationMutation = { __typename?: 'Mutation', createLocation?: { __typename?: 'Location', city?: string | null, name?: string | null, country?: string | null, state?: { __typename?: 'State', name?: string | null, id: string } | null } | null };

export type DeleteLocationMutationVariables = Exact<{
  where: LocationWhereUniqueInput;
}>;


export type DeleteLocationMutation = { __typename?: 'Mutation', deleteLocation?: { __typename?: 'Location', id: string, name?: string | null } | null };

export type CreatePaymentMutationVariables = Exact<{
  data: PaymentCreateInput;
}>;


export type CreatePaymentMutation = { __typename?: 'Mutation', createPayment?: { __typename?: 'Payment', amount?: number | null, paymentFor?: string | null, description?: string | null, status?: string | null, id: string, image?: { __typename?: 'ImageFieldOutput', url: string } | null, user?: { __typename?: 'User', id: string } | null } | null };

export type PaymentDetailsQueryVariables = Exact<{
  where: PaymentWhereUniqueInput;
}>;


export type PaymentDetailsQuery = { __typename?: 'Query', payment?: { __typename?: 'Payment', id: string, amount?: number | null, status?: string | null, paymentFor?: string | null, description?: string | null, refNo?: number | null, image?: { __typename?: 'ImageFieldOutput', url: string } | null, user?: { __typename?: 'User', id: string, firstName?: string | null, username?: string | null } | null, emdUpdate?: Array<{ __typename?: 'EmdUpdate', emdNo?: number | null, vehicleBuyingLimitIncrement?: number | null, createdAt?: any | null, createdBy?: { __typename?: 'User', id: string, firstName?: string | null } | null }> | null } | null };

export type PaymentOfUserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type PaymentOfUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, payments?: Array<{ __typename?: 'Payment', id: string, refNo?: number | null, amount?: number | null, status?: string | null, paymentFor?: string | null, createdAt?: any | null, updatedAt?: any | null, image?: { __typename?: 'ImageFieldOutput', url: string } | null }> | null } | null };

export type UpdatePaymentMutationVariables = Exact<{
  where: PaymentWhereUniqueInput;
  data: PaymentUpdateInput;
}>;


export type UpdatePaymentMutation = { __typename?: 'Mutation', updatePayment?: { __typename?: 'Payment', id: string, amount?: number | null, paymentFor?: string | null, description?: string | null, status?: string | null, image?: { __typename?: 'ImageFieldOutput', url: string } | null } | null };

export type PaymentTableQueryVariables = Exact<{ [key: string]: never; }>;


export type PaymentTableQuery = { __typename?: 'Query', payments?: Array<{ __typename?: 'Payment', id: string, refNo?: number | null, status?: string | null, amount?: number | null, paymentFor?: string | null, user?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, username?: string | null, mobile?: string | null } | null }> | null };

export type SelectorsQueryVariables = Exact<{ [key: string]: never; }>;


export type SelectorsQuery = { __typename?: 'Query', states?: Array<{ __typename?: 'State', name?: string | null }> | null, locations?: Array<{ __typename?: 'Location', city?: string | null, id: string }> | null, eventTypes?: Array<{ __typename?: 'EventType', name?: string | null, id: string }> | null };

export type BannedUsersQueryVariables = Exact<{
  where: SellerWhereInput;
}>;


export type BannedUsersQuery = { __typename?: 'Query', sellers?: Array<{ __typename?: 'Seller', id: string, name?: string | null, bannedUsers?: Array<{ __typename?: 'User', id: string, username?: string | null, firstName?: string | null, lastName?: string | null, mobile?: string | null }> | null }> | null };

export type SellersItemQueryVariables = Exact<{ [key: string]: never; }>;


export type SellersItemQuery = { __typename?: 'Query', sellers?: Array<{ __typename?: 'Seller', name?: string | null, id: string, bannedUsersCount?: number | null, eventsCount?: number | null }> | null };

export type CreateSellerMutationVariables = Exact<{
  data: SellerCreateInput;
}>;


export type CreateSellerMutation = { __typename?: 'Mutation', createSeller?: { __typename?: 'Seller', GSTNumbber?: string | null, billingContactPerson?: string | null, name?: string | null, contactPerson?: string | null, nationalHead?: string | null, mobile?: string | null, bannedUsers?: Array<{ __typename?: 'User', id: string }> | null, vehicleCategory?: Array<{ __typename?: 'EventType', events?: Array<{ __typename?: 'Event', eventType?: Array<{ __typename?: 'EventType', id: string }> | null }> | null }> | null } | null };

export type SellerEditQueryVariables = Exact<{
  where: SellerWhereUniqueInput;
}>;


export type SellerEditQuery = { __typename?: 'Query', seller?: { __typename?: 'Seller', GSTNumbber?: string | null, billingContactPerson?: string | null, contactPerson?: string | null, mobile?: string | null, name?: string | null, nationalHead?: string | null } | null };

export type SellerUpdateMutationVariables = Exact<{
  where: SellerWhereUniqueInput;
  data: SellerUpdateInput;
}>;


export type SellerUpdateMutation = { __typename?: 'Mutation', updateSeller?: { __typename?: 'Seller', id: string, billingContactPerson?: string | null, contactPerson?: string | null, GSTNumbber?: string | null, mobile?: string | null, name?: string | null, nationalHead?: string | null } | null };

export type DeleteSellerMutationVariables = Exact<{
  where: SellerWhereUniqueInput;
}>;


export type DeleteSellerMutation = { __typename?: 'Mutation', deleteSeller?: { __typename?: 'Seller', id: string, name?: string | null } | null };

export type StatesQueryVariables = Exact<{ [key: string]: never; }>;


export type StatesQuery = { __typename?: 'Query', states?: Array<{ __typename?: 'State', name?: string | null, id: string, users?: Array<{ __typename?: 'User', id: string, firstName?: string | null }> | null, locations?: Array<{ __typename?: 'Location', name?: string | null }> | null }> | null };

export type CreateStateMutationVariables = Exact<{
  data: StateCreateInput;
}>;


export type CreateStateMutation = { __typename?: 'Mutation', createState?: { __typename?: 'State', name?: string | null } | null };

export type DeleteStateMutationVariables = Exact<{
  where: StateWhereUniqueInput;
}>;


export type DeleteStateMutation = { __typename?: 'Mutation', deleteState?: { __typename?: 'State', id: string, name?: string | null } | null };

export type UserauthenticationQueryVariables = Exact<{ [key: string]: never; }>;


export type UserauthenticationQuery = { __typename?: 'Query', authenticatedItem?: { __typename?: 'User', username?: string | null, role?: UserRoleType | null } | null };

export type UserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, firstName?: string | null, vehicleBuyingLimit?: number | null, bannedSellersCount?: number | null, businessName?: string | null, categoryCount?: number | null, state?: string | null, city?: string | null, country?: string | null, createdAt?: any | null, dealerId?: string | null, email?: string | null, emdUpdatesByAdminCount?: number | null, emdUpdatesCount?: number | null, idNo?: number | null, idProofNo?: string | null, idProofType?: UserIdProofTypeType | null, lastName?: string | null, magicAuthIssuedAt?: any | null, magicAuthRedeemedAt?: any | null, mobile?: string | null, pancardNo?: string | null, paymentsCount?: number | null, phone?: string | null, role?: UserRoleType | null, specialVehicleBuyingLimit?: number | null, username?: string | null, status?: UserStatusType | null, updatedAt?: any | null, states?: Array<{ __typename?: 'State', id: string, name?: string | null, locations?: Array<{ __typename?: 'Location', city?: string | null, id: string, name?: string | null }> | null }> | null, idProof?: { __typename?: 'ImageFieldOutput', url: string } | null, idProofBack?: { __typename?: 'ImageFieldOutput', url: string } | null, image?: { __typename: 'ImageFieldOutput', url: string } | null, pancard?: { __typename?: 'ImageFieldOutput', url: string } | null, payments?: Array<{ __typename?: 'Payment', amount?: number | null }> | null, dealership?: { __typename?: 'ImageFieldOutput', url: string } | null, currentVehicleBuyingLimit?: { __typename?: 'vehicleBuyingLimits', vehicleBuyingLimit?: number | null } | null, bannedSellers?: Array<{ __typename?: 'Seller', name?: string | null, id: string }> | null } | null };

export type EditUserMutationVariables = Exact<{
  where: UserWhereUniqueInput;
  data: UserUpdateInput;
}>;


export type EditUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', firstName?: string | null, lastName?: string | null, email?: string | null, username?: string | null, mobile?: string | null, businessName?: string | null, role?: UserRoleType | null, idProofType?: UserIdProofTypeType | null, idProofNo?: string | null, pancardNo?: string | null, country?: string | null, state?: string | null, city?: string | null, status?: UserStatusType | null, vehicleBuyingLimit?: number | null, category?: Array<{ __typename?: 'EventType', name?: string | null }> | null, bannedSellers?: Array<{ __typename?: 'Seller', name?: string | null, id: string }> | null, password?: { __typename?: 'PasswordState', isSet: boolean } | null, image?: { __typename?: 'ImageFieldOutput', url: string } | null, pancard?: { __typename?: 'ImageFieldOutput', url: string } | null, idProof?: { __typename?: 'ImageFieldOutput', url: string } | null, idProofBack?: { __typename?: 'ImageFieldOutput', url: string } | null, dealership?: { __typename?: 'ImageFieldOutput', url: string } | null, states?: Array<{ __typename?: 'State', id: string, name?: string | null }> | null } | null };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', firstName?: string | null, lastName?: string | null, email?: string | null, mobile?: string | null, status?: UserStatusType | null, state?: string | null, role?: UserRoleType | null, idNo?: number | null, id: string, pancardNo?: string | null, activeBidsCount?: number | null, currentVehicleBuyingLimit?: { __typename?: 'vehicleBuyingLimits', vehicleBuyingLimit?: number | null } | null }> | null };

export type CreateVehicleMutationVariables = Exact<{
  data: VehicleCreateInput;
}>;


export type CreateVehicleMutation = { __typename?: 'Mutation', createVehicle?: { __typename?: 'Vehicle', registrationNumber?: string | null, bidStartTime?: any | null, bidStatus?: VehicleBidStatusType | null, loanAgreementNo?: string | null, registeredOwnerName?: string | null, quoteIncreament?: number | null, make?: string | null, model?: string | null, varient?: string | null, categoty?: string | null, fuel?: string | null, type?: string | null, rcStatus?: string | null, yearOfManufacture?: number | null, ownership?: number | null, mileage?: number | null, kmReading?: number | null, insuranceStatus?: string | null, yardLocation?: string | null, startPrice?: number | null, reservePrice?: number | null, repoDt?: any | null, veicleLocation?: string | null, vehicleRemarks?: string | null, auctionManager?: string | null, parkingCharges?: string | null, insurance?: string | null, insuranceValidTill?: any | null, tax?: string | null, taxValidityDate?: any | null, fitness?: string | null, permit?: string | null, fitnessPermit?: string | null, engineNo?: string | null, chassisNo?: string | null, frontImage?: string | null, leftImage?: string | null, rightImage?: string | null, image5?: string | null, image6?: string | null, inspectionLink?: string | null, autobseContact?: string | null, autobse_contact_person?: string | null, vehicleCondition?: string | null, powerSteering?: string | null, shape?: string | null, color?: string | null, city?: string | null, area?: string | null, state?: string | null, paymentTerms?: string | null, dateOfRegistration?: any | null, hypothication?: string | null, climateControl?: string | null, doorCount?: number | null, gearBox?: string | null, buyerFees?: string | null, rtoFine?: string | null, parkingRate?: string | null, approxParkingCharges?: string | null, clientContactPerson?: string | null, clientContactNo?: string | null, additionalRemarks?: string | null, event?: { __typename?: 'Event', id: string } | null, watchedBy?: Array<{ __typename?: 'User', firstName?: string | null, id: string }> | null } | null };

export type DeleteVehicleMutationVariables = Exact<{
  where: VehicleWhereUniqueInput;
}>;


export type DeleteVehicleMutation = { __typename?: 'Mutation', deleteVehicle?: { __typename?: 'Vehicle', id: string } | null };

export type VehicleDetailsQueryVariables = Exact<{
  where: VehicleWhereUniqueInput;
}>;


export type VehicleDetailsQuery = { __typename?: 'Query', vehicle?: { __typename?: 'Vehicle', id: string, registrationNumber?: string | null, bidStatus?: VehicleBidStatusType | null, loanAgreementNo?: string | null, registeredOwnerName?: string | null, quoteIncreament?: number | null, make?: string | null, model?: string | null, varient?: string | null, categoty?: string | null, fuel?: string | null, type?: string | null, rcStatus?: string | null, yearOfManufacture?: number | null, ownership?: number | null, mileage?: number | null, kmReading?: number | null, insuranceStatus?: string | null, yardLocation?: string | null, startPrice?: number | null, reservePrice?: number | null, repoDt?: any | null, veicleLocation?: string | null, vehicleRemarks?: string | null, auctionManager?: string | null, parkingCharges?: string | null, insurance?: string | null, insuranceValidTill?: any | null, tax?: string | null, taxValidityDate?: any | null, fitness?: string | null, permit?: string | null, fitnessPermit?: string | null, engineNo?: string | null, chassisNo?: string | null, frontImage?: string | null, backImage?: string | null, leftImage?: string | null, rightImage?: string | null, image5?: string | null, image6?: string | null, inspectionLink?: string | null, autobseContact?: string | null, autobse_contact_person?: string | null, vehicleCondition?: string | null, powerSteering?: string | null, shape?: string | null, color?: string | null, city?: string | null, area?: string | null, state?: string | null, paymentTerms?: string | null, dateOfRegistration?: any | null, hypothication?: string | null, climateControl?: string | null, doorCount?: number | null, gearBox?: string | null, buyerFees?: string | null, rtoFine?: string | null, parkingRate?: string | null, approxParkingCharges?: string | null, clientContactPerson?: string | null, clientContactNo?: string | null, additionalRemarks?: string | null } | null };

export type VehicleDetailsPerEventQueryVariables = Exact<{
  where: EventWhereUniqueInput;
}>;


export type VehicleDetailsPerEventQuery = { __typename?: 'Query', event?: { __typename?: 'Event', id: string, status?: EventStatusType | null, vehiclesCount?: number | null, vehicles?: Array<{ __typename?: 'Vehicle', id: string, vehicleIndexNo?: number | null, registrationNumber?: string | null, totalBids?: number | null, frontImage?: string | null, vehicleEventStatus?: VehicleEventStatus | null, bidStatus?: VehicleBidStatusType | null, state?: string | null, city?: string | null }> | null } | null };

export type VehicleTableQueryVariables = Exact<{ [key: string]: never; }>;


export type VehicleTableQuery = { __typename?: 'Query', vehicles?: Array<{ __typename?: 'Vehicle', id: string, registrationNumber?: string | null, vehicleIndexNo?: number | null, bidTimeExpire?: any | null, bidStatus?: VehicleBidStatusType | null, userVehicleBidsCount?: number | null, vehicleEventStatus?: VehicleEventStatus | null, event?: { __typename?: 'Event', eventCategory?: string | null } | null }> | null };

export type UpdateVehicleMutationVariables = Exact<{
  where: VehicleWhereUniqueInput;
  data: VehicleUpdateInput;
}>;


export type UpdateVehicleMutation = { __typename?: 'Mutation', updateVehicle?: { __typename?: 'Vehicle', id: string, registrationNumber?: string | null, bidStatus?: VehicleBidStatusType | null, loanAgreementNo?: string | null, registeredOwnerName?: string | null, quoteIncreament?: number | null, make?: string | null, model?: string | null, varient?: string | null, categoty?: string | null, fuel?: string | null, type?: string | null, rcStatus?: string | null, yearOfManufacture?: number | null, ownership?: number | null, mileage?: number | null, kmReading?: number | null, insuranceStatus?: string | null, yardLocation?: string | null, startPrice?: number | null, reservePrice?: number | null, repoDt?: any | null, veicleLocation?: string | null, vehicleRemarks?: string | null, auctionManager?: string | null, parkingCharges?: string | null, insurance?: string | null, insuranceValidTill?: any | null, tax?: string | null, taxValidityDate?: any | null, fitness?: string | null, permit?: string | null, fitnessPermit?: string | null, engineNo?: string | null, chassisNo?: string | null, frontImage?: string | null, backImage?: string | null, leftImage?: string | null, rightImage?: string | null, image5?: string | null, image6?: string | null, inspectionLink?: string | null, autobseContact?: string | null, autobse_contact_person?: string | null, vehicleCondition?: string | null, powerSteering?: string | null, shape?: string | null, color?: string | null, city?: string | null, area?: string | null, state?: string | null, paymentTerms?: string | null, dateOfRegistration?: any | null, hypothication?: string | null, climateControl?: string | null, doorCount?: number | null, gearBox?: string | null, buyerFees?: string | null, rtoFine?: string | null, parkingRate?: string | null, approxParkingCharges?: string | null, clientContactPerson?: string | null, clientContactNo?: string | null, additionalRemarks?: string | null } | null };


export const ActiveBidsPerUserDocument = gql`
    query ActiveBidsPerUser($where: UserWhereUniqueInput!) {
  user(where: $where) {
    id
    firstName
    lastName
    activeBidsCount
    states {
      id
      name
    }
    activeBids {
      bidAmountUpdate
      startBidAmount
      currentBidAmount
      id
      registrationNumber
      bidStatus
      bidTimeExpire
      totalBids
      userVehicleBidsCount
    }
  }
}
    `;

/**
 * __useActiveBidsPerUserQuery__
 *
 * To run a query within a React component, call `useActiveBidsPerUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useActiveBidsPerUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActiveBidsPerUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useActiveBidsPerUserQuery(baseOptions: Apollo.QueryHookOptions<ActiveBidsPerUserQuery, ActiveBidsPerUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ActiveBidsPerUserQuery, ActiveBidsPerUserQueryVariables>(ActiveBidsPerUserDocument, options);
      }
export function useActiveBidsPerUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActiveBidsPerUserQuery, ActiveBidsPerUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ActiveBidsPerUserQuery, ActiveBidsPerUserQueryVariables>(ActiveBidsPerUserDocument, options);
        }
export type ActiveBidsPerUserQueryHookResult = ReturnType<typeof useActiveBidsPerUserQuery>;
export type ActiveBidsPerUserLazyQueryHookResult = ReturnType<typeof useActiveBidsPerUserLazyQuery>;
export type ActiveBidsPerUserQueryResult = Apollo.QueryResult<ActiveBidsPerUserQuery, ActiveBidsPerUserQueryVariables>;
export const CreateEventDocument = gql`
    mutation CreateEvent($data: EventCreateInput!) {
  createEvent(data: $data) {
    id
    eventCategory
    startDate
    endDate
    seller {
      name
      id
    }
    eventType {
      name
      id
    }
    location {
      city
      id
    }
    noOfBids
    status
    downloadableFile {
      url
    }
    termsAndConditions
    bidLock
    isSpecialEvent
    extraTime
    extraTimeTrigerIn
    vehicleLiveTimeIn
    gapInBetweenVehicles
  }
}
    `;
export type CreateEventMutationFn = Apollo.MutationFunction<CreateEventMutation, CreateEventMutationVariables>;

/**
 * __useCreateEventMutation__
 *
 * To run a mutation, you first call `useCreateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEventMutation, { data, loading, error }] = useCreateEventMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateEventMutation(baseOptions?: Apollo.MutationHookOptions<CreateEventMutation, CreateEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEventMutation, CreateEventMutationVariables>(CreateEventDocument, options);
      }
export type CreateEventMutationHookResult = ReturnType<typeof useCreateEventMutation>;
export type CreateEventMutationResult = Apollo.MutationResult<CreateEventMutation>;
export type CreateEventMutationOptions = Apollo.BaseMutationOptions<CreateEventMutation, CreateEventMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($data: UserCreateInput!) {
  createUser(data: $data) {
    mobile
    username
    firstName
    lastName
    email
    username
    city
    password {
      isSet
    }
    businessName
    role
    status
    idProofType
    idProofNo
    state
    image {
      url
    }
    country
    pancard {
      url
    }
    idProof {
      id
    }
    idProofBack {
      url
    }
    dealership {
      url
    }
    category {
      name
    }
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const LoginDocument = gql`
    mutation Login($mobile: String!, $password: String!) {
  authenticateUserWithPassword(mobile: $mobile, password: $password) {
    ... on UserAuthenticationWithPasswordSuccess {
      sessionToken
      item {
        id
        firstName
        lastName
        role
      }
    }
    ... on UserAuthenticationWithPasswordFailure {
      message
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      mobile: // value for 'mobile'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const BidsTableDocument = gql`
    query BidsTable {
  bids {
    id
    amount
    name
    createdAt
    updatedAt
    bidVehicle {
      id
      registrationNumber
    }
    user {
      firstName
      lastName
      id
    }
  }
}
    `;

/**
 * __useBidsTableQuery__
 *
 * To run a query within a React component, call `useBidsTableQuery` and pass it any options that fit your needs.
 * When your component renders, `useBidsTableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBidsTableQuery({
 *   variables: {
 *   },
 * });
 */
export function useBidsTableQuery(baseOptions?: Apollo.QueryHookOptions<BidsTableQuery, BidsTableQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BidsTableQuery, BidsTableQueryVariables>(BidsTableDocument, options);
      }
export function useBidsTableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BidsTableQuery, BidsTableQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BidsTableQuery, BidsTableQueryVariables>(BidsTableDocument, options);
        }
export type BidsTableQueryHookResult = ReturnType<typeof useBidsTableQuery>;
export type BidsTableLazyQueryHookResult = ReturnType<typeof useBidsTableLazyQuery>;
export type BidsTableQueryResult = Apollo.QueryResult<BidsTableQuery, BidsTableQueryVariables>;
export const BidDetailsPerVehicleDocument = gql`
    query BidDetailsPerVehicle($where: VehicleWhereUniqueInput!) {
  vehicle(where: $where) {
    registrationNumber
    userVehicleBids {
      amount
      id
      createdAt
      user {
        id
        firstName
        lastName
        mobile
      }
    }
    currentBidAmount
    currentBidUser {
      id
      username
      firstName
      lastName
    }
    userVehicleBidsCount
    vehicleEventStatus
    watchedByCount
    watchedBy {
      id
      username
      firstName
    }
  }
}
    `;

/**
 * __useBidDetailsPerVehicleQuery__
 *
 * To run a query within a React component, call `useBidDetailsPerVehicleQuery` and pass it any options that fit your needs.
 * When your component renders, `useBidDetailsPerVehicleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBidDetailsPerVehicleQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useBidDetailsPerVehicleQuery(baseOptions: Apollo.QueryHookOptions<BidDetailsPerVehicleQuery, BidDetailsPerVehicleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BidDetailsPerVehicleQuery, BidDetailsPerVehicleQueryVariables>(BidDetailsPerVehicleDocument, options);
      }
export function useBidDetailsPerVehicleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BidDetailsPerVehicleQuery, BidDetailsPerVehicleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BidDetailsPerVehicleQuery, BidDetailsPerVehicleQueryVariables>(BidDetailsPerVehicleDocument, options);
        }
export type BidDetailsPerVehicleQueryHookResult = ReturnType<typeof useBidDetailsPerVehicleQuery>;
export type BidDetailsPerVehicleLazyQueryHookResult = ReturnType<typeof useBidDetailsPerVehicleLazyQuery>;
export type BidDetailsPerVehicleQueryResult = Apollo.QueryResult<BidDetailsPerVehicleQuery, BidDetailsPerVehicleQueryVariables>;
export const DeleteBidDocument = gql`
    mutation DeleteBid($where: BidWhereUniqueInput!) {
  deleteBid(where: $where) {
    id
  }
}
    `;
export type DeleteBidMutationFn = Apollo.MutationFunction<DeleteBidMutation, DeleteBidMutationVariables>;

/**
 * __useDeleteBidMutation__
 *
 * To run a mutation, you first call `useDeleteBidMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBidMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBidMutation, { data, loading, error }] = useDeleteBidMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteBidMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBidMutation, DeleteBidMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBidMutation, DeleteBidMutationVariables>(DeleteBidDocument, options);
      }
export type DeleteBidMutationHookResult = ReturnType<typeof useDeleteBidMutation>;
export type DeleteBidMutationResult = Apollo.MutationResult<DeleteBidMutation>;
export type DeleteBidMutationOptions = Apollo.BaseMutationOptions<DeleteBidMutation, DeleteBidMutationVariables>;
export const BuyingLimitDocument = gql`
    query buyingLimit($where: UserWhereUniqueInput!) {
  user(where: $where) {
    id
    firstName
    lastName
    emdUpdates {
      id
      emdNo
      vehicleBuyingLimitIncrement
      payment {
        amount
        id
      }
      createdAt
      createdBy {
        id
        firstName
      }
    }
  }
}
    `;

/**
 * __useBuyingLimitQuery__
 *
 * To run a query within a React component, call `useBuyingLimitQuery` and pass it any options that fit your needs.
 * When your component renders, `useBuyingLimitQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBuyingLimitQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useBuyingLimitQuery(baseOptions: Apollo.QueryHookOptions<BuyingLimitQuery, BuyingLimitQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BuyingLimitQuery, BuyingLimitQueryVariables>(BuyingLimitDocument, options);
      }
export function useBuyingLimitLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BuyingLimitQuery, BuyingLimitQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BuyingLimitQuery, BuyingLimitQueryVariables>(BuyingLimitDocument, options);
        }
export type BuyingLimitQueryHookResult = ReturnType<typeof useBuyingLimitQuery>;
export type BuyingLimitLazyQueryHookResult = ReturnType<typeof useBuyingLimitLazyQuery>;
export type BuyingLimitQueryResult = Apollo.QueryResult<BuyingLimitQuery, BuyingLimitQueryVariables>;
export const CountDocument = gql`
    query Count {
  usersCount
  paymentsCount
  emdUpdatesCount
  eventsCount
  vehiclesCount
  bidsCount
  eventTypesCount
  locationsCount
  statesCount
  excelUploadsCount
  sellersCount
}
    `;

/**
 * __useCountQuery__
 *
 * To run a query within a React component, call `useCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountQuery(baseOptions?: Apollo.QueryHookOptions<CountQuery, CountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountQuery, CountQueryVariables>(CountDocument, options);
      }
export function useCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountQuery, CountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountQuery, CountQueryVariables>(CountDocument, options);
        }
export type CountQueryHookResult = ReturnType<typeof useCountQuery>;
export type CountLazyQueryHookResult = ReturnType<typeof useCountLazyQuery>;
export type CountQueryResult = Apollo.QueryResult<CountQuery, CountQueryVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($where: UserWhereUniqueInput!) {
  deleteUser(where: $where) {
    id
  }
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const EditEventDocument = gql`
    mutation editEvent($where: EventWhereUniqueInput!, $data: EventUpdateInput!) {
  updateEvent(where: $where, data: $data) {
    id
    eventCategory
    startDate
    endDate
    seller {
      name
      id
    }
    eventType {
      id
      name
    }
    location {
      id
      name
    }
    noOfBids
    status
    downloadableFile {
      url
    }
    termsAndConditions
    bidLock
    isSpecialEvent
    extraTimeTrigerIn
    extraTime
    vehicleLiveTimeIn
    gapInBetweenVehicles
  }
}
    `;
export type EditEventMutationFn = Apollo.MutationFunction<EditEventMutation, EditEventMutationVariables>;

/**
 * __useEditEventMutation__
 *
 * To run a mutation, you first call `useEditEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editEventMutation, { data, loading, error }] = useEditEventMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditEventMutation(baseOptions?: Apollo.MutationHookOptions<EditEventMutation, EditEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditEventMutation, EditEventMutationVariables>(EditEventDocument, options);
      }
export type EditEventMutationHookResult = ReturnType<typeof useEditEventMutation>;
export type EditEventMutationResult = Apollo.MutationResult<EditEventMutation>;
export type EditEventMutationOptions = Apollo.BaseMutationOptions<EditEventMutation, EditEventMutationVariables>;
export const CreateEmdUpdateDocument = gql`
    mutation CreateEmdUpdate($data: EmdUpdateCreateInput!) {
  createEmdUpdate(data: $data) {
    payment {
      id
    }
    vehicleBuyingLimitIncrement
  }
}
    `;
export type CreateEmdUpdateMutationFn = Apollo.MutationFunction<CreateEmdUpdateMutation, CreateEmdUpdateMutationVariables>;

/**
 * __useCreateEmdUpdateMutation__
 *
 * To run a mutation, you first call `useCreateEmdUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEmdUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEmdUpdateMutation, { data, loading, error }] = useCreateEmdUpdateMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateEmdUpdateMutation(baseOptions?: Apollo.MutationHookOptions<CreateEmdUpdateMutation, CreateEmdUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEmdUpdateMutation, CreateEmdUpdateMutationVariables>(CreateEmdUpdateDocument, options);
      }
export type CreateEmdUpdateMutationHookResult = ReturnType<typeof useCreateEmdUpdateMutation>;
export type CreateEmdUpdateMutationResult = Apollo.MutationResult<CreateEmdUpdateMutation>;
export type CreateEmdUpdateMutationOptions = Apollo.BaseMutationOptions<CreateEmdUpdateMutation, CreateEmdUpdateMutationVariables>;
export const EmdTableDocument = gql`
    query emdTable {
  emdUpdates {
    id
    emdNo
    specialVehicleBuyingLimitIncrement
    vehicleBuyingLimitIncrement
    user {
      id
      firstName
      lastName
    }
    createdAt
    updatedAt
    createdBy {
      id
      firstName
      lastName
    }
  }
}
    `;

/**
 * __useEmdTableQuery__
 *
 * To run a query within a React component, call `useEmdTableQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmdTableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmdTableQuery({
 *   variables: {
 *   },
 * });
 */
export function useEmdTableQuery(baseOptions?: Apollo.QueryHookOptions<EmdTableQuery, EmdTableQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EmdTableQuery, EmdTableQueryVariables>(EmdTableDocument, options);
      }
export function useEmdTableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EmdTableQuery, EmdTableQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EmdTableQuery, EmdTableQueryVariables>(EmdTableDocument, options);
        }
export type EmdTableQueryHookResult = ReturnType<typeof useEmdTableQuery>;
export type EmdTableLazyQueryHookResult = ReturnType<typeof useEmdTableLazyQuery>;
export type EmdTableQueryResult = Apollo.QueryResult<EmdTableQuery, EmdTableQueryVariables>;
export const DeleteEmdUpdateDocument = gql`
    mutation DeleteEmdUpdate($where: EmdUpdateWhereUniqueInput!) {
  deleteEmdUpdate(where: $where) {
    id
    emdNo
  }
}
    `;
export type DeleteEmdUpdateMutationFn = Apollo.MutationFunction<DeleteEmdUpdateMutation, DeleteEmdUpdateMutationVariables>;

/**
 * __useDeleteEmdUpdateMutation__
 *
 * To run a mutation, you first call `useDeleteEmdUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEmdUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEmdUpdateMutation, { data, loading, error }] = useDeleteEmdUpdateMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteEmdUpdateMutation(baseOptions?: Apollo.MutationHookOptions<DeleteEmdUpdateMutation, DeleteEmdUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteEmdUpdateMutation, DeleteEmdUpdateMutationVariables>(DeleteEmdUpdateDocument, options);
      }
export type DeleteEmdUpdateMutationHookResult = ReturnType<typeof useDeleteEmdUpdateMutation>;
export type DeleteEmdUpdateMutationResult = Apollo.MutationResult<DeleteEmdUpdateMutation>;
export type DeleteEmdUpdateMutationOptions = Apollo.BaseMutationOptions<DeleteEmdUpdateMutation, DeleteEmdUpdateMutationVariables>;
export const EmdUpdateDocument = gql`
    query EmdUpdate($where: EmdUpdateWhereUniqueInput!) {
  emdUpdate(where: $where) {
    id
    emdNo
    vehicleBuyingLimitIncrement
    payment {
      amount
      image {
        url
      }
    }
    user {
      id
      firstName
      username
    }
  }
}
    `;

/**
 * __useEmdUpdateQuery__
 *
 * To run a query within a React component, call `useEmdUpdateQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmdUpdateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmdUpdateQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useEmdUpdateQuery(baseOptions: Apollo.QueryHookOptions<EmdUpdateQuery, EmdUpdateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EmdUpdateQuery, EmdUpdateQueryVariables>(EmdUpdateDocument, options);
      }
export function useEmdUpdateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EmdUpdateQuery, EmdUpdateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EmdUpdateQuery, EmdUpdateQueryVariables>(EmdUpdateDocument, options);
        }
export type EmdUpdateQueryHookResult = ReturnType<typeof useEmdUpdateQuery>;
export type EmdUpdateLazyQueryHookResult = ReturnType<typeof useEmdUpdateLazyQuery>;
export type EmdUpdateQueryResult = Apollo.QueryResult<EmdUpdateQuery, EmdUpdateQueryVariables>;
export const EventDocument = gql`
    query Event($where: EventWhereUniqueInput!) {
  event(where: $where) {
    id
    eventCategory
    startDate
    endDate
    seller {
      name
      id
    }
    eventType {
      name
      id
    }
    location {
      name
      id
    }
    noOfBids
    status
    downloadableFile {
      url
    }
    termsAndConditions
    bidLock
    isSpecialEvent
    extraTime
    extraTimeTrigerIn
    vehicleLiveTimeIn
    gapInBetweenVehicles
  }
}
    `;

/**
 * __useEventQuery__
 *
 * To run a query within a React component, call `useEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useEventQuery(baseOptions: Apollo.QueryHookOptions<EventQuery, EventQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EventQuery, EventQueryVariables>(EventDocument, options);
      }
export function useEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventQuery, EventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EventQuery, EventQueryVariables>(EventDocument, options);
        }
export type EventQueryHookResult = ReturnType<typeof useEventQuery>;
export type EventLazyQueryHookResult = ReturnType<typeof useEventLazyQuery>;
export type EventQueryResult = Apollo.QueryResult<EventQuery, EventQueryVariables>;
export const EventStartTimeDocument = gql`
    query EventStartTime($where: EventWhereUniqueInput!) {
  event(where: $where) {
    id
    startDate
  }
}
    `;

/**
 * __useEventStartTimeQuery__
 *
 * To run a query within a React component, call `useEventStartTimeQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventStartTimeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventStartTimeQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useEventStartTimeQuery(baseOptions: Apollo.QueryHookOptions<EventStartTimeQuery, EventStartTimeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EventStartTimeQuery, EventStartTimeQueryVariables>(EventStartTimeDocument, options);
      }
export function useEventStartTimeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventStartTimeQuery, EventStartTimeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EventStartTimeQuery, EventStartTimeQueryVariables>(EventStartTimeDocument, options);
        }
export type EventStartTimeQueryHookResult = ReturnType<typeof useEventStartTimeQuery>;
export type EventStartTimeLazyQueryHookResult = ReturnType<typeof useEventStartTimeLazyQuery>;
export type EventStartTimeQueryResult = Apollo.QueryResult<EventStartTimeQuery, EventStartTimeQueryVariables>;
export const CreateEventTypeDocument = gql`
    mutation CreateEventType($data: EventTypeCreateInput!) {
  createEventType(data: $data) {
    name
  }
}
    `;
export type CreateEventTypeMutationFn = Apollo.MutationFunction<CreateEventTypeMutation, CreateEventTypeMutationVariables>;

/**
 * __useCreateEventTypeMutation__
 *
 * To run a mutation, you first call `useCreateEventTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEventTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEventTypeMutation, { data, loading, error }] = useCreateEventTypeMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateEventTypeMutation(baseOptions?: Apollo.MutationHookOptions<CreateEventTypeMutation, CreateEventTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEventTypeMutation, CreateEventTypeMutationVariables>(CreateEventTypeDocument, options);
      }
export type CreateEventTypeMutationHookResult = ReturnType<typeof useCreateEventTypeMutation>;
export type CreateEventTypeMutationResult = Apollo.MutationResult<CreateEventTypeMutation>;
export type CreateEventTypeMutationOptions = Apollo.BaseMutationOptions<CreateEventTypeMutation, CreateEventTypeMutationVariables>;
export const DeleteEventTypeDocument = gql`
    mutation DeleteEventType($where: EventTypeWhereUniqueInput!) {
  deleteEventType(where: $where) {
    id
  }
}
    `;
export type DeleteEventTypeMutationFn = Apollo.MutationFunction<DeleteEventTypeMutation, DeleteEventTypeMutationVariables>;

/**
 * __useDeleteEventTypeMutation__
 *
 * To run a mutation, you first call `useDeleteEventTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEventTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEventTypeMutation, { data, loading, error }] = useDeleteEventTypeMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteEventTypeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteEventTypeMutation, DeleteEventTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteEventTypeMutation, DeleteEventTypeMutationVariables>(DeleteEventTypeDocument, options);
      }
export type DeleteEventTypeMutationHookResult = ReturnType<typeof useDeleteEventTypeMutation>;
export type DeleteEventTypeMutationResult = Apollo.MutationResult<DeleteEventTypeMutation>;
export type DeleteEventTypeMutationOptions = Apollo.BaseMutationOptions<DeleteEventTypeMutation, DeleteEventTypeMutationVariables>;
export const EventsPerSellerDocument = gql`
    query eventsPerSeller($where: SellerWhereUniqueInput!) {
  seller(where: $where) {
    id
    name
    events {
      id
      eventNo
      eventCategory
      startDate
      status
      endDate
      vehiclesCount
      location {
        name
      }
      seller {
        name
      }
    }
  }
}
    `;

/**
 * __useEventsPerSellerQuery__
 *
 * To run a query within a React component, call `useEventsPerSellerQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventsPerSellerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventsPerSellerQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useEventsPerSellerQuery(baseOptions: Apollo.QueryHookOptions<EventsPerSellerQuery, EventsPerSellerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EventsPerSellerQuery, EventsPerSellerQueryVariables>(EventsPerSellerDocument, options);
      }
export function useEventsPerSellerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventsPerSellerQuery, EventsPerSellerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EventsPerSellerQuery, EventsPerSellerQueryVariables>(EventsPerSellerDocument, options);
        }
export type EventsPerSellerQueryHookResult = ReturnType<typeof useEventsPerSellerQuery>;
export type EventsPerSellerLazyQueryHookResult = ReturnType<typeof useEventsPerSellerLazyQuery>;
export type EventsPerSellerQueryResult = Apollo.QueryResult<EventsPerSellerQuery, EventsPerSellerQueryVariables>;
export const EventTableDocument = gql`
    query eventTable {
  events {
    id
    eventNo
    eventCategory
    startDate
    status
    endDate
    vehiclesCount
    location {
      name
    }
    seller {
      name
    }
    Report
  }
}
    `;

/**
 * __useEventTableQuery__
 *
 * To run a query within a React component, call `useEventTableQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventTableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventTableQuery({
 *   variables: {
 *   },
 * });
 */
export function useEventTableQuery(baseOptions?: Apollo.QueryHookOptions<EventTableQuery, EventTableQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EventTableQuery, EventTableQueryVariables>(EventTableDocument, options);
      }
export function useEventTableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventTableQuery, EventTableQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EventTableQuery, EventTableQueryVariables>(EventTableDocument, options);
        }
export type EventTableQueryHookResult = ReturnType<typeof useEventTableQuery>;
export type EventTableLazyQueryHookResult = ReturnType<typeof useEventTableLazyQuery>;
export type EventTableQueryResult = Apollo.QueryResult<EventTableQuery, EventTableQueryVariables>;
export const EventTypesDocument = gql`
    query eventTypes {
  eventTypes {
    name
    id
    events {
      eventNo
    }
    users {
      id
    }
  }
}
    `;

/**
 * __useEventTypesQuery__
 *
 * To run a query within a React component, call `useEventTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useEventTypesQuery(baseOptions?: Apollo.QueryHookOptions<EventTypesQuery, EventTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EventTypesQuery, EventTypesQueryVariables>(EventTypesDocument, options);
      }
export function useEventTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventTypesQuery, EventTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EventTypesQuery, EventTypesQueryVariables>(EventTypesDocument, options);
        }
export type EventTypesQueryHookResult = ReturnType<typeof useEventTypesQuery>;
export type EventTypesLazyQueryHookResult = ReturnType<typeof useEventTypesLazyQuery>;
export type EventTypesQueryResult = Apollo.QueryResult<EventTypesQuery, EventTypesQueryVariables>;
export const CreateExcelUploadDocument = gql`
    mutation CreateExcelUpload($data: ExcelUploadCreateInput!) {
  createExcelUpload(data: $data) {
    id
    name
    file {
      url
      filename
    }
    event {
      id
    }
    vehicles {
      id
      registrationNumber
    }
  }
}
    `;
export type CreateExcelUploadMutationFn = Apollo.MutationFunction<CreateExcelUploadMutation, CreateExcelUploadMutationVariables>;

/**
 * __useCreateExcelUploadMutation__
 *
 * To run a mutation, you first call `useCreateExcelUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateExcelUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createExcelUploadMutation, { data, loading, error }] = useCreateExcelUploadMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateExcelUploadMutation(baseOptions?: Apollo.MutationHookOptions<CreateExcelUploadMutation, CreateExcelUploadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateExcelUploadMutation, CreateExcelUploadMutationVariables>(CreateExcelUploadDocument, options);
      }
export type CreateExcelUploadMutationHookResult = ReturnType<typeof useCreateExcelUploadMutation>;
export type CreateExcelUploadMutationResult = Apollo.MutationResult<CreateExcelUploadMutation>;
export type CreateExcelUploadMutationOptions = Apollo.BaseMutationOptions<CreateExcelUploadMutation, CreateExcelUploadMutationVariables>;
export const ExcelUploadsDocument = gql`
    query ExcelUploads {
  excelUploads {
    name
    file {
      filename
    }
    event {
      id
      eventNo
    }
  }
}
    `;

/**
 * __useExcelUploadsQuery__
 *
 * To run a query within a React component, call `useExcelUploadsQuery` and pass it any options that fit your needs.
 * When your component renders, `useExcelUploadsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExcelUploadsQuery({
 *   variables: {
 *   },
 * });
 */
export function useExcelUploadsQuery(baseOptions?: Apollo.QueryHookOptions<ExcelUploadsQuery, ExcelUploadsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExcelUploadsQuery, ExcelUploadsQueryVariables>(ExcelUploadsDocument, options);
      }
export function useExcelUploadsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExcelUploadsQuery, ExcelUploadsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExcelUploadsQuery, ExcelUploadsQueryVariables>(ExcelUploadsDocument, options);
        }
export type ExcelUploadsQueryHookResult = ReturnType<typeof useExcelUploadsQuery>;
export type ExcelUploadsLazyQueryHookResult = ReturnType<typeof useExcelUploadsLazyQuery>;
export type ExcelUploadsQueryResult = Apollo.QueryResult<ExcelUploadsQuery, ExcelUploadsQueryVariables>;
export const LocationsDocument = gql`
    query locations {
  locations {
    name
    id
    country
    state {
      name
    }
  }
}
    `;

/**
 * __useLocationsQuery__
 *
 * To run a query within a React component, call `useLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLocationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useLocationsQuery(baseOptions?: Apollo.QueryHookOptions<LocationsQuery, LocationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LocationsQuery, LocationsQueryVariables>(LocationsDocument, options);
      }
export function useLocationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LocationsQuery, LocationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LocationsQuery, LocationsQueryVariables>(LocationsDocument, options);
        }
export type LocationsQueryHookResult = ReturnType<typeof useLocationsQuery>;
export type LocationsLazyQueryHookResult = ReturnType<typeof useLocationsLazyQuery>;
export type LocationsQueryResult = Apollo.QueryResult<LocationsQuery, LocationsQueryVariables>;
export const AddLocationDocument = gql`
    mutation addLocation($data: LocationCreateInput!) {
  createLocation(data: $data) {
    city
    name
    country
    state {
      name
      id
    }
  }
}
    `;
export type AddLocationMutationFn = Apollo.MutationFunction<AddLocationMutation, AddLocationMutationVariables>;

/**
 * __useAddLocationMutation__
 *
 * To run a mutation, you first call `useAddLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addLocationMutation, { data, loading, error }] = useAddLocationMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddLocationMutation(baseOptions?: Apollo.MutationHookOptions<AddLocationMutation, AddLocationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddLocationMutation, AddLocationMutationVariables>(AddLocationDocument, options);
      }
export type AddLocationMutationHookResult = ReturnType<typeof useAddLocationMutation>;
export type AddLocationMutationResult = Apollo.MutationResult<AddLocationMutation>;
export type AddLocationMutationOptions = Apollo.BaseMutationOptions<AddLocationMutation, AddLocationMutationVariables>;
export const DeleteLocationDocument = gql`
    mutation DeleteLocation($where: LocationWhereUniqueInput!) {
  deleteLocation(where: $where) {
    id
    name
  }
}
    `;
export type DeleteLocationMutationFn = Apollo.MutationFunction<DeleteLocationMutation, DeleteLocationMutationVariables>;

/**
 * __useDeleteLocationMutation__
 *
 * To run a mutation, you first call `useDeleteLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLocationMutation, { data, loading, error }] = useDeleteLocationMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteLocationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteLocationMutation, DeleteLocationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteLocationMutation, DeleteLocationMutationVariables>(DeleteLocationDocument, options);
      }
export type DeleteLocationMutationHookResult = ReturnType<typeof useDeleteLocationMutation>;
export type DeleteLocationMutationResult = Apollo.MutationResult<DeleteLocationMutation>;
export type DeleteLocationMutationOptions = Apollo.BaseMutationOptions<DeleteLocationMutation, DeleteLocationMutationVariables>;
export const CreatePaymentDocument = gql`
    mutation CreatePayment($data: PaymentCreateInput!) {
  createPayment(data: $data) {
    amount
    paymentFor
    description
    status
    image {
      url
    }
    id
    user {
      id
    }
  }
}
    `;
export type CreatePaymentMutationFn = Apollo.MutationFunction<CreatePaymentMutation, CreatePaymentMutationVariables>;

/**
 * __useCreatePaymentMutation__
 *
 * To run a mutation, you first call `useCreatePaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPaymentMutation, { data, loading, error }] = useCreatePaymentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatePaymentMutation(baseOptions?: Apollo.MutationHookOptions<CreatePaymentMutation, CreatePaymentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePaymentMutation, CreatePaymentMutationVariables>(CreatePaymentDocument, options);
      }
export type CreatePaymentMutationHookResult = ReturnType<typeof useCreatePaymentMutation>;
export type CreatePaymentMutationResult = Apollo.MutationResult<CreatePaymentMutation>;
export type CreatePaymentMutationOptions = Apollo.BaseMutationOptions<CreatePaymentMutation, CreatePaymentMutationVariables>;
export const PaymentDetailsDocument = gql`
    query PaymentDetails($where: PaymentWhereUniqueInput!) {
  payment(where: $where) {
    id
    amount
    status
    paymentFor
    description
    refNo
    image {
      url
    }
    user {
      id
      firstName
      username
    }
    emdUpdate {
      emdNo
      vehicleBuyingLimitIncrement
      createdAt
      createdBy {
        id
        firstName
      }
    }
  }
}
    `;

/**
 * __usePaymentDetailsQuery__
 *
 * To run a query within a React component, call `usePaymentDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaymentDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaymentDetailsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function usePaymentDetailsQuery(baseOptions: Apollo.QueryHookOptions<PaymentDetailsQuery, PaymentDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PaymentDetailsQuery, PaymentDetailsQueryVariables>(PaymentDetailsDocument, options);
      }
export function usePaymentDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PaymentDetailsQuery, PaymentDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PaymentDetailsQuery, PaymentDetailsQueryVariables>(PaymentDetailsDocument, options);
        }
export type PaymentDetailsQueryHookResult = ReturnType<typeof usePaymentDetailsQuery>;
export type PaymentDetailsLazyQueryHookResult = ReturnType<typeof usePaymentDetailsLazyQuery>;
export type PaymentDetailsQueryResult = Apollo.QueryResult<PaymentDetailsQuery, PaymentDetailsQueryVariables>;
export const PaymentOfUserDocument = gql`
    query paymentOfUser($where: UserWhereUniqueInput!) {
  user(where: $where) {
    id
    firstName
    lastName
    payments {
      id
      refNo
      amount
      status
      paymentFor
      createdAt
      updatedAt
      image {
        url
      }
    }
  }
}
    `;

/**
 * __usePaymentOfUserQuery__
 *
 * To run a query within a React component, call `usePaymentOfUserQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaymentOfUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaymentOfUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function usePaymentOfUserQuery(baseOptions: Apollo.QueryHookOptions<PaymentOfUserQuery, PaymentOfUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PaymentOfUserQuery, PaymentOfUserQueryVariables>(PaymentOfUserDocument, options);
      }
export function usePaymentOfUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PaymentOfUserQuery, PaymentOfUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PaymentOfUserQuery, PaymentOfUserQueryVariables>(PaymentOfUserDocument, options);
        }
export type PaymentOfUserQueryHookResult = ReturnType<typeof usePaymentOfUserQuery>;
export type PaymentOfUserLazyQueryHookResult = ReturnType<typeof usePaymentOfUserLazyQuery>;
export type PaymentOfUserQueryResult = Apollo.QueryResult<PaymentOfUserQuery, PaymentOfUserQueryVariables>;
export const UpdatePaymentDocument = gql`
    mutation UpdatePayment($where: PaymentWhereUniqueInput!, $data: PaymentUpdateInput!) {
  updatePayment(where: $where, data: $data) {
    id
    amount
    image {
      url
    }
    paymentFor
    description
    status
  }
}
    `;
export type UpdatePaymentMutationFn = Apollo.MutationFunction<UpdatePaymentMutation, UpdatePaymentMutationVariables>;

/**
 * __useUpdatePaymentMutation__
 *
 * To run a mutation, you first call `useUpdatePaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePaymentMutation, { data, loading, error }] = useUpdatePaymentMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdatePaymentMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePaymentMutation, UpdatePaymentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePaymentMutation, UpdatePaymentMutationVariables>(UpdatePaymentDocument, options);
      }
export type UpdatePaymentMutationHookResult = ReturnType<typeof useUpdatePaymentMutation>;
export type UpdatePaymentMutationResult = Apollo.MutationResult<UpdatePaymentMutation>;
export type UpdatePaymentMutationOptions = Apollo.BaseMutationOptions<UpdatePaymentMutation, UpdatePaymentMutationVariables>;
export const PaymentTableDocument = gql`
    query paymentTable {
  payments {
    id
    refNo
    status
    amount
    paymentFor
    user {
      id
      firstName
      lastName
      username
      mobile
    }
  }
}
    `;

/**
 * __usePaymentTableQuery__
 *
 * To run a query within a React component, call `usePaymentTableQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaymentTableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaymentTableQuery({
 *   variables: {
 *   },
 * });
 */
export function usePaymentTableQuery(baseOptions?: Apollo.QueryHookOptions<PaymentTableQuery, PaymentTableQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PaymentTableQuery, PaymentTableQueryVariables>(PaymentTableDocument, options);
      }
export function usePaymentTableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PaymentTableQuery, PaymentTableQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PaymentTableQuery, PaymentTableQueryVariables>(PaymentTableDocument, options);
        }
export type PaymentTableQueryHookResult = ReturnType<typeof usePaymentTableQuery>;
export type PaymentTableLazyQueryHookResult = ReturnType<typeof usePaymentTableLazyQuery>;
export type PaymentTableQueryResult = Apollo.QueryResult<PaymentTableQuery, PaymentTableQueryVariables>;
export const SelectorsDocument = gql`
    query selectors {
  states {
    name
  }
  locations {
    city
    id
  }
  eventTypes {
    name
    id
  }
}
    `;

/**
 * __useSelectorsQuery__
 *
 * To run a query within a React component, call `useSelectorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSelectorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSelectorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSelectorsQuery(baseOptions?: Apollo.QueryHookOptions<SelectorsQuery, SelectorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SelectorsQuery, SelectorsQueryVariables>(SelectorsDocument, options);
      }
export function useSelectorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SelectorsQuery, SelectorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SelectorsQuery, SelectorsQueryVariables>(SelectorsDocument, options);
        }
export type SelectorsQueryHookResult = ReturnType<typeof useSelectorsQuery>;
export type SelectorsLazyQueryHookResult = ReturnType<typeof useSelectorsLazyQuery>;
export type SelectorsQueryResult = Apollo.QueryResult<SelectorsQuery, SelectorsQueryVariables>;
export const BannedUsersDocument = gql`
    query BannedUsers($where: SellerWhereInput!) {
  sellers(where: $where) {
    id
    name
    bannedUsers {
      id
      username
      firstName
      lastName
      mobile
    }
  }
}
    `;

/**
 * __useBannedUsersQuery__
 *
 * To run a query within a React component, call `useBannedUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useBannedUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBannedUsersQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useBannedUsersQuery(baseOptions: Apollo.QueryHookOptions<BannedUsersQuery, BannedUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BannedUsersQuery, BannedUsersQueryVariables>(BannedUsersDocument, options);
      }
export function useBannedUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BannedUsersQuery, BannedUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BannedUsersQuery, BannedUsersQueryVariables>(BannedUsersDocument, options);
        }
export type BannedUsersQueryHookResult = ReturnType<typeof useBannedUsersQuery>;
export type BannedUsersLazyQueryHookResult = ReturnType<typeof useBannedUsersLazyQuery>;
export type BannedUsersQueryResult = Apollo.QueryResult<BannedUsersQuery, BannedUsersQueryVariables>;
export const SellersItemDocument = gql`
    query SellersItem {
  sellers {
    name
    id
    bannedUsersCount
    eventsCount
  }
}
    `;

/**
 * __useSellersItemQuery__
 *
 * To run a query within a React component, call `useSellersItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useSellersItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSellersItemQuery({
 *   variables: {
 *   },
 * });
 */
export function useSellersItemQuery(baseOptions?: Apollo.QueryHookOptions<SellersItemQuery, SellersItemQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SellersItemQuery, SellersItemQueryVariables>(SellersItemDocument, options);
      }
export function useSellersItemLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SellersItemQuery, SellersItemQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SellersItemQuery, SellersItemQueryVariables>(SellersItemDocument, options);
        }
export type SellersItemQueryHookResult = ReturnType<typeof useSellersItemQuery>;
export type SellersItemLazyQueryHookResult = ReturnType<typeof useSellersItemLazyQuery>;
export type SellersItemQueryResult = Apollo.QueryResult<SellersItemQuery, SellersItemQueryVariables>;
export const CreateSellerDocument = gql`
    mutation CreateSeller($data: SellerCreateInput!) {
  createSeller(data: $data) {
    GSTNumbber
    bannedUsers {
      id
    }
    billingContactPerson
    name
    contactPerson
    vehicleCategory {
      events {
        eventType {
          id
        }
      }
    }
    nationalHead
    mobile
  }
}
    `;
export type CreateSellerMutationFn = Apollo.MutationFunction<CreateSellerMutation, CreateSellerMutationVariables>;

/**
 * __useCreateSellerMutation__
 *
 * To run a mutation, you first call `useCreateSellerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSellerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSellerMutation, { data, loading, error }] = useCreateSellerMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateSellerMutation(baseOptions?: Apollo.MutationHookOptions<CreateSellerMutation, CreateSellerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSellerMutation, CreateSellerMutationVariables>(CreateSellerDocument, options);
      }
export type CreateSellerMutationHookResult = ReturnType<typeof useCreateSellerMutation>;
export type CreateSellerMutationResult = Apollo.MutationResult<CreateSellerMutation>;
export type CreateSellerMutationOptions = Apollo.BaseMutationOptions<CreateSellerMutation, CreateSellerMutationVariables>;
export const SellerEditDocument = gql`
    query SellerEdit($where: SellerWhereUniqueInput!) {
  seller(where: $where) {
    GSTNumbber
    billingContactPerson
    contactPerson
    mobile
    name
    nationalHead
  }
}
    `;

/**
 * __useSellerEditQuery__
 *
 * To run a query within a React component, call `useSellerEditQuery` and pass it any options that fit your needs.
 * When your component renders, `useSellerEditQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSellerEditQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSellerEditQuery(baseOptions: Apollo.QueryHookOptions<SellerEditQuery, SellerEditQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SellerEditQuery, SellerEditQueryVariables>(SellerEditDocument, options);
      }
export function useSellerEditLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SellerEditQuery, SellerEditQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SellerEditQuery, SellerEditQueryVariables>(SellerEditDocument, options);
        }
export type SellerEditQueryHookResult = ReturnType<typeof useSellerEditQuery>;
export type SellerEditLazyQueryHookResult = ReturnType<typeof useSellerEditLazyQuery>;
export type SellerEditQueryResult = Apollo.QueryResult<SellerEditQuery, SellerEditQueryVariables>;
export const SellerUpdateDocument = gql`
    mutation sellerUpdate($where: SellerWhereUniqueInput!, $data: SellerUpdateInput!) {
  updateSeller(where: $where, data: $data) {
    id
    billingContactPerson
    contactPerson
    GSTNumbber
    mobile
    name
    nationalHead
  }
}
    `;
export type SellerUpdateMutationFn = Apollo.MutationFunction<SellerUpdateMutation, SellerUpdateMutationVariables>;

/**
 * __useSellerUpdateMutation__
 *
 * To run a mutation, you first call `useSellerUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSellerUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sellerUpdateMutation, { data, loading, error }] = useSellerUpdateMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSellerUpdateMutation(baseOptions?: Apollo.MutationHookOptions<SellerUpdateMutation, SellerUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SellerUpdateMutation, SellerUpdateMutationVariables>(SellerUpdateDocument, options);
      }
export type SellerUpdateMutationHookResult = ReturnType<typeof useSellerUpdateMutation>;
export type SellerUpdateMutationResult = Apollo.MutationResult<SellerUpdateMutation>;
export type SellerUpdateMutationOptions = Apollo.BaseMutationOptions<SellerUpdateMutation, SellerUpdateMutationVariables>;
export const DeleteSellerDocument = gql`
    mutation DeleteSeller($where: SellerWhereUniqueInput!) {
  deleteSeller(where: $where) {
    id
    name
  }
}
    `;
export type DeleteSellerMutationFn = Apollo.MutationFunction<DeleteSellerMutation, DeleteSellerMutationVariables>;

/**
 * __useDeleteSellerMutation__
 *
 * To run a mutation, you first call `useDeleteSellerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSellerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSellerMutation, { data, loading, error }] = useDeleteSellerMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteSellerMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSellerMutation, DeleteSellerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSellerMutation, DeleteSellerMutationVariables>(DeleteSellerDocument, options);
      }
export type DeleteSellerMutationHookResult = ReturnType<typeof useDeleteSellerMutation>;
export type DeleteSellerMutationResult = Apollo.MutationResult<DeleteSellerMutation>;
export type DeleteSellerMutationOptions = Apollo.BaseMutationOptions<DeleteSellerMutation, DeleteSellerMutationVariables>;
export const StatesDocument = gql`
    query states {
  states {
    name
    id
    users {
      id
      firstName
    }
    locations {
      name
    }
  }
}
    `;

/**
 * __useStatesQuery__
 *
 * To run a query within a React component, call `useStatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useStatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStatesQuery({
 *   variables: {
 *   },
 * });
 */
export function useStatesQuery(baseOptions?: Apollo.QueryHookOptions<StatesQuery, StatesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StatesQuery, StatesQueryVariables>(StatesDocument, options);
      }
export function useStatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StatesQuery, StatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StatesQuery, StatesQueryVariables>(StatesDocument, options);
        }
export type StatesQueryHookResult = ReturnType<typeof useStatesQuery>;
export type StatesLazyQueryHookResult = ReturnType<typeof useStatesLazyQuery>;
export type StatesQueryResult = Apollo.QueryResult<StatesQuery, StatesQueryVariables>;
export const CreateStateDocument = gql`
    mutation CreateState($data: StateCreateInput!) {
  createState(data: $data) {
    name
  }
}
    `;
export type CreateStateMutationFn = Apollo.MutationFunction<CreateStateMutation, CreateStateMutationVariables>;

/**
 * __useCreateStateMutation__
 *
 * To run a mutation, you first call `useCreateStateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStateMutation, { data, loading, error }] = useCreateStateMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateStateMutation(baseOptions?: Apollo.MutationHookOptions<CreateStateMutation, CreateStateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateStateMutation, CreateStateMutationVariables>(CreateStateDocument, options);
      }
export type CreateStateMutationHookResult = ReturnType<typeof useCreateStateMutation>;
export type CreateStateMutationResult = Apollo.MutationResult<CreateStateMutation>;
export type CreateStateMutationOptions = Apollo.BaseMutationOptions<CreateStateMutation, CreateStateMutationVariables>;
export const DeleteStateDocument = gql`
    mutation DeleteState($where: StateWhereUniqueInput!) {
  deleteState(where: $where) {
    id
    name
  }
}
    `;
export type DeleteStateMutationFn = Apollo.MutationFunction<DeleteStateMutation, DeleteStateMutationVariables>;

/**
 * __useDeleteStateMutation__
 *
 * To run a mutation, you first call `useDeleteStateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteStateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteStateMutation, { data, loading, error }] = useDeleteStateMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteStateMutation(baseOptions?: Apollo.MutationHookOptions<DeleteStateMutation, DeleteStateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteStateMutation, DeleteStateMutationVariables>(DeleteStateDocument, options);
      }
export type DeleteStateMutationHookResult = ReturnType<typeof useDeleteStateMutation>;
export type DeleteStateMutationResult = Apollo.MutationResult<DeleteStateMutation>;
export type DeleteStateMutationOptions = Apollo.BaseMutationOptions<DeleteStateMutation, DeleteStateMutationVariables>;
export const UserauthenticationDocument = gql`
    query Userauthentication {
  authenticatedItem {
    ... on User {
      username
      role
    }
  }
}
    `;

/**
 * __useUserauthenticationQuery__
 *
 * To run a query within a React component, call `useUserauthenticationQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserauthenticationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserauthenticationQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserauthenticationQuery(baseOptions?: Apollo.QueryHookOptions<UserauthenticationQuery, UserauthenticationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserauthenticationQuery, UserauthenticationQueryVariables>(UserauthenticationDocument, options);
      }
export function useUserauthenticationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserauthenticationQuery, UserauthenticationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserauthenticationQuery, UserauthenticationQueryVariables>(UserauthenticationDocument, options);
        }
export type UserauthenticationQueryHookResult = ReturnType<typeof useUserauthenticationQuery>;
export type UserauthenticationLazyQueryHookResult = ReturnType<typeof useUserauthenticationLazyQuery>;
export type UserauthenticationQueryResult = Apollo.QueryResult<UserauthenticationQuery, UserauthenticationQueryVariables>;
export const UserDocument = gql`
    query User($where: UserWhereUniqueInput!) {
  user(where: $where) {
    id
    firstName
    vehicleBuyingLimit
    bannedSellersCount
    businessName
    categoryCount
    state
    states {
      id
      name
      locations {
        city
        id
        name
      }
    }
    city
    country
    createdAt
    dealerId
    email
    emdUpdatesByAdminCount
    emdUpdatesCount
    id
    idNo
    idProofNo
    idProof {
      url
    }
    idProofBack {
      url
    }
    idProofType
    image {
      url
      __typename
    }
    lastName
    magicAuthIssuedAt
    magicAuthRedeemedAt
    mobile
    pancard {
      url
    }
    pancardNo
    payments {
      amount
    }
    paymentsCount
    phone
    role
    specialVehicleBuyingLimit
    dealerId
    dealership {
      url
    }
    currentVehicleBuyingLimit {
      vehicleBuyingLimit
    }
    username
    status
    updatedAt
    bannedSellers {
      name
      id
    }
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const EditUserDocument = gql`
    mutation editUser($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {
  updateUser(where: $where, data: $data) {
    firstName
    lastName
    email
    username
    mobile
    businessName
    category {
      name
    }
    bannedSellers {
      name
      id
    }
    role
    password {
      isSet
    }
    idProofType
    idProofNo
    image {
      url
    }
    pancard {
      url
    }
    pancardNo
    idProof {
      url
    }
    idProofBack {
      url
    }
    dealership {
      url
    }
    country
    state
    states {
      id
      name
    }
    city
    status
    vehicleBuyingLimit
  }
}
    `;
export type EditUserMutationFn = Apollo.MutationFunction<EditUserMutation, EditUserMutationVariables>;

/**
 * __useEditUserMutation__
 *
 * To run a mutation, you first call `useEditUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editUserMutation, { data, loading, error }] = useEditUserMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditUserMutation(baseOptions?: Apollo.MutationHookOptions<EditUserMutation, EditUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditUserMutation, EditUserMutationVariables>(EditUserDocument, options);
      }
export type EditUserMutationHookResult = ReturnType<typeof useEditUserMutation>;
export type EditUserMutationResult = Apollo.MutationResult<EditUserMutation>;
export type EditUserMutationOptions = Apollo.BaseMutationOptions<EditUserMutation, EditUserMutationVariables>;
export const UsersDocument = gql`
    query Users {
  users {
    firstName
    lastName
    email
    mobile
    status
    state
    role
    idNo
    id
    pancardNo
    activeBidsCount
    currentVehicleBuyingLimit {
      vehicleBuyingLimit
    }
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const CreateVehicleDocument = gql`
    mutation CreateVehicle($data: VehicleCreateInput!) {
  createVehicle(data: $data) {
    event {
      id
    }
    registrationNumber
    bidStartTime
    bidStatus
    loanAgreementNo
    registeredOwnerName
    quoteIncreament
    make
    model
    varient
    categoty
    fuel
    type
    rcStatus
    yearOfManufacture
    ownership
    mileage
    kmReading
    insuranceStatus
    yardLocation
    startPrice
    reservePrice
    repoDt
    veicleLocation
    vehicleRemarks
    auctionManager
    parkingCharges
    insurance
    insuranceValidTill
    tax
    taxValidityDate
    fitness
    permit
    fitnessPermit
    engineNo
    chassisNo
    frontImage
    leftImage
    leftImage
    rightImage
    image5
    image6
    inspectionLink
    autobseContact
    autobse_contact_person
    vehicleCondition
    powerSteering
    shape
    color
    city
    area
    state
    paymentTerms
    dateOfRegistration
    hypothication
    climateControl
    doorCount
    gearBox
    buyerFees
    rtoFine
    parkingRate
    approxParkingCharges
    clientContactPerson
    clientContactNo
    additionalRemarks
    watchedBy {
      firstName
      id
    }
  }
}
    `;
export type CreateVehicleMutationFn = Apollo.MutationFunction<CreateVehicleMutation, CreateVehicleMutationVariables>;

/**
 * __useCreateVehicleMutation__
 *
 * To run a mutation, you first call `useCreateVehicleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVehicleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVehicleMutation, { data, loading, error }] = useCreateVehicleMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateVehicleMutation(baseOptions?: Apollo.MutationHookOptions<CreateVehicleMutation, CreateVehicleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateVehicleMutation, CreateVehicleMutationVariables>(CreateVehicleDocument, options);
      }
export type CreateVehicleMutationHookResult = ReturnType<typeof useCreateVehicleMutation>;
export type CreateVehicleMutationResult = Apollo.MutationResult<CreateVehicleMutation>;
export type CreateVehicleMutationOptions = Apollo.BaseMutationOptions<CreateVehicleMutation, CreateVehicleMutationVariables>;
export const DeleteVehicleDocument = gql`
    mutation DeleteVehicle($where: VehicleWhereUniqueInput!) {
  deleteVehicle(where: $where) {
    id
  }
}
    `;
export type DeleteVehicleMutationFn = Apollo.MutationFunction<DeleteVehicleMutation, DeleteVehicleMutationVariables>;

/**
 * __useDeleteVehicleMutation__
 *
 * To run a mutation, you first call `useDeleteVehicleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteVehicleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteVehicleMutation, { data, loading, error }] = useDeleteVehicleMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteVehicleMutation(baseOptions?: Apollo.MutationHookOptions<DeleteVehicleMutation, DeleteVehicleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteVehicleMutation, DeleteVehicleMutationVariables>(DeleteVehicleDocument, options);
      }
export type DeleteVehicleMutationHookResult = ReturnType<typeof useDeleteVehicleMutation>;
export type DeleteVehicleMutationResult = Apollo.MutationResult<DeleteVehicleMutation>;
export type DeleteVehicleMutationOptions = Apollo.BaseMutationOptions<DeleteVehicleMutation, DeleteVehicleMutationVariables>;
export const VehicleDetailsDocument = gql`
    query VehicleDetails($where: VehicleWhereUniqueInput!) {
  vehicle(where: $where) {
    id
    registrationNumber
    bidStatus
    loanAgreementNo
    registeredOwnerName
    quoteIncreament
    make
    model
    varient
    categoty
    fuel
    type
    rcStatus
    yearOfManufacture
    ownership
    mileage
    kmReading
    insuranceStatus
    yardLocation
    startPrice
    reservePrice
    repoDt
    veicleLocation
    vehicleRemarks
    auctionManager
    parkingCharges
    insurance
    insuranceValidTill
    tax
    taxValidityDate
    fitness
    permit
    fitnessPermit
    engineNo
    chassisNo
    frontImage
    backImage
    leftImage
    leftImage
    rightImage
    image5
    image6
    inspectionLink
    autobseContact
    autobse_contact_person
    vehicleCondition
    powerSteering
    shape
    color
    city
    area
    state
    paymentTerms
    dateOfRegistration
    hypothication
    climateControl
    doorCount
    gearBox
    buyerFees
    rtoFine
    parkingRate
    approxParkingCharges
    clientContactPerson
    clientContactNo
    additionalRemarks
  }
}
    `;

/**
 * __useVehicleDetailsQuery__
 *
 * To run a query within a React component, call `useVehicleDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useVehicleDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVehicleDetailsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useVehicleDetailsQuery(baseOptions: Apollo.QueryHookOptions<VehicleDetailsQuery, VehicleDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VehicleDetailsQuery, VehicleDetailsQueryVariables>(VehicleDetailsDocument, options);
      }
export function useVehicleDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VehicleDetailsQuery, VehicleDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VehicleDetailsQuery, VehicleDetailsQueryVariables>(VehicleDetailsDocument, options);
        }
export type VehicleDetailsQueryHookResult = ReturnType<typeof useVehicleDetailsQuery>;
export type VehicleDetailsLazyQueryHookResult = ReturnType<typeof useVehicleDetailsLazyQuery>;
export type VehicleDetailsQueryResult = Apollo.QueryResult<VehicleDetailsQuery, VehicleDetailsQueryVariables>;
export const VehicleDetailsPerEventDocument = gql`
    query VehicleDetailsPerEvent($where: EventWhereUniqueInput!) {
  event(where: $where) {
    id
    status
    vehiclesCount
    vehicles {
      id
      vehicleIndexNo
      registrationNumber
      totalBids
      frontImage
      vehicleEventStatus
      bidStatus
      state
      city
    }
  }
}
    `;

/**
 * __useVehicleDetailsPerEventQuery__
 *
 * To run a query within a React component, call `useVehicleDetailsPerEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useVehicleDetailsPerEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVehicleDetailsPerEventQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useVehicleDetailsPerEventQuery(baseOptions: Apollo.QueryHookOptions<VehicleDetailsPerEventQuery, VehicleDetailsPerEventQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VehicleDetailsPerEventQuery, VehicleDetailsPerEventQueryVariables>(VehicleDetailsPerEventDocument, options);
      }
export function useVehicleDetailsPerEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VehicleDetailsPerEventQuery, VehicleDetailsPerEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VehicleDetailsPerEventQuery, VehicleDetailsPerEventQueryVariables>(VehicleDetailsPerEventDocument, options);
        }
export type VehicleDetailsPerEventQueryHookResult = ReturnType<typeof useVehicleDetailsPerEventQuery>;
export type VehicleDetailsPerEventLazyQueryHookResult = ReturnType<typeof useVehicleDetailsPerEventLazyQuery>;
export type VehicleDetailsPerEventQueryResult = Apollo.QueryResult<VehicleDetailsPerEventQuery, VehicleDetailsPerEventQueryVariables>;
export const VehicleTableDocument = gql`
    query VehicleTable {
  vehicles {
    id
    registrationNumber
    vehicleIndexNo
    bidTimeExpire
    bidStatus
    userVehicleBidsCount
    vehicleEventStatus
    event {
      eventCategory
    }
  }
}
    `;

/**
 * __useVehicleTableQuery__
 *
 * To run a query within a React component, call `useVehicleTableQuery` and pass it any options that fit your needs.
 * When your component renders, `useVehicleTableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVehicleTableQuery({
 *   variables: {
 *   },
 * });
 */
export function useVehicleTableQuery(baseOptions?: Apollo.QueryHookOptions<VehicleTableQuery, VehicleTableQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VehicleTableQuery, VehicleTableQueryVariables>(VehicleTableDocument, options);
      }
export function useVehicleTableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VehicleTableQuery, VehicleTableQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VehicleTableQuery, VehicleTableQueryVariables>(VehicleTableDocument, options);
        }
export type VehicleTableQueryHookResult = ReturnType<typeof useVehicleTableQuery>;
export type VehicleTableLazyQueryHookResult = ReturnType<typeof useVehicleTableLazyQuery>;
export type VehicleTableQueryResult = Apollo.QueryResult<VehicleTableQuery, VehicleTableQueryVariables>;
export const UpdateVehicleDocument = gql`
    mutation UpdateVehicle($where: VehicleWhereUniqueInput!, $data: VehicleUpdateInput!) {
  updateVehicle(where: $where, data: $data) {
    id
    registrationNumber
    bidStatus
    loanAgreementNo
    registeredOwnerName
    quoteIncreament
    make
    model
    varient
    categoty
    fuel
    type
    rcStatus
    yearOfManufacture
    ownership
    mileage
    kmReading
    insuranceStatus
    yardLocation
    startPrice
    reservePrice
    repoDt
    veicleLocation
    vehicleRemarks
    auctionManager
    parkingCharges
    insurance
    insuranceValidTill
    tax
    taxValidityDate
    fitness
    permit
    fitnessPermit
    engineNo
    chassisNo
    frontImage
    backImage
    leftImage
    leftImage
    rightImage
    image5
    image6
    inspectionLink
    autobseContact
    autobse_contact_person
    vehicleCondition
    powerSteering
    shape
    color
    city
    area
    state
    paymentTerms
    dateOfRegistration
    hypothication
    climateControl
    doorCount
    gearBox
    buyerFees
    rtoFine
    parkingRate
    approxParkingCharges
    clientContactPerson
    clientContactNo
    additionalRemarks
  }
}
    `;
export type UpdateVehicleMutationFn = Apollo.MutationFunction<UpdateVehicleMutation, UpdateVehicleMutationVariables>;

/**
 * __useUpdateVehicleMutation__
 *
 * To run a mutation, you first call `useUpdateVehicleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVehicleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVehicleMutation, { data, loading, error }] = useUpdateVehicleMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateVehicleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateVehicleMutation, UpdateVehicleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateVehicleMutation, UpdateVehicleMutationVariables>(UpdateVehicleDocument, options);
      }
export type UpdateVehicleMutationHookResult = ReturnType<typeof useUpdateVehicleMutation>;
export type UpdateVehicleMutationResult = Apollo.MutationResult<UpdateVehicleMutation>;
export type UpdateVehicleMutationOptions = Apollo.BaseMutationOptions<UpdateVehicleMutation, UpdateVehicleMutationVariables>;