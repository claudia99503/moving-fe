export const getErrorMessage = (code: string, name: string) => {
  const messages: Record<string, string> = {
    MISSING_GENERAL_ESTIMATE: '일반 견적 요청을 먼저 진행해주세요.',
    OUT_OF_SERVICE_REGION: `${name} 기사님은 해당 지역에서 서비스를 제공하지 않습니다.`,
    FORBIDDEN_CUSTOMER_ONLY: '이 서비스는 소비자 전용입니다.',
    UNAUTHORIZED_ACCESS: '로그인이 필요합니다.',
    ALREADY_ESTIMATE_EXISTS: '이미 보낸 견적이 있습니다.',
    ALREADY_ASSIGNED_REQUEST: '이미 지정 견적을 요청하셨습니다.',
    PAST_MOVING_DATE: '이사일이 지난 요청입니다.',
    CANCELLED_REQUEST: '취소된 요청입니다.',
    INVALID_MOVER_ID: '존재하지 않는 기사님입니다.',
    ESTIMATE_REQUEST_NOT_FOUND: '존재하지 않는 견적 요청입니다.',
    ESTIMATE_NOT_FOUND: '존재하지 않는 견적입니다.',
  };

  return messages[code] || `알 수 없는 오류가 발생했습니다. (코드: ${code})`;
};

