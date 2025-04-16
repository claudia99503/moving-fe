import React from 'react';
import ModalContainer from '../../../../components/modal/ModalContainer';

interface ModalsProps {
  driverName: string;
  isModalOpen: boolean;
  isLoginModalOpen: boolean;
  isAssignedEstimateReqOpen: boolean;
  errorModalMessage: string | null;
  handleModalButtonClick: () => void;
  navigateLogin: () => void;
  closeErrorModal: () => void;
  closeModal: () => void;
  closeLoginModal: () => void;
  closeAssignedModal: () => void;
}

const Modals = ({
  driverName,
  isModalOpen,
  isLoginModalOpen,
  isAssignedEstimateReqOpen,
  errorModalMessage,
  handleModalButtonClick,
  navigateLogin,
  closeErrorModal,
  closeModal,
  closeLoginModal,
  closeAssignedModal,
}: ModalsProps) => {
  return (
    <>
      {errorModalMessage && (
        <ModalContainer
          title='지정 견적 요청 실패'
          isText={true}
          text={errorModalMessage}
          buttonText='확인'
          closeBtnClick={closeErrorModal}
          buttonClick={closeErrorModal}
          btnColorRed={true}
        />
      )}
      {isModalOpen && (
        <ModalContainer
          title='지정 견적 요청하기'
          isText={true}
          text='일반 견적 요청을 먼저 진행해주세요.'
          buttonText='일반 견적 요청하기'
          closeBtnClick={closeModal}
          buttonClick={handleModalButtonClick}
        />
      )}
      {isLoginModalOpen && (
        <ModalContainer
          title='로그인 후 이용해주세요'
          isText={true}
          text='서비스를 이용하시려면 로그인이 필요합니다.'
          buttonText='로그인 하기'
          closeBtnClick={closeLoginModal}
          buttonClick={navigateLogin}
        />
      )}
      {isAssignedEstimateReqOpen && (
        <ModalContainer
          title='지정 견적 요청 성공'
          isText={true}
          text={`${driverName} 기사님에게 지정 견적 요청이 성공적으로 전달되었습니다.`}
          buttonText='확인'
          closeBtnClick={closeAssignedModal}
          buttonClick={closeAssignedModal}
        />
      )}
    </>
  );
};

export default Modals;

