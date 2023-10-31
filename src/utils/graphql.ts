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
  BigInt: any;
  DateTime: any;
  JSON: any;
  Upload: any;
};

export type AuthenticatedItem = User;

export type Bid = {
  __typename?: 'Bid';
  amount?: Maybe<Scalars['Int']>;
  bidVehicle?: Maybe<Vehicle>;
  coupenDetail?: Maybe<Array<Coupen>>;
  coupenDetailCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedBid?: Maybe<Array<DeletedBid>>;
  deletedBidCount?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
};


export type BidCoupenDetailArgs = {
  orderBy?: Array<CoupenOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CoupenWhereInput;
};


export type BidCoupenDetailCountArgs = {
  where?: CoupenWhereInput;
};


export type BidDeletedBidArgs = {
  orderBy?: Array<DeletedBidOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: DeletedBidWhereInput;
};


export type BidDeletedBidCountArgs = {
  where?: DeletedBidWhereInput;
};

export type BidCreateInput = {
  amount?: InputMaybe<Scalars['Int']>;
  bidVehicle?: InputMaybe<VehicleRelateToOneForCreateInput>;
  coupenDetail?: InputMaybe<CoupenRelateToManyForCreateInput>;
  deletedBid?: InputMaybe<DeletedBidRelateToManyForCreateInput>;
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

export type BidRelateToOneForCreateInput = {
  connect?: InputMaybe<BidWhereUniqueInput>;
  create?: InputMaybe<BidCreateInput>;
};

export type BidRelateToOneForUpdateInput = {
  connect?: InputMaybe<BidWhereUniqueInput>;
  create?: InputMaybe<BidCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type BidUpdateArgs = {
  data: BidUpdateInput;
  where: BidWhereUniqueInput;
};

export type BidUpdateInput = {
  amount?: InputMaybe<Scalars['Int']>;
  bidVehicle?: InputMaybe<VehicleRelateToOneForUpdateInput>;
  coupenDetail?: InputMaybe<CoupenRelateToManyForUpdateInput>;
  deletedBid?: InputMaybe<DeletedBidRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type BidWhereInput = {
  AND?: InputMaybe<Array<BidWhereInput>>;
  NOT?: InputMaybe<Array<BidWhereInput>>;
  OR?: InputMaybe<Array<BidWhereInput>>;
  amount?: InputMaybe<IntNullableFilter>;
  bidVehicle?: InputMaybe<VehicleWhereInput>;
  coupenDetail?: InputMaybe<CoupenManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  deletedBid?: InputMaybe<DeletedBidManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type BidWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type BigIntNullableFilter = {
  equals?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  not?: InputMaybe<BigIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilter>;
};

export type ContactUs = {
  __typename?: 'ContactUs';
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  status?: Maybe<ContactUsStatusType>;
  subject?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ContactUsCreateInput = {
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ContactUsStatusType>;
  subject?: InputMaybe<Scalars['String']>;
};

export type ContactUsOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  firstName?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  lastName?: InputMaybe<OrderDirection>;
  message?: InputMaybe<OrderDirection>;
  mobile?: InputMaybe<OrderDirection>;
  state?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  subject?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export enum ContactUsStatusType {
  Created = 'created',
  Solved = 'solved'
}

export type ContactUsStatusTypeNullableFilter = {
  equals?: InputMaybe<ContactUsStatusType>;
  in?: InputMaybe<Array<ContactUsStatusType>>;
  not?: InputMaybe<ContactUsStatusTypeNullableFilter>;
  notIn?: InputMaybe<Array<ContactUsStatusType>>;
};

export type ContactUsUpdateArgs = {
  data: ContactUsUpdateInput;
  where: ContactUsWhereUniqueInput;
};

export type ContactUsUpdateInput = {
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ContactUsStatusType>;
  subject?: InputMaybe<Scalars['String']>;
};

export type ContactUsWhereInput = {
  AND?: InputMaybe<Array<ContactUsWhereInput>>;
  NOT?: InputMaybe<Array<ContactUsWhereInput>>;
  OR?: InputMaybe<Array<ContactUsWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  lastName?: InputMaybe<StringFilter>;
  message?: InputMaybe<StringFilter>;
  mobile?: InputMaybe<StringFilter>;
  state?: InputMaybe<StringFilter>;
  status?: InputMaybe<ContactUsStatusTypeNullableFilter>;
  subject?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type ContactUsWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Coupen = {
  __typename?: 'Coupen';
  bidDetail?: Maybe<Bid>;
  coupenNumber?: Maybe<Scalars['String']>;
  coupenStatus?: Maybe<CoupenCoupenStatusType>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  paymentDetail?: Maybe<Payment>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userDetail?: Maybe<User>;
  vehicleDetail?: Maybe<Vehicle>;
};

export enum CoupenCoupenStatusType {
  Applied = 'applied',
  Unclaimed = 'unclaimed'
}

export type CoupenCoupenStatusTypeNullableFilter = {
  equals?: InputMaybe<CoupenCoupenStatusType>;
  in?: InputMaybe<Array<CoupenCoupenStatusType>>;
  not?: InputMaybe<CoupenCoupenStatusTypeNullableFilter>;
  notIn?: InputMaybe<Array<CoupenCoupenStatusType>>;
};

export type CoupenCreateInput = {
  bidDetail?: InputMaybe<BidRelateToOneForCreateInput>;
  coupenNumber?: InputMaybe<Scalars['String']>;
  coupenStatus?: InputMaybe<CoupenCoupenStatusType>;
  paymentDetail?: InputMaybe<PaymentRelateToOneForCreateInput>;
  userDetail?: InputMaybe<UserRelateToOneForCreateInput>;
  vehicleDetail?: InputMaybe<VehicleRelateToOneForCreateInput>;
};

export type CoupenManyRelationFilter = {
  every?: InputMaybe<CoupenWhereInput>;
  none?: InputMaybe<CoupenWhereInput>;
  some?: InputMaybe<CoupenWhereInput>;
};

export type CoupenOrderByInput = {
  coupenNumber?: InputMaybe<OrderDirection>;
  coupenStatus?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type CoupenRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<CoupenWhereUniqueInput>>;
  create?: InputMaybe<Array<CoupenCreateInput>>;
};

export type CoupenRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<CoupenWhereUniqueInput>>;
  create?: InputMaybe<Array<CoupenCreateInput>>;
  disconnect?: InputMaybe<Array<CoupenWhereUniqueInput>>;
  set?: InputMaybe<Array<CoupenWhereUniqueInput>>;
};

export type CoupenRelateToOneForCreateInput = {
  connect?: InputMaybe<CoupenWhereUniqueInput>;
  create?: InputMaybe<CoupenCreateInput>;
};

export type CoupenRelateToOneForUpdateInput = {
  connect?: InputMaybe<CoupenWhereUniqueInput>;
  create?: InputMaybe<CoupenCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type CoupenUpdateArgs = {
  data: CoupenUpdateInput;
  where: CoupenWhereUniqueInput;
};

export type CoupenUpdateInput = {
  bidDetail?: InputMaybe<BidRelateToOneForUpdateInput>;
  coupenNumber?: InputMaybe<Scalars['String']>;
  coupenStatus?: InputMaybe<CoupenCoupenStatusType>;
  paymentDetail?: InputMaybe<PaymentRelateToOneForUpdateInput>;
  userDetail?: InputMaybe<UserRelateToOneForUpdateInput>;
  vehicleDetail?: InputMaybe<VehicleRelateToOneForUpdateInput>;
};

export type CoupenWhereInput = {
  AND?: InputMaybe<Array<CoupenWhereInput>>;
  NOT?: InputMaybe<Array<CoupenWhereInput>>;
  OR?: InputMaybe<Array<CoupenWhereInput>>;
  bidDetail?: InputMaybe<BidWhereInput>;
  coupenNumber?: InputMaybe<StringFilter>;
  coupenStatus?: InputMaybe<CoupenCoupenStatusTypeNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  paymentDetail?: InputMaybe<PaymentWhereInput>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userDetail?: InputMaybe<UserWhereInput>;
  vehicleDetail?: InputMaybe<VehicleWhereInput>;
};

export type CoupenWhereUniqueInput = {
  coupenNumber?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
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

export type DeletedBid = {
  __typename?: 'DeletedBid';
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedBidDetail?: Maybe<Array<Bid>>;
  deletedBidDetailCount?: Maybe<Scalars['Int']>;
  deletedbidVehicle?: Maybe<Vehicle>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
};


export type DeletedBidDeletedBidDetailArgs = {
  orderBy?: Array<BidOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: BidWhereInput;
};


export type DeletedBidDeletedBidDetailCountArgs = {
  where?: BidWhereInput;
};

export type DeletedBidCreateInput = {
  amount?: InputMaybe<Scalars['Int']>;
  deletedBidDetail?: InputMaybe<BidRelateToManyForCreateInput>;
  deletedbidVehicle?: InputMaybe<VehicleRelateToOneForCreateInput>;
  name?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type DeletedBidManyRelationFilter = {
  every?: InputMaybe<DeletedBidWhereInput>;
  none?: InputMaybe<DeletedBidWhereInput>;
  some?: InputMaybe<DeletedBidWhereInput>;
};

export type DeletedBidOrderByInput = {
  amount?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type DeletedBidRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<DeletedBidWhereUniqueInput>>;
  create?: InputMaybe<Array<DeletedBidCreateInput>>;
};

export type DeletedBidRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<DeletedBidWhereUniqueInput>>;
  create?: InputMaybe<Array<DeletedBidCreateInput>>;
  disconnect?: InputMaybe<Array<DeletedBidWhereUniqueInput>>;
  set?: InputMaybe<Array<DeletedBidWhereUniqueInput>>;
};

export type DeletedBidUpdateArgs = {
  data: DeletedBidUpdateInput;
  where: DeletedBidWhereUniqueInput;
};

export type DeletedBidUpdateInput = {
  amount?: InputMaybe<Scalars['Int']>;
  deletedBidDetail?: InputMaybe<BidRelateToManyForUpdateInput>;
  deletedbidVehicle?: InputMaybe<VehicleRelateToOneForUpdateInput>;
  name?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type DeletedBidWhereInput = {
  AND?: InputMaybe<Array<DeletedBidWhereInput>>;
  NOT?: InputMaybe<Array<DeletedBidWhereInput>>;
  OR?: InputMaybe<Array<DeletedBidWhereInput>>;
  amount?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  deletedBidDetail?: InputMaybe<BidManyRelationFilter>;
  deletedbidVehicle?: InputMaybe<VehicleWhereInput>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type DeletedBidWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
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
  participants?: Maybe<Array<User>>;
  participantsCount?: Maybe<Scalars['Int']>;
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


export type EventParticipantsArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type EventParticipantsCountArgs = {
  where?: UserWhereInput;
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
  participants?: InputMaybe<UserRelateToManyForCreateInput>;
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
  participants?: InputMaybe<UserRelateToManyForUpdateInput>;
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
  participants?: InputMaybe<UserManyRelationFilter>;
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

export type FindAuction = {
  __typename?: 'FindAuction';
  address?: Maybe<Scalars['String']>;
  auctionEndDate?: Maybe<Scalars['DateTime']>;
  auctionNotice?: Maybe<Scalars['String']>;
  auctionStartDate?: Maybe<Scalars['DateTime']>;
  city?: Maybe<Scalars['String']>;
  contactDetails?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  emdAmount?: Maybe<Scalars['BigInt']>;
  emdSubmissionDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  institution_details?: Maybe<Institution>;
  listingId?: Maybe<Scalars['Int']>;
  propertyType?: Maybe<FindAuctionPropertyTypeType>;
  reservePrice?: Maybe<Scalars['BigInt']>;
  state?: Maybe<State>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  vehicleRegNo?: Maybe<Scalars['String']>;
};

export type FindAuctionCreateInput = {
  address?: InputMaybe<Scalars['String']>;
  auctionEndDate?: InputMaybe<Scalars['DateTime']>;
  auctionNotice?: InputMaybe<Scalars['String']>;
  auctionStartDate?: InputMaybe<Scalars['DateTime']>;
  city?: InputMaybe<Scalars['String']>;
  contactDetails?: InputMaybe<Scalars['String']>;
  emdAmount?: InputMaybe<Scalars['BigInt']>;
  emdSubmissionDate?: InputMaybe<Scalars['DateTime']>;
  institution_details?: InputMaybe<InstitutionRelateToOneForCreateInput>;
  listingId?: InputMaybe<Scalars['Int']>;
  propertyType?: InputMaybe<FindAuctionPropertyTypeType>;
  reservePrice?: InputMaybe<Scalars['BigInt']>;
  state?: InputMaybe<StateRelateToOneForCreateInput>;
  vehicleRegNo?: InputMaybe<Scalars['String']>;
};

export type FindAuctionManyRelationFilter = {
  every?: InputMaybe<FindAuctionWhereInput>;
  none?: InputMaybe<FindAuctionWhereInput>;
  some?: InputMaybe<FindAuctionWhereInput>;
};

export type FindAuctionOrderByInput = {
  address?: InputMaybe<OrderDirection>;
  auctionEndDate?: InputMaybe<OrderDirection>;
  auctionNotice?: InputMaybe<OrderDirection>;
  auctionStartDate?: InputMaybe<OrderDirection>;
  city?: InputMaybe<OrderDirection>;
  contactDetails?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  emdAmount?: InputMaybe<OrderDirection>;
  emdSubmissionDate?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  listingId?: InputMaybe<OrderDirection>;
  propertyType?: InputMaybe<OrderDirection>;
  reservePrice?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  vehicleRegNo?: InputMaybe<OrderDirection>;
};

export enum FindAuctionPropertyTypeType {
  Flat = 'flat',
  Gold = 'gold',
  Mechinery = 'mechinery',
  Other = 'other',
  Vehicle = 'vehicle'
}

export type FindAuctionPropertyTypeTypeNullableFilter = {
  equals?: InputMaybe<FindAuctionPropertyTypeType>;
  in?: InputMaybe<Array<FindAuctionPropertyTypeType>>;
  not?: InputMaybe<FindAuctionPropertyTypeTypeNullableFilter>;
  notIn?: InputMaybe<Array<FindAuctionPropertyTypeType>>;
};

export type FindAuctionRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<FindAuctionWhereUniqueInput>>;
  create?: InputMaybe<Array<FindAuctionCreateInput>>;
};

export type FindAuctionRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<FindAuctionWhereUniqueInput>>;
  create?: InputMaybe<Array<FindAuctionCreateInput>>;
  disconnect?: InputMaybe<Array<FindAuctionWhereUniqueInput>>;
  set?: InputMaybe<Array<FindAuctionWhereUniqueInput>>;
};

export type FindAuctionUpdateArgs = {
  data: FindAuctionUpdateInput;
  where: FindAuctionWhereUniqueInput;
};

export type FindAuctionUpdateInput = {
  address?: InputMaybe<Scalars['String']>;
  auctionEndDate?: InputMaybe<Scalars['DateTime']>;
  auctionNotice?: InputMaybe<Scalars['String']>;
  auctionStartDate?: InputMaybe<Scalars['DateTime']>;
  city?: InputMaybe<Scalars['String']>;
  contactDetails?: InputMaybe<Scalars['String']>;
  emdAmount?: InputMaybe<Scalars['BigInt']>;
  emdSubmissionDate?: InputMaybe<Scalars['DateTime']>;
  institution_details?: InputMaybe<InstitutionRelateToOneForUpdateInput>;
  listingId?: InputMaybe<Scalars['Int']>;
  propertyType?: InputMaybe<FindAuctionPropertyTypeType>;
  reservePrice?: InputMaybe<Scalars['BigInt']>;
  state?: InputMaybe<StateRelateToOneForUpdateInput>;
  vehicleRegNo?: InputMaybe<Scalars['String']>;
};

export type FindAuctionWhereInput = {
  AND?: InputMaybe<Array<FindAuctionWhereInput>>;
  NOT?: InputMaybe<Array<FindAuctionWhereInput>>;
  OR?: InputMaybe<Array<FindAuctionWhereInput>>;
  address?: InputMaybe<StringFilter>;
  auctionEndDate?: InputMaybe<DateTimeNullableFilter>;
  auctionNotice?: InputMaybe<StringFilter>;
  auctionStartDate?: InputMaybe<DateTimeNullableFilter>;
  city?: InputMaybe<StringFilter>;
  contactDetails?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  emdAmount?: InputMaybe<BigIntNullableFilter>;
  emdSubmissionDate?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  institution_details?: InputMaybe<InstitutionWhereInput>;
  listingId?: InputMaybe<IntFilter>;
  propertyType?: InputMaybe<FindAuctionPropertyTypeTypeNullableFilter>;
  reservePrice?: InputMaybe<BigIntNullableFilter>;
  state?: InputMaybe<StateWhereInput>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  vehicleRegNo?: InputMaybe<StringFilter>;
};

export type FindAuctionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
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

export type Institution = {
  __typename?: 'Institution';
  createdAt?: Maybe<Scalars['DateTime']>;
  findAuction_details?: Maybe<Array<FindAuction>>;
  findAuction_detailsCount?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type InstitutionFindAuction_DetailsArgs = {
  orderBy?: Array<FindAuctionOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: FindAuctionWhereInput;
};


export type InstitutionFindAuction_DetailsCountArgs = {
  where?: FindAuctionWhereInput;
};

export type InstitutionCreateInput = {
  findAuction_details?: InputMaybe<FindAuctionRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars['String']>;
};

export type InstitutionOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type InstitutionRelateToOneForCreateInput = {
  connect?: InputMaybe<InstitutionWhereUniqueInput>;
  create?: InputMaybe<InstitutionCreateInput>;
};

export type InstitutionRelateToOneForUpdateInput = {
  connect?: InputMaybe<InstitutionWhereUniqueInput>;
  create?: InputMaybe<InstitutionCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type InstitutionUpdateArgs = {
  data: InstitutionUpdateInput;
  where: InstitutionWhereUniqueInput;
};

export type InstitutionUpdateInput = {
  findAuction_details?: InputMaybe<FindAuctionRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']>;
};

export type InstitutionWhereInput = {
  AND?: InputMaybe<Array<InstitutionWhereInput>>;
  NOT?: InputMaybe<Array<InstitutionWhereInput>>;
  OR?: InputMaybe<Array<InstitutionWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  findAuction_details?: InputMaybe<FindAuctionManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type InstitutionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
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
  createContactUs?: Maybe<ContactUs>;
  createContactuses?: Maybe<Array<Maybe<ContactUs>>>;
  createCoupen?: Maybe<Coupen>;
  createCoupens?: Maybe<Array<Maybe<Coupen>>>;
  createDeletedBid?: Maybe<DeletedBid>;
  createDeletedBids?: Maybe<Array<Maybe<DeletedBid>>>;
  createEmdUpdate?: Maybe<EmdUpdate>;
  createEmdUpdates?: Maybe<Array<Maybe<EmdUpdate>>>;
  createEvent?: Maybe<Event>;
  createEventType?: Maybe<EventType>;
  createEventTypes?: Maybe<Array<Maybe<EventType>>>;
  createEvents?: Maybe<Array<Maybe<Event>>>;
  createExcelUpload?: Maybe<ExcelUpload>;
  createExcelUploads?: Maybe<Array<Maybe<ExcelUpload>>>;
  createFindAuction?: Maybe<FindAuction>;
  createFindAuctions?: Maybe<Array<Maybe<FindAuction>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createInstitution?: Maybe<Institution>;
  createInstitutions?: Maybe<Array<Maybe<Institution>>>;
  createLocation?: Maybe<Location>;
  createLocations?: Maybe<Array<Maybe<Location>>>;
  createPayment?: Maybe<Payment>;
  createPayments?: Maybe<Array<Maybe<Payment>>>;
  createSellACar?: Maybe<SellACar>;
  createSellACars?: Maybe<Array<Maybe<SellACar>>>;
  createSeller?: Maybe<Seller>;
  createSellers?: Maybe<Array<Maybe<Seller>>>;
  createState?: Maybe<State>;
  createStates?: Maybe<Array<Maybe<State>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  createVehicle?: Maybe<Vehicle>;
  createVehicles?: Maybe<Array<Maybe<Vehicle>>>;
  createWorkSheet?: Maybe<WorkSheet>;
  createWorkSheets?: Maybe<Array<Maybe<WorkSheet>>>;
  deleteBid?: Maybe<Bid>;
  deleteBids?: Maybe<Array<Maybe<Bid>>>;
  deleteContactUs?: Maybe<ContactUs>;
  deleteContactuses?: Maybe<Array<Maybe<ContactUs>>>;
  deleteCoupen?: Maybe<Coupen>;
  deleteCoupens?: Maybe<Array<Maybe<Coupen>>>;
  deleteDeletedBid?: Maybe<DeletedBid>;
  deleteDeletedBids?: Maybe<Array<Maybe<DeletedBid>>>;
  deleteEmdUpdate?: Maybe<EmdUpdate>;
  deleteEmdUpdates?: Maybe<Array<Maybe<EmdUpdate>>>;
  deleteEvent?: Maybe<Event>;
  deleteEventType?: Maybe<EventType>;
  deleteEventTypes?: Maybe<Array<Maybe<EventType>>>;
  deleteEvents?: Maybe<Array<Maybe<Event>>>;
  deleteExcelUpload?: Maybe<ExcelUpload>;
  deleteExcelUploads?: Maybe<Array<Maybe<ExcelUpload>>>;
  deleteFindAuction?: Maybe<FindAuction>;
  deleteFindAuctions?: Maybe<Array<Maybe<FindAuction>>>;
  deleteInstitution?: Maybe<Institution>;
  deleteInstitutions?: Maybe<Array<Maybe<Institution>>>;
  deleteLocation?: Maybe<Location>;
  deleteLocations?: Maybe<Array<Maybe<Location>>>;
  deletePayment?: Maybe<Payment>;
  deletePayments?: Maybe<Array<Maybe<Payment>>>;
  deleteSellACar?: Maybe<SellACar>;
  deleteSellACars?: Maybe<Array<Maybe<SellACar>>>;
  deleteSeller?: Maybe<Seller>;
  deleteSellers?: Maybe<Array<Maybe<Seller>>>;
  deleteState?: Maybe<State>;
  deleteStates?: Maybe<Array<Maybe<State>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  deleteVehicle?: Maybe<Vehicle>;
  deleteVehicles?: Maybe<Array<Maybe<Vehicle>>>;
  deleteWorkSheet?: Maybe<WorkSheet>;
  deleteWorkSheets?: Maybe<Array<Maybe<WorkSheet>>>;
  endSession: Scalars['Boolean'];
  redeemUserMagicAuthToken: RedeemUserMagicAuthTokenResult;
  sendUserMagicAuthLink: Scalars['Boolean'];
  updateBid?: Maybe<Bid>;
  updateBids?: Maybe<Array<Maybe<Bid>>>;
  updateContactUs?: Maybe<ContactUs>;
  updateContactuses?: Maybe<Array<Maybe<ContactUs>>>;
  updateCoupen?: Maybe<Coupen>;
  updateCoupens?: Maybe<Array<Maybe<Coupen>>>;
  updateDeletedBid?: Maybe<DeletedBid>;
  updateDeletedBids?: Maybe<Array<Maybe<DeletedBid>>>;
  updateEmdUpdate?: Maybe<EmdUpdate>;
  updateEmdUpdates?: Maybe<Array<Maybe<EmdUpdate>>>;
  updateEvent?: Maybe<Event>;
  updateEventType?: Maybe<EventType>;
  updateEventTypes?: Maybe<Array<Maybe<EventType>>>;
  updateEvents?: Maybe<Array<Maybe<Event>>>;
  updateExcelUpload?: Maybe<ExcelUpload>;
  updateExcelUploads?: Maybe<Array<Maybe<ExcelUpload>>>;
  updateFindAuction?: Maybe<FindAuction>;
  updateFindAuctions?: Maybe<Array<Maybe<FindAuction>>>;
  updateInstitution?: Maybe<Institution>;
  updateInstitutions?: Maybe<Array<Maybe<Institution>>>;
  updateLocation?: Maybe<Location>;
  updateLocations?: Maybe<Array<Maybe<Location>>>;
  updatePayment?: Maybe<Payment>;
  updatePayments?: Maybe<Array<Maybe<Payment>>>;
  updateSellACar?: Maybe<SellACar>;
  updateSellACars?: Maybe<Array<Maybe<SellACar>>>;
  updateSeller?: Maybe<Seller>;
  updateSellers?: Maybe<Array<Maybe<Seller>>>;
  updateState?: Maybe<State>;
  updateStates?: Maybe<Array<Maybe<State>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
  updateVehicle?: Maybe<Vehicle>;
  updateVehicles?: Maybe<Array<Maybe<Vehicle>>>;
  updateWorkSheet?: Maybe<WorkSheet>;
  updateWorkSheets?: Maybe<Array<Maybe<WorkSheet>>>;
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


export type MutationCreateContactUsArgs = {
  data: ContactUsCreateInput;
};


export type MutationCreateContactusesArgs = {
  data: Array<ContactUsCreateInput>;
};


export type MutationCreateCoupenArgs = {
  data: CoupenCreateInput;
};


export type MutationCreateCoupensArgs = {
  data: Array<CoupenCreateInput>;
};


export type MutationCreateDeletedBidArgs = {
  data: DeletedBidCreateInput;
};


export type MutationCreateDeletedBidsArgs = {
  data: Array<DeletedBidCreateInput>;
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


export type MutationCreateFindAuctionArgs = {
  data: FindAuctionCreateInput;
};


export type MutationCreateFindAuctionsArgs = {
  data: Array<FindAuctionCreateInput>;
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreateInstitutionArgs = {
  data: InstitutionCreateInput;
};


export type MutationCreateInstitutionsArgs = {
  data: Array<InstitutionCreateInput>;
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


export type MutationCreateSellACarArgs = {
  data: SellACarCreateInput;
};


export type MutationCreateSellACarsArgs = {
  data: Array<SellACarCreateInput>;
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


export type MutationCreateWorkSheetArgs = {
  data: WorkSheetCreateInput;
};


export type MutationCreateWorkSheetsArgs = {
  data: Array<WorkSheetCreateInput>;
};


export type MutationDeleteBidArgs = {
  where: BidWhereUniqueInput;
};


export type MutationDeleteBidsArgs = {
  where: Array<BidWhereUniqueInput>;
};


export type MutationDeleteContactUsArgs = {
  where: ContactUsWhereUniqueInput;
};


export type MutationDeleteContactusesArgs = {
  where: Array<ContactUsWhereUniqueInput>;
};


export type MutationDeleteCoupenArgs = {
  where: CoupenWhereUniqueInput;
};


export type MutationDeleteCoupensArgs = {
  where: Array<CoupenWhereUniqueInput>;
};


export type MutationDeleteDeletedBidArgs = {
  where: DeletedBidWhereUniqueInput;
};


export type MutationDeleteDeletedBidsArgs = {
  where: Array<DeletedBidWhereUniqueInput>;
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


export type MutationDeleteFindAuctionArgs = {
  where: FindAuctionWhereUniqueInput;
};


export type MutationDeleteFindAuctionsArgs = {
  where: Array<FindAuctionWhereUniqueInput>;
};


export type MutationDeleteInstitutionArgs = {
  where: InstitutionWhereUniqueInput;
};


export type MutationDeleteInstitutionsArgs = {
  where: Array<InstitutionWhereUniqueInput>;
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


export type MutationDeleteSellACarArgs = {
  where: SellACarWhereUniqueInput;
};


export type MutationDeleteSellACarsArgs = {
  where: Array<SellACarWhereUniqueInput>;
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


export type MutationDeleteWorkSheetArgs = {
  where: WorkSheetWhereUniqueInput;
};


export type MutationDeleteWorkSheetsArgs = {
  where: Array<WorkSheetWhereUniqueInput>;
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


export type MutationUpdateContactUsArgs = {
  data: ContactUsUpdateInput;
  where: ContactUsWhereUniqueInput;
};


export type MutationUpdateContactusesArgs = {
  data: Array<ContactUsUpdateArgs>;
};


export type MutationUpdateCoupenArgs = {
  data: CoupenUpdateInput;
  where: CoupenWhereUniqueInput;
};


export type MutationUpdateCoupensArgs = {
  data: Array<CoupenUpdateArgs>;
};


export type MutationUpdateDeletedBidArgs = {
  data: DeletedBidUpdateInput;
  where: DeletedBidWhereUniqueInput;
};


export type MutationUpdateDeletedBidsArgs = {
  data: Array<DeletedBidUpdateArgs>;
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


export type MutationUpdateFindAuctionArgs = {
  data: FindAuctionUpdateInput;
  where: FindAuctionWhereUniqueInput;
};


export type MutationUpdateFindAuctionsArgs = {
  data: Array<FindAuctionUpdateArgs>;
};


export type MutationUpdateInstitutionArgs = {
  data: InstitutionUpdateInput;
  where: InstitutionWhereUniqueInput;
};


export type MutationUpdateInstitutionsArgs = {
  data: Array<InstitutionUpdateArgs>;
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


export type MutationUpdateSellACarArgs = {
  data: SellACarUpdateInput;
  where: SellACarWhereUniqueInput;
};


export type MutationUpdateSellACarsArgs = {
  data: Array<SellACarUpdateArgs>;
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


export type MutationUpdateWorkSheetArgs = {
  data: WorkSheetUpdateInput;
  where: WorkSheetWhereUniqueInput;
};


export type MutationUpdateWorkSheetsArgs = {
  data: Array<WorkSheetUpdateArgs>;
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
  RegistrationExpire?: Maybe<Scalars['DateTime']>;
  amount?: Maybe<Scalars['Int']>;
  coupenDetail?: Maybe<Array<Coupen>>;
  coupenDetailCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
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


export type PaymentCoupenDetailArgs = {
  orderBy?: Array<CoupenOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CoupenWhereInput;
};


export type PaymentCoupenDetailCountArgs = {
  where?: CoupenWhereInput;
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
  RegistrationExpire?: InputMaybe<Scalars['DateTime']>;
  amount?: InputMaybe<Scalars['Int']>;
  coupenDetail?: InputMaybe<CoupenRelateToManyForCreateInput>;
  createdBy?: InputMaybe<UserRelateToOneForCreateInput>;
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
  RegistrationExpire?: InputMaybe<OrderDirection>;
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
  RegistrationExpire?: InputMaybe<Scalars['DateTime']>;
  amount?: InputMaybe<Scalars['Int']>;
  coupenDetail?: InputMaybe<CoupenRelateToManyForUpdateInput>;
  createdBy?: InputMaybe<UserRelateToOneForUpdateInput>;
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
  RegistrationExpire?: InputMaybe<DateTimeNullableFilter>;
  amount?: InputMaybe<IntNullableFilter>;
  coupenDetail?: InputMaybe<CoupenManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
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
  contactUs?: Maybe<ContactUs>;
  contactuses?: Maybe<Array<ContactUs>>;
  contactusesCount?: Maybe<Scalars['Int']>;
  coupen?: Maybe<Coupen>;
  coupens?: Maybe<Array<Coupen>>;
  coupensCount?: Maybe<Scalars['Int']>;
  deletedBid?: Maybe<DeletedBid>;
  deletedBids?: Maybe<Array<DeletedBid>>;
  deletedBidsCount?: Maybe<Scalars['Int']>;
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
  findAuction?: Maybe<FindAuction>;
  findAuctions?: Maybe<Array<FindAuction>>;
  findAuctionsCount?: Maybe<Scalars['Int']>;
  institution?: Maybe<Institution>;
  institutions?: Maybe<Array<Institution>>;
  institutionsCount?: Maybe<Scalars['Int']>;
  keystone: KeystoneMeta;
  /** Live Events */
  liveEvents?: Maybe<Array<Maybe<Event>>>;
  location?: Maybe<Location>;
  locations?: Maybe<Array<Location>>;
  locationsCount?: Maybe<Scalars['Int']>;
  payment?: Maybe<Payment>;
  payments?: Maybe<Array<Payment>>;
  paymentsCount?: Maybe<Scalars['Int']>;
  sellACar?: Maybe<SellACar>;
  sellACars?: Maybe<Array<SellACar>>;
  sellACarsCount?: Maybe<Scalars['Int']>;
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
  workSheet?: Maybe<WorkSheet>;
  workSheets?: Maybe<Array<WorkSheet>>;
  workSheetsCount?: Maybe<Scalars['Int']>;
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


export type QueryContactUsArgs = {
  where: ContactUsWhereUniqueInput;
};


export type QueryContactusesArgs = {
  orderBy?: Array<ContactUsOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ContactUsWhereInput;
};


export type QueryContactusesCountArgs = {
  where?: ContactUsWhereInput;
};


export type QueryCoupenArgs = {
  where: CoupenWhereUniqueInput;
};


export type QueryCoupensArgs = {
  orderBy?: Array<CoupenOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CoupenWhereInput;
};


export type QueryCoupensCountArgs = {
  where?: CoupenWhereInput;
};


export type QueryDeletedBidArgs = {
  where: DeletedBidWhereUniqueInput;
};


export type QueryDeletedBidsArgs = {
  orderBy?: Array<DeletedBidOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: DeletedBidWhereInput;
};


export type QueryDeletedBidsCountArgs = {
  where?: DeletedBidWhereInput;
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


export type QueryFindAuctionArgs = {
  where: FindAuctionWhereUniqueInput;
};


export type QueryFindAuctionsArgs = {
  orderBy?: Array<FindAuctionOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: FindAuctionWhereInput;
};


export type QueryFindAuctionsCountArgs = {
  where?: FindAuctionWhereInput;
};


export type QueryInstitutionArgs = {
  where: InstitutionWhereUniqueInput;
};


export type QueryInstitutionsArgs = {
  orderBy?: Array<InstitutionOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: InstitutionWhereInput;
};


export type QueryInstitutionsCountArgs = {
  where?: InstitutionWhereInput;
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


export type QuerySellACarArgs = {
  where: SellACarWhereUniqueInput;
};


export type QuerySellACarsArgs = {
  orderBy?: Array<SellACarOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: SellACarWhereInput;
};


export type QuerySellACarsCountArgs = {
  where?: SellACarWhereInput;
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


export type QueryWorkSheetArgs = {
  where: WorkSheetWhereUniqueInput;
};


export type QueryWorkSheetsArgs = {
  orderBy?: Array<WorkSheetOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: WorkSheetWhereInput;
};


export type QueryWorkSheetsCountArgs = {
  where?: WorkSheetWhereInput;
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

export type SellACar = {
  __typename?: 'SellACar';
  address?: Maybe<Scalars['String']>;
  clientContactNo?: Maybe<Scalars['String']>;
  clientContactPerson?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  engineNo?: Maybe<Scalars['String']>;
  expectToSell?: Maybe<Scalars['String']>;
  fuel?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  images?: Maybe<Scalars['String']>;
  kmReading?: Maybe<Scalars['Int']>;
  make?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  registrationNumber?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  varient?: Maybe<Scalars['String']>;
  vehicleCondition?: Maybe<Scalars['String']>;
  vehicleIndexNo?: Maybe<Scalars['Int']>;
  veicleLocation?: Maybe<Scalars['String']>;
  yearOfManufacture?: Maybe<Scalars['Int']>;
};

export type SellACarCreateInput = {
  address?: InputMaybe<Scalars['String']>;
  clientContactNo?: InputMaybe<Scalars['String']>;
  clientContactPerson?: InputMaybe<Scalars['String']>;
  engineNo?: InputMaybe<Scalars['String']>;
  expectToSell?: InputMaybe<Scalars['String']>;
  fuel?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Scalars['String']>;
  kmReading?: InputMaybe<Scalars['Int']>;
  make?: InputMaybe<Scalars['String']>;
  model?: InputMaybe<Scalars['String']>;
  registrationNumber?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  varient?: InputMaybe<Scalars['String']>;
  vehicleCondition?: InputMaybe<Scalars['String']>;
  vehicleIndexNo?: InputMaybe<Scalars['Int']>;
  veicleLocation?: InputMaybe<Scalars['String']>;
  yearOfManufacture?: InputMaybe<Scalars['Int']>;
};

export type SellACarOrderByInput = {
  address?: InputMaybe<OrderDirection>;
  clientContactNo?: InputMaybe<OrderDirection>;
  clientContactPerson?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  engineNo?: InputMaybe<OrderDirection>;
  expectToSell?: InputMaybe<OrderDirection>;
  fuel?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  images?: InputMaybe<OrderDirection>;
  kmReading?: InputMaybe<OrderDirection>;
  make?: InputMaybe<OrderDirection>;
  model?: InputMaybe<OrderDirection>;
  registrationNumber?: InputMaybe<OrderDirection>;
  state?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  varient?: InputMaybe<OrderDirection>;
  vehicleCondition?: InputMaybe<OrderDirection>;
  vehicleIndexNo?: InputMaybe<OrderDirection>;
  veicleLocation?: InputMaybe<OrderDirection>;
  yearOfManufacture?: InputMaybe<OrderDirection>;
};

export type SellACarUpdateArgs = {
  data: SellACarUpdateInput;
  where: SellACarWhereUniqueInput;
};

export type SellACarUpdateInput = {
  address?: InputMaybe<Scalars['String']>;
  clientContactNo?: InputMaybe<Scalars['String']>;
  clientContactPerson?: InputMaybe<Scalars['String']>;
  engineNo?: InputMaybe<Scalars['String']>;
  expectToSell?: InputMaybe<Scalars['String']>;
  fuel?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Scalars['String']>;
  kmReading?: InputMaybe<Scalars['Int']>;
  make?: InputMaybe<Scalars['String']>;
  model?: InputMaybe<Scalars['String']>;
  registrationNumber?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  varient?: InputMaybe<Scalars['String']>;
  vehicleCondition?: InputMaybe<Scalars['String']>;
  vehicleIndexNo?: InputMaybe<Scalars['Int']>;
  veicleLocation?: InputMaybe<Scalars['String']>;
  yearOfManufacture?: InputMaybe<Scalars['Int']>;
};

export type SellACarWhereInput = {
  AND?: InputMaybe<Array<SellACarWhereInput>>;
  NOT?: InputMaybe<Array<SellACarWhereInput>>;
  OR?: InputMaybe<Array<SellACarWhereInput>>;
  address?: InputMaybe<StringFilter>;
  clientContactNo?: InputMaybe<StringFilter>;
  clientContactPerson?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  engineNo?: InputMaybe<StringFilter>;
  expectToSell?: InputMaybe<StringFilter>;
  fuel?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  images?: InputMaybe<StringFilter>;
  kmReading?: InputMaybe<IntNullableFilter>;
  make?: InputMaybe<StringFilter>;
  model?: InputMaybe<StringFilter>;
  registrationNumber?: InputMaybe<StringFilter>;
  state?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  varient?: InputMaybe<StringFilter>;
  vehicleCondition?: InputMaybe<StringFilter>;
  vehicleIndexNo?: InputMaybe<IntFilter>;
  veicleLocation?: InputMaybe<StringFilter>;
  yearOfManufacture?: InputMaybe<IntNullableFilter>;
};

export type SellACarWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
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
  find_auction_state?: Maybe<Array<FindAuction>>;
  find_auction_stateCount?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  locations?: Maybe<Array<Location>>;
  locationsCount?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']>;
};


export type StateFind_Auction_StateArgs = {
  orderBy?: Array<FindAuctionOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: FindAuctionWhereInput;
};


export type StateFind_Auction_StateCountArgs = {
  where?: FindAuctionWhereInput;
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
  find_auction_state?: InputMaybe<FindAuctionRelateToManyForCreateInput>;
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
  find_auction_state?: InputMaybe<FindAuctionRelateToManyForUpdateInput>;
  locations?: InputMaybe<LocationRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<UserRelateToManyForUpdateInput>;
};

export type StateWhereInput = {
  AND?: InputMaybe<Array<StateWhereInput>>;
  NOT?: InputMaybe<Array<StateWhereInput>>;
  OR?: InputMaybe<Array<StateWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  find_auction_state?: InputMaybe<FindAuctionManyRelationFilter>;
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
  coupenDetail?: Maybe<Array<Coupen>>;
  coupenDetailCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currentVehicleBuyingLimit?: Maybe<VehicleBuyingLimits>;
  dealerId?: Maybe<Scalars['String']>;
  dealership?: Maybe<ImageFieldOutput>;
  deletedBid?: Maybe<Array<DeletedBid>>;
  deletedBidCount?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  emdUpdates?: Maybe<Array<EmdUpdate>>;
  emdUpdatesByAdmin?: Maybe<Array<EmdUpdate>>;
  emdUpdatesByAdminCount?: Maybe<Scalars['Int']>;
  emdUpdatesCount?: Maybe<Scalars['Int']>;
  eventDetail?: Maybe<Array<Event>>;
  eventDetailCount?: Maybe<Scalars['Int']>;
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
  paymentByAdmin?: Maybe<Payment>;
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
  workSheetDetail?: Maybe<Array<WorkSheet>>;
  workSheetDetailCount?: Maybe<Scalars['Int']>;
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


export type UserCoupenDetailArgs = {
  orderBy?: Array<CoupenOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CoupenWhereInput;
};


export type UserCoupenDetailCountArgs = {
  where?: CoupenWhereInput;
};


export type UserDeletedBidArgs = {
  orderBy?: Array<DeletedBidOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: DeletedBidWhereInput;
};


export type UserDeletedBidCountArgs = {
  where?: DeletedBidWhereInput;
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


export type UserEventDetailArgs = {
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: EventWhereInput;
};


export type UserEventDetailCountArgs = {
  where?: EventWhereInput;
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


export type UserWorkSheetDetailArgs = {
  orderBy?: Array<WorkSheetOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: WorkSheetWhereInput;
};


export type UserWorkSheetDetailCountArgs = {
  where?: WorkSheetWhereInput;
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
  coupenDetail?: InputMaybe<CoupenRelateToManyForCreateInput>;
  dealerId?: InputMaybe<Scalars['String']>;
  dealership?: InputMaybe<ImageFieldInput>;
  deletedBid?: InputMaybe<DeletedBidRelateToManyForCreateInput>;
  email?: InputMaybe<Scalars['String']>;
  emdUpdates?: InputMaybe<EmdUpdateRelateToManyForCreateInput>;
  emdUpdatesByAdmin?: InputMaybe<EmdUpdateRelateToManyForCreateInput>;
  eventDetail?: InputMaybe<EventRelateToManyForCreateInput>;
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
  paymentByAdmin?: InputMaybe<PaymentRelateToOneForCreateInput>;
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
  workSheetDetail?: InputMaybe<WorkSheetRelateToManyForCreateInput>;
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
  coupenDetail?: InputMaybe<CoupenRelateToManyForUpdateInput>;
  dealerId?: InputMaybe<Scalars['String']>;
  dealership?: InputMaybe<ImageFieldInput>;
  deletedBid?: InputMaybe<DeletedBidRelateToManyForUpdateInput>;
  email?: InputMaybe<Scalars['String']>;
  emdUpdates?: InputMaybe<EmdUpdateRelateToManyForUpdateInput>;
  emdUpdatesByAdmin?: InputMaybe<EmdUpdateRelateToManyForUpdateInput>;
  eventDetail?: InputMaybe<EventRelateToManyForUpdateInput>;
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
  paymentByAdmin?: InputMaybe<PaymentRelateToOneForUpdateInput>;
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
  workSheetDetail?: InputMaybe<WorkSheetRelateToManyForUpdateInput>;
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
  coupenDetail?: InputMaybe<CoupenManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  dealerId?: InputMaybe<StringFilter>;
  deletedBid?: InputMaybe<DeletedBidManyRelationFilter>;
  email?: InputMaybe<StringFilter>;
  emdUpdates?: InputMaybe<EmdUpdateManyRelationFilter>;
  emdUpdatesByAdmin?: InputMaybe<EmdUpdateManyRelationFilter>;
  eventDetail?: InputMaybe<EventManyRelationFilter>;
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
  paymentByAdmin?: InputMaybe<PaymentWhereInput>;
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
  workSheetDetail?: InputMaybe<WorkSheetManyRelationFilter>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  idNo?: InputMaybe<Scalars['Int']>;
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
  coupenDetail?: Maybe<Coupen>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currentBidAmount?: Maybe<Scalars['Int']>;
  currentBidUser?: Maybe<User>;
  dateOfRegistration?: Maybe<Scalars['DateTime']>;
  deletedBid?: Maybe<Array<DeletedBid>>;
  deletedBidCount?: Maybe<Scalars['Int']>;
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


export type VehicleDeletedBidArgs = {
  orderBy?: Array<DeletedBidOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: DeletedBidWhereInput;
};


export type VehicleDeletedBidCountArgs = {
  where?: DeletedBidWhereInput;
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
  coupenDetail?: InputMaybe<CoupenRelateToOneForCreateInput>;
  currentBidAmount?: InputMaybe<Scalars['Int']>;
  currentBidUser?: InputMaybe<UserRelateToOneForCreateInput>;
  dateOfRegistration?: InputMaybe<Scalars['DateTime']>;
  deletedBid?: InputMaybe<DeletedBidRelateToManyForCreateInput>;
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
  coupenDetail?: InputMaybe<CoupenRelateToOneForUpdateInput>;
  currentBidAmount?: InputMaybe<Scalars['Int']>;
  currentBidUser?: InputMaybe<UserRelateToOneForUpdateInput>;
  dateOfRegistration?: InputMaybe<Scalars['DateTime']>;
  deletedBid?: InputMaybe<DeletedBidRelateToManyForUpdateInput>;
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
  coupenDetail?: InputMaybe<CoupenWhereInput>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  currentBidAmount?: InputMaybe<IntNullableFilter>;
  currentBidUser?: InputMaybe<UserWhereInput>;
  dateOfRegistration?: InputMaybe<DateTimeNullableFilter>;
  deletedBid?: InputMaybe<DeletedBidManyRelationFilter>;
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

export type WorkSheet = {
  __typename?: 'WorkSheet';
  chassis?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  engineNo?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image1?: Maybe<Scalars['String']>;
  image2?: Maybe<Scalars['String']>;
  image3?: Maybe<Scalars['String']>;
  image4?: Maybe<Scalars['String']>;
  image5?: Maybe<Scalars['String']>;
  make?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  registrationNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userDetail?: Maybe<User>;
  varient?: Maybe<Scalars['String']>;
  vehicleCondition?: Maybe<Scalars['String']>;
  videoUrl?: Maybe<Scalars['String']>;
  voiceRecordUrl?: Maybe<Scalars['String']>;
};

export type WorkSheetCreateInput = {
  chassis?: InputMaybe<Scalars['String']>;
  engineNo?: InputMaybe<Scalars['String']>;
  image1?: InputMaybe<Scalars['String']>;
  image2?: InputMaybe<Scalars['String']>;
  image3?: InputMaybe<Scalars['String']>;
  image4?: InputMaybe<Scalars['String']>;
  image5?: InputMaybe<Scalars['String']>;
  make?: InputMaybe<Scalars['String']>;
  model?: InputMaybe<Scalars['String']>;
  registrationNumber?: InputMaybe<Scalars['String']>;
  userDetail?: InputMaybe<UserRelateToOneForCreateInput>;
  varient?: InputMaybe<Scalars['String']>;
  vehicleCondition?: InputMaybe<Scalars['String']>;
  videoUrl?: InputMaybe<Scalars['String']>;
  voiceRecordUrl?: InputMaybe<Scalars['String']>;
};

export type WorkSheetManyRelationFilter = {
  every?: InputMaybe<WorkSheetWhereInput>;
  none?: InputMaybe<WorkSheetWhereInput>;
  some?: InputMaybe<WorkSheetWhereInput>;
};

export type WorkSheetOrderByInput = {
  chassis?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  engineNo?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  image1?: InputMaybe<OrderDirection>;
  image2?: InputMaybe<OrderDirection>;
  image3?: InputMaybe<OrderDirection>;
  image4?: InputMaybe<OrderDirection>;
  image5?: InputMaybe<OrderDirection>;
  make?: InputMaybe<OrderDirection>;
  model?: InputMaybe<OrderDirection>;
  registrationNumber?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  varient?: InputMaybe<OrderDirection>;
  vehicleCondition?: InputMaybe<OrderDirection>;
  videoUrl?: InputMaybe<OrderDirection>;
  voiceRecordUrl?: InputMaybe<OrderDirection>;
};

export type WorkSheetRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<WorkSheetWhereUniqueInput>>;
  create?: InputMaybe<Array<WorkSheetCreateInput>>;
};

export type WorkSheetRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<WorkSheetWhereUniqueInput>>;
  create?: InputMaybe<Array<WorkSheetCreateInput>>;
  disconnect?: InputMaybe<Array<WorkSheetWhereUniqueInput>>;
  set?: InputMaybe<Array<WorkSheetWhereUniqueInput>>;
};

export type WorkSheetUpdateArgs = {
  data: WorkSheetUpdateInput;
  where: WorkSheetWhereUniqueInput;
};

export type WorkSheetUpdateInput = {
  chassis?: InputMaybe<Scalars['String']>;
  engineNo?: InputMaybe<Scalars['String']>;
  image1?: InputMaybe<Scalars['String']>;
  image2?: InputMaybe<Scalars['String']>;
  image3?: InputMaybe<Scalars['String']>;
  image4?: InputMaybe<Scalars['String']>;
  image5?: InputMaybe<Scalars['String']>;
  make?: InputMaybe<Scalars['String']>;
  model?: InputMaybe<Scalars['String']>;
  registrationNumber?: InputMaybe<Scalars['String']>;
  userDetail?: InputMaybe<UserRelateToOneForUpdateInput>;
  varient?: InputMaybe<Scalars['String']>;
  vehicleCondition?: InputMaybe<Scalars['String']>;
  videoUrl?: InputMaybe<Scalars['String']>;
  voiceRecordUrl?: InputMaybe<Scalars['String']>;
};

export type WorkSheetWhereInput = {
  AND?: InputMaybe<Array<WorkSheetWhereInput>>;
  NOT?: InputMaybe<Array<WorkSheetWhereInput>>;
  OR?: InputMaybe<Array<WorkSheetWhereInput>>;
  chassis?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  engineNo?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  image1?: InputMaybe<StringFilter>;
  image2?: InputMaybe<StringFilter>;
  image3?: InputMaybe<StringFilter>;
  image4?: InputMaybe<StringFilter>;
  image5?: InputMaybe<StringFilter>;
  make?: InputMaybe<StringFilter>;
  model?: InputMaybe<StringFilter>;
  registrationNumber?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userDetail?: InputMaybe<UserWhereInput>;
  varient?: InputMaybe<StringFilter>;
  vehicleCondition?: InputMaybe<StringFilter>;
  videoUrl?: InputMaybe<StringFilter>;
  voiceRecordUrl?: InputMaybe<StringFilter>;
};

export type WorkSheetWhereUniqueInput = {
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


export type ActiveBidsPerUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, activeBidsCount?: number | null, states?: Array<{ __typename?: 'State', id: string, name?: string | null }> | null, activeBids?: Array<{ __typename?: 'Vehicle', bidAmountUpdate?: number | null, startBidAmount?: number | null, currentBidAmount?: number | null, id: string, registrationNumber?: string | null, bidStatus?: VehicleBidStatusType | null, bidTimeExpire?: any | null, vehicleIndexNo?: number | null, totalBids?: number | null, userVehicleBidsCount?: number | null }> | null } | null };

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

export type UserauthenticationQueryVariables = Exact<{ [key: string]: never; }>;


export type UserauthenticationQuery = { __typename?: 'Query', authenticatedItem?: { __typename?: 'User', username?: string | null, role?: UserRoleType | null, state?: string | null } | null };

export type CreateBidMutationVariables = Exact<{
  data: BidCreateInput;
}>;


export type CreateBidMutation = { __typename?: 'Mutation', createBid?: { __typename?: 'Bid', amount?: number | null, bidVehicle?: { __typename?: 'Vehicle', id: string } | null, user?: { __typename?: 'User', id: string } | null } | null };

export type BidsTableQueryVariables = Exact<{ [key: string]: never; }>;


export type BidsTableQuery = { __typename?: 'Query', bids?: Array<{ __typename?: 'Bid', id: string, amount?: number | null, name?: string | null, createdAt?: any | null, updatedAt?: any | null, bidVehicle?: { __typename?: 'Vehicle', id: string, registrationNumber?: string | null } | null, user?: { __typename?: 'User', firstName?: string | null, lastName?: string | null, id: string } | null }> | null };

export type BidDetailsPerVehicleQueryVariables = Exact<{
  where: VehicleWhereUniqueInput;
}>;


export type BidDetailsPerVehicleQuery = { __typename?: 'Query', vehicle?: { __typename?: 'Vehicle', id: string, make?: string | null, registrationNumber?: string | null, vehicleIndexNo?: number | null, userVehicleBidsCount?: number | null, vehicleEventStatus?: VehicleEventStatus | null, watchedByCount?: number | null, bidStatus?: VehicleBidStatusType | null, currentBidAmount?: number | null, event?: { __typename?: 'Event', eventNo?: number | null, seller?: { __typename?: 'Seller', name?: string | null } | null } | null, userVehicleBids?: Array<{ __typename?: 'Bid', amount?: number | null, id: string, createdAt?: any | null, user?: { __typename?: 'User', id: string, idNo?: number | null, firstName?: string | null, lastName?: string | null, mobile?: string | null } | null }> | null, currentBidUser?: { __typename?: 'User', id: string, idNo?: number | null, username?: string | null, firstName?: string | null, lastName?: string | null } | null } | null };

export type UpdateBidMutationVariables = Exact<{
  where: BidWhereUniqueInput;
  data: BidUpdateInput;
}>;


export type UpdateBidMutation = { __typename?: 'Mutation', updateBid?: { __typename?: 'Bid', id: string, user?: { __typename?: 'User', idNo?: number | null } | null } | null };

export type DeleteBidMutationVariables = Exact<{
  where: BidWhereUniqueInput;
}>;


export type DeleteBidMutation = { __typename?: 'Mutation', deleteBid?: { __typename?: 'Bid', id: string } | null };

export type DeletedBiddataMutationVariables = Exact<{
  data: DeletedBidCreateInput;
}>;


export type DeletedBiddataMutation = { __typename?: 'Mutation', createDeletedBid?: { __typename?: 'DeletedBid', id: string } | null };

export type DeletedBidsperVehicleQueryVariables = Exact<{
  where: DeletedBidWhereInput;
}>;


export type DeletedBidsperVehicleQuery = { __typename?: 'Query', deletedBids?: Array<{ __typename?: 'DeletedBid', amount?: number | null, user?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, mobile?: string | null, idNo?: number | null } | null }> | null };

export type BuyingLimitQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type BuyingLimitQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, emdUpdates?: Array<{ __typename?: 'EmdUpdate', id: string, emdNo?: number | null, vehicleBuyingLimitIncrement?: number | null, createdAt?: any | null, payment?: { __typename?: 'Payment', amount?: number | null, id: string } | null, createdBy?: { __typename?: 'User', id: string, firstName?: string | null } | null }> | null } | null };

export type CountQueryVariables = Exact<{ [key: string]: never; }>;


export type CountQuery = { __typename?: 'Query', usersCount?: number | null, paymentsCount?: number | null, emdUpdatesCount?: number | null, eventsCount?: number | null, vehiclesCount?: number | null, bidsCount?: number | null, eventTypesCount?: number | null, locationsCount?: number | null, statesCount?: number | null, excelUploadsCount?: number | null, sellersCount?: number | null };

export type CoupensperUserQueryVariables = Exact<{
  where: CoupenWhereInput;
}>;


export type CoupensperUserQuery = { __typename?: 'Query', coupens?: Array<{ __typename?: 'Coupen', id: string, coupenNumber?: string | null, coupenStatus?: CoupenCoupenStatusType | null, vehicleDetail?: { __typename?: 'Vehicle', registrationNumber?: string | null, id: string } | null, userDetail?: { __typename?: 'User', firstName?: string | null, lastName?: string | null } | null }> | null };

export type UpdateCoupenMutationVariables = Exact<{
  where: CoupenWhereUniqueInput;
  data: CoupenUpdateInput;
}>;


export type UpdateCoupenMutation = { __typename?: 'Mutation', updateCoupen?: { __typename?: 'Coupen', coupenStatus?: CoupenCoupenStatusType | null } | null };

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


export type CreateEmdUpdateMutation = { __typename?: 'Mutation', createEmdUpdate?: { __typename?: 'EmdUpdate', id: string, vehicleBuyingLimitIncrement?: number | null, payment?: { __typename?: 'Payment', id: string } | null } | null };

export type EmdTableQueryVariables = Exact<{ [key: string]: never; }>;


export type EmdTableQuery = { __typename?: 'Query', emdUpdates?: Array<{ __typename?: 'EmdUpdate', id: string, emdNo?: number | null, specialVehicleBuyingLimitIncrement?: number | null, vehicleBuyingLimitIncrement?: number | null, createdAt?: any | null, updatedAt?: any | null, user?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } | null, createdBy?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } | null }> | null };

export type EmdUpdateQueryVariables = Exact<{
  where: EmdUpdateWhereUniqueInput;
}>;


export type EmdUpdateQuery = { __typename?: 'Query', emdUpdate?: { __typename?: 'EmdUpdate', id: string, emdNo?: number | null, vehicleBuyingLimitIncrement?: number | null, payment?: { __typename?: 'Payment', amount?: number | null, image?: { __typename?: 'ImageFieldOutput', url: string } | null } | null, user?: { __typename?: 'User', id: string, firstName?: string | null, username?: string | null } | null } | null };

export type EmdUpdatesPerPaymentQueryVariables = Exact<{
  where: EmdUpdateWhereInput;
}>;


export type EmdUpdatesPerPaymentQuery = { __typename?: 'Query', emdUpdates?: Array<{ __typename?: 'EmdUpdate', emdNo?: number | null, id: string, vehicleBuyingLimitIncrement?: number | null, payment?: { __typename?: 'Payment', id: string, amount?: number | null, coupenDetail?: Array<{ __typename?: 'Coupen', coupenNumber?: string | null, createdAt?: any | null }> | null } | null, user?: { __typename?: 'User', mobile?: string | null, firstName?: string | null, lastName?: string | null } | null, createdBy?: { __typename?: 'User', firstName?: string | null } | null }> | null };

export type DeleteEmdUpdateMutationVariables = Exact<{
  where: EmdUpdateWhereUniqueInput;
}>;


export type DeleteEmdUpdateMutation = { __typename?: 'Mutation', deleteEmdUpdate?: { __typename?: 'EmdUpdate', id: string, emdNo?: number | null } | null };

export type ContactUsQueryVariables = Exact<{ [key: string]: never; }>;


export type ContactUsQuery = { __typename?: 'Query', contactuses?: Array<{ __typename?: 'ContactUs', id: string, firstName?: string | null, lastName?: string | null, message?: string | null, status?: ContactUsStatusType | null, mobile?: string | null, subject?: string | null, createdAt?: any | null, updatedAt?: any | null }> | null };

export type UpdateContactUsMutationVariables = Exact<{
  where: ContactUsWhereUniqueInput;
  data: ContactUsUpdateInput;
}>;


export type UpdateContactUsMutation = { __typename?: 'Mutation', updateContactUs?: { __typename?: 'ContactUs', id: string, status?: ContactUsStatusType | null } | null };

export type DeleteContactUsMutationVariables = Exact<{
  where: ContactUsWhereUniqueInput;
}>;


export type DeleteContactUsMutation = { __typename?: 'Mutation', deleteContactUs?: { __typename?: 'ContactUs', id: string } | null };

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

export type EventQueryVariables = Exact<{
  where: EventWhereUniqueInput;
}>;


export type EventQuery = { __typename?: 'Query', event?: { __typename?: 'Event', id: string, eventCategory?: string | null, startDate?: any | null, endDate?: any | null, noOfBids?: number | null, status?: EventStatusType | null, termsAndConditions?: string | null, bidLock?: EventBidLockType | null, isSpecialEvent?: boolean | null, extraTime?: number | null, extraTimeTrigerIn?: number | null, vehicleLiveTimeIn?: number | null, gapInBetweenVehicles?: number | null, vehiclesCount?: number | null, seller?: { __typename?: 'Seller', name?: string | null, id: string } | null, eventType?: Array<{ __typename?: 'EventType', name?: string | null, id: string }> | null, location?: { __typename?: 'Location', name?: string | null, id: string } | null, downloadableFile?: { __typename?: 'FileFieldOutput', url: string } | null } | null };

export type EventsReportQueryVariables = Exact<{
  where: EventWhereInput;
}>;


export type EventsReportQuery = { __typename?: 'Query', events?: Array<{ __typename?: 'Event', vehiclesCount?: number | null, eventCategory?: string | null, startDate?: any | null, endDate?: any | null, noOfBids?: number | null, status?: EventStatusType | null, eventNo?: number | null, seller?: { __typename?: 'Seller', name?: string | null } | null, location?: { __typename?: 'Location', name?: string | null } | null }> | null };

export type EventsIdNoQueryVariables = Exact<{ [key: string]: never; }>;


export type EventsIdNoQuery = { __typename?: 'Query', events?: Array<{ __typename?: 'Event', id: string, eventNo?: number | null }> | null };

export type ParticipantsQueryVariables = Exact<{
  where: EventWhereUniqueInput;
  take?: InputMaybe<Scalars['Int']>;
  skip: Scalars['Int'];
  coupenDetailWhere2: CoupenWhereInput;
}>;


export type ParticipantsQuery = { __typename?: 'Query', event?: { __typename?: 'Event', eventNo?: number | null, participants?: Array<{ __typename?: 'User', id: string, firstName?: string | null, vehicleBuyingLimit?: number | null, bannedSellersCount?: number | null, categoryCount?: number | null, state?: string | null, createdAt?: any | null, dealerId?: string | null, email?: string | null, emdUpdatesByAdminCount?: number | null, emdUpdatesCount?: number | null, idNo?: number | null, idProofNo?: string | null, lastName?: string | null, mobile?: string | null, pancardNo?: string | null, paymentsCount?: number | null, role?: UserRoleType | null, username?: string | null, status?: UserStatusType | null, updatedAt?: any | null, activeBidsCount?: number | null, coupenDetailCount?: number | null, currentVehicleBuyingLimit?: { __typename?: 'vehicleBuyingLimits', vehicleBuyingLimit?: number | null } | null, coupenDetail?: Array<{ __typename?: 'Coupen', coupenNumber?: string | null }> | null }> | null } | null };

export type UpdateEventMutationVariables = Exact<{
  where: EventWhereUniqueInput;
  data: EventUpdateInput;
}>;


export type UpdateEventMutation = { __typename?: 'Mutation', updateEvent?: { __typename?: 'Event', id: string } | null };

export type DeleteEventMutationVariables = Exact<{
  where: EventWhereUniqueInput;
}>;


export type DeleteEventMutation = { __typename?: 'Mutation', deleteEvent?: { __typename?: 'Event', id: string } | null };

export type EventsPerSellerQueryVariables = Exact<{
  where: SellerWhereUniqueInput;
}>;


export type EventsPerSellerQuery = { __typename?: 'Query', seller?: { __typename?: 'Seller', id: string, name?: string | null, events?: Array<{ __typename?: 'Event', id: string, eventNo?: number | null, eventCategory?: string | null, startDate?: any | null, status?: EventStatusType | null, endDate?: any | null, vehiclesCount?: number | null, location?: { __typename?: 'Location', name?: string | null } | null, seller?: { __typename?: 'Seller', name?: string | null } | null }> | null } | null };

export type EventTableQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']>;
  skip: Scalars['Int'];
  orderBy: Array<EventOrderByInput> | EventOrderByInput;
}>;


export type EventTableQuery = { __typename?: 'Query', events?: Array<{ __typename?: 'Event', id: string, eventNo?: number | null, eventCategory?: string | null, startDate?: any | null, status?: EventStatusType | null, endDate?: any | null, vehiclesCount?: number | null, Report?: any | null, participantsCount?: number | null, location?: { __typename?: 'Location', name?: string | null } | null, seller?: { __typename?: 'Seller', name?: string | null } | null }> | null };

export type EventTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type EventTypesQuery = { __typename?: 'Query', eventTypes?: Array<{ __typename?: 'EventType', name?: string | null, id: string, events?: Array<{ __typename?: 'Event', eventNo?: number | null }> | null, users?: { __typename?: 'User', id: string } | null }> | null };

export type CreateExcelUploadMutationVariables = Exact<{
  data: ExcelUploadCreateInput;
}>;


export type CreateExcelUploadMutation = { __typename?: 'Mutation', createExcelUpload?: { __typename?: 'ExcelUpload', id: string, name?: string | null, file?: { __typename?: 'FileFieldOutput', url: string, filename: string } | null, event?: { __typename?: 'Event', id: string } | null, vehicles?: Array<{ __typename?: 'Vehicle', id: string, registrationNumber?: string | null }> | null } | null };

export type ExcelUploadsQueryVariables = Exact<{ [key: string]: never; }>;


export type ExcelUploadsQuery = { __typename?: 'Query', excelUploads?: Array<{ __typename?: 'ExcelUpload', name?: string | null, file?: { __typename?: 'FileFieldOutput', filename: string } | null, event?: { __typename?: 'Event', id: string, eventNo?: number | null } | null }> | null };

export type FindAuctionsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAuctionsQuery = { __typename?: 'Query', findAuctions?: Array<{ __typename?: 'FindAuction', address?: string | null, auctionEndDate?: any | null, auctionNotice?: string | null, auctionStartDate?: any | null, city?: string | null, contactDetails?: string | null, createdAt?: any | null, emdAmount?: any | null, emdSubmissionDate?: any | null, id: string, listingId?: number | null, propertyType?: FindAuctionPropertyTypeType | null, reservePrice?: any | null, vehicleRegNo?: string | null, institution_details?: { __typename?: 'Institution', name?: string | null } | null, state?: { __typename?: 'State', name?: string | null } | null }> | null };

export type CreateFindAuctionMutationVariables = Exact<{
  data: FindAuctionCreateInput;
}>;


export type CreateFindAuctionMutation = { __typename?: 'Mutation', createFindAuction?: { __typename?: 'FindAuction', id: string } | null };

export type UpdateFindAuctionMutationVariables = Exact<{
  where: FindAuctionWhereUniqueInput;
  data: FindAuctionUpdateInput;
}>;


export type UpdateFindAuctionMutation = { __typename?: 'Mutation', updateFindAuction?: { __typename?: 'FindAuction', id: string } | null };

export type FindAuctionByIdQueryVariables = Exact<{
  where: FindAuctionWhereInput;
}>;


export type FindAuctionByIdQuery = { __typename?: 'Query', findAuctions?: Array<{ __typename?: 'FindAuction', address?: string | null, auctionEndDate?: any | null, auctionNotice?: string | null, auctionStartDate?: any | null, city?: string | null, contactDetails?: string | null, emdAmount?: any | null, emdSubmissionDate?: any | null, id: string, propertyType?: FindAuctionPropertyTypeType | null, listingId?: number | null, vehicleRegNo?: string | null, reservePrice?: any | null, institution_details?: { __typename?: 'Institution', name?: string | null, id: string } | null, state?: { __typename?: 'State', id: string, name?: string | null } | null }> | null };

export type InstitutionsQueryVariables = Exact<{ [key: string]: never; }>;


export type InstitutionsQuery = { __typename?: 'Query', institutions?: Array<{ __typename?: 'Institution', id: string, name?: string | null }> | null };

export type CreateInstitutionMutationVariables = Exact<{
  data: InstitutionCreateInput;
}>;


export type CreateInstitutionMutation = { __typename?: 'Mutation', createInstitution?: { __typename?: 'Institution', id: string, name?: string | null } | null };

export type UpdateInstitutionMutationVariables = Exact<{
  where: InstitutionWhereUniqueInput;
  data: InstitutionUpdateInput;
}>;


export type UpdateInstitutionMutation = { __typename?: 'Mutation', updateInstitution?: { __typename?: 'Institution', id: string } | null };

export type DeleteInstitutionMutationVariables = Exact<{
  where: InstitutionWhereUniqueInput;
}>;


export type DeleteInstitutionMutation = { __typename?: 'Mutation', deleteInstitution?: { __typename?: 'Institution', id: string } | null };

export type LiveEventsQueryVariables = Exact<{
  take: Scalars['Int'];
  skip: Scalars['Int'];
  where?: InputMaybe<EventWhereInput>;
}>;


export type LiveEventsQuery = { __typename?: 'Query', liveEvents?: Array<{ __typename?: 'Event', id: string, eventNo?: number | null, eventCategory?: string | null, startDate?: any | null, endDate?: any | null, noOfBids?: number | null, termsAndConditions?: string | null, vehiclesCount?: number | null, seller?: { __typename?: 'Seller', name?: string | null } | null, eventType?: Array<{ __typename?: 'EventType', name?: string | null }> | null, location?: { __typename?: 'Location', name?: string | null, country?: string | null, city?: string | null, state?: { __typename?: 'State', name?: string | null } | null } | null, ExcelFile?: { __typename?: 'ExcelUpload', file?: { __typename?: 'FileFieldOutput', url: string } | null } | null } | null> | null };

export type LocationsQueryVariables = Exact<{ [key: string]: never; }>;


export type LocationsQuery = { __typename?: 'Query', locations?: Array<{ __typename?: 'Location', name?: string | null, id: string, country?: string | null, state?: { __typename?: 'State', name?: string | null } | null }> | null };

export type AddLocationMutationVariables = Exact<{
  data: LocationCreateInput;
}>;


export type AddLocationMutation = { __typename?: 'Mutation', createLocation?: { __typename?: 'Location', city?: string | null, name?: string | null, country?: string | null, state?: { __typename?: 'State', name?: string | null, id: string } | null } | null };

export type UpdateLocationMutationVariables = Exact<{
  where: LocationWhereUniqueInput;
  data: LocationUpdateInput;
}>;


export type UpdateLocationMutation = { __typename?: 'Mutation', updateLocation?: { __typename?: 'Location', id: string, name?: string | null } | null };

export type DeleteLocationMutationVariables = Exact<{
  where: LocationWhereUniqueInput;
}>;


export type DeleteLocationMutation = { __typename?: 'Mutation', deleteLocation?: { __typename?: 'Location', id: string, name?: string | null } | null };

export type OpenAuctionVehiclesQueryVariables = Exact<{
  where: VehicleWhereInput;
}>;


export type OpenAuctionVehiclesQuery = { __typename?: 'Query', vehicles?: Array<{ __typename?: 'Vehicle', vehicleEventStatus?: VehicleEventStatus | null, registrationNumber?: string | null, make?: string | null, model?: string | null, varient?: string | null, categoty?: string | null, city?: string | null, fuel?: string | null, type?: string | null, rcStatus?: string | null, yearOfManufacture?: number | null, ownership?: number | null, kmReading?: number | null, insuranceStatus?: string | null, frontImage?: string | null, backImage?: string | null, leftImage?: string | null, rightImage?: string | null, image5?: string | null, image6?: string | null, currentBidAmount?: number | null, bidStartTime?: any | null, bidStatus?: VehicleBidStatusType | null, bidTimeExpire?: any | null, vehicleIndexNo?: number | null, myBidRank?: number | null, id: string, startPrice?: number | null, startBidAmount?: number | null, quoteIncreament?: number | null, veicleLocation?: string | null, vehicleCondition?: string | null, yardLocation?: string | null, repoDt?: any | null, event?: { __typename?: 'Event', id: string, gapInBetweenVehicles?: number | null, endDate?: any | null, status?: EventStatusType | null } | null }> | null };

export type SudoBidsQueryVariables = Exact<{
  where?: InputMaybe<BidWhereInput>;
}>;


export type SudoBidsQuery = { __typename?: 'Query', sudoBids?: Array<{ __typename?: 'BidHistory', userId?: string | null, amount?: number | null, name?: string | null } | null> | null };

export type QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryQuery = { __typename?: 'Query', time?: string | null };

export type PaymentDetailsQueryVariables = Exact<{
  where: PaymentWhereUniqueInput;
}>;


export type PaymentDetailsQuery = { __typename?: 'Query', payment?: { __typename?: 'Payment', id: string, amount?: number | null, status?: string | null, paymentFor?: string | null, description?: string | null, refNo?: number | null, emdUpdateCount?: number | null, image?: { __typename?: 'ImageFieldOutput', url: string } | null, user?: { __typename?: 'User', id: string, firstName?: string | null, username?: string | null } | null, emdUpdate?: Array<{ __typename?: 'EmdUpdate', emdNo?: number | null, vehicleBuyingLimitIncrement?: number | null, createdAt?: any | null, createdBy?: { __typename?: 'User', id: string, firstName?: string | null } | null }> | null } | null };

export type CoupenPerPaymentQueryVariables = Exact<{
  where: PaymentWhereUniqueInput;
}>;


export type CoupenPerPaymentQuery = { __typename?: 'Query', payment?: { __typename?: 'Payment', amount?: number | null, user?: { __typename?: 'User', firstName?: string | null, lastName?: string | null } | null, coupenDetail?: Array<{ __typename?: 'Coupen', coupenNumber?: string | null, coupenStatus?: CoupenCoupenStatusType | null, vehicleDetail?: { __typename?: 'Vehicle', registrationNumber?: string | null } | null }> | null } | null };

export type CreatePaymentMutationVariables = Exact<{
  data: PaymentCreateInput;
}>;


export type CreatePaymentMutation = { __typename?: 'Mutation', createPayment?: { __typename?: 'Payment', amount?: number | null, paymentFor?: string | null, description?: string | null, status?: string | null, id: string, image?: { __typename?: 'ImageFieldOutput', url: string } | null, user?: { __typename?: 'User', id: string } | null } | null };

export type PaymentOfUserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type PaymentOfUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, mobile?: string | null, payments?: Array<{ __typename?: 'Payment', id: string, refNo?: number | null, amount?: number | null, status?: string | null, paymentFor?: string | null, createdAt?: any | null, emdUpdateCount?: number | null, updatedAt?: any | null, RegistrationExpire?: any | null, createdBy?: { __typename?: 'User', firstName?: string | null } | null, image?: { __typename?: 'ImageFieldOutput', url: string } | null, emdUpdate?: Array<{ __typename?: 'EmdUpdate', vehicleBuyingLimitIncrement?: number | null }> | null }> | null } | null };

export type PaymentTableQueryVariables = Exact<{
  skip: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  orderBy: Array<PaymentOrderByInput> | PaymentOrderByInput;
}>;


export type PaymentTableQuery = { __typename?: 'Query', payments?: Array<{ __typename?: 'Payment', id: string, refNo?: number | null, status?: string | null, amount?: number | null, paymentFor?: string | null, createdAt?: any | null, updatedAt?: any | null, RegistrationExpire?: any | null, emdUpdateCount?: number | null, createdBy?: { __typename?: 'User', firstName?: string | null, lastName?: string | null } | null, user?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, username?: string | null, mobile?: string | null } | null, emdUpdate?: Array<{ __typename?: 'EmdUpdate', vehicleBuyingLimitIncrement?: number | null }> | null }> | null };

export type UpdatePaymentMutationVariables = Exact<{
  where: PaymentWhereUniqueInput;
  data: PaymentUpdateInput;
}>;


export type UpdatePaymentMutation = { __typename?: 'Mutation', updatePayment?: { __typename?: 'Payment', id: string, amount?: number | null, paymentFor?: string | null, description?: string | null, status?: string | null, image?: { __typename?: 'ImageFieldOutput', url: string } | null } | null };

export type PaymentsSearchQueryVariables = Exact<{
  where: PaymentWhereInput;
}>;


export type PaymentsSearchQuery = { __typename?: 'Query', payments?: Array<{ __typename?: 'Payment', id: string, refNo?: number | null, amount?: number | null, createdAt?: any | null, updatedAt?: any | null, RegistrationExpire?: any | null, paymentFor?: string | null, status?: string | null, emdUpdateCount?: number | null, user?: { __typename?: 'User', id: string, mobile?: string | null, firstName?: string | null } | null, createdBy?: { __typename?: 'User', firstName?: string | null } | null, emdUpdate?: Array<{ __typename?: 'EmdUpdate', emdNo?: number | null, vehicleBuyingLimitIncrement?: number | null, createdAt?: any | null, createdBy?: { __typename?: 'User', id: string, firstName?: string | null } | null }> | null }> | null };

export type DeletePaymentMutationVariables = Exact<{
  where: PaymentWhereUniqueInput;
}>;


export type DeletePaymentMutation = { __typename?: 'Mutation', deletePayment?: { __typename?: 'Payment', id: string } | null };

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

export type UpdateStateMutationVariables = Exact<{
  where: StateWhereUniqueInput;
  data: StateUpdateInput;
}>;


export type UpdateStateMutation = { __typename?: 'Mutation', updateState?: { __typename?: 'State', id: string } | null };

export type UserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, firstName?: string | null, vehicleBuyingLimit?: number | null, bannedSellersCount?: number | null, businessName?: string | null, categoryCount?: number | null, state?: string | null, city?: string | null, country?: string | null, createdAt?: any | null, dealerId?: string | null, email?: string | null, emdUpdatesByAdminCount?: number | null, emdUpdatesCount?: number | null, idNo?: number | null, idProofNo?: string | null, idProofType?: UserIdProofTypeType | null, lastName?: string | null, magicAuthIssuedAt?: any | null, magicAuthRedeemedAt?: any | null, mobile?: string | null, pancardNo?: string | null, paymentsCount?: number | null, phone?: string | null, role?: UserRoleType | null, specialVehicleBuyingLimit?: number | null, username?: string | null, status?: UserStatusType | null, updatedAt?: any | null, activeBidsCount?: number | null, coupenDetailCount?: number | null, states?: Array<{ __typename?: 'State', id: string, name?: string | null, locations?: Array<{ __typename?: 'Location', city?: string | null, id: string, name?: string | null }> | null }> | null, idProof?: { __typename?: 'ImageFieldOutput', url: string } | null, idProofBack?: { __typename?: 'ImageFieldOutput', url: string } | null, image?: { __typename: 'ImageFieldOutput', url: string } | null, pancard?: { __typename?: 'ImageFieldOutput', url: string } | null, payments?: Array<{ __typename?: 'Payment', amount?: number | null }> | null, dealership?: { __typename?: 'ImageFieldOutput', url: string } | null, currentVehicleBuyingLimit?: { __typename?: 'vehicleBuyingLimits', vehicleBuyingLimit?: number | null } | null, bannedSellers?: Array<{ __typename?: 'Seller', name?: string | null, id: string }> | null } | null };

export type EditUserMutationVariables = Exact<{
  where: UserWhereUniqueInput;
  data: UserUpdateInput;
}>;


export type EditUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', firstName?: string | null, lastName?: string | null, email?: string | null, username?: string | null, mobile?: string | null, businessName?: string | null, role?: UserRoleType | null, idProofType?: UserIdProofTypeType | null, idProofNo?: string | null, pancardNo?: string | null, country?: string | null, state?: string | null, city?: string | null, status?: UserStatusType | null, vehicleBuyingLimit?: number | null, category?: Array<{ __typename?: 'EventType', name?: string | null }> | null, bannedSellers?: Array<{ __typename?: 'Seller', name?: string | null, id: string }> | null, password?: { __typename?: 'PasswordState', isSet: boolean } | null, image?: { __typename?: 'ImageFieldOutput', url: string } | null, pancard?: { __typename?: 'ImageFieldOutput', url: string } | null, idProof?: { __typename?: 'ImageFieldOutput', url: string } | null, idProofBack?: { __typename?: 'ImageFieldOutput', url: string } | null, dealership?: { __typename?: 'ImageFieldOutput', url: string } | null, states?: Array<{ __typename?: 'State', id: string, name?: string | null }> | null } | null };

export type UsersQueryVariables = Exact<{
  skip: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  orderBy: Array<UserOrderByInput> | UserOrderByInput;
}>;


export type UsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', firstName?: string | null, lastName?: string | null, email?: string | null, mobile?: string | null, status?: UserStatusType | null, state?: string | null, role?: UserRoleType | null, idNo?: number | null, id: string, pancardNo?: string | null, activeBidsCount?: number | null, createdAt?: any | null, paymentsCount?: number | null, coupenDetailCount?: number | null, currentVehicleBuyingLimit?: { __typename?: 'vehicleBuyingLimits', vehicleBuyingLimit?: number | null } | null }> | null };

export type UserbyIdNoQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type UserbyIdNoQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string } | null };

export type BidUserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type BidUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', firstName?: string | null, lastName?: string | null, activeBidsCount?: number | null, username?: string | null } | null };

export type UsersSearchQueryVariables = Exact<{
  where: UserWhereInput;
}>;


export type UsersSearchQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', firstName?: string | null, lastName?: string | null, email?: string | null, mobile?: string | null, status?: UserStatusType | null, state?: string | null, role?: UserRoleType | null, idNo?: number | null, id: string, pancardNo?: string | null, activeBidsCount?: number | null, createdAt?: any | null, paymentsCount?: number | null, coupenDetailCount?: number | null, currentVehicleBuyingLimit?: { __typename?: 'vehicleBuyingLimits', vehicleBuyingLimit?: number | null } | null }> | null };

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


export type VehicleDetailsQuery = { __typename?: 'Query', vehicle?: { __typename?: 'Vehicle', id: string, registrationNumber?: string | null, bidStatus?: VehicleBidStatusType | null, bidTimeExpire?: any | null, loanAgreementNo?: string | null, registeredOwnerName?: string | null, quoteIncreament?: number | null, make?: string | null, model?: string | null, varient?: string | null, categoty?: string | null, fuel?: string | null, type?: string | null, rcStatus?: string | null, yearOfManufacture?: number | null, ownership?: number | null, mileage?: number | null, kmReading?: number | null, insuranceStatus?: string | null, yardLocation?: string | null, startPrice?: number | null, startBidAmount?: number | null, currentBidAmount?: number | null, reservePrice?: number | null, repoDt?: any | null, veicleLocation?: string | null, vehicleRemarks?: string | null, auctionManager?: string | null, parkingCharges?: string | null, insurance?: string | null, insuranceValidTill?: any | null, tax?: string | null, taxValidityDate?: any | null, fitness?: string | null, permit?: string | null, fitnessPermit?: string | null, engineNo?: string | null, chassisNo?: string | null, frontImage?: string | null, backImage?: string | null, leftImage?: string | null, rightImage?: string | null, image5?: string | null, image6?: string | null, inspectionLink?: string | null, autobseContact?: string | null, autobse_contact_person?: string | null, vehicleCondition?: string | null, powerSteering?: string | null, shape?: string | null, color?: string | null, city?: string | null, area?: string | null, state?: string | null, paymentTerms?: string | null, dateOfRegistration?: any | null, hypothication?: string | null, climateControl?: string | null, doorCount?: number | null, gearBox?: string | null, buyerFees?: string | null, rtoFine?: string | null, parkingRate?: string | null, approxParkingCharges?: string | null, clientContactPerson?: string | null, clientContactNo?: string | null, additionalRemarks?: string | null, vehicleIndexNo?: number | null, event?: { __typename?: 'Event', seller?: { __typename?: 'Seller', name?: string | null } | null } | null, currentBidUser?: { __typename?: 'User', firstName?: string | null, lastName?: string | null, username?: string | null, mobile?: string | null, pancardNo?: string | null } | null } | null };

export type VehiclePerEventQueryVariables = Exact<{
  where: VehicleWhereInput;
}>;


export type VehiclePerEventQuery = { __typename?: 'Query', vehicles?: Array<{ __typename?: 'Vehicle', id: string, registrationNumber?: string | null }> | null };

export type VehicleDetailsPerEventQueryVariables = Exact<{
  where: EventWhereUniqueInput;
}>;


export type VehicleDetailsPerEventQuery = { __typename?: 'Query', event?: { __typename?: 'Event', id: string, status?: EventStatusType | null, eventNo?: number | null, endDate?: any | null, vehiclesCount?: number | null, eventCategory?: string | null, vehicles?: Array<{ __typename?: 'Vehicle', bidStartTime?: any | null, bidTimeExpire?: any | null, id: string, vehicleIndexNo?: number | null, registrationNumber?: string | null, totalBids?: number | null, frontImage?: string | null, vehicleEventStatus?: VehicleEventStatus | null, bidStatus?: VehicleBidStatusType | null, state?: string | null, city?: string | null, currentBidAmount?: number | null, currentBidUser?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, mobile?: string | null, currentVehicleBuyingLimit?: { __typename?: 'vehicleBuyingLimits', vehicleBuyingLimit?: number | null } | null } | null, coupenDetail?: { __typename?: 'Coupen', coupenNumber?: string | null } | null }> | null, seller?: { __typename?: 'Seller', name?: string | null } | null } | null };

export type VehicleTableQueryVariables = Exact<{ [key: string]: never; }>;


export type VehicleTableQuery = { __typename?: 'Query', vehicles?: Array<{ __typename?: 'Vehicle', id: string, registrationNumber?: string | null, vehicleIndexNo?: number | null, bidTimeExpire?: any | null, bidStatus?: VehicleBidStatusType | null, userVehicleBidsCount?: number | null, vehicleEventStatus?: VehicleEventStatus | null, event?: { __typename?: 'Event', eventCategory?: string | null } | null }> | null };

export type UpdateVehicleMutationVariables = Exact<{
  where: VehicleWhereUniqueInput;
  data: VehicleUpdateInput;
}>;


export type UpdateVehicleMutation = { __typename?: 'Mutation', updateVehicle?: { __typename?: 'Vehicle', id: string, registrationNumber?: string | null, bidStatus?: VehicleBidStatusType | null, loanAgreementNo?: string | null, registeredOwnerName?: string | null, quoteIncreament?: number | null, make?: string | null, model?: string | null, varient?: string | null, categoty?: string | null, fuel?: string | null, type?: string | null, rcStatus?: string | null, yearOfManufacture?: number | null, ownership?: number | null, mileage?: number | null, kmReading?: number | null, insuranceStatus?: string | null, yardLocation?: string | null, startBidAmount?: number | null, reservePrice?: number | null, repoDt?: any | null, veicleLocation?: string | null, vehicleRemarks?: string | null, auctionManager?: string | null, parkingCharges?: string | null, insurance?: string | null, insuranceValidTill?: any | null, tax?: string | null, taxValidityDate?: any | null, fitness?: string | null, permit?: string | null, fitnessPermit?: string | null, engineNo?: string | null, chassisNo?: string | null, frontImage?: string | null, backImage?: string | null, leftImage?: string | null, rightImage?: string | null, image5?: string | null, image6?: string | null, inspectionLink?: string | null, autobseContact?: string | null, autobse_contact_person?: string | null, vehicleCondition?: string | null, powerSteering?: string | null, shape?: string | null, color?: string | null, city?: string | null, area?: string | null, state?: string | null, paymentTerms?: string | null, dateOfRegistration?: any | null, hypothication?: string | null, climateControl?: string | null, doorCount?: number | null, gearBox?: string | null, buyerFees?: string | null, rtoFine?: string | null, parkingRate?: string | null, approxParkingCharges?: string | null, clientContactPerson?: string | null, clientContactNo?: string | null, additionalRemarks?: string | null } | null };


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
      vehicleIndexNo
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
export const UserauthenticationDocument = gql`
    query Userauthentication {
  authenticatedItem {
    ... on User {
      username
      role
      state
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
export const CreateBidDocument = gql`
    mutation CreateBid($data: BidCreateInput!) {
  createBid(data: $data) {
    bidVehicle {
      id
    }
    user {
      id
    }
    amount
  }
}
    `;
export type CreateBidMutationFn = Apollo.MutationFunction<CreateBidMutation, CreateBidMutationVariables>;

/**
 * __useCreateBidMutation__
 *
 * To run a mutation, you first call `useCreateBidMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBidMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBidMutation, { data, loading, error }] = useCreateBidMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateBidMutation(baseOptions?: Apollo.MutationHookOptions<CreateBidMutation, CreateBidMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBidMutation, CreateBidMutationVariables>(CreateBidDocument, options);
      }
export type CreateBidMutationHookResult = ReturnType<typeof useCreateBidMutation>;
export type CreateBidMutationResult = Apollo.MutationResult<CreateBidMutation>;
export type CreateBidMutationOptions = Apollo.BaseMutationOptions<CreateBidMutation, CreateBidMutationVariables>;
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
    id
    make
    registrationNumber
    vehicleIndexNo
    userVehicleBidsCount
    vehicleEventStatus
    watchedByCount
    bidStatus
    event {
      eventNo
      seller {
        name
      }
    }
    userVehicleBids {
      amount
      id
      createdAt
      user {
        id
        idNo
        firstName
        lastName
        mobile
      }
    }
    currentBidAmount
    currentBidUser {
      id
      idNo
      username
      firstName
      lastName
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
export const UpdateBidDocument = gql`
    mutation updateBid($where: BidWhereUniqueInput!, $data: BidUpdateInput!) {
  updateBid(where: $where, data: $data) {
    id
    user {
      idNo
    }
  }
}
    `;
export type UpdateBidMutationFn = Apollo.MutationFunction<UpdateBidMutation, UpdateBidMutationVariables>;

/**
 * __useUpdateBidMutation__
 *
 * To run a mutation, you first call `useUpdateBidMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBidMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBidMutation, { data, loading, error }] = useUpdateBidMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateBidMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBidMutation, UpdateBidMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBidMutation, UpdateBidMutationVariables>(UpdateBidDocument, options);
      }
export type UpdateBidMutationHookResult = ReturnType<typeof useUpdateBidMutation>;
export type UpdateBidMutationResult = Apollo.MutationResult<UpdateBidMutation>;
export type UpdateBidMutationOptions = Apollo.BaseMutationOptions<UpdateBidMutation, UpdateBidMutationVariables>;
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
export const DeletedBiddataDocument = gql`
    mutation deletedBiddata($data: DeletedBidCreateInput!) {
  createDeletedBid(data: $data) {
    id
  }
}
    `;
export type DeletedBiddataMutationFn = Apollo.MutationFunction<DeletedBiddataMutation, DeletedBiddataMutationVariables>;

/**
 * __useDeletedBiddataMutation__
 *
 * To run a mutation, you first call `useDeletedBiddataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletedBiddataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletedBiddataMutation, { data, loading, error }] = useDeletedBiddataMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeletedBiddataMutation(baseOptions?: Apollo.MutationHookOptions<DeletedBiddataMutation, DeletedBiddataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletedBiddataMutation, DeletedBiddataMutationVariables>(DeletedBiddataDocument, options);
      }
export type DeletedBiddataMutationHookResult = ReturnType<typeof useDeletedBiddataMutation>;
export type DeletedBiddataMutationResult = Apollo.MutationResult<DeletedBiddataMutation>;
export type DeletedBiddataMutationOptions = Apollo.BaseMutationOptions<DeletedBiddataMutation, DeletedBiddataMutationVariables>;
export const DeletedBidsperVehicleDocument = gql`
    query DeletedBidsperVehicle($where: DeletedBidWhereInput!) {
  deletedBids(where: $where) {
    amount
    user {
      id
      firstName
      lastName
      mobile
      idNo
    }
  }
}
    `;

/**
 * __useDeletedBidsperVehicleQuery__
 *
 * To run a query within a React component, call `useDeletedBidsperVehicleQuery` and pass it any options that fit your needs.
 * When your component renders, `useDeletedBidsperVehicleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeletedBidsperVehicleQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeletedBidsperVehicleQuery(baseOptions: Apollo.QueryHookOptions<DeletedBidsperVehicleQuery, DeletedBidsperVehicleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DeletedBidsperVehicleQuery, DeletedBidsperVehicleQueryVariables>(DeletedBidsperVehicleDocument, options);
      }
export function useDeletedBidsperVehicleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DeletedBidsperVehicleQuery, DeletedBidsperVehicleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DeletedBidsperVehicleQuery, DeletedBidsperVehicleQueryVariables>(DeletedBidsperVehicleDocument, options);
        }
export type DeletedBidsperVehicleQueryHookResult = ReturnType<typeof useDeletedBidsperVehicleQuery>;
export type DeletedBidsperVehicleLazyQueryHookResult = ReturnType<typeof useDeletedBidsperVehicleLazyQuery>;
export type DeletedBidsperVehicleQueryResult = Apollo.QueryResult<DeletedBidsperVehicleQuery, DeletedBidsperVehicleQueryVariables>;
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
export const CoupensperUserDocument = gql`
    query CoupensperUser($where: CoupenWhereInput!) {
  coupens(where: $where) {
    id
    coupenNumber
    coupenStatus
    vehicleDetail {
      registrationNumber
      id
    }
    userDetail {
      firstName
      lastName
    }
  }
}
    `;

/**
 * __useCoupensperUserQuery__
 *
 * To run a query within a React component, call `useCoupensperUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCoupensperUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCoupensperUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useCoupensperUserQuery(baseOptions: Apollo.QueryHookOptions<CoupensperUserQuery, CoupensperUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CoupensperUserQuery, CoupensperUserQueryVariables>(CoupensperUserDocument, options);
      }
export function useCoupensperUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CoupensperUserQuery, CoupensperUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CoupensperUserQuery, CoupensperUserQueryVariables>(CoupensperUserDocument, options);
        }
export type CoupensperUserQueryHookResult = ReturnType<typeof useCoupensperUserQuery>;
export type CoupensperUserLazyQueryHookResult = ReturnType<typeof useCoupensperUserLazyQuery>;
export type CoupensperUserQueryResult = Apollo.QueryResult<CoupensperUserQuery, CoupensperUserQueryVariables>;
export const UpdateCoupenDocument = gql`
    mutation UpdateCoupen($where: CoupenWhereUniqueInput!, $data: CoupenUpdateInput!) {
  updateCoupen(where: $where, data: $data) {
    coupenStatus
  }
}
    `;
export type UpdateCoupenMutationFn = Apollo.MutationFunction<UpdateCoupenMutation, UpdateCoupenMutationVariables>;

/**
 * __useUpdateCoupenMutation__
 *
 * To run a mutation, you first call `useUpdateCoupenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCoupenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCoupenMutation, { data, loading, error }] = useUpdateCoupenMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateCoupenMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCoupenMutation, UpdateCoupenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCoupenMutation, UpdateCoupenMutationVariables>(UpdateCoupenDocument, options);
      }
export type UpdateCoupenMutationHookResult = ReturnType<typeof useUpdateCoupenMutation>;
export type UpdateCoupenMutationResult = Apollo.MutationResult<UpdateCoupenMutation>;
export type UpdateCoupenMutationOptions = Apollo.BaseMutationOptions<UpdateCoupenMutation, UpdateCoupenMutationVariables>;
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
    id
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
export const EmdUpdatesPerPaymentDocument = gql`
    query EmdUpdatesPerPayment($where: EmdUpdateWhereInput!) {
  emdUpdates(where: $where) {
    emdNo
    id
    payment {
      id
      amount
      coupenDetail {
        coupenNumber
        createdAt
      }
    }
    user {
      mobile
      firstName
      lastName
    }
    vehicleBuyingLimitIncrement
    createdBy {
      firstName
    }
  }
}
    `;

/**
 * __useEmdUpdatesPerPaymentQuery__
 *
 * To run a query within a React component, call `useEmdUpdatesPerPaymentQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmdUpdatesPerPaymentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmdUpdatesPerPaymentQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useEmdUpdatesPerPaymentQuery(baseOptions: Apollo.QueryHookOptions<EmdUpdatesPerPaymentQuery, EmdUpdatesPerPaymentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EmdUpdatesPerPaymentQuery, EmdUpdatesPerPaymentQueryVariables>(EmdUpdatesPerPaymentDocument, options);
      }
export function useEmdUpdatesPerPaymentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EmdUpdatesPerPaymentQuery, EmdUpdatesPerPaymentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EmdUpdatesPerPaymentQuery, EmdUpdatesPerPaymentQueryVariables>(EmdUpdatesPerPaymentDocument, options);
        }
export type EmdUpdatesPerPaymentQueryHookResult = ReturnType<typeof useEmdUpdatesPerPaymentQuery>;
export type EmdUpdatesPerPaymentLazyQueryHookResult = ReturnType<typeof useEmdUpdatesPerPaymentLazyQuery>;
export type EmdUpdatesPerPaymentQueryResult = Apollo.QueryResult<EmdUpdatesPerPaymentQuery, EmdUpdatesPerPaymentQueryVariables>;
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
export const ContactUsDocument = gql`
    query ContactUs {
  contactuses {
    id
    firstName
    lastName
    message
    status
    mobile
    subject
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useContactUsQuery__
 *
 * To run a query within a React component, call `useContactUsQuery` and pass it any options that fit your needs.
 * When your component renders, `useContactUsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContactUsQuery({
 *   variables: {
 *   },
 * });
 */
export function useContactUsQuery(baseOptions?: Apollo.QueryHookOptions<ContactUsQuery, ContactUsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContactUsQuery, ContactUsQueryVariables>(ContactUsDocument, options);
      }
export function useContactUsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContactUsQuery, ContactUsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContactUsQuery, ContactUsQueryVariables>(ContactUsDocument, options);
        }
export type ContactUsQueryHookResult = ReturnType<typeof useContactUsQuery>;
export type ContactUsLazyQueryHookResult = ReturnType<typeof useContactUsLazyQuery>;
export type ContactUsQueryResult = Apollo.QueryResult<ContactUsQuery, ContactUsQueryVariables>;
export const UpdateContactUsDocument = gql`
    mutation UpdateContactUs($where: ContactUsWhereUniqueInput!, $data: ContactUsUpdateInput!) {
  updateContactUs(where: $where, data: $data) {
    id
    status
  }
}
    `;
export type UpdateContactUsMutationFn = Apollo.MutationFunction<UpdateContactUsMutation, UpdateContactUsMutationVariables>;

/**
 * __useUpdateContactUsMutation__
 *
 * To run a mutation, you first call `useUpdateContactUsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateContactUsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateContactUsMutation, { data, loading, error }] = useUpdateContactUsMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateContactUsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateContactUsMutation, UpdateContactUsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateContactUsMutation, UpdateContactUsMutationVariables>(UpdateContactUsDocument, options);
      }
export type UpdateContactUsMutationHookResult = ReturnType<typeof useUpdateContactUsMutation>;
export type UpdateContactUsMutationResult = Apollo.MutationResult<UpdateContactUsMutation>;
export type UpdateContactUsMutationOptions = Apollo.BaseMutationOptions<UpdateContactUsMutation, UpdateContactUsMutationVariables>;
export const DeleteContactUsDocument = gql`
    mutation deleteContactUs($where: ContactUsWhereUniqueInput!) {
  deleteContactUs(where: $where) {
    id
  }
}
    `;
export type DeleteContactUsMutationFn = Apollo.MutationFunction<DeleteContactUsMutation, DeleteContactUsMutationVariables>;

/**
 * __useDeleteContactUsMutation__
 *
 * To run a mutation, you first call `useDeleteContactUsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteContactUsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteContactUsMutation, { data, loading, error }] = useDeleteContactUsMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteContactUsMutation(baseOptions?: Apollo.MutationHookOptions<DeleteContactUsMutation, DeleteContactUsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteContactUsMutation, DeleteContactUsMutationVariables>(DeleteContactUsDocument, options);
      }
export type DeleteContactUsMutationHookResult = ReturnType<typeof useDeleteContactUsMutation>;
export type DeleteContactUsMutationResult = Apollo.MutationResult<DeleteContactUsMutation>;
export type DeleteContactUsMutationOptions = Apollo.BaseMutationOptions<DeleteContactUsMutation, DeleteContactUsMutationVariables>;
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
    vehiclesCount
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
export const EventsReportDocument = gql`
    query eventsReport($where: EventWhereInput!) {
  events(where: $where) {
    vehiclesCount
    eventCategory
    startDate
    endDate
    seller {
      name
    }
    location {
      name
    }
    noOfBids
    status
    eventNo
  }
}
    `;

/**
 * __useEventsReportQuery__
 *
 * To run a query within a React component, call `useEventsReportQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventsReportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventsReportQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useEventsReportQuery(baseOptions: Apollo.QueryHookOptions<EventsReportQuery, EventsReportQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EventsReportQuery, EventsReportQueryVariables>(EventsReportDocument, options);
      }
export function useEventsReportLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventsReportQuery, EventsReportQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EventsReportQuery, EventsReportQueryVariables>(EventsReportDocument, options);
        }
export type EventsReportQueryHookResult = ReturnType<typeof useEventsReportQuery>;
export type EventsReportLazyQueryHookResult = ReturnType<typeof useEventsReportLazyQuery>;
export type EventsReportQueryResult = Apollo.QueryResult<EventsReportQuery, EventsReportQueryVariables>;
export const EventsIdNoDocument = gql`
    query EventsIdNo {
  events {
    id
    eventNo
  }
}
    `;

/**
 * __useEventsIdNoQuery__
 *
 * To run a query within a React component, call `useEventsIdNoQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventsIdNoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventsIdNoQuery({
 *   variables: {
 *   },
 * });
 */
export function useEventsIdNoQuery(baseOptions?: Apollo.QueryHookOptions<EventsIdNoQuery, EventsIdNoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EventsIdNoQuery, EventsIdNoQueryVariables>(EventsIdNoDocument, options);
      }
export function useEventsIdNoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventsIdNoQuery, EventsIdNoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EventsIdNoQuery, EventsIdNoQueryVariables>(EventsIdNoDocument, options);
        }
export type EventsIdNoQueryHookResult = ReturnType<typeof useEventsIdNoQuery>;
export type EventsIdNoLazyQueryHookResult = ReturnType<typeof useEventsIdNoLazyQuery>;
export type EventsIdNoQueryResult = Apollo.QueryResult<EventsIdNoQuery, EventsIdNoQueryVariables>;
export const ParticipantsDocument = gql`
    query Participants($where: EventWhereUniqueInput!, $take: Int, $skip: Int!, $coupenDetailWhere2: CoupenWhereInput!) {
  event(where: $where) {
    eventNo
    participants(take: $take, skip: $skip) {
      id
      firstName
      vehicleBuyingLimit
      bannedSellersCount
      categoryCount
      state
      createdAt
      dealerId
      email
      emdUpdatesByAdminCount
      emdUpdatesCount
      id
      idNo
      idProofNo
      lastName
      mobile
      pancardNo
      paymentsCount
      role
      currentVehicleBuyingLimit {
        vehicleBuyingLimit
      }
      username
      status
      updatedAt
      activeBidsCount
      coupenDetailCount
      coupenDetail(where: $coupenDetailWhere2) {
        coupenNumber
      }
    }
  }
}
    `;

/**
 * __useParticipantsQuery__
 *
 * To run a query within a React component, call `useParticipantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useParticipantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useParticipantsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      coupenDetailWhere2: // value for 'coupenDetailWhere2'
 *   },
 * });
 */
export function useParticipantsQuery(baseOptions: Apollo.QueryHookOptions<ParticipantsQuery, ParticipantsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ParticipantsQuery, ParticipantsQueryVariables>(ParticipantsDocument, options);
      }
export function useParticipantsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ParticipantsQuery, ParticipantsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ParticipantsQuery, ParticipantsQueryVariables>(ParticipantsDocument, options);
        }
export type ParticipantsQueryHookResult = ReturnType<typeof useParticipantsQuery>;
export type ParticipantsLazyQueryHookResult = ReturnType<typeof useParticipantsLazyQuery>;
export type ParticipantsQueryResult = Apollo.QueryResult<ParticipantsQuery, ParticipantsQueryVariables>;
export const UpdateEventDocument = gql`
    mutation UpdateEvent($where: EventWhereUniqueInput!, $data: EventUpdateInput!) {
  updateEvent(where: $where, data: $data) {
    id
  }
}
    `;
export type UpdateEventMutationFn = Apollo.MutationFunction<UpdateEventMutation, UpdateEventMutationVariables>;

/**
 * __useUpdateEventMutation__
 *
 * To run a mutation, you first call `useUpdateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEventMutation, { data, loading, error }] = useUpdateEventMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateEventMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEventMutation, UpdateEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEventMutation, UpdateEventMutationVariables>(UpdateEventDocument, options);
      }
export type UpdateEventMutationHookResult = ReturnType<typeof useUpdateEventMutation>;
export type UpdateEventMutationResult = Apollo.MutationResult<UpdateEventMutation>;
export type UpdateEventMutationOptions = Apollo.BaseMutationOptions<UpdateEventMutation, UpdateEventMutationVariables>;
export const DeleteEventDocument = gql`
    mutation DeleteEvent($where: EventWhereUniqueInput!) {
  deleteEvent(where: $where) {
    id
  }
}
    `;
export type DeleteEventMutationFn = Apollo.MutationFunction<DeleteEventMutation, DeleteEventMutationVariables>;

/**
 * __useDeleteEventMutation__
 *
 * To run a mutation, you first call `useDeleteEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEventMutation, { data, loading, error }] = useDeleteEventMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteEventMutation(baseOptions?: Apollo.MutationHookOptions<DeleteEventMutation, DeleteEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteEventMutation, DeleteEventMutationVariables>(DeleteEventDocument, options);
      }
export type DeleteEventMutationHookResult = ReturnType<typeof useDeleteEventMutation>;
export type DeleteEventMutationResult = Apollo.MutationResult<DeleteEventMutation>;
export type DeleteEventMutationOptions = Apollo.BaseMutationOptions<DeleteEventMutation, DeleteEventMutationVariables>;
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
    query eventTable($take: Int, $skip: Int!, $orderBy: [EventOrderByInput!]!) {
  events(take: $take, skip: $skip, orderBy: $orderBy) {
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
    participantsCount
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
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useEventTableQuery(baseOptions: Apollo.QueryHookOptions<EventTableQuery, EventTableQueryVariables>) {
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
export const FindAuctionsDocument = gql`
    query FindAuctions {
  findAuctions {
    address
    auctionEndDate
    auctionNotice
    auctionStartDate
    city
    contactDetails
    createdAt
    emdAmount
    emdSubmissionDate
    id
    institution_details {
      name
    }
    listingId
    propertyType
    reservePrice
    vehicleRegNo
    state {
      name
    }
  }
}
    `;

/**
 * __useFindAuctionsQuery__
 *
 * To run a query within a React component, call `useFindAuctionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAuctionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAuctionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAuctionsQuery(baseOptions?: Apollo.QueryHookOptions<FindAuctionsQuery, FindAuctionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAuctionsQuery, FindAuctionsQueryVariables>(FindAuctionsDocument, options);
      }
export function useFindAuctionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAuctionsQuery, FindAuctionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAuctionsQuery, FindAuctionsQueryVariables>(FindAuctionsDocument, options);
        }
export type FindAuctionsQueryHookResult = ReturnType<typeof useFindAuctionsQuery>;
export type FindAuctionsLazyQueryHookResult = ReturnType<typeof useFindAuctionsLazyQuery>;
export type FindAuctionsQueryResult = Apollo.QueryResult<FindAuctionsQuery, FindAuctionsQueryVariables>;
export const CreateFindAuctionDocument = gql`
    mutation CreateFindAuction($data: FindAuctionCreateInput!) {
  createFindAuction(data: $data) {
    id
  }
}
    `;
export type CreateFindAuctionMutationFn = Apollo.MutationFunction<CreateFindAuctionMutation, CreateFindAuctionMutationVariables>;

/**
 * __useCreateFindAuctionMutation__
 *
 * To run a mutation, you first call `useCreateFindAuctionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFindAuctionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFindAuctionMutation, { data, loading, error }] = useCreateFindAuctionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateFindAuctionMutation(baseOptions?: Apollo.MutationHookOptions<CreateFindAuctionMutation, CreateFindAuctionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFindAuctionMutation, CreateFindAuctionMutationVariables>(CreateFindAuctionDocument, options);
      }
export type CreateFindAuctionMutationHookResult = ReturnType<typeof useCreateFindAuctionMutation>;
export type CreateFindAuctionMutationResult = Apollo.MutationResult<CreateFindAuctionMutation>;
export type CreateFindAuctionMutationOptions = Apollo.BaseMutationOptions<CreateFindAuctionMutation, CreateFindAuctionMutationVariables>;
export const UpdateFindAuctionDocument = gql`
    mutation updateFindAuction($where: FindAuctionWhereUniqueInput!, $data: FindAuctionUpdateInput!) {
  updateFindAuction(where: $where, data: $data) {
    id
  }
}
    `;
export type UpdateFindAuctionMutationFn = Apollo.MutationFunction<UpdateFindAuctionMutation, UpdateFindAuctionMutationVariables>;

/**
 * __useUpdateFindAuctionMutation__
 *
 * To run a mutation, you first call `useUpdateFindAuctionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFindAuctionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFindAuctionMutation, { data, loading, error }] = useUpdateFindAuctionMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateFindAuctionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFindAuctionMutation, UpdateFindAuctionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateFindAuctionMutation, UpdateFindAuctionMutationVariables>(UpdateFindAuctionDocument, options);
      }
export type UpdateFindAuctionMutationHookResult = ReturnType<typeof useUpdateFindAuctionMutation>;
export type UpdateFindAuctionMutationResult = Apollo.MutationResult<UpdateFindAuctionMutation>;
export type UpdateFindAuctionMutationOptions = Apollo.BaseMutationOptions<UpdateFindAuctionMutation, UpdateFindAuctionMutationVariables>;
export const FindAuctionByIdDocument = gql`
    query findAuctionById($where: FindAuctionWhereInput!) {
  findAuctions(where: $where) {
    address
    auctionEndDate
    auctionNotice
    auctionStartDate
    city
    contactDetails
    emdAmount
    emdSubmissionDate
    id
    propertyType
    institution_details {
      name
      id
    }
    listingId
    vehicleRegNo
    reservePrice
    state {
      id
      name
    }
  }
}
    `;

/**
 * __useFindAuctionByIdQuery__
 *
 * To run a query within a React component, call `useFindAuctionByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAuctionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAuctionByIdQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindAuctionByIdQuery(baseOptions: Apollo.QueryHookOptions<FindAuctionByIdQuery, FindAuctionByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAuctionByIdQuery, FindAuctionByIdQueryVariables>(FindAuctionByIdDocument, options);
      }
export function useFindAuctionByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAuctionByIdQuery, FindAuctionByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAuctionByIdQuery, FindAuctionByIdQueryVariables>(FindAuctionByIdDocument, options);
        }
export type FindAuctionByIdQueryHookResult = ReturnType<typeof useFindAuctionByIdQuery>;
export type FindAuctionByIdLazyQueryHookResult = ReturnType<typeof useFindAuctionByIdLazyQuery>;
export type FindAuctionByIdQueryResult = Apollo.QueryResult<FindAuctionByIdQuery, FindAuctionByIdQueryVariables>;
export const InstitutionsDocument = gql`
    query Institutions {
  institutions {
    id
    name
  }
}
    `;

/**
 * __useInstitutionsQuery__
 *
 * To run a query within a React component, call `useInstitutionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useInstitutionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInstitutionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useInstitutionsQuery(baseOptions?: Apollo.QueryHookOptions<InstitutionsQuery, InstitutionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InstitutionsQuery, InstitutionsQueryVariables>(InstitutionsDocument, options);
      }
export function useInstitutionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InstitutionsQuery, InstitutionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InstitutionsQuery, InstitutionsQueryVariables>(InstitutionsDocument, options);
        }
export type InstitutionsQueryHookResult = ReturnType<typeof useInstitutionsQuery>;
export type InstitutionsLazyQueryHookResult = ReturnType<typeof useInstitutionsLazyQuery>;
export type InstitutionsQueryResult = Apollo.QueryResult<InstitutionsQuery, InstitutionsQueryVariables>;
export const CreateInstitutionDocument = gql`
    mutation createInstitution($data: InstitutionCreateInput!) {
  createInstitution(data: $data) {
    id
    name
  }
}
    `;
export type CreateInstitutionMutationFn = Apollo.MutationFunction<CreateInstitutionMutation, CreateInstitutionMutationVariables>;

/**
 * __useCreateInstitutionMutation__
 *
 * To run a mutation, you first call `useCreateInstitutionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateInstitutionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInstitutionMutation, { data, loading, error }] = useCreateInstitutionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateInstitutionMutation(baseOptions?: Apollo.MutationHookOptions<CreateInstitutionMutation, CreateInstitutionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateInstitutionMutation, CreateInstitutionMutationVariables>(CreateInstitutionDocument, options);
      }
export type CreateInstitutionMutationHookResult = ReturnType<typeof useCreateInstitutionMutation>;
export type CreateInstitutionMutationResult = Apollo.MutationResult<CreateInstitutionMutation>;
export type CreateInstitutionMutationOptions = Apollo.BaseMutationOptions<CreateInstitutionMutation, CreateInstitutionMutationVariables>;
export const UpdateInstitutionDocument = gql`
    mutation UpdateInstitution($where: InstitutionWhereUniqueInput!, $data: InstitutionUpdateInput!) {
  updateInstitution(where: $where, data: $data) {
    id
  }
}
    `;
export type UpdateInstitutionMutationFn = Apollo.MutationFunction<UpdateInstitutionMutation, UpdateInstitutionMutationVariables>;

/**
 * __useUpdateInstitutionMutation__
 *
 * To run a mutation, you first call `useUpdateInstitutionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateInstitutionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateInstitutionMutation, { data, loading, error }] = useUpdateInstitutionMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateInstitutionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateInstitutionMutation, UpdateInstitutionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateInstitutionMutation, UpdateInstitutionMutationVariables>(UpdateInstitutionDocument, options);
      }
export type UpdateInstitutionMutationHookResult = ReturnType<typeof useUpdateInstitutionMutation>;
export type UpdateInstitutionMutationResult = Apollo.MutationResult<UpdateInstitutionMutation>;
export type UpdateInstitutionMutationOptions = Apollo.BaseMutationOptions<UpdateInstitutionMutation, UpdateInstitutionMutationVariables>;
export const DeleteInstitutionDocument = gql`
    mutation deleteInstitution($where: InstitutionWhereUniqueInput!) {
  deleteInstitution(where: $where) {
    id
  }
}
    `;
export type DeleteInstitutionMutationFn = Apollo.MutationFunction<DeleteInstitutionMutation, DeleteInstitutionMutationVariables>;

/**
 * __useDeleteInstitutionMutation__
 *
 * To run a mutation, you first call `useDeleteInstitutionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteInstitutionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteInstitutionMutation, { data, loading, error }] = useDeleteInstitutionMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteInstitutionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteInstitutionMutation, DeleteInstitutionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteInstitutionMutation, DeleteInstitutionMutationVariables>(DeleteInstitutionDocument, options);
      }
export type DeleteInstitutionMutationHookResult = ReturnType<typeof useDeleteInstitutionMutation>;
export type DeleteInstitutionMutationResult = Apollo.MutationResult<DeleteInstitutionMutation>;
export type DeleteInstitutionMutationOptions = Apollo.BaseMutationOptions<DeleteInstitutionMutation, DeleteInstitutionMutationVariables>;
export const LiveEventsDocument = gql`
    query LiveEvents($take: Int!, $skip: Int!, $where: EventWhereInput) {
  liveEvents(take: $take, skip: $skip, where: $where) {
    id
    eventNo
    seller {
      name
    }
    eventType {
      name
    }
    eventCategory
    startDate
    endDate
    noOfBids
    location {
      name
      country
      state {
        name
      }
      city
    }
    ExcelFile {
      file {
        url
      }
    }
    termsAndConditions
    vehiclesCount
  }
}
    `;

/**
 * __useLiveEventsQuery__
 *
 * To run a query within a React component, call `useLiveEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLiveEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLiveEventsQuery({
 *   variables: {
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useLiveEventsQuery(baseOptions: Apollo.QueryHookOptions<LiveEventsQuery, LiveEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LiveEventsQuery, LiveEventsQueryVariables>(LiveEventsDocument, options);
      }
export function useLiveEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LiveEventsQuery, LiveEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LiveEventsQuery, LiveEventsQueryVariables>(LiveEventsDocument, options);
        }
export type LiveEventsQueryHookResult = ReturnType<typeof useLiveEventsQuery>;
export type LiveEventsLazyQueryHookResult = ReturnType<typeof useLiveEventsLazyQuery>;
export type LiveEventsQueryResult = Apollo.QueryResult<LiveEventsQuery, LiveEventsQueryVariables>;
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
export const UpdateLocationDocument = gql`
    mutation updateLocation($where: LocationWhereUniqueInput!, $data: LocationUpdateInput!) {
  updateLocation(where: $where, data: $data) {
    id
    name
  }
}
    `;
export type UpdateLocationMutationFn = Apollo.MutationFunction<UpdateLocationMutation, UpdateLocationMutationVariables>;

/**
 * __useUpdateLocationMutation__
 *
 * To run a mutation, you first call `useUpdateLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLocationMutation, { data, loading, error }] = useUpdateLocationMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateLocationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLocationMutation, UpdateLocationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateLocationMutation, UpdateLocationMutationVariables>(UpdateLocationDocument, options);
      }
export type UpdateLocationMutationHookResult = ReturnType<typeof useUpdateLocationMutation>;
export type UpdateLocationMutationResult = Apollo.MutationResult<UpdateLocationMutation>;
export type UpdateLocationMutationOptions = Apollo.BaseMutationOptions<UpdateLocationMutation, UpdateLocationMutationVariables>;
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
export const OpenAuctionVehiclesDocument = gql`
    query OpenAuctionVehicles($where: VehicleWhereInput!) {
  vehicles(where: $where) {
    vehicleEventStatus
    registrationNumber
    make
    model
    varient
    categoty
    city
    fuel
    type
    rcStatus
    yearOfManufacture
    ownership
    kmReading
    insuranceStatus
    frontImage
    backImage
    leftImage
    rightImage
    image5
    image6
    currentBidAmount
    bidStartTime
    bidStatus
    bidTimeExpire
    vehicleIndexNo
    myBidRank
    id
    startPrice
    startBidAmount
    quoteIncreament
    veicleLocation
    vehicleCondition
    yardLocation
    repoDt
    event {
      id
      gapInBetweenVehicles
      endDate
      status
    }
  }
}
    `;

/**
 * __useOpenAuctionVehiclesQuery__
 *
 * To run a query within a React component, call `useOpenAuctionVehiclesQuery` and pass it any options that fit your needs.
 * When your component renders, `useOpenAuctionVehiclesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOpenAuctionVehiclesQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useOpenAuctionVehiclesQuery(baseOptions: Apollo.QueryHookOptions<OpenAuctionVehiclesQuery, OpenAuctionVehiclesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OpenAuctionVehiclesQuery, OpenAuctionVehiclesQueryVariables>(OpenAuctionVehiclesDocument, options);
      }
export function useOpenAuctionVehiclesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OpenAuctionVehiclesQuery, OpenAuctionVehiclesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OpenAuctionVehiclesQuery, OpenAuctionVehiclesQueryVariables>(OpenAuctionVehiclesDocument, options);
        }
export type OpenAuctionVehiclesQueryHookResult = ReturnType<typeof useOpenAuctionVehiclesQuery>;
export type OpenAuctionVehiclesLazyQueryHookResult = ReturnType<typeof useOpenAuctionVehiclesLazyQuery>;
export type OpenAuctionVehiclesQueryResult = Apollo.QueryResult<OpenAuctionVehiclesQuery, OpenAuctionVehiclesQueryVariables>;
export const SudoBidsDocument = gql`
    query SudoBids($where: BidWhereInput) {
  sudoBids(where: $where) {
    userId
    amount
    name
  }
}
    `;

/**
 * __useSudoBidsQuery__
 *
 * To run a query within a React component, call `useSudoBidsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSudoBidsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSudoBidsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSudoBidsQuery(baseOptions?: Apollo.QueryHookOptions<SudoBidsQuery, SudoBidsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SudoBidsQuery, SudoBidsQueryVariables>(SudoBidsDocument, options);
      }
export function useSudoBidsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SudoBidsQuery, SudoBidsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SudoBidsQuery, SudoBidsQueryVariables>(SudoBidsDocument, options);
        }
export type SudoBidsQueryHookResult = ReturnType<typeof useSudoBidsQuery>;
export type SudoBidsLazyQueryHookResult = ReturnType<typeof useSudoBidsLazyQuery>;
export type SudoBidsQueryResult = Apollo.QueryResult<SudoBidsQuery, SudoBidsQueryVariables>;
export const QueryDocument = gql`
    query Query {
  time
}
    `;

/**
 * __useQueryQuery__
 *
 * To run a query within a React component, call `useQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useQueryQuery(baseOptions?: Apollo.QueryHookOptions<QueryQuery, QueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryQuery, QueryQueryVariables>(QueryDocument, options);
      }
export function useQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryQuery, QueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryQuery, QueryQueryVariables>(QueryDocument, options);
        }
export type QueryQueryHookResult = ReturnType<typeof useQueryQuery>;
export type QueryLazyQueryHookResult = ReturnType<typeof useQueryLazyQuery>;
export type QueryQueryResult = Apollo.QueryResult<QueryQuery, QueryQueryVariables>;
export const PaymentDetailsDocument = gql`
    query PaymentDetails($where: PaymentWhereUniqueInput!) {
  payment(where: $where) {
    id
    amount
    status
    paymentFor
    description
    refNo
    emdUpdateCount
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
export const CoupenPerPaymentDocument = gql`
    query coupenPerPayment($where: PaymentWhereUniqueInput!) {
  payment(where: $where) {
    amount
    user {
      firstName
      lastName
    }
    coupenDetail {
      coupenNumber
      coupenStatus
      vehicleDetail {
        registrationNumber
      }
    }
  }
}
    `;

/**
 * __useCoupenPerPaymentQuery__
 *
 * To run a query within a React component, call `useCoupenPerPaymentQuery` and pass it any options that fit your needs.
 * When your component renders, `useCoupenPerPaymentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCoupenPerPaymentQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useCoupenPerPaymentQuery(baseOptions: Apollo.QueryHookOptions<CoupenPerPaymentQuery, CoupenPerPaymentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CoupenPerPaymentQuery, CoupenPerPaymentQueryVariables>(CoupenPerPaymentDocument, options);
      }
export function useCoupenPerPaymentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CoupenPerPaymentQuery, CoupenPerPaymentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CoupenPerPaymentQuery, CoupenPerPaymentQueryVariables>(CoupenPerPaymentDocument, options);
        }
export type CoupenPerPaymentQueryHookResult = ReturnType<typeof useCoupenPerPaymentQuery>;
export type CoupenPerPaymentLazyQueryHookResult = ReturnType<typeof useCoupenPerPaymentLazyQuery>;
export type CoupenPerPaymentQueryResult = Apollo.QueryResult<CoupenPerPaymentQuery, CoupenPerPaymentQueryVariables>;
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
export const PaymentOfUserDocument = gql`
    query paymentOfUser($where: UserWhereUniqueInput!) {
  user(where: $where) {
    id
    firstName
    lastName
    mobile
    payments {
      id
      refNo
      amount
      status
      paymentFor
      createdAt
      emdUpdateCount
      createdBy {
        firstName
      }
      updatedAt
      image {
        url
      }
      emdUpdate {
        vehicleBuyingLimitIncrement
      }
      RegistrationExpire
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
export const PaymentTableDocument = gql`
    query paymentTable($skip: Int!, $take: Int, $orderBy: [PaymentOrderByInput!]!) {
  payments(skip: $skip, take: $take, orderBy: $orderBy) {
    id
    refNo
    status
    amount
    paymentFor
    createdAt
    createdBy {
      firstName
      lastName
    }
    updatedAt
    RegistrationExpire
    emdUpdateCount
    user {
      id
      firstName
      lastName
      username
      mobile
    }
    emdUpdate {
      vehicleBuyingLimitIncrement
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
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function usePaymentTableQuery(baseOptions: Apollo.QueryHookOptions<PaymentTableQuery, PaymentTableQueryVariables>) {
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
export const PaymentsSearchDocument = gql`
    query PaymentsSearch($where: PaymentWhereInput!) {
  payments(where: $where) {
    id
    refNo
    amount
    createdAt
    updatedAt
    RegistrationExpire
    paymentFor
    status
    emdUpdateCount
    user {
      id
      mobile
      firstName
    }
    createdBy {
      firstName
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
 * __usePaymentsSearchQuery__
 *
 * To run a query within a React component, call `usePaymentsSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaymentsSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaymentsSearchQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function usePaymentsSearchQuery(baseOptions: Apollo.QueryHookOptions<PaymentsSearchQuery, PaymentsSearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PaymentsSearchQuery, PaymentsSearchQueryVariables>(PaymentsSearchDocument, options);
      }
export function usePaymentsSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PaymentsSearchQuery, PaymentsSearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PaymentsSearchQuery, PaymentsSearchQueryVariables>(PaymentsSearchDocument, options);
        }
export type PaymentsSearchQueryHookResult = ReturnType<typeof usePaymentsSearchQuery>;
export type PaymentsSearchLazyQueryHookResult = ReturnType<typeof usePaymentsSearchLazyQuery>;
export type PaymentsSearchQueryResult = Apollo.QueryResult<PaymentsSearchQuery, PaymentsSearchQueryVariables>;
export const DeletePaymentDocument = gql`
    mutation DeletePayment($where: PaymentWhereUniqueInput!) {
  deletePayment(where: $where) {
    id
  }
}
    `;
export type DeletePaymentMutationFn = Apollo.MutationFunction<DeletePaymentMutation, DeletePaymentMutationVariables>;

/**
 * __useDeletePaymentMutation__
 *
 * To run a mutation, you first call `useDeletePaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePaymentMutation, { data, loading, error }] = useDeletePaymentMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeletePaymentMutation(baseOptions?: Apollo.MutationHookOptions<DeletePaymentMutation, DeletePaymentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePaymentMutation, DeletePaymentMutationVariables>(DeletePaymentDocument, options);
      }
export type DeletePaymentMutationHookResult = ReturnType<typeof useDeletePaymentMutation>;
export type DeletePaymentMutationResult = Apollo.MutationResult<DeletePaymentMutation>;
export type DeletePaymentMutationOptions = Apollo.BaseMutationOptions<DeletePaymentMutation, DeletePaymentMutationVariables>;
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
export const UpdateStateDocument = gql`
    mutation UpdateState($where: StateWhereUniqueInput!, $data: StateUpdateInput!) {
  updateState(where: $where, data: $data) {
    id
  }
}
    `;
export type UpdateStateMutationFn = Apollo.MutationFunction<UpdateStateMutation, UpdateStateMutationVariables>;

/**
 * __useUpdateStateMutation__
 *
 * To run a mutation, you first call `useUpdateStateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStateMutation, { data, loading, error }] = useUpdateStateMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateStateMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStateMutation, UpdateStateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateStateMutation, UpdateStateMutationVariables>(UpdateStateDocument, options);
      }
export type UpdateStateMutationHookResult = ReturnType<typeof useUpdateStateMutation>;
export type UpdateStateMutationResult = Apollo.MutationResult<UpdateStateMutation>;
export type UpdateStateMutationOptions = Apollo.BaseMutationOptions<UpdateStateMutation, UpdateStateMutationVariables>;
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
    activeBidsCount
    coupenDetailCount
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
    query Users($skip: Int!, $take: Int, $orderBy: [UserOrderByInput!]!) {
  users(skip: $skip, take: $take, orderBy: $orderBy) {
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
    createdAt
    currentVehicleBuyingLimit {
      vehicleBuyingLimit
    }
    paymentsCount
    coupenDetailCount
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
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useUsersQuery(baseOptions: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
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
export const UserbyIdNoDocument = gql`
    query UserbyIdNo($where: UserWhereUniqueInput!) {
  user(where: $where) {
    id
  }
}
    `;

/**
 * __useUserbyIdNoQuery__
 *
 * To run a query within a React component, call `useUserbyIdNoQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserbyIdNoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserbyIdNoQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUserbyIdNoQuery(baseOptions: Apollo.QueryHookOptions<UserbyIdNoQuery, UserbyIdNoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserbyIdNoQuery, UserbyIdNoQueryVariables>(UserbyIdNoDocument, options);
      }
export function useUserbyIdNoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserbyIdNoQuery, UserbyIdNoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserbyIdNoQuery, UserbyIdNoQueryVariables>(UserbyIdNoDocument, options);
        }
export type UserbyIdNoQueryHookResult = ReturnType<typeof useUserbyIdNoQuery>;
export type UserbyIdNoLazyQueryHookResult = ReturnType<typeof useUserbyIdNoLazyQuery>;
export type UserbyIdNoQueryResult = Apollo.QueryResult<UserbyIdNoQuery, UserbyIdNoQueryVariables>;
export const BidUserDocument = gql`
    query bidUser($where: UserWhereUniqueInput!) {
  user(where: $where) {
    firstName
    lastName
    activeBidsCount
    username
  }
}
    `;

/**
 * __useBidUserQuery__
 *
 * To run a query within a React component, call `useBidUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useBidUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBidUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useBidUserQuery(baseOptions: Apollo.QueryHookOptions<BidUserQuery, BidUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BidUserQuery, BidUserQueryVariables>(BidUserDocument, options);
      }
export function useBidUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BidUserQuery, BidUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BidUserQuery, BidUserQueryVariables>(BidUserDocument, options);
        }
export type BidUserQueryHookResult = ReturnType<typeof useBidUserQuery>;
export type BidUserLazyQueryHookResult = ReturnType<typeof useBidUserLazyQuery>;
export type BidUserQueryResult = Apollo.QueryResult<BidUserQuery, BidUserQueryVariables>;
export const UsersSearchDocument = gql`
    query UsersSearch($where: UserWhereInput!) {
  users(where: $where) {
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
    createdAt
    currentVehicleBuyingLimit {
      vehicleBuyingLimit
    }
    paymentsCount
    coupenDetailCount
  }
}
    `;

/**
 * __useUsersSearchQuery__
 *
 * To run a query within a React component, call `useUsersSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersSearchQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUsersSearchQuery(baseOptions: Apollo.QueryHookOptions<UsersSearchQuery, UsersSearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersSearchQuery, UsersSearchQueryVariables>(UsersSearchDocument, options);
      }
export function useUsersSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersSearchQuery, UsersSearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersSearchQuery, UsersSearchQueryVariables>(UsersSearchDocument, options);
        }
export type UsersSearchQueryHookResult = ReturnType<typeof useUsersSearchQuery>;
export type UsersSearchLazyQueryHookResult = ReturnType<typeof useUsersSearchLazyQuery>;
export type UsersSearchQueryResult = Apollo.QueryResult<UsersSearchQuery, UsersSearchQueryVariables>;
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
    bidTimeExpire
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
    startBidAmount
    currentBidAmount
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
    vehicleIndexNo
    event {
      seller {
        name
      }
    }
    currentBidUser {
      firstName
      lastName
      username
      mobile
      pancardNo
    }
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
export const VehiclePerEventDocument = gql`
    query vehiclePerEvent($where: VehicleWhereInput!) {
  vehicles(where: $where) {
    id
    registrationNumber
  }
}
    `;

/**
 * __useVehiclePerEventQuery__
 *
 * To run a query within a React component, call `useVehiclePerEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useVehiclePerEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVehiclePerEventQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useVehiclePerEventQuery(baseOptions: Apollo.QueryHookOptions<VehiclePerEventQuery, VehiclePerEventQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VehiclePerEventQuery, VehiclePerEventQueryVariables>(VehiclePerEventDocument, options);
      }
export function useVehiclePerEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VehiclePerEventQuery, VehiclePerEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VehiclePerEventQuery, VehiclePerEventQueryVariables>(VehiclePerEventDocument, options);
        }
export type VehiclePerEventQueryHookResult = ReturnType<typeof useVehiclePerEventQuery>;
export type VehiclePerEventLazyQueryHookResult = ReturnType<typeof useVehiclePerEventLazyQuery>;
export type VehiclePerEventQueryResult = Apollo.QueryResult<VehiclePerEventQuery, VehiclePerEventQueryVariables>;
export const VehicleDetailsPerEventDocument = gql`
    query VehicleDetailsPerEvent($where: EventWhereUniqueInput!) {
  event(where: $where) {
    id
    status
    eventNo
    endDate
    vehiclesCount
    eventCategory
    vehicles {
      bidStartTime
      bidTimeExpire
      id
      vehicleIndexNo
      registrationNumber
      totalBids
      frontImage
      vehicleEventStatus
      bidStatus
      state
      city
      currentBidAmount
      currentBidUser {
        id
        firstName
        lastName
        mobile
        currentVehicleBuyingLimit {
          vehicleBuyingLimit
        }
      }
      coupenDetail {
        coupenNumber
      }
    }
    seller {
      name
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
    startBidAmount
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