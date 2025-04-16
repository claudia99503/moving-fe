import axios from './axios';

import { getParams } from '../function/utils';
import { PaginationParams } from '../../types/apiTypes';

const PATH = '/assignedEstimateReq';

/* PATCH - 기사 - 지정 견적 반려 */
export async function updateEstimateReject(estimateRequestId: number) {
  const res = await axios.patch(`${PATH}/${estimateRequestId}`);
  return res.data;
}

/* GET - 기사 - 반려된 견적 요청 및 취소된 견적 요청 조회  */
export async function getEstimateReject(queryParams: PaginationParams) {
  const params = getParams(queryParams);
  const res = await axios.get(`${PATH}/rejectList`, { params });

  return res.data;
}


/* POST - 소비자 - 지정 견적 요청 */
export async function requestAssignedEstimate(moverId: number) {
  const res = await axios.post(`${PATH}`, { moverId });
  return {
    ...res.data,
    status: res.status,
  };
}

