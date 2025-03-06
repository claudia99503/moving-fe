<div align=center>
	<span id="top">
	<h1>Moving 프론트엔드 레포지토리</h1><br>

![image](https://github.com/user-attachments/assets/7ac80cb6-b3a1-47c2-a70f-dc3f5b8da42d)



<b>[Moving 바로가기](https://gomoveit.vercel.app)</b> <br>

<br> 
</div>

<details>
<summary>목차</summary>
  
1. [서비스 소개](#app)
2. [프론트엔드 팀 소개](#team)
3. [기술 및 개발 환경](#dev)
4. [개발 일정](#schedule)
5. [역할 분담](#roles)
6. [구현 기능](#feature)
7. [컨벤션](#convention)
8. [프로젝트 구조](#tree)
9. [협업 문화](#culture)
10. [버그 문제](#bug)

11. </details>
<br>


## <span id="app">📝 1. 서비스 소개</span>

<b>'무빙(Moving)'</b>은 이사를 준비하는 **소비자**와 전문 **이사 기사님**을 빠르고 간편하게 연결해주는 **이사 매칭 플랫폼**입니다.  
이사 시장의 **불투명한 가격 책정**과 **신뢰할 수 없는 서비스** 문제를 해결하기 위해, 소비자가 **채팅형 인터페이스**로 손쉽게 이사 정보를 입력하면 여러 기사님들이 견적을 제공하고, 소비자는 **제공된 견적과 리뷰를 비교해 자신에게 꼭 맞는 기사님을 선택**할 수 있습니다.  
무빙은 **소비자**와 **기사님** 모두가 믿고 이용할 수 있는 **편리하고 신뢰도 높은 이사 서비스**를 제공합니다.

### 주요 기능

### 🏡 **소비자 기능**

- **소비자 로그인 및 회원가입**  
  - 소비자는 전용 로그인 및 회원가입 페이지에서 가입할 수 있습니다.  
  - **소셜 로그인**: 구글, 네이버, 카카오톡 지원  
  - **이메일 회원가입**: 이메일, 전화번호, 비밀번호 유효성 검사 진행  
  - **로그아웃 기능** 제공  

- **프로필 등록 및 수정**  
  - **프로필 이미지**, **이용 서비스**, **거주 지역**을 등록하거나 수정할 수 있습니다.  
  - **GNB**에서 아바타 클릭 → **프로필 등록 및 수정 페이지**로 이동 가능  

- **견적 요청**  
  - 소비자는 **채팅 형태**의 인터페이스를 통해 간편하게 이사 정보를 입력하고 견적을 요청할 수 있습니다.  
  - 입력 항목: **이사 종류**, **이사 날짜**, **출발지 및 도착지 주소**  
  - **카카오 우편번호 서비스**를 활용해 정확한 주소 입력 가능  
  - **프로그래스 바**로 입력 진행 상황을 시각적으로 확인 가능  
  - 각 입력 항목에 있는 **수정하기 버튼**을 통해 입력 내용 수정 가능  
  - 요청한 견적은 **대기 중인 견적 페이지**에서 확인 및 **취소** 가능  

- **기사님 찾기 및 비교**  
  - **별명 검색**으로 기사님 조회 가능  
  - **리뷰**, **평점**, **경력**, **확정 횟수** 기준으로 기사님 정렬 가능  
  - **지역별**, **서비스별** 필터링 기능 제공  
  - **무한 스크롤**을 통해 기사님 리스트 탐색 가능  

- **찜하기 및 SNS 공유**  
  - 소비자는 기사님을 **찜하기** 기능으로 저장하고 **찜한 기사님 페이지**에서 이를 확인할 수 있습니다.  
  - **PC 화면**에서는 기사님 찾기 페이지 좌측에 **찜한 기사님 3명**까지 표시됩니다.  
  - 기사님 정보를 SNS에 공유 가능  
    - 예시: `"이사를 준비하시나요? ⭐️ OOO 기사님을 추천합니다! 무빙에서 확인해 보세요! <기사님 상세 페이지 URL>"`  

- **지정 견적 요청**  
  - 일반 견적 요청 후 특정 기사님에게 **지정 견적 요청** 가능  
  - **지정 요청**은 일반 요청과 구분되어 **라벨**로 강조 표시됨  

- **받은 견적 관리**  
  - **대기 중인 견적 리스트**에서 진행 중인 견적 요청 확인 및 **취소** 가능  
  - 한 번의 요청에 대해 최대 **5명의 기사님**에게 견적 수신 가능 (지정 요청 시 추가 **3명**)  
  - **견적 상세 페이지**에서 기사님의 정보 및 견적가 확인 가능  
  - **완료된 이사**에 대한 견적서를 조회하고, 기사님을 **찜하기** 가능  

- **리뷰 작성 및 조회**  
  - 이사 완료 후 기사님에 대한 **리뷰 작성** 가능  
  - **이사 리뷰 페이지**에서 작성한 리뷰 내역 및 작성 가능한 리뷰 목록 확인 가능  
  - 기사님은 **마이 페이지**에서 자신이 받은 리뷰와 평점을 확인 가능  

- **실시간 알림 제공**  
  - **새로운 견적 도착**, **견적 확정**, **이사 일정**에 대한 알림 제공  


### 🚚 **기사님 기능**

- **기사님 로그인 및 회원가입**  
  - 기사님 전용 로그인 및 회원가입 페이지 제공  
  - **소셜 로그인** 및 **이메일 로그인** 지원  
  - **프로필 등록** 후 견적 제안 가능  

- **프로필 등록 및 수정**  
  - 기사님은 **프로필 이미지**, **별명**, **경력**, **한 줄 소개**, **상세 설명**, **서비스 제공 지역**, **서비스 유형**을 등록 및 수정할 수 있습니다.  
  - **GNB**에서 아바타 클릭 → **프로필 등록 및 수정 페이지**로 이동 가능  

- **받은 견적 요청 조회 및 관리**  
  - 서비스 가능 지역 내의 **이사 요청 리스트** 확인 가능  
  - **이사 종류**, **서비스 가능 지역**, **지정 요청** 기준으로 필터링 가능  
  - **이사 빠른 순**, **최근 요청 순**으로 정렬 가능  

- **견적 제안 및 반려**  
  - 기사님은 받은 견적 요청에 대해 가격을 입력하고 **견적서 전송** 가능  
  - 서비스 불가능한 요청은 **반려** 가능

- **받은 견적 관리**  
  - 기사님이 받은 견적 요청 리스트 확인 가능  
  - **지정 요청**이 있는 경우 라벨로 강조되어 구분됨  

- **리뷰 및 평점 확인**  
  - 기사님은 **마이 페이지**에서 자신이 받은 리뷰와 평점을 조회할 수 있음  

- **실시간 알림 제공**  
  - **새로운 견적 요청 수신**, **견적 확정**, **이사 일정** 알림 제공
 
<br>

### 시연 영상
[![MOVING 시연 영상](https://img.youtube.com/vi/영상ID/0.jpg)](https://github.com/user-attachments/assets/44cb82a9-84d9-47ae-a8e4-a27945bdd328)

<br><br>

## <span id="team"> 🧑🏻‍💻👩🏻‍💻 2. 프론트엔드 팀 소개</span>

### 팀원

| 김대건                                                                          | 김민서                                                                           | 김효인                                                                           | 박명준                                                                            | 이율리                                                                            |
| ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| <img src="https://avatars.githubusercontent.com/u/163653145?v=4" width="200px"/> | <img src="https://avatars.githubusercontent.com/u/101076926?v=4" width="200px"/> | <img src="https://avatars.githubusercontent.com/u/160555885?v=4" width="200px"/> | <img src="https://avatars.githubusercontent.com/u/103097363?v=4" width="200px"/> | <img src="https://avatars.githubusercontent.com/u/57631151?v=4" width="200px"/> |
| [TradeOffEgoist](https://github.com/TradeOffEgoist)                             | [claudia99503](https://github.com/claudia99503)                                   | [mozzi34](https://github.com/mozzi34)                                           | [mjpark-k](https://github.com/mjpark-k)                                           | [yoorli](https://github.com/yoorli)                                              |


<br>


## <span id="dev">🛠️ 3. 기술 및 개발 환경</span>

### Frontend

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

### Backend
- <a href="https://github.com/moving-team/moving-be"><b>Moving 백엔드 레포지토리</b></a><br>

### Design

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

### 협업방식

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"> <img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white">

### 배포

![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

<br><br>

## <span id="schedule">📅 4. 개발 일정 [**2024-11-25 ~ 2025-01-13**]</span>

### 1. 기획 완료

- [x] 요구사항 분석 및 수집
- [x] 기술 스택 검토 및 선정
- [x] Git 브랜치 전략 수립
- [x] PR 규칙 등 팀 컨벤션 확립 [**2024-11-25 ~ 2024-11-28**]

### 2. 컴포넌트 개발

- [x] 각 단위별 담당자 지정 [**2024-11-29**]
- [x] 컴포넌트 개발 [**2024-11-29 ~ 2024-12-06**]

### 3. 페이지 개발

- [x] 페이지 레이아웃 및 구조 설계 [**2024-12-06**]
- [x] 페이지 개발 [**2024-12-06 ~ 2024-12-13**]
- [x] 페이지 스타일링 및 반응형 디자인 적용 [**2024-12-13 ~ 2024-12-20**]

### 4. 백엔드 API 연동

- [x] API 테스트 [**2024-12-21 ~ 2024-12-27**]
- [x] 페이지에 API 연동 [**2024-12-28 ~ 2025-01-09**]

### 5. 릴리스 준비

- [x] 최종 점검 및 테스트 [**2025-01-10 ~ 2025-01-13**]
- [x] **최종 발표** [**2025-01-14**]

<br>

#### <p align="right"><a href="#top">TOP👆🏻</a></p>

<br>

## <span id="roles">📝 5. 역할 분담</span>
### **김대건**

🎶 **공통 컴포넌트**

- 🔗 **[비로그인 레이아웃](https://github.com/moving-team/moving-fe/blob/main/src/layout/RendingLayout.tsx)**  
  : 비로그인 사용자를 위한 레이아웃으로, **네비게이션 바**와 **모달 상태**를 관리합니다.

- 🔗 **[소비자 레이아웃](https://github.com/moving-team/moving-fe/blob/main/src/layout/UserLayout.tsx)**  
  : **소비자** 전용 레이아웃으로, **회원 정보 등록 여부**를 확인하고 **소비자 네비게이션 바**를 렌더링합니다.

- 🔗 **[기사님 레이아웃](https://github.com/moving-team/moving-fe/blob/main/src/layout/DriverLayout.tsx)**  
  : **기사님** 전용 레이아웃으로, **서비스 정보 등록 여부**를 확인하고 **기사님 네비게이션 바**를 렌더링합니다.

✨ **[랜딩 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/root/index.tsx)**
- **소비자, 기사님** 공용 페이지

<table>
  <tr>
    <th style="width: 650px; height: 100px;">데스크탑 & 태블릿 버전</th>
    <th style="width: 350px; height: 100px;">모바일 버전</th>
  </tr>
  <tr>
    <td><img src="" alt="데스크탑 & 태블릿 버전 이미지"></td>
    <td><img src="" alt="모바일 버전 이미지"></td>
  </tr>
</table>


<br>

✨ **[회원가입 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/user/signup/index.tsx)** 
- **소비자, 기사님** 공용 페이지

<table>
  <tr>
    <th style="width: 650px; height: 100px;">데스크탑 & 태블릿 버전</th>
    <th style="width: 350px; height: 100px;">모바일 버전</th>
  </tr>
  <tr>
    <td><img src="" alt="데스크탑 & 태블릿 버전 이미지"></td>
    <td><img src="" alt="모바일 버전 이미지"></td>
  </tr>
</table>

- 신규 **소비자**와 **기사님**이 Moving에 회원가입할 수 있는 페이지입니다.  
- **이메일**, **구글**, **카카오톡**, **네이버**를 통해 간편하게 회원가입이 가능합니다.  
- **이메일 회원가입** 시, 다음과 같은 유효성 검사가 진행됩니다.  
  - **이메일**: 올바른 이메일 형식인지 확인  
  - **전화번호**: 지역에 맞는 형식인지 확인  
  - **비밀번호**: 최소 8자 이상, 영문, 숫자, 특수문자를 포함해야 합니다.

<br>

✨ **[로그인 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/user/login/index.tsx)** 
- **소비자, 기사님** 공용 페이지

<table>
  <tr>
    <th style="width: 650px; height: 100px;">데스크탑 & 태블릿 버전</th>
    <th style="width: 350px; height: 100px;">모바일 버전</th>
  </tr>
  <tr>
    <td><img src="" alt="데스크탑 & 태블릿 버전 이미지"></td>
    <td><img src="" alt="모바일 버전 이미지"></td>
  </tr>
</table>

- **소비자**와 **기사님**이 Moving에 로그인할 수 있는 페이지입니다.  
<br>

✨ **기본정보 수정 페이지** 

<table>
  <tr>
    <th style="width: 650px; height: 100px;">데스크탑 & 태블릿 버전</th>
    <th style="width: 350px; height: 100px;">모바일 버전</th>
  </tr>
  <tr>
    <td><img src="" alt="데스크탑 & 태블릿 버전 이미지"></td>
    <td><img src="" alt="모바일 버전 이미지"></td>
  </tr>
</table>

- ✨ **[소비자 기본정보 수정](https://github.com/moving-team/moving-fe/blob/main/src/page/user/editInfo/index.tsx)**  
	- 소비자는 이름, 이메일, 전화번호, 비밀번호를 수정할 수 있습니다.  
	- **GNB에서 아바타 클릭** → **기본정보 수정 페이지**로 이동합니다.
- ✨ **[기사님 기본정보 수정](https://github.com/moving-team/moving-fe/blob/main/src/page/driver/editInfo/index.tsx)**  
	- 기사님도 이름, 이메일, 전화번호, 비밀번호를 수정할 수 있습니다.  
	- **GNB에서 아바타 클릭** → **마이 페이지** → **기본정보 수정 페이지**로 이동합니다.

<br>

✨ **프로필 등록 페이지**  

<table>
  <tr>
    <th style="width: 650px; height: 100px;">데스크탑 & 태블릿 버전</th>
    <th style="width: 350px; height: 100px;">모바일 버전</th>
  </tr>
  <tr>
    <td><img src="" alt="데스크탑 & 태블릿 버전 이미지"></td>
    <td><img src="" alt="모바일 버전 이미지"></td>
  </tr>
</table>

- ✨ **[소비자 프로필 등록](https://github.com/moving-team/moving-fe/blob/main/src/page/user/register/index.tsx)**  
  - 소비자는 **프로필 이미지**, **이용 서비스**, **거주 지역**을 등록할 수 있습니다.  
  - **GNB에서 아바타 클릭** → **프로필 등록 페이지**로 이동합니다.  

- ✨ **[기사님 프로필 등록](https://github.com/moving-team/moving-fe/blob/main/src/page/driver/register/index.tsx)**  
  - 기사님은 **별명**, **프로필 이미지**, **경력**, **한 줄 소개**, **상세 설명**, **제공 서비스**, **서비스 가능 지역**을 등록할 수 있습니다.  
  - **GNB에서 아바타 클릭** → **프로필 등록 페이지**로 이동합니다.

<br>

✨ **프로필 수정 페이지**  

<table>
  <tr>
    <th style="width: 650px; height: 100px;">데스크탑 & 태블릿 버전</th>
    <th style="width: 350px; height: 100px;">모바일 버전</th>
  </tr>
  <tr>
    <td><img src="" alt="데스크탑 & 태블릿 버전 이미지"></td>
    <td><img src="" alt="모바일 버전 이미지"></td>
  </tr>
</table>

- ✨ **[소비자 프로필 수정](https://github.com/moving-team/moving-fe/blob/main/src/page/user/editProfile/index.tsx)**  
  - 소비자는 **프로필 이미지**, **이용 서비스**, **거주 지역**을 수정할 수 있습니다.  
  - **GNB에서 아바타 클릭** → **프로필 수정 페이지**로 이동합니다.  

- ✨ **[기사님 프로필 수정](https://github.com/moving-team/moving-fe/blob/main/src/page/driver/editProfile/index.tsx)**  
  - 기사님은 **별명**, **프로필 이미지**, **경력**, **한 줄 소개**, **상세 설명**, **제공 서비스**, **서비스 가능 지역**을 수정할 수 있습니다.  
  - **GNB에서 아바타 클릭** → **프로필 수정 페이지**로 이동합니다.

<br>

#### <p align="right"><a href="#top">TOP👆🏻</a></p>

### **김민서**

🎶 **공통 컴포넌트**

- 🔗 **[리뷰 컴포넌트](https://github.com/moving-team/moving-fe/blob/main/src/components/review/Review.tsx)**  
  : 기사님에 대한 평균 평점, 별점 분포, 개별 리뷰를 시각적으로 보여주는 컴포넌트.

- 🔗 **[검색 컴포넌트](https://github.com/moving-team/moving-fe/blob/main/src/components/search/Search.tsx)**  
  : 기사님 및 서비스에 대한 검색 기능을 제공하는 컴포넌트.

- 🔗 **[페이지네이션 컴포넌트](https://github.com/moving-team/moving-fe/blob/main/src/components/pagination/Pagination.tsx)**  
  : 데이터 목록의 페이지 이동을 위한 컴포넌트.


✨ **[기사님 찾기 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/root/searchDriver/index.tsx)**  
- **비회원**과 **일반 유저** 모두 **기사님 전체 리스트**를 조회할 수 있습니다.

<table>
  <tr>
    <th style="width: 650px; height: 100px;">데스크탑 & 태블릿 버전</th>
    <th style="width: 350px; height: 100px;">모바일 버전</th>
  </tr>
  <tr>
    <td><img src="" alt="데스크탑 & 태블릿 버전 이미지"></td>
    <td><img src="" alt="모바일 버전 이미지"></td>
  </tr>
</table>

- **기사님 검색 및 조회 기능**:  
  - 기사님의 **별명**으로 검색 가능  
  - **리뷰**, **평점**, **경력**, **확정 횟수** 기준으로 정렬 가능  
  - **지역**과 **서비스 종류**에 따라 필터링 가능  
  - **무한 스크롤**을 통해 **기사님 전체 리스트**를 끊김 없이 탐색 가능  

- #### **비회원**  
	- **기사님 검색** 및 **전체 리스트 조회** 가능 (**우측**에서 확인)  
	- **찜한 기사님 리스트**는 **이용 불가** → **로그인 후 좌측**에서 확인 가능  

- #### **일반 유저**  
	- **기사님 검색** 및 **전체 리스트 조회** 가능 (**우측**에서 확인)  
	- **찜한 기사님**은 **좌측**에서 **최대 3명까지** 확인 가능  
	- **기사님 전체 리스트**에서 **찜한 기사님**은 **프로필 카드**에 **별도 표시** (**우측**에서 확인)
 
<br>

✨ **[기사님 상세 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/root/driverDetail/index.tsx)**  
- **비회원**과 **일반 유저** 모두 **기사님 상세 정보**를 조회할 수 있습니다.  

<table>
  <tr>
    <th style="width: 650px; height: 100px;">데스크탑 & 태블릿 버전</th>
    <th style="width: 350px; height: 100px;">모바일 버전</th>
  </tr>
  <tr>
    <td><img src="" alt="데스크탑 & 태블릿 버전 이미지"></td>
    <td><img src="" alt="모바일 버전 이미지"></td>
  </tr>
</table>

- **기사님 상세 조회 기능**:  
  - 기사님의 **상세 설명**, **제공 서비스**, **서비스 가능 지역** 확인 가능  
  - 기사님 정보를 **소셜 미디어**에 공유 가능  
    - 예시: `"이사를 준비하시나요? ⭐️ OOO 기사님을 추천합니다! 무빙에서 확인해 보세요! <기사님 상세 페이지 URL>"`

- #### **비회원**  
	- 기사님의 **상세 설명**, **제공 서비스**, **서비스 가능 지역** 확인 가능  
	- **기사님 찜하기** 및 **기사님 지정 요청**은 **이용 불가**  
 		- **기사님 찜하기** 또는 **지정 요청** 버튼 클릭 시, **로그인 모달**이 뜨며 **로그인 페이지**로 이동 가능

- #### **일반 유저**  
	- 기사님의 **상세 설명**, **제공 서비스**, **서비스 가능 지역** 확인 가능  
	- 기사님을 **찜하기** 가능 → **찜한 기사님 페이지**에서 확인 가능  
	- **기사님의 서비스 가능 지역**일 경우에만 **지정 견적 요청** 가능  
 	 - **지정 요청**이 완료되면, 기사님의 **프로필 카드**에 **"지정 견적 요청" 뱃지**가 표시

<br>


✨ **[소비자 견적 상세 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/user/costDetail/index.tsx)**  
- **소비자**는 선택한 **개별 견적서**의 상세 정보를 확인할 수 있습니다.

<table>
  <tr>
    <th style="width: 650px; height: 100px;">데스크탑 & 태블릿 버전</th>
    <th style="width: 350px; height: 100px;">모바일 버전</th>
  </tr>
  <tr>
    <td><img src="" alt="데스크탑 & 태블릿 버전 이미지"></td>
    <td><img src="" alt="모바일 버전 이미지"></td>
  </tr>
</table>
 
- **견적 상세 페이지**는 두 가지로 구분됩니다:  
  - **대기 중인 견적 → 견적 상세 페이지**  
  - **받았던 견적 → 견적 상세 페이지**  

- **공통 기능**:  
  - **견적가**, **기사님의 코멘트**, **견적 정보** 확인 가능  
  - **견적서 공유** 기능 제공  
    - 예시: `"OOO 기사님이 보낸 견적서를 확인해보세요! <견적 상세 페이지 URL>"`

- #### **대기 중인 견적 상세 페이지**  
	- **기사님 찜하기** 및 **견적 확정** 가능
	- **견적 확정** 시, 해당 기사님의 **프로필 카드**에 **확정 견적 뱃지**가 추가로 표시되며,  
  **대기 중인 견적 페이지**에서 **자동으로 사라집니다.**

- #### **받았던 견적 상세 페이지**  
	- **확정한 견적**의 경우, 기사님 **프로필 카드**에 **확정 견적 뱃지**가 표시
	- **확정하지 않은 견적**의 경우, 페이지 **하단에 토스트 알림**으로 표시
 		 - `"확정하지 않은 견적입니다!"`
 
<br>

#### <p align="right"><a href="#top">TOP👆🏻</a></p>

### **김효인**

🎶 **공통 컴포넌트**
- 🔗 **[알림 컴포넌트](https://github.com/moving-team/moving-fe/blob/main/src/components/nav/components/NotificationModal.tsx)**  
  : 소비자와 기사님이 **새로운 견적**, **견적 확정**, **이사 당일 알림**을 실시간으로 받을 수 있는 컴포넌트.

- 🔗 **[SNS 공유 컴포넌트](https://github.com/moving-team/moving-fe/blob/main/src/components/snsShare/SnsShare.tsx)**  
  : 기사님 정보와 견적서를 **링크 복사**, **카카오톡**, **페이스북**을 통해 손쉽게 공유할 수 있는 컴포넌트.

- 🔗 **[칩(Chip) 컴포넌트](https://github.com/moving-team/moving-fe/blob/main/src/components/chip/Chip.tsx)**  
  : **소형 이사**, **가정 이사**, **사무실 이사**, **지정 견적 요청**, **확정 견적** 등 서비스 상태와 유형을 직관적으로 보여주는 컴포넌트.


✨ **[소비자 견적 요청 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/user/costCall/index.tsx)**  
- **소비자**는 **채팅 형태**의 인터페이스를 통해 간편하게 **이사 정보를 입력**하고 **기사님에게 견적 요청**을 보낼 수 있습니다.  

<table>
  <tr>
    <th style="width: 650px; height: 100px;">데스크탑 & 태블릿 버전</th>
    <th style="width: 350px; height: 100px;">모바일 버전</th>
  </tr>
  <tr>
    <td><img src="" alt="데스크탑 & 태블릿 버전 이미지"></td>
    <td><img src="" alt="모바일 버전 이미지"></td>
  </tr>
</table>

- #### **이사 정보 입력**  
	- **이사 종류**, **이사 날짜**, **출발지 및 도착지 주소** 입력  
	- **카카오 우편번호 서비스**를 활용해 **정확한 주소** 입력 가능  
	- **프로그래스 바**로 입력 진행 상황을 **시각적으로 확인** 가능  
	- 각 입력 항목 아래의 **수정하기 버튼**을 통해 입력 내용 **수정 가능**  

- ####  **견적 요청 기준**  
	- **이사일이 지난 후**에만 **새로운 견적 요청** 가능  
	- **한 번에 하나의 이사 정보**만 활성화하여 견적 요청 가능  
	- 기존 요청이 **확정**되기 전까지는 **새로운 요청 불가**  
	- 한 번의 요청에 대해 **최대 5명의 기사님**이 견적을 보낼 수 있음

<br>

✨ **[소비자 받았던 견적 목록 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/user/receivedCost/index.tsx)**  
- **소비자**는 이전에 받았던 **견적 요청 목록**을 확인할 수 있습니다.  

<table>
  <tr>
    <th style="width: 650px; height: 100px;">데스크탑 & 태블릿 버전</th>
    <th style="width: 350px; height: 100px;">모바일 버전</th>
  </tr>
  <tr>
    <td><img src="" alt="데스크탑 & 태블릿 버전 이미지"></td>
    <td><img src="" alt="모바일 버전 이미지"></td>
  </tr>
</table>

- 각 **견적 카드**에는 해당 요청에 응답한 **여러 기사님 중 첫 번째 기사님**의 견적서가 **대표 견적**으로 표시됩니다.  
- **확정 견적 뱃지**와 **지정 견적 요청 뱃지**와 **견적 금액**이 표시됩니다.  
  - **확정 견적**: **"확정" 뱃지** 표시  
  - **지정 견적 요청**: **"지정 요청" 뱃지** 표시  
- **"견적 목록 보기" 버튼**을 클릭하면 **받았던 견적 상세 페이지**로 이동하여 **해당 견적에 대한 여러 기사님들의 견적서 목록**을 확인할 수 있습니다.

<br>

✨ **[소비자 받았던 견적 상세 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/user/receivedCostDetail/index.tsx)**  
- **소비자**가 보낸 **견적 요청 정보**가 표시됩니다.  

<table>
  <tr>
    <th style="width: 650px; height: 100px;">데스크탑 & 태블릿 버전</th>
    <th style="width: 350px; height: 100px;">모바일 버전</th>
  </tr>
  <tr>
    <td><img src="" alt="데스크탑 & 태블릿 버전 이미지"></td>
    <td><img src="" alt="모바일 버전 이미지"></td>
  </tr>
</table>

- **소비자**는 특정 **견적 요청**에 대해 응답한 **모든 기사님들의 견적서 목록**을 확인할 수 있습니다.  
- 각 기사님의 **프로필 카드**에는 상태에 따라 **확정 견적 뱃지**와 **지정 견적 요청 뱃지**와 **견적 금액**이 표시됩니다.  
- **기사님 프로필 카드**를 클릭하면 해당 견적의 **견적 상세 페이지**로 이동하여 자세한 내용을 확인할 수 있습니다.  

<br>

#### <p align="right"><a href="#top">TOP👆🏻</a></p>

### **박명준**

🎶 **공통 컴포넌트**

- 🔗 **[탭바 컴포넌트](https://github.com/moving-team/moving-fe/blob/main/src/components/tab/Tab.tsx)**  
  : 상태 변경 및 라우팅 기능을 지원하며, 최대 3개의 탭을 선택할 수 있는 인터페이스 컴포넌트.

- 🔗 **[버튼 컴포넌트](https://github.com/moving-team/moving-fe/blob/main/src/components/btn/Button.tsx)**  
  : 다양한 스타일(솔리드, 아웃라인)과 크기로 구성된 커스터마이징 가능한 버튼 컴포넌트로 텍스트 및 아이콘 조합 사용 가능.

- 🔗 **[모달 컴포넌트](https://github.com/moving-team/moving-fe/blob/main/src/components/modal/ModalContainer.tsx)**  
  : 다양한 상황에서 활용할 수 있는 재사용형 모달 컴포넌트로 확인, 취소, 알림 등의 기능 제공.

- 🔗 **[로딩 스피너 컴포넌트](https://github.com/moving-team/moving-fe/blob/main/src/components/loading/LoadingSpinner.tsx)**  
  : 데이터 로딩 상태를 시각적으로 표현하는 스피너 컴포넌트.

- 🔗 **[견적 정보 컴포넌트](https://github.com/moving-team/moving-fe/blob/main/src/components/costInfo/CostInfo.tsx)**  
  : 견적 요청의 상세 정보를 제공하며, 요청일, 서비스 종류, 이용일, 출발지/도착지, 요청 사항 등의 정보를 확인하고 견적 요청 취소 버튼을 포함하는 컴포넌트.

✨ **[대기 중인 견적 페이지](https://github.com/moving-team/moving-fe/tree/main/src/page/user/pendingCost)**  

- **소비자**는 **현재 진행 중인 견적 요청**을 확인하고 **견적 확정**을 진행할 수 있습니다.  

<table>
  <tr>
    <th style="width: 650px; height: 100px;">데스크탑 & 태블릿 버전</th>
    <th style="width: 350px; height: 100px;">모바일 버전</th>
  </tr>
  <tr>
    <td><img src="" alt="데스크탑 & 태블릿 버전 이미지"></td>
    <td><img src="" alt="모바일 버전 이미지"></td>
  </tr>
</table>

- **지정 요청한 기사님**의 경우, **라벨**로 강조 표시되어 쉽게 구분할 수 있습니다.  
- **견적 수신 제한**:  
  - 한 요청 당 **최대 8개**의 견적을 받을 수 있습니다.  
  - **일반 요청**: 최대 **5명**의 기사님에게 견적 요청 가능  
  - **지정 요청**: 최대 **3명**의 기사님에게 추가로 견적 요청 가능

<br>

✨ **[이사 리뷰 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/user/movingReview/index.tsx)** 
- **소비자**는 **이사 리뷰 페이지**에서 작성한 리뷰 내역과 작성 가능한 리뷰 목록을 확인할 수 있습니다.

<table>
  <tr>
    <th style="width: 650px; height: 100px;">데스크탑 & 태블릿 버전</th>
    <th style="width: 350px; height: 100px;">모바일 버전</th>
  </tr>
  <tr>
    <td><img src="" alt="데스크탑 & 태블릿 버전 이미지"></td>
    <td><img src="" alt="모바일 버전 이미지"></td>
  </tr>
</table>

<br>


✨ **[찜한 기사님 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/user/favoriteMover/index.tsx)** 
- **소비자**는 **찜한 기사님 페이지**에서 찜한 기사님을 조회할 수 있습니다.

<table>
  <tr>
    <th style="width: 650px; height: 100px;">데스크탑 & 태블릿 버전</th>
    <th style="width: 350px; height: 100px;">모바일 버전</th>
  </tr>
  <tr>
    <td><img src="" alt="데스크탑 & 태블릿 버전 이미지"></td>
    <td><img src="" alt="모바일 버전 이미지"></td>
  </tr>
</table>

<br>

✨ **[기사님 마이 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/user/movingReview/index.tsx)**  
- **기사님**은 자신의 **프로필 카드**와 함께 **받은 리뷰**를 확인할 수 있습니다.  

<table>
  <tr>
    <th style="width: 650px; height: 100px;">데스크탑 & 태블릿 버전</th>
    <th style="width: 350px; height: 100px;">모바일 버전</th>
  </tr>
  <tr>
    <td><img src="" alt="데스크탑 & 태블릿 버전 이미지"></td>
    <td><img src="" alt="모바일 버전 이미지"></td>
  </tr>
</table>

- **기본 정보 수정** 및 **프로필 수정 페이지**로 손쉽게 이동할 수 있습니다.  
  - **기본 정보 수정**: 이름, 이메일, 전화번호, 비밀번호 수정 가능  
  - **프로필 수정**: 별명, 프로필 이미지, 경력, 한 줄 소개, 상세 설명, 제공 서비스, 서비스 가능 지역 수정 가능

<br>

✨ **[404 페이지](https://github.com/moving-team/moving-fe/blob/main/src/components/404/NotFound.tsx)**  

<table>
  <tr>
    <th style="width: 650px; height: 100px;">데스크탑 & 태블릿 버전</th>
    <th style="width: 350px; height: 100px;">모바일 버전</th>
  </tr>
  <tr>
    <td><img src="" alt="데스크탑 & 태블릿 버전 이미지"></td>
    <td><img src="" alt="모바일 버전 이미지"></td>
  </tr>
</table>

- 사용자가 존재하지 않는 페이지에 접근했을 때 표시되는 **에러 페이지**입니다.  
- 잘못된 경로나 없는 페이지에 접근 시, **친절한 안내 메시지**와 함께 **메인 페이지** 로 이동할 수 있는 버튼을 제공합니다.  

<br>

#### <p align="right"><a href="#top">TOP👆🏻</a></p>

### 이율리

🎶 **공통 컴포넌트**

- 🔗 **[소비자 프로필 카드 컴포넌트](https://github.com/moving-team/moving-fe/blob/main/src/components/card/UserCard.tsx)**  
  : 소비자의 이사 요청 정보, 서비스 종류, 요청 사항 및 견적 금액을 시각적으로 보여주며, 견적 보내기 및 반려 기능을 제공하는 컴포넌트.

- 🔗 **[기사님 프로필 카드 컴포넌트](https://github.com/moving-team/moving-fe/blob/main/src/components/card/DriverCard.tsx)**  
  : 기사님의 프로필 정보, 제공 서비스, 견적 금액 및 상태 정보를 표시하며, 견적 확정, 상세보기, 리뷰 작성 등의 기능을 지원하는 컴포넌트.

✨ **[기사님 받은 견적 요청 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/driver/costCall/index.tsx)**  
- **기사님**은 자신이 받은 **견적 요청 리스트**를 확인할 수 있습니다.  

<table>
  <tr>
    <th style="width: 650px; height: 100px;">데스크탑 & 태블릿 버전</th>
    <th style="width: 350px; height: 100px;">모바일 버전</th>
  </tr>
  <tr>
    <td><img src="" alt="데스크탑 & 태블릿 버전 이미지"></td>
    <td><img src="" alt="모바일 버전 이미지"></td>
  </tr>
</table>

- **서비스 가능 지역** 내의 요청만 리스트에 표시됩니다.  
- **지정 요청**은 **지정 요청 필터**를 통해 별도로 확인할 수 있습니다.  

- **필터 및 정렬 기능**  
	- **이사 유형**(소형, 가정, 사무실 이사), **서비스 가능 지역**, **지정 견적 요청**으로 필터링 가능  
	- **이사일 빠른 순**, **최근 요청 순**으로 정렬 가능  

- #### **견적 보내기 기능**  
	- **기사님**은 받은 **견적 요청**에 대해 **가격**과 **코멘트**를 입력하고 **견적서**를 전송할 수 있습니다.  

<br>

✨ **[기사님 내 견적 관리 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/driver/costHandler/index.tsx)**  
- **기사님**은 **전체 견적**, **확정 견적**, **반려 및 취소한 견적 요청** 리스트에 대해 조회할 수 있습니다.  


<table>
  <tr>
    <th style="width: 650px; height: 100px;">데스크탑 & 태블릿 버전</th>
    <th style="width: 350px; height: 100px;">모바일 버전</th>
  </tr>
  <tr>
    <td><img src="" alt="데스크탑 & 태블릿 버전 이미지"></td>
    <td><img src="" alt="모바일 버전 이미지"></td>
  </tr>
</table>

<br>

✨ **[기사님 견적 상세 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/driver/costDetail/index.tsx)**  
- **기사님**은 소비자가 요청한 **견적 상세 정보**를 확인할 수 있습니다.  

<table>
  <tr>
    <th style="width: 650px; height: 100px;">데스크탑 & 태블릿 버전</th>
    <th style="width: 350px; height: 100px;">모바일 버전</th>
  </tr>
  <tr>
    <td><img src="" alt="데스크탑 & 태블릿 버전 이미지"></td>
    <td><img src="" alt="모바일 버전 이미지"></td>
  </tr>
</table>

- **견적가**, **소비자의 코멘트**, **견적 정보**를 확인할 수 있습니다.  
- **견적서 공유** 기능을 통해 견적서를 손쉽게 공유할 수 있습니다.  

<br>

#### <p align="right"><a href="#top">TOP👆🏻</a></p>

<br>

## ✨ 6. 구현 기능

### 🏡 **소비자 전용** 페이지

- 🔗 **[기본정보 수정 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/user/editInfo/index.tsx)** - [**김대건**](https://github.com/TradeOffEgoist)  
  : 이름, 이메일, 전화번호, 비밀번호 수정 기능

- 🔗 **[프로필 등록 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/user/register/index.tsx)** - [**김대건**](https://github.com/TradeOffEgoist)  
  : 프로필 이미지, 이용 서비스, 거주 지역 등록

- 🔗 **[프로필 수정 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/user/editProfile/index.tsx)** - [**김대건**](https://github.com/TradeOffEgoist)  
  : 프로필 이미지, 이용 서비스, 거주 지역 수정

- 🔗 **[기사님 찾기 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/root/searchDriver/index.tsx)** - [**김민서**](https://github.com/claudia99503)  
  : 기사님 검색 및 리스트 조회, 필터링 및 정렬 기능

- 🔗 **[기사님 상세 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/root/driverDetail/index.tsx)** - [**김민서**](https://github.com/claudia99503)  
  : 기사님의 상세 설명, 제공 서비스, 서비스 가능 지역 확인

- 🔗 **[소비자 견적 요청 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/user/costCall/index.tsx)** - [**김효인**](https://github.com/mozzi34)  
  : 채팅형 인터페이스로 이사 정보 입력 및 견적 요청

- 🔗 **[받았던 견적 목록 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/user/receivedCost/index.tsx)** - [**김효인**](https://github.com/mozzi34)  
  : 소비자가 받은 견적 요청 목록 조회

- 🔗 **[받았던 견적 상세 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/user/receivedCostDetail/index.tsx)** - [**김효인**](https://github.com/mozzi34)  
  : 소비자가 받은 견적서의 상세 정보 확인

- 🔗 **[대기 중인 견적 페이지](https://github.com/moving-team/moving-fe/tree/main/src/page/user/pendingCost)** - [**박명준**](https://github.com/mjpark-k)  
  : 진행 중인 견적 요청 확인 및 견적 확정 기능
  
- 🔗 **[소비자 견적 상세 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/user/costDetail/index.tsx)** - [**김민서**](https://github.com/claudia99503)  
  : 받은 견적과 진행 중인 견적에 대한 견적서 상세 정보 확인 및 확정 기능

- 🔗 **[이사 리뷰 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/user/movingReview/index.tsx)** - [**박명준**](https://github.com/mjpark-k)  
  : 소비자가 작성한 리뷰 및 작성 가능한 리뷰 목록 확인

- 🔗 **[찜한 기사님 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/user/favoriteMover/index.tsx)** - [**박명준**](https://github.com/mjpark-k)  
  : 소비자가 찜한 기사님 목록 조회


### 🚚 기사님 전용 페이지

- 🔗 **[기본정보 수정 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/driver/editInfo/index.tsx)** - [**김대건**](https://github.com/TradeOffEgoist)  
  : 기사님의 이름, 이메일, 전화번호, 비밀번호 수정 기능

- 🔗 **[프로필 등록 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/driver/register/index.tsx)** - [**김대건**](https://github.com/TradeOffEgoist)  
  : 기사님의 별명, 프로필 이미지, 경력, 서비스 등록

- 🔗 **[프로필 수정 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/driver/editProfile/index.tsx)** - [**김대건**](https://github.com/TradeOffEgoist)  
  : 기사님의 별명, 프로필 이미지, 경력, 서비스 수정

- 🔗 **[기사님 받은 견적 요청 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/driver/costCall/index.tsx)** - [**이율리**](https://github.com/yoorli)  
  : 기사님이 받은 견적 요청 리스트 확인 및 견적서 전송

- 🔗 **[기사님 내 견적 관리 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/driver/costHandler/index.tsx)** - [**이율리**](https://github.com/yoorli)  
  : 기사님의 전체 견적, 확정 견적, 취소 견적 관리

- 🔗 **[기사님 견적 상세 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/driver/costDetail/index.tsx)** - [**이율리**](https://github.com/yoorli)  
  : 기사님이 받은 견적서 상세 정보 확인 및 공유 기능

- 🔗 **[기사님 마이 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/user/movingReview/index.tsx)** - [**박명준**](https://github.com/mjpark-k)  
  : 기사님의 프로필 카드 및 받은 리뷰 확인


### 🌿 공통 페이지

- 🔗 **[랜딩 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/root/index.tsx)** - [**김대건**](https://github.com/TradeOffEgoist)  
  : 소비자와 기사님 공용 랜딩 페이지

- 🔗 **[회원가입 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/user/signup/index.tsx)** - [**김대건**](https://github.com/TradeOffEgoist)  
  : 이메일, 구글, 카카오톡, 네이버로 간편 회원가입 기능

- 🔗 **[로그인 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/user/login/index.tsx)** - [**김대건**](https://github.com/TradeOffEgoist)  
  : 소비자와 기사님 공용 로그인 페이지

- 🔗 **[404 에러 페이지](https://github.com/moving-team/moving-fe/blob/main/src/components/404/NotFound.tsx)** - [**박명준**](https://github.com/mjpark-k)  
  : 잘못된 경로 접근 시 안내 메시지와 메인 페이지 이동 버튼 제공



#### <p align="right"><a href="#top">TOP👆🏻</a></p>

<br>

## <span id="convention">🖌️ 7. 컨벤션</span>

### Git 컨벤션

| Emoji | Code                          | 기능     | Description              |
| ----- | ----------------------------- | -------- | ------------------------ |
| ✨    | `:sparkles:`                  | Feat     | 새 기능                  |
| ♻️    | `:recycle:`                   | Refactor | 코드 리팩토링            |
| 📦    | `:wrench:`                    | Chore    | 리소스 수정/삭제         |
| 🐛    | `:bug:`                       | Fix      | 버그 수정                |
| 📝    | `:memo:`                      | Docs     | 문서 추가/수정           |
| 🎨    | `:art:`                       | Style    | UI/스타일 파일 추가/수정 |
| 🎉    | `:tada:`                      | Init     | 프로젝트 시작 / Init     |
| ✅    | `:white_check_mark:`          | Test     | 테스트 추가/수정         |
| ⏪    | `:rewind:`                    | Rewind   | 변경 사항 되돌리기       |
| 🔀    | `:twisted_rightwards_arrows:` | Merge    | 브랜치 합병              |
| 🗃     | `:card_file_box:`             | DB       | 데이터베이스 관련 수정   |
| 💡    | `:bulb:`                      | Comment  | 주석 추가/수정           |
| 🚀    | `:rocket:`                    | Deploy   | 배포                     |

<br>

### Code 컨벤션

- **변수/함수**
  - Camel 표기법 사용 (상수는 대문자)
- **컴포넌트/파일명**
  - Pascal 표기법 사용
- **이미지 파일**
  - Snake 표기법 사용 - `(형태)(의미)(순서)_(상태)` / 예: `btn_login_001_off.png`
- **ClassName** - Kebab 표기법 사용

<br>

#### <p align="right"><a href="#top">TOP👆🏻</a></p>

<br>

## <span id="tree">🌱 8. 프로젝트 구조</span>

- **public/**: 애플리케이션의 정적 자산을 포함하는 디렉터리.  
  - **assets/**: SVG 및 기타 이미지 파일 저장 디렉터리.  
    - **icons/**: 아이콘 SVG 파일 저장.  
    - **images/**: 일반 이미지 SVG 파일 저장.  
  - **favicon/**: 파비콘 이미지(`favicon.png`).  

- **src/**: 애플리케이션의 핵심 소스 코드 및 리소스.  

  - **components/**: 재사용 가능한 UI 컴포넌트 모음.  
    - **404/**: 404 에러 페이지 컴포넌트.  
      - `NotFound.tsx`: 404 페이지 컴포넌트.  
    - **btn/**: 버튼 컴포넌트.  
      - `AuthBtn.tsx`: 인증 버튼.  
      - `Button.tsx`: 기본 버튼.  
      - `LoginBtn.tsx`: 로그인 버튼.  
    - **card/**: 카드 형태 컴포넌트.  
      - `DriverCard.tsx`: 기사님 프로필 카드.  
      - `UserCard.tsx`: 소비자 프로필 카드.  
    - **chip/**: Chip 컴포넌트.  
    - **costInfo/**: 견적 정보 컴포넌트.  
    - **input/**: 입력 폼 컴포넌트.  
    - **loading/**: 로딩 스피너.  
    - **modal/**: 모달 UI.  
    - **nav/**: 네비게이션 및 메뉴.  
    - **noContents/**: 내용 없음 안내.  
    - **page/**: 페이지 단위 UI.  
    - **pageError/**: 에러 페이지.  
    - **pagination/**: 페이지네이션.  
    - **review/**: 리뷰 컴포넌트.  
    - **search/**: 검색 컴포넌트.  
    - **snsShare/**: SNS 공유 컴포넌트.  
    - **tab/**: 탭 컴포넌트.  
    - **toast/**: 알림 토스트.  

  - **context/**: 전역 상태 관리 Context API.  
    - `authContext.tsx`: 인증 상태 관리.  

  - **layout/**: 전체 레이아웃.  
    - `DriverLayout.tsx`: 로그인한 기사님 레이아웃.  
    - `UserLayout.tsx`: 로그인한 소비자 레이아웃.  
    - `RendingLayout.tsx`: 비로그인 레이아웃.  

  - **lib/**: API 호출 및 유틸리티 함수.  
    - **api/**: API 호출, axios 설정.  
      - `auth.ts`: 인증 관련 API.  
      - `estimate.ts`: 견적 API.  
      - `favorite.ts`: 찜하기 API.  
      - `kakao.ts`: 카카오 API.  
      - `notification.ts`: 알림 관련 API.  
      - `review.ts`: 리뷰 관련 API.  
    - **function/**: 유틸리티 함수.  
      - `useMediaQuery.ts`: 반응형 훅.  
      - `validation.ts`: 유효성 검사.  
    - **useQueries/**: react-query 훅.  

  - **page/**: 라우팅 및 페이지 컴포넌트.  

    - **driver/**: 기사님 전용 페이지.  
      - **costCall/**: 기사님 견적 요청 관리 페이지.  
      - **costDetail/**: 기사님 견적 상세 페이지.  
      - **costHandler/**: 기사님 견적 관리 페이지.  
      - **editInfo/**: 기사님 기본 정보 수정 페이지.  
      - **editProfile/**: 기사님 프로필 수정 페이지.  
      - **login/**: 기사님 로그인 페이지.  
      - **myPage/**: 기사님 마이페이지.  
      - **register/**: 기사님 프로필 등록 페이지.  
      - **signup/**: 기사님 회원가입 페이지.  

    - **user/**: 로그인한 소비자 전용 페이지.  
      - **costCall/**: 소비자 견적 요청 페이지.  
      - **costDetail/**: 소비자 견적 상세 페이지.  
      - **favoriteMover/**: 소비자 찜한 기사님 페이지.  
      - **movingReview/**: 소비자 이사 리뷰 페이지.  
      - **register/**: 소비자 프로필 등록 페이지.  
      - **editInfo/**: 소비자 기본 정보 수정 페이지.  
      - **editProfile/**: 소비자 프로필 수정 페이지.  
      - **pendingCost/**: 소비자 대기 중인 견적 페이지.  
      - **receivedCost/**: 소비자 받은 견적 목록 페이지.  
      - **receivedCostDetail/**: 소비자 받은 견적 상세 페이지.  
      - **login/**: 소비자 로그인 페이지.  
      - **signup/**: 소비자 회원가입 페이지.  

    - **root/**: 회원 및 비회원 공용 페이지.  
      - **driverDetail/**: 기사님 상세 페이지.  
      - **searchDriver/**: 기사님 검색 페이지.  
      - `index.tsx`: 랜딩 페이지.  

  - **style/**: 전체 스타일.  
    - `globals.css`: 전역 스타일.  

  - **types/**: 타입 정의.  
    - `apiTypes.ts`: API 타입.  
    - `cardTypes.ts`: 카드 타입.  

- **index.tsx**: 애플리케이션 시작 파일.  
- **root.tsx**: 전체 라우팅 및 초기 설정 파일.  
- **.eslintrc**: 코드 품질 유지를 위한 ESLint 설정 파일.  
- **.prettierrc**: 코드 스타일 유지를 위한 Prettier 설정 파일.  
- **package.json**: 프로젝트 의존성, 스크립트 및 메타데이터 관리.  
- **tsconfig.json**: 타입스크립트 컴파일러 설정 파일.  

```
🌿src
 ┣ 🖼️assets
 ┃ ┣ 📂icons
 ┃ ┃ ┣ 📜ic_active_filter.svg
 ┃ ┃ ┣ 📜ic_active_filter_medium.svg
 ┃ ┃ ┣ 📜ic_alarm_large.svg
 ┃ ┃ ┣ 📜ic_alarm_medium.svg
 ┃ ┃ ┣ 📜ic_box_large.svg
 ┃ ┃ ┣ 📜ic_box_medium.svg
 ┃ ┃ ┣ 📜ic_check_box_large.svg
 ┃ ┃ ┣ 📜ic_check_box_medium.svg
 ┃ ┃ ┣ 📜ic_check_circle_empty_large.svg
 ┃ ┃ ┣ 📜ic_check_circle_empty_medium.svg
 ┃ ┃ ┣ 📜ic_check_circle_large.svg
 ┃ ┃ ┣ 📜ic_check_circle_medium.svg
 ┃ ┃ ┣ 📜ic_check_large.svg
 ┃ ┃ ┣ 📜ic_check_medium.svg
 ┃ ┃ ┣ 📜ic_clip_large.svg
 ┃ ┃ ┣ 📜ic_clip_medium.svg
 ┃ ┃ ┣ 📜ic_company_large.svg
 ┃ ┃ ┣ 📜ic_company_medium.svg
 ┃ ┃ ┣ 📜ic_document_large.svg
 ┃ ┃ ┣ 📜ic_document_medium.svg
 ┃ ┃ ┣ 📜ic_empty_check_box_large.svg
 ┃ ┃ ┣ 📜ic_empty_check_box_medium.svg
 ┃ ┃ ┣ 📜ic_empty_check_circle_large.svg
 ┃ ┃ ┣ 📜ic_empty_check_circle_medium.svg
 ┃ ┃ ┣ 📜ic_empty_heart_large.svg
 ┃ ┃ ┣ 📜ic_empty_heart_medium.svg
 ┃ ┃ ┣ 📜ic_empty_heart_small.svg
 ┃ ┃ ┣ 📜ic_empty_star_large.svg
 ┃ ┃ ┣ 📜ic_empty_star_medium.svg
 ┃ ┃ ┣ 📜ic_empty_star_small.svg
 ┃ ┃ ┣ 📜ic_eye_close.svg
 ┃ ┃ ┣ 📜ic_eye_open.svg
 ┃ ┃ ┣ 📜ic_filter_large.svg
 ┃ ┃ ┣ 📜ic_filter_medium.svg
 ┃ ┃ ┣ 📜ic_full_heart_large.svg
 ┃ ┃ ┣ 📜ic_full_heart_medium.svg
 ┃ ┃ ┣ 📜ic_full_heart_small.svg
 ┃ ┃ ┣ 📜ic_full_star_large.svg
 ┃ ┃ ┣ 📜ic_full_star_medium.svg
 ┃ ┃ ┣ 📜ic_full_star_small.svg
 ┃ ┃ ┣ 📜ic_home_large.svg
 ┃ ┃ ┣ 📜ic_home_medium.svg
 ┃ ┃ ┣ 📜ic_inactive_filter.svg
 ┃ ┃ ┣ 📜ic_inactive_filter_medium.svg
 ┃ ┃ ┣ 📜ic_info_large.svg
 ┃ ┃ ┣ 📜ic_info_medium.svg
 ┃ ┃ ┣ 📜ic_menu_large.svg
 ┃ ┃ ┣ 📜ic_menu_medium.svg
 ┃ ┃ ┣ 📜ic_mini_star.svg
 ┃ ┃ ┣ 📜ic_noItems.svg
 ┃ ┃ ┣ 📜ic_profile_large.svg
 ┃ ┃ ┣ 📜ic_profile_medium.svg
 ┃ ┃ ┣ 📜ic_profile_upload_large.svg
 ┃ ┃ ┣ 📜ic_profile_upload_medium.svg
 ┃ ┃ ┣ 📜ic_progress_bar_large.svg
 ┃ ┃ ┣ 📜ic_progress_bar_medium.svg
 ┃ ┃ ┣ 📜ic_review_bar_large.svg
 ┃ ┃ ┣ 📜ic_review_bar_medium.svg
 ┃ ┃ ┣ 📜ic_search_large.svg
 ┃ ┃ ┣ 📜ic_search_medium.svg
 ┃ ┃ ┣ 📜ic_share_facebook_large.svg
 ┃ ┃ ┣ 📜ic_share_facebook_medium.svg
 ┃ ┃ ┣ 📜ic_share_kakao_large.svg
 ┃ ┃ ┣ 📜ic_share_kakao_medium.svg
 ┃ ┃ ┣ 📜ic_share_large.svg
 ┃ ┃ ┣ 📜ic_share_medium.svg
 ┃ ┃ ┣ 📜ic_vector_down_large.svg
 ┃ ┃ ┣ 📜ic_vector_down_medium.svg
 ┃ ┃ ┣ 📜ic_vector_down_small.svg
 ┃ ┃ ┣ 📜ic_vector_left_large.svg
 ┃ ┃ ┣ 📜ic_vector_left_medium.svg
 ┃ ┃ ┣ 📜ic_vector_right_large.svg
 ┃ ┃ ┣ 📜ic_vector_right_medium.svg
 ┃ ┃ ┣ 📜ic_vector_top_large.svg
 ┃ ┃ ┣ 📜ic_vector_top_medium.svg
 ┃ ┃ ┣ 📜ic_vector_top_small.svg
 ┃ ┃ ┣ 📜ic_writing_gray.svg
 ┃ ┃ ┣ 📜ic_writing_large.svg
 ┃ ┃ ┣ 📜ic_writing_medium.svg
 ┃ ┃ ┣ 📜ic_x_circle_large.svg
 ┃ ┃ ┣ 📜ic_x_circle_medium.svg
 ┃ ┃ ┣ 📜ic_x_large.svg
 ┃ ┃ ┣ 📜ic_x_medium.svg
 ┃ ┃ ┣ 📜ic_yellow_star_large.svg
 ┃ ┃ ┣ 📜ic_yellow_star_medium.svg
 ┃ ┃ ┗ 📜ic_yellow_star_small.svg
 ┃ ┗ 📂images
 ┃ ┃ ┣ 📜img_avatar_blue_large.svg
 ┃ ┃ ┣ 📜img_avatar_blue_medium.svg
 ┃ ┃ ┣ 📜img_avatar_green_large.svg
 ┃ ┃ ┣ 📜img_avatar_green_medium.svg
 ┃ ┃ ┣ 📜img_avatar_pink_large.svg
 ┃ ┃ ┣ 📜img_avatar_pink_medium.svg
 ┃ ┃ ┣ 📜img_avatar_purple_large.svg
 ┃ ┃ ┣ 📜img_avatar_purple_medium.svg
 ┃ ┃ ┣ 📜img_avatar_yellow_large.svg
 ┃ ┃ ┣ 📜img_avatar_yellow_medium.svg
 ┃ ┃ ┣ 📜img_car_large.svg
 ┃ ┃ ┣ 📜img_car_medium.svg
 ┃ ┃ ┣ 📜img_empty_review_large.svg
 ┃ ┃ ┣ 📜img_empty_review_medium.svg
 ┃ ┃ ┣ 📜img_landing_01_large.svg
 ┃ ┃ ┣ 📜img_landing_01_medium.svg
 ┃ ┃ ┣ 📜img_landing_02_large.svg
 ┃ ┃ ┣ 📜img_landing_02_medium.svg
 ┃ ┃ ┣ 📜img_landing_03_large.svg
 ┃ ┃ ┣ 📜img_landing_03_medium.svg
 ┃ ┃ ┣ 📜img_login_google_large.svg
 ┃ ┃ ┣ 📜img_login_google_medium.svg
 ┃ ┃ ┣ 📜img_login_kakao_large.svg
 ┃ ┃ ┣ 📜img_login_kakao_medium.svg
 ┃ ┃ ┣ 📜img_login_naver_large.svg
 ┃ ┃ ┣ 📜img_login_naver_medium.svg
 ┃ ┃ ┣ 📜img_logo_icon_text_medium.svg
 ┃ ┃ ┣ 📜img_logo_icon_text_small.svg
 ┃ ┃ ┣ 📜img_logo_icon_text_xlarge.svg
 ┃ ┃ ┣ 📜img_logo_text_large.svg
 ┃ ┃ ┣ 📜img_logo_text_medium.svg
 ┃ ┃ ┣ 📜img_logo_text_small.svg
 ┃ ┃ ┣ 📜img_logo_text_xlarge.svg
 ┃ ┃ ┣ 📜img_profile_large.svg
 ┃ ┃ ┗ 📜img_profile_medium.svg
 ┣ 🎶components
 ┃ ┣ 📂404
 ┃ ┃ ┣ 📜NotFound.module.css
 ┃ ┃ ┗ 📜NotFound.tsx
 ┃ ┣ 📂btn
 ┃ ┃ ┣ 📜AuthBtn.module.css
 ┃ ┃ ┣ 📜AuthBtn.tsx
 ┃ ┃ ┣ 📜Button.module.css
 ┃ ┃ ┣ 📜Button.tsx
 ┃ ┃ ┣ 📜LoginBtn.module.css
 ┃ ┃ ┗ 📜LoginBtn.tsx
 ┃ ┣ 📂card
 ┃ ┃ ┣ 📜DriverCard.module.css
 ┃ ┃ ┣ 📜DriverCard.tsx
 ┃ ┃ ┣ 📜DriverProfile.module.css
 ┃ ┃ ┣ 📜DriverProfile.tsx
 ┃ ┃ ┣ 📜UserCard.module.css
 ┃ ┃ ┣ 📜UserCard.tsx
 ┃ ┃ ┣ 📜UserProfile.module.css
 ┃ ┃ ┗ 📜UserProfile.tsx
 ┃ ┣ 📂chip
 ┃ ┃ ┣ 📜Chip.module.css
 ┃ ┃ ┗ 📜Chip.tsx
 ┃ ┣ 📂costInfo
 ┃ ┃ ┣ 📜CostInfo.module.css
 ┃ ┃ ┗ 📜CostInfo.tsx
 ┃ ┣ 📂input
 ┃ ┃ ┣ 📜AuthInput.module.css
 ┃ ┃ ┗ 📜AuthInput.tsx
 ┃ ┣ 📂loading
 ┃ ┃ ┣ 📜LoadingSpinner.module.css
 ┃ ┃ ┗ 📜LoadingSpinner.tsx
 ┃ ┣ 📂modal
 ┃ ┃ ┣ 📜ModalContainer.module.css
 ┃ ┃ ┗ 📜ModalContainer.tsx
 ┃ ┣ 📂nav
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜Notification.tsx
 ┃ ┃ ┃ ┣ 📜NotificationModal.module.css
 ┃ ┃ ┃ ┣ 📜NotificationModal.tsx
 ┃ ┃ ┃ ┗ 📜type.ts
 ┃ ┃ ┣ 📜Nav.module.css
 ┃ ┃ ┣ 📜Nav.tsx
 ┃ ┃ ┣ 📜NavMenuModal.module.css
 ┃ ┃ ┣ 📜NavMenuModal.tsx
 ┃ ┃ ┣ 📜ProfileModal.module.css
 ┃ ┃ ┗ 📜ProfileModal.tsx
 ┃ ┣ 📂noContents
 ┃ ┃ ┣ 📜NoContents.module.css
 ┃ ┃ ┗ 📜NoContents.tsx
 ┃ ┣ 📂page
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┣ 📜AuthBottom.module.css
 ┃ ┃ ┃ ┣ 📜AuthBottom.tsx
 ┃ ┃ ┃ ┣ 📜AuthTop.module.css
 ┃ ┃ ┃ ┗ 📜AuthTop.tsx
 ┃ ┃ ┣ 📂edit
 ┃ ┃ ┃ ┣ 📜EditBtn.module.css
 ┃ ┃ ┃ ┗ 📜EditBtn.tsx
 ┃ ┃ ┣ 📂login
 ┃ ┃ ┃ ┗ 📜index.module.css
 ┃ ┃ ┣ 📂register
 ┃ ┃ ┃ ┣ 📜ImgUpload.module.css
 ┃ ┃ ┃ ┣ 📜ImgUpload.tsx
 ┃ ┃ ┃ ┣ 📜Region.module.css
 ┃ ┃ ┃ ┣ 📜Region.tsx
 ┃ ┃ ┃ ┣ 📜SelectItem.module.css
 ┃ ┃ ┃ ┣ 📜SelectItem.tsx
 ┃ ┃ ┃ ┣ 📜ServiceType.module.css
 ┃ ┃ ┃ ┗ 📜ServiceType.tsx
 ┃ ┃ ┗ 📂signup
 ┃ ┃ ┃ ┗ 📜index.module.css
 ┃ ┣ 📂pageError
 ┃ ┃ ┣ 📜PageError.module.css
 ┃ ┃ ┗ 📜PageError.tsx
 ┃ ┣ 📂pagination
 ┃ ┃ ┣ 📜Pagination.module.css
 ┃ ┃ ┗ 📜Pagination.tsx
 ┃ ┣ 📂review
 ┃ ┃ ┣ 📜Review.module.css
 ┃ ┃ ┗ 📜Review.tsx
 ┃ ┣ 📂search
 ┃ ┃ ┣ 📜Search.module.css
 ┃ ┃ ┗ 📜Search.tsx
 ┃ ┣ 📂snsShare
 ┃ ┃ ┣ 📜ShareKakao.tsx
 ┃ ┃ ┣ 📜SnsShare.module.css
 ┃ ┃ ┗ 📜SnsShare.tsx
 ┃ ┣ 📂tab
 ┃ ┃ ┣ 📜Tab.module.css
 ┃ ┃ ┗ 📜Tab.tsx
 ┃ ┗ 📂toast
 ┃ ┃ ┣ 📜Toast.module.css
 ┃ ┃ ┗ 📜Toast.tsx
 ┣ 📂context
 ┃ ┗ 📜authContext.tsx
 ┣ 📂layout
 ┃ ┣ 📜DriverLayout.module.css
 ┃ ┣ 📜DriverLayout.tsx
 ┃ ┣ 📜RendingLayout.module.css
 ┃ ┣ 📜RendingLayout.tsx
 ┃ ┣ 📜UserLayout.module.css
 ┃ ┗ 📜UserLayout.tsx
 ┣ 📂lib
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📜STORAGE_KEY.ts
 ┃ ┃ ┣ 📜assignedEstimateReq.ts
 ┃ ┃ ┣ 📜auth.ts
 ┃ ┃ ┣ 📜axios.ts
 ┃ ┃ ┣ 📜customer.ts
 ┃ ┃ ┣ 📜driver.ts
 ┃ ┃ ┣ 📜estimate.ts
 ┃ ┃ ┣ 📜estimateReq.ts
 ┃ ┃ ┣ 📜favorite.ts
 ┃ ┃ ┣ 📜kakao.ts
 ┃ ┃ ┣ 📜notification.ts
 ┃ ┃ ┣ 📜review.ts
 ┃ ┃ ┗ 📜user.ts
 ┃ ┣ 📂function
 ┃ ┃ ┣ 📜direction.ts
 ┃ ┃ ┣ 📜useMediaQuery.ts
 ┃ ┃ ┣ 📜utils.ts
 ┃ ┃ ┗ 📜validation.ts
 ┃ ┗ 📂useQueries
 ┃ ┃ ┣ 📜assignedEstimateReq.ts
 ┃ ┃ ┣ 📜customer.ts
 ┃ ┃ ┣ 📜driver.ts
 ┃ ┃ ┣ 📜estimate.ts
 ┃ ┃ ┣ 📜estimateReq.ts
 ┃ ┃ ┣ 📜favorite.ts
 ┃ ┃ ┣ 📜notification.ts
 ┃ ┃ ┣ 📜notificationConnect.ts
 ┃ ┃ ┣ 📜review.ts
 ┃ ┃ ┗ 📜user.ts
 ┣ 📂page
 ┃ ┣ 🚚driver
 ┃ ┃ ┣ 📂costCall
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📜CallList.module.css
 ┃ ┃ ┃ ┃ ┣ 📜CallList.tsx
 ┃ ┃ ┃ ┃ ┣ 📜Dropdown.module.css
 ┃ ┃ ┃ ┃ ┣ 📜Dropdown.tsx
 ┃ ┃ ┃ ┃ ┣ 📜Filter.module.css
 ┃ ┃ ┃ ┃ ┣ 📜Filter.tsx
 ┃ ┃ ┃ ┃ ┣ 📜ModalInput.module.css
 ┃ ┃ ┃ ┃ ┗ 📜ModalInput.tsx
 ┃ ┃ ┃ ┣ 📜index.module.css
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂costDetail
 ┃ ┃ ┃ ┣ 📜index.module.css
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂costHandler
 ┃ ┃ ┃ ┣ 📜index.module.css
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂editInfo
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📜Mid.module.css
 ┃ ┃ ┃ ┃ ┗ 📜Mid.tsx
 ┃ ┃ ┃ ┣ 📜index.module.css
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜type.ts
 ┃ ┃ ┣ 📂editProfile
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📜Mid.module.css
 ┃ ┃ ┃ ┃ ┗ 📜Mid.tsx
 ┃ ┃ ┃ ┣ 📜index.module.css
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜type.ts
 ┃ ┃ ┣ 📂login
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂myPage
 ┃ ┃ ┃ ┣ 📜index.module.css
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂register
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📜Mid.module.css
 ┃ ┃ ┃ ┃ ┗ 📜Mid.tsx
 ┃ ┃ ┃ ┣ 📜index.module.css
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜type.ts
 ┃ ┃ ┗ 📂signup
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 🌱root
 ┃ ┃ ┣ 📂driverDetail
 ┃ ┃ ┃ ┣ 📜index.module.css
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂searchDriver
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📜DriverSearch.module.css
 ┃ ┃ ┃ ┃ ┣ 📜DriverSearch.tsx
 ┃ ┃ ┃ ┃ ┣ 📜FilterDropdown.module.css
 ┃ ┃ ┃ ┃ ┣ 📜FilterDropdown.tsx
 ┃ ┃ ┃ ┃ ┣ 📜FilterDropdownMedium.module.css
 ┃ ┃ ┃ ┃ ┣ 📜FilterDropdownMedium.tsx
 ┃ ┃ ┃ ┃ ┣ 📜FixedBottomTab.module.css
 ┃ ┃ ┃ ┃ ┣ 📜FixedBottomTab.tsx
 ┃ ┃ ┃ ┃ ┣ 📜SortDropdown.module.css
 ┃ ┃ ┃ ┃ ┗ 📜SortDropdown.tsx
 ┃ ┃ ┃ ┣ 📂utils
 ┃ ┃ ┃ ┃ ┗ 📜Constants.ts
 ┃ ┃ ┃ ┣ 📜EnumMapper.ts
 ┃ ┃ ┃ ┣ 📜index.module.css
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📜index.module.css
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┗ 🏡user
 ┃ ┃ ┣ 📂costCall
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📜CostCallContent.tsx
 ┃ ┃ ┃ ┃ ┣ 📜MovingAddress.module.css
 ┃ ┃ ┃ ┃ ┣ 📜MovingAddress.tsx
 ┃ ┃ ┃ ┃ ┣ 📜MovingAddressModal.module.css
 ┃ ┃ ┃ ┃ ┣ 📜MovingAddressModal.tsx
 ┃ ┃ ┃ ┃ ┣ 📜MovingComments.module.css
 ┃ ┃ ┃ ┃ ┣ 📜MovingComments.tsx
 ┃ ┃ ┃ ┃ ┣ 📜MovingDate.css
 ┃ ┃ ┃ ┃ ┣ 📜MovingDate.tsx
 ┃ ┃ ┃ ┃ ┣ 📜MovingType.module.css
 ┃ ┃ ┃ ┃ ┣ 📜MovingType.tsx
 ┃ ┃ ┃ ┃ ┣ 📜Navigation.module.css
 ┃ ┃ ┃ ┃ ┗ 📜Navigation.tsx
 ┃ ┃ ┃ ┣ 📜index.module.css
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂costDetail
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📜CostDetailBottomTab.module.css
 ┃ ┃ ┃ ┃ ┗ 📜CostDetailBottomTab.tsx
 ┃ ┃ ┃ ┣ 📜index.module.css
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂editInfo
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📜Mid.module.css
 ┃ ┃ ┃ ┃ ┗ 📜Mid.tsx
 ┃ ┃ ┃ ┣ 📜index.module.css
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜type.ts
 ┃ ┃ ┣ 📂editProfile
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📜Mid.module.css
 ┃ ┃ ┃ ┃ ┗ 📜Mid.tsx
 ┃ ┃ ┃ ┣ 📜index.module.css
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜type.ts
 ┃ ┃ ┣ 📂favoriteMover
 ┃ ┃ ┃ ┣ 📜index.module.css
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂login
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂movingReview
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📜MyReview.module.css
 ┃ ┃ ┃ ┃ ┣ 📜MyReview.tsx
 ┃ ┃ ┃ ┃ ┣ 📜WritableReviews.module.css
 ┃ ┃ ┃ ┃ ┣ 📜WritableReviews.tsx
 ┃ ┃ ┃ ┃ ┣ 📜WritingReview.module.css
 ┃ ┃ ┃ ┃ ┗ 📜WritingReview.tsx
 ┃ ┃ ┃ ┣ 📜index.module.css
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂pendingCost
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📜PendingList.module.css
 ┃ ┃ ┃ ┃ ┗ 📜PendingList.tsx
 ┃ ┃ ┃ ┣ 📜index.module.css
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂receivedCost
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📜ReceivedCostCard.module.css
 ┃ ┃ ┃ ┃ ┗ 📜ReceivedCostCard.tsx
 ┃ ┃ ┃ ┣ 📜index.module.css
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜type.ts
 ┃ ┃ ┣ 📂receivedCostDetail
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📜ReceivedList.module.css
 ┃ ┃ ┃ ┃ ┗ 📜ReceivedList.tsx
 ┃ ┃ ┃ ┣ 📜index.module.css
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜type.ts
 ┃ ┃ ┣ 📂register
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📜Mid.module.css
 ┃ ┃ ┃ ┃ ┗ 📜Mid.tsx
 ┃ ┃ ┃ ┣ 📜index.module.css
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜type.ts
 ┃ ┃ ┗ 📂signup
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┣ 📂style
 ┃ ┗ 📜globals.css
 ┣ 📂types
 ┃ ┣ 📜apiTypes.ts
 ┃ ┣ 📜cardTypes.ts
 ┃ ┗ 📜holiday-kr.d.ts
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┗ 📜root.tsx
```

<br>

#### <p align="right"><a href="#top">TOP👆🏻</a></p>

<br>

## <span id="culture">💪🏻 9. 협업 문화</span>

- 일시: 평일 오전 9시 ~ 오후 7시, 주말
- 내용: PR 내용 발표 및 코드 리뷰, 진행 상황 점검, 추가 이후 계획 논의

<br>

#### <p align="right"><a href="#top">TOP👆🏻</a></p>

<br>

## <span id="bug">버그 문제</span>

<br> <br>
