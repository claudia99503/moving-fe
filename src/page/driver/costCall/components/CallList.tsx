import { useState } from 'react';

import UserCard from '../../../../components/card/UserCard';
import ModalContainer from '../../../../components/modal/ModalContainer';
import Chip from '../../../../components/chip/Chip';
import UserProfile from '../../../../components/card/UserProfile';
import ModalInput from './ModalInput';

import { UserProfileProps } from '../../../../types/cardTypes';
import { useMedia } from '../../../../lib/function/useMediaQuery';
import { useCreateEstimate } from '../../../../lib/useQueries/estimate';
import { useUpdateEstimateReject } from '../../../../lib/useQueries/assignedEstimateReq';

import style from './CallList.module.css';

import icCheckLarge from '../../../../assets/icons/ic_check_large.svg';
import icCheckMedium from '../../../../assets/icons/ic_check_medium.svg';
import { simplifyAddress } from '../../../../lib/function/utils';

interface CallListProps {
  list: UserProfileProps['list'][];
  refetchList: () => void;
}

export default function CallList({ list, refetchList }: CallListProps) {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false); // 모달
  const [error, setError] = useState('');
  const [modalContent, setModalContent] = useState(true); // true : 견적보내기 / false : 반려
  const [isCommentOpen, setIsCommentOpen] = useState(false); // 요구사항
  const [userIndex, setUserIndex] = useState<number>(); // 선택된 카드 index
  const [estimatePrice, setEstimatePrice] = useState(0);
  const [comment, setComment] = useState('');
  const [isBtnActive, setIsBtnActive] = useState([false, false]);

  const { mutate: createEstimate } = useCreateEstimate();
  const { mutate: updateEstimateReject } = useUpdateEstimateReject();

  const isPc = useMedia().pc;

  const getBtnActive = () => {
    if (modalContent) {
      return isBtnActive.filter((a) => a === true).length === 2 ? false : true;
    } else
      return isBtnActive.filter((a) => a === true).length === 1 ? false : true;
  };

  const sendBtnHandler = (index: number) => {
    setIsModalOpen(!isModalOpen);
    setModalContent(true);
    setUserIndex(index);

    setIsBtnActive([false, false]);
  };

  const rejectBtnHandler = (index: number) => {
    setIsModalOpen(!isModalOpen);
    setModalContent(false);
    setUserIndex(index);
    setIsBtnActive([false, false]);
  };

  const btnHandler = () => {
    if (userIndex === undefined) return;

    const user = list[userIndex];

    if (modalContent) {
      createEstimate(
        {
          estimateRequestId: user.estimateReqId,
          price: estimatePrice,
          comment: comment,
        },
        {
          onSuccess: () => {
            refetchList(); // 데이터 갱신
            setIsModalOpen(false);
            resetModalState();
          },
          onError: (error) => {
            setError(error.message);
            setIsErrorModalOpen(true);
          },
        },
      );
    } else {
      updateEstimateReject(user.estimateReqId!, {
        onSuccess: () => {
          refetchList(); // 데이터 갱신
          setIsModalOpen(false);
          resetModalState();
        },
        onError: (error) => {
          setError(error.message);
          setIsErrorModalOpen(true);
        },
      });
    }
    setIsModalOpen(false);
  };

  const resetModalState = () => {
    setEstimatePrice(0);
    setComment('');
    setIsBtnActive([false, false]);
  };

  const handleMouseEnter = () => {
    setIsCommentOpen(true);
  };

  const handleMouseLeave = () => {
    setIsCommentOpen(false);
  };

  return (
    <div className={style.callList}>
      {list.map((user, index) => (
        <UserCard
          key={user.estimateReqId}
          list={{
            ...user,
            departure: user.departure && simplifyAddress(user.departure),
            arrival: user.arrival && simplifyAddress(user.arrival),
            detailDeparture: user.departure,
            detailArrival: user.arrival,
          }}
          type='receive'
          sendCostBtn={() => sendBtnHandler(index)}
          rejectCostBtn={() => rejectBtnHandler(index)}
        />
      ))}
      {isModalOpen && userIndex !== undefined && (
        <ModalContainer
          title={modalContent ? '견적 보내기' : '요청 반려'}
          buttonText={modalContent ? '견적 보내기' : '반려하기'}
          closeBtnClick={() => setIsModalOpen(!isModalOpen)}
          buttonClick={btnHandler}
          disabled={getBtnActive()}
        >
          <div className={style.container}>
            <div className={style.chipBar}>
              <Chip
                type={
                  list[userIndex].movingType as
                    | 'SMALL'
                    | 'HOUSE'
                    | 'OFFICE'
                    | 'ASSIGN'
                    | 'CONFIRM'
                    | 'WAITING'
                }
              />
              {list[userIndex].isAssigned && <Chip type='ASSIGN' />}
            </div>
            <div className={style.profile}>
              <UserProfile list={list[userIndex]} type='modal' />
              {list[userIndex].comment && (
                <div
                  className={style.commentChip}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={isPc ? icCheckLarge : icCheckMedium}
                    alt='icCheck'
                    className={style.commentImg}
                  />
                  요청사항
                  {isCommentOpen && (
                    <div className={style.comment}>
                      {list[userIndex].comment}
                    </div>
                  )}
                </div>
              )}
            </div>
            {modalContent ? (
              <>
                <ModalInput
                  text='견적가를 입력해 주세요'
                  basicText='견적가 입력'
                  limit={1}
                  onChange={(value) => setEstimatePrice(Number(value))}
                  setIsBtnActive={setIsBtnActive}
                />
                <ModalInput
                  text='코멘트를 입력해 주세요'
                  basicText='최소 10자 이상 입력해주세요'
                  limit={10}
                  isTextArea={true}
                  onChange={(value) => setComment(String(value))}
                  setIsBtnActive={setIsBtnActive}
                />
              </>
            ) : (
              <ModalInput
                text='반려 사유를 입력해 주세요'
                basicText='최소 10자 이상 입력해주세요'
                isTextArea={true}
                limit={10}
                onChange={(value) => setComment(String(value))}
                setIsBtnActive={setIsBtnActive}
              />
            )}
          </div>
        </ModalContainer>
      )}
      {isErrorModalOpen && (
        <ModalContainer
          title='에러 메시지'
          isText={true}
          text={error}
          buttonText='확인'
          closeBtnClick={() => setIsErrorModalOpen(!isErrorModalOpen)}
          buttonClick={() => setIsErrorModalOpen(!isErrorModalOpen)}
          btnColorRed={true}
        />
      )}
    </div>
  );
}
