import { upsertCustomerRef, createProductReviewRef, createOrderRef, updateOrderByPaymentIntentIdRef, updateOrderByChargeIdRef, createOrderItemRef, listCustomersRef, getReviewsByHandleRef, getProductByHandleRef, getCollectionByHandleRef, getCollectionsByPageRef, searchProductDescriptionUsingL2similarityRef, searchProductTitleUsingL2similarityRef, searchProductReviewContentUsingL2similarityRef, getOrdersByCustomerIdRef, getOrderByIdRef, connectorConfig } from '../../';
import { CallerSdkTypeEnum, validateArgs } from 'firebase/data-connect';
import { useDataConnectQuery, useDataConnectMutation } from '@tanstack-query-firebase/react/data-connect';

export function useUpsertCustomer(dcOrOptions, options) {
  const { dc: dcInstance, vars: inputOpts } = validateArgs(connectorConfig, dcOrOptions, options, false);
  function refFactory(vars) {
    return upsertCustomerRef(dcInstance, vars);
  }
  return useDataConnectMutation(refFactory, inputOpts, CallerSdkTypeEnum.GeneratedReact);
}

export function useCreateProductReview(dcOrOptions, options) {
  const { dc: dcInstance, vars: inputOpts } = validateArgs(connectorConfig, dcOrOptions, options, false);
  function refFactory(vars) {
    return createProductReviewRef(dcInstance, vars);
  }
  return useDataConnectMutation(refFactory, inputOpts, CallerSdkTypeEnum.GeneratedReact);
}

export function useCreateOrder(dcOrOptions, options) {
  const { dc: dcInstance, vars: inputOpts } = validateArgs(connectorConfig, dcOrOptions, options, false);
  function refFactory(vars) {
    return createOrderRef(dcInstance, vars);
  }
  return useDataConnectMutation(refFactory, inputOpts, CallerSdkTypeEnum.GeneratedReact);
}

export function useUpdateOrderByPaymentIntentId(dcOrOptions, options) {
  const { dc: dcInstance, vars: inputOpts } = validateArgs(connectorConfig, dcOrOptions, options, false);
  function refFactory(vars) {
    return updateOrderByPaymentIntentIdRef(dcInstance, vars);
  }
  return useDataConnectMutation(refFactory, inputOpts, CallerSdkTypeEnum.GeneratedReact);
}

export function useUpdateOrderByChargeId(dcOrOptions, options) {
  const { dc: dcInstance, vars: inputOpts } = validateArgs(connectorConfig, dcOrOptions, options, false);
  function refFactory(vars) {
    return updateOrderByChargeIdRef(dcInstance, vars);
  }
  return useDataConnectMutation(refFactory, inputOpts, CallerSdkTypeEnum.GeneratedReact);
}

export function useCreateOrderItem(dcOrOptions, options) {
  const { dc: dcInstance, vars: inputOpts } = validateArgs(connectorConfig, dcOrOptions, options, false);
  function refFactory(vars) {
    return createOrderItemRef(dcInstance, vars);
  }
  return useDataConnectMutation(refFactory, inputOpts, CallerSdkTypeEnum.GeneratedReact);
}


export function useListCustomers(dc, options) {
  const { dc: dcInstance } = validateArgs(connectorConfig, dc, undefined, false);
  const ref = listCustomersRef(dcInstance);
  return useDataConnectQuery(ref, options, CallerSdkTypeEnum.GeneratedReact);
}

export function useGetReviewsByHandle(dcOrVars, vars, options) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, false);
  const ref = getReviewsByHandleRef(dcInstance, inputVars);
  return useDataConnectQuery(ref, options, CallerSdkTypeEnum.GeneratedReact);
}

export function useGetProductByHandle(dcOrVars, vars, options) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, false);
  const ref = getProductByHandleRef(dcInstance, inputVars);
  return useDataConnectQuery(ref, options, CallerSdkTypeEnum.GeneratedReact);
}

export function useGetCollectionByHandle(dcOrVars, vars, options) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, false);
  const ref = getCollectionByHandleRef(dcInstance, inputVars);
  return useDataConnectQuery(ref, options, CallerSdkTypeEnum.GeneratedReact);
}

export function useGetCollectionsByPage(dcOrVars, vars, options) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, false);
  const ref = getCollectionsByPageRef(dcInstance, inputVars);
  return useDataConnectQuery(ref, options, CallerSdkTypeEnum.GeneratedReact);
}

export function useSearchProductDescriptionUsingL2similarity(dcOrVars, vars, options) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, false);
  const ref = searchProductDescriptionUsingL2similarityRef(dcInstance, inputVars);
  return useDataConnectQuery(ref, options, CallerSdkTypeEnum.GeneratedReact);
}

export function useSearchProductTitleUsingL2similarity(dcOrVars, vars, options) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, false);
  const ref = searchProductTitleUsingL2similarityRef(dcInstance, inputVars);
  return useDataConnectQuery(ref, options, CallerSdkTypeEnum.GeneratedReact);
}

export function useSearchProductReviewContentUsingL2similarity(dcOrVars, vars, options) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, false);
  const ref = searchProductReviewContentUsingL2similarityRef(dcInstance, inputVars);
  return useDataConnectQuery(ref, options, CallerSdkTypeEnum.GeneratedReact);
}

export function useGetOrdersByCustomerId(dcOrVars, vars, options) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, false);
  const ref = getOrdersByCustomerIdRef(dcInstance, inputVars);
  return useDataConnectQuery(ref, options, CallerSdkTypeEnum.GeneratedReact);
}

export function useGetOrderById(dcOrVars, vars, options) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, false);
  const ref = getOrderByIdRef(dcInstance, inputVars);
  return useDataConnectQuery(ref, options, CallerSdkTypeEnum.GeneratedReact);
}