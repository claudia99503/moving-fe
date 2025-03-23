<div align=center>
	<span id="top">
	<h1>Moving 프론트엔드 레포지토리</h1><br>

![image](https://github.com/user-attachments/assets/7ac80cb6-b3a1-47c2-a70f-dc3f5b8da42d)




<b>[Moving 바로가기](https://moving-fe-teal.vercel.app)</b> <br>

<br> 
</div>

<details>
<summary>목차</summary>
  
1. [서비스 소개](#app)
2. [프론트엔드 팀 소개](#team)
3. [기술 및 개발 환경](#dev)
4. [개발 일정](#schedule)
5. [역할](#roles)
6. [구현 기능](#feature)
7. [컨벤션](#convention)
8. [프로젝트 구조](#tree)
9. [협업 문화](#culture)

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

## <span id="roles">📝 5. 역할</span>

🎶 **공통 컴포넌트**

- 🔗 **[리뷰 컴포넌트](https://github.com/moving-team/moving-fe/blob/main/src/components/review/Review.tsx)**  
  : 기사님에 대한 평균 평점, 별점 분포, 개별 리뷰를 시각적으로 보여주는 컴포넌트.
  ![image](https://github.com/user-attachments/assets/23cbbb27-3e6c-4201-949f-6c44c527d674)

- 🔗 **[Toast 컴포넌트](https://github.com/moving-team/moving-fe/blob/main/src/components/toast/Toast.tsx)**  
  : 간단한 **알림 메시지**를 화면에 표시하며, **자동 또는 수동**으로 사라지도록 설정할 수 있고, **사라지는 시간**도 조정할 수 있는 컴포넌트.

- 🔗 **[검색 컴포넌트](https://github.com/moving-team/moving-fe/blob/main/src/components/search/Search.tsx)**  
  : 기사님 및 서비스에 대한 검색 기능을 제공하는 컴포넌트.

- 🔗 **[페이지네이션 컴포넌트](https://github.com/moving-team/moving-fe/blob/main/src/components/pagination/Pagination.tsx)**  
  : 데이터 목록의 페이지 이동을 위한 컴포넌트.


✨ **[기사님 찾기 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/root/searchDriver/index.tsx)**  
- **비회원**과 **일반 유저** 모두 **기사님 전체 리스트**를 조회할 수 있습니다.

- **기사님 검색 및 조회 기능**:  
  - 기사님의 **별명**으로 검색 가능  
  - **리뷰**, **평점**, **경력**, **확정 횟수** 기준으로 정렬 가능  
  - **지역**과 **서비스 종류**에 따라 필터링 가능  
  - **무한 스크롤**을 통해 **기사님 전체 리스트**를 끊김 없이 탐색 가능  

- #### **비회원**  
	- **기사님 검색** 및 **전체 리스트 조회** 가능 (**우측**에서 확인)  
	- **찜한 기사님 리스트**는 **이용 불가** → **로그인 후 좌측**에서 확인 가능  

<table>
  <tr>
    <th style="width: 650px; height: 100px;">데스크탑 & 태블릿 버전</th>
    <th style="width: 350px; height: 100px;">모바일 버전</th>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/f9cfc5fb-9c06-4f8f-94ec-e0dc8f653537" alt="데스크탑 & 태블릿 버전 이미지"></td>
    <td><img src="https://github.com/user-attachments/assets/99eb8fb2-43a9-46e4-a351-f5d8c4462444" alt="모바일 버전 이미지"></td>
  </tr>
</table>

- #### **일반 유저**  
	- **기사님 검색** 및 **전체 리스트 조회** 가능 (**우측**에서 확인)  
	- **찜한 기사님**은 **좌측**에서 **최대 3명까지** 확인 가능  
	- **기사님 전체 리스트**에서 **찜한 기사님**은 **프로필 카드**에 **별도 표시** (**우측**에서 확인)

<table>
  <tr>
    <th style="width: 650px; height: 100px;">데스크탑 & 태블릿 버전</th>
    <th style="width: 350px; height: 100px;">모바일 버전</th>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/a47a16f0-b0cc-472c-bbfa-b9396697f40d" alt="데스크탑 & 태블릿 버전 이미지"></td>
    <td><img src="https://github.com/user-attachments/assets/44d5b640-6483-4ac1-b6f0-9c4d36dcd597" alt="모바일 버전 이미지"></td>
  </tr>
</table>

 
<br>

✨ **[기사님 상세 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/root/driverDetail/index.tsx)**  
- **비회원**과 **일반 유저** 모두 **기사님 상세 정보**를 조회할 수 있습니다. 
 
- **기사님 상세 조회 기능**:  
  - 기사님의 **상세 설명**, **제공 서비스**, **서비스 가능 지역** 확인 가능  
  - 기사님 정보를 **소셜 미디어**에 공유 가능  
    - 예시: `"이사를 준비하시나요? ⭐️ OOO 기사님을 추천합니다! 무빙에서 확인해 보세요! <기사님 상세 페이지 URL>"`
  - **기사님 상세 페이지 하단**에서 실제 이용 고객들의 **해당 기사님에 대한 리뷰**를 확인할 수 있습니다.  
    - **평균 평점**과 **평점 분포**를 한눈에 확인  
    - **고객들의 후기**를 통해 기사님의 서비스 품질 및 만족도를 직접 확인 가능  
    - **페이지네이션** 기능을 통해 **한 페이지당 5개씩** 고객 후기를 **페이지를 넘기며** 확인 가능	


- #### **비회원**  
	- 기사님의 **상세 설명**, **제공 서비스**, **서비스 가능 지역** 확인 가능  
	- **기사님 찜하기** 및 **기사님 지정 요청**은 **이용 불가**  
 		- **기사님 찜하기** 또는 **지정 요청** 버튼 클릭 시, **로그인 모달**이 뜨며 **로그인 페이지**로 이동 가능
	- **고객 후기 확인 가능**: 기사님에 대한 **고객 후기**와 **평점**을 자유롭게 확인할 수 있습니다.  
		- **페이지네이션** 기능을 통해 **한 페이지당 5개씩** 고객 후기를 **페이지를 넘기며** 확인 가능  

<table>
  <tr>
    <th style="width: 650px; height: 100px;">데스크탑 & 태블릿 버전</th>
    <th style="width: 350px; height: 100px;">모바일 버전</th>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/2def2b17-25ba-475a-8bb1-cd304bfe945a" alt="데스크탑 & 태블릿 버전 이미지"></td>
    <td><img src="https://github.com/user-attachments/assets/5abe757d-076e-44ce-9386-1eeb0d66c1db" alt="모바일 버전 이미지"></td>
  </tr>
</table>

- #### **일반 유저**  
	- 기사님의 **상세 설명**, **제공 서비스**, **서비스 가능 지역** 확인 가능  
	- 기사님을 **찜하기** 가능 → **찜한 기사님 페이지**에서 확인 가능  
	- **기사님의 서비스 가능 지역**일 경우에만 **지정 견적 요청** 가능  
 	 - **지정 요청**이 완료되면, 기사님의 **프로필 카드**에 **"지정 견적 요청" 뱃지**가 표시
	- **고객 후기 확인 가능**: 기사님에 대한 **고객 후기**와 **평점**을 자유롭게 확인할 수 있습니다.  
		- **페이지네이션** 기능을 통해 **한 페이지당 5개씩** 고객 후기를 **페이지를 넘기며** 확인 가능  

<table>
  <tr>
    <th style="width: 650px; height: 100px;">데스크탑 & 태블릿 버전</th>
    <th style="width: 350px; height: 100px;">모바일 버전</th>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/0206f98c-10ae-4d4b-aede-8d9311cb0d21" alt="데스크탑 & 태블릿 버전 이미지"></td>
    <td><img src="https://github.com/user-attachments/assets/67320673-f606-4ef6-a4f2-29f589bee374" alt="모바일 버전 이미지"></td>
  </tr>
</table>

<br>


✨ **[소비자 견적 상세 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/user/costDetail/index.tsx)**  
- **소비자**는 선택한 **개별 견적서**의 상세 정보를 확인할 수 있습니다.
 
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

<table>
  <tr>
    <th style="width: 650px; height: 100px;">데스크탑 & 태블릿 버전</th>
    <th style="width: 350px; height: 100px;">모바일 버전</th>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/b356eed9-5860-4dd9-b4d7-92d889e4a6c5" alt="데스크탑 & 태블릿 버전 이미지"></td>
    <td><img src="https://github.com/user-attachments/assets/2f9bc14e-807e-4c70-a616-bdd2f10e7558" alt="모바일 버전 이미지"></td>
  </tr>
</table>

- #### **받았던 견적 상세 페이지**  
	- **확정한 견적**의 경우, 기사님 **프로필 카드**에 **확정 견적 뱃지**가 표시
	- **확정하지 않은 견적**의 경우, 페이지 **하단에 토스트 알림**으로 표시
 		 - `"확정하지 않은 견적입니다!"`
	![image](https://github.com/user-attachments/assets/45e5d92d-e512-4a5b-aa1e-bd5cbda97e03)


<table>
  <tr>
    <th style="width: 650px; height: 100px;">데스크탑 & 태블릿 버전</th>
    <th style="width: 350px; height: 100px;">모바일 버전</th>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/486e7e53-5196-48ba-97ff-a103bfd6d45b" alt="데스크탑 & 태블릿 버전 이미지"></td>
    <td><img src="https://github.com/user-attachments/assets/1e2b67da-dded-4628-bc94-61895aeb6755" alt="모바일 버전 이미지"></td>
  </tr>
</table>
 
<br>

#### <p align="right"><a href="#top">TOP👆🏻</a></p>

<br>

## ✨ 6. 구현 기능

### 🏡 **소비자 전용** 페이지

- 🔗 **[기사님 찾기 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/root/searchDriver/index.tsx)**
  : 기사님 검색 및 리스트 조회, 필터링 및 정렬 기능

- 🔗 **[기사님 상세 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/root/driverDetail/index.tsx)**
  : 기사님의 상세 설명, 제공 서비스, 서비스 가능 지역 확인
  
- 🔗 **[소비자 견적 상세 페이지](https://github.com/moving-team/moving-fe/blob/main/src/page/user/costDetail/index.tsx)**
  : 받은 견적과 진행 중인 견적에 대한 견적서 상세 정보 확인 및 확정 기능



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

