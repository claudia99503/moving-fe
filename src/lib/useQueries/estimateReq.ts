import { useMutation, useQuery } from '@tanstack/react-query';
import {
  createEstimateReq,
  deleteEstimateReq,
  getEstimateReqList,
  getEstimateReq,
} from '../api/estimateReq';

export interface FormValues {
  movingType: null | string;
  movingDate: null | string;
  departure: null | string;
  arrival: null | string;
  comment?: undefined | string | null;
}

type useGetEstimateReqListProps = {
  page?: number;
  pageSize?: number;
};

/* 유저-견적 요청 조회 */
export function useGetEstimateReq() {
  return useQuery({
    queryKey: ['estimateReq'],
    queryFn: () => getEstimateReq(),
  });
}

/* 유저-견적 요청 삭제 */
export function useDeleteEstimateReq() {
  const mutation = useMutation({
    mutationFn: (estimateReqId: number) => deleteEstimateReq(estimateReqId),
    onSuccess: (data) => {
      console.log('견적 요청 삭제(상태 변경) 성공', data);
    },
    onError: (error) => {
      console.error('견적 요청 삭제(상태 변경) 실패, 에러', error);
    },
  });
  return mutation;
}

// useMutation을 사용하여 POST 요청을 처리
export function useCreateEstimateReq() {
  const mutation = useMutation({
    mutationFn: (data: FormValues) => createEstimateReq(data),
    onSuccess: (data) => {
      console.log('Estimate created successfully:', data);
    },
    onError: (error) => {
      console.error('Error creating estimate:', error);
    },
  });

  return mutation;
}

/* GET USER-받았던 견적 리스트 조회*/
export function useGetEstimateReqList({
  page,
  pageSize,
}: useGetEstimateReqListProps): any {
  return useQuery({
    queryKey: ['estimateReq'],
    queryFn: () => getEstimateReqList({ page, pageSize }),
  });
}
