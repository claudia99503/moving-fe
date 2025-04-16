<div align=center>
	<span id="top">
	<h1>Moving 프론트엔드 레포지토리</h1><br>

![image](https://github.com/user-attachments/assets/7ac80cb6-b3a1-47c2-a70f-dc3f5b8da42d)




<b>[Moving 바로가기](gomoveit.vercel.app)</b> <br>
  
<br> 
</div>

🔐 **테스트용 유저 계정**

- **아이디**: `super101@test.com`  
- **비밀번호**: `12341234`

<br>

<details>
<summary>목차</summary>
  
1. [서비스 소개](#app)
2. [기술 및 개발 환경](#dev)
3. [담당 구현](#roles)
4. [컨벤션](#convention)
5. [프로젝트 구조](#tree)

</details>
<br>

## <span id="app">📝 1. 서비스 소개</span>

<b>'무빙(Moving)'</b>은 이사를 준비하는 **소비자**와 전문 **이사 기사님**을 빠르고 간편하게 연결해주는 **이사 매칭 플랫폼**입니다.  
이사 시장의 **불투명한 가격 책정**과 **신뢰할 수 없는 서비스** 문제를 해결하기 위해, 소비자가 **채팅형 인터페이스**로 손쉽게 이사 정보를 입력하면 여러 기사님들이 견적을 제공하고, 소비자는 **제공된 견적과 리뷰를 비교해 자신에게 꼭 맞는 기사님을 선택**할 수 있습니다.  
무빙은 **소비자**와 **기사님** 모두가 믿고 이용할 수 있는 **편리하고 신뢰도 높은 이사 서비스**를 제공합니다.



### 시연 영상
[![MOVING 시연 영상](https://img.youtube.com/vi/영상ID/0.jpg)](https://github.com/user-attachments/assets/44cb82a9-84d9-47ae-a8e4-a27945bdd328)

<br><br>


## <span id="dev">🛠️ 2. 기술 및 개발 환경</span>

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



## <span id="roles">📝 3. 담당 구현</span>

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

<br>

***

<br>

🎨 **페이지**

✨ **[기사님 찾기](https://github.com/claudia99503/moving-fe/tree/main/src/page/root/searchDriver)**  
- **비회원**과 **일반 유저** 모두 **기사님 전체 리스트**를 조회할 수 있습니다.

- **기사님 검색 및 조회 기능**:  
  - 기사님의 **별명**으로 검색 가능  
  - **리뷰**, **평점**, **경력**, **확정 횟수** 기준으로 정렬 가능  
  - **지역**과 **서비스 종류**에 따라 필터링 가능  
  - **무한 스크롤**을 통해 **기사님 전체 리스트**를 끊김 없이 탐색 가능
  - **찜한 기사님**은 좌측에서 최대 5명까지 확인 가능
<br>

📁 **디렉토리 구조**

```
searchDriver/
├── __tests__/                           # 레이아웃 및 훅 단위 렌더링 테스트
│   ├── DesktopLayout.test.tsx
│   ├── DriverList.test.tsx
│   ├── FavoriteDrivers.test.tsx
│   ├── MediumLayout.test.tsx
│   ├── ResponsiveLayout.test.tsx
│   ├── SearchDriver.test.tsx
│   └── useInfiniteScroll.test.tsx

├── components/
│   ├── DriverSearch.tsx                 # 기사님 검색 입력창
│   ├── DriverSearch.module.css         # 검색창 스타일
│   ├── FilterDropdown.tsx              # 데스크탑 전용 필터 드롭다운
│   ├── FilterDropdown.module.css       # 데스크탑 필터 드롭다운 스타일
│   ├── FilterDropdownMedium.tsx        # 모바일/태블릿용 필터 드롭다운
│   ├── FilterDropdownMedium.module.css # 모바일 필터 드롭다운 스타일
│   ├── SortDropdown.tsx                # 기사님 정렬 기준 드롭다운 (화면 너비에 따라 UI 분기)
│   ├── SortDropdown.module.css         # 정렬 드롭다운 스타일
│   ├── FixedBottomTab.tsx              # 모바일/태블릿 하단 고정 버튼 (찜/지정 견적 요청 포함)
│   ├── FixedBottomTab.module.css       # FixedBottomTab 전용 스타일
│   └── Sentinel.tsx                    # 무한스크롤 감지용 IntersectionObserver 대상 div

├── filters/
│   ├── FilterConfig.ts                 # 필터 옵션 구성 객체 정의
│   └── FilterConstants.ts              # 서비스 지역/종류에 대한 한글-영문 매핑 상수

├── hooks/
│   └── useInfiniteScroll.ts            # IntersectionObserver 기반 무한 스크롤 커스텀 훅

├── layouts/
│   ├── DesktopLayout.tsx               # 데스크탑 전용 기사 리스트 및 필터 UI
│   ├── MediumLayout.tsx                # 모바일/태블릿 전용 기사 리스트 및 필터 UI
│   ├── ResponsiveLayout.tsx            # 화면 크기에 따라 레이아웃 컴포넌트 분기 렌더링
│   ├── DriverList.tsx                  # 기사 카드 리스트 출력 컴포넌트
│   └── FavoriteDrivers.tsx             # 로그인 사용자의 찜한 기사 리스트

├── EnumMapper.ts                       # 서비스 지역/종류 enum을 한글로 변환하는 유틸
├── index.tsx                           # 검색/필터/정렬/목록을 통합한 기사님 찾기 페이지 메인 컴포넌트
└── index.module.css                    # 페이지 전용 스타일
```

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
	- **찜한 기사님**은 **좌측**에서 **최대 5명까지** 확인 가능  
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

✨ **[기사님 상세](https://github.com/claudia99503/moving-fe/tree/main/src/page/root/driverDetail)**  
- **비회원**과 **일반 유저** 모두 **기사님 상세 정보**를 조회할 수 있습니다. 
 
- **기사님 상세 조회 기능**:  
  - 기사님의 **상세 설명**, **제공 서비스**, **서비스 가능 지역** 확인 가능  
  - 기사님 정보를 **소셜 미디어**에 공유 가능  
    - 예시: `"이사를 준비하시나요? ⭐️ OOO 기사님을 추천합니다! 무빙에서 확인해 보세요! <기사님 상세 페이지 URL>"`
  - **기사님 상세 페이지 하단**에서 실제 이용 고객들의 **해당 기사님에 대한 리뷰**를 확인할 수 있습니다.  
    - **평균 평점**과 **평점 분포**를 한눈에 확인  
    - **고객들의 후기**를 통해 기사님의 서비스 품질 및 만족도를 직접 확인 가능  
    - **페이지네이션** 기능을 통해 **한 페이지당 5개씩** 고객 후기를 **페이지를 넘기며** 확인 가능

<br>

📁 **디렉토리 구조**

```
driverDetail/
├── components/
│   ├── DesktopSidebar.tsx         # 데스크탑 전용 사이드 영역 (찜/지정견적/공유 버튼)
│   ├── DriverDetailCard.tsx       # 기사 프로필 정보를 DriverCard 형태로 렌더링
│   ├── DriverDetailInfo.tsx       # 기사 상세 설명, 서비스 종류 및 지역 표시
│   ├── ReviewSection.tsx          # 기사 리뷰 목록 및 평점 요약 영역
│   ├── MobileBottomTab.tsx        # FixedBottomTab을 감싸는 모바일 전용 하단 버튼 컴포넌트
│   ├── MetaHelmet.tsx             # Open Graph 메타태그 설정을 위한 Helmet 컴포넌트
│   └── Modals.tsx                 # 로그인/에러/견적 성공 등 모달 UI 통합 렌더링

├── hooks/
│   ├── useDriverDetail.ts         # 기사 상세 및 리뷰 데이터를 가져오는 커스텀 훅
│   └── useIsMobileView.ts         # 현재 뷰포트가 모바일/태블릿인지 판별하는 훅

├── utils/
│   └── errorHandler.ts            # 에러 코드 및 메시지 통일화를 위한 핸들링 유틸

├── index.tsx                      # 기사 상세 페이지 메인 컴포넌트
└── index.module.css              # 기사 상세 페이지 전용 스타일
```

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


✨ **[소비자 견적 상세](https://github.com/claudia99503/moving-fe/tree/main/src/page/user/costDetail)**  
- **소비자**는 선택한 **개별 견적서**의 상세 정보를 확인할 수 있습니다.
 
- **견적 상세 페이지**는 두 가지로 구분됩니다:  
  - **대기 중인 견적 → 견적 상세 페이지**  
  - **받았던 견적 → 견적 상세 페이지**  

- **공통 기능**:  
  - **견적가**, **기사님의 코멘트**, **견적 정보** 확인 가능  
  - **견적서 공유** 기능 제공  
    - 예시: `"OOO 기사님이 보낸 견적서를 확인해보세요! <견적 상세 페이지 URL>"`
   
<br>

📁 **디렉토리 구조**

```
costDetail/
├── components/
│   ├── CostDetailBottomTab.tsx     # 모바일/태블릿 전용 하단 고정 버튼 (찜/확정 액션)
│   ├── CostDetailBottomTab.module.css  # 하단 버튼 스타일 정의
│   ├── CostInfoSection.tsx         # 견적가, 기사 코멘트, 상세 비용 정보 및 토스트 표시
│   ├── DesktopSidebar.tsx          # 데스크탑용 사이드 버튼 (찜, 확정, 공유)
│   └── MetaHelmet.tsx              # 견적 페이지용 공유 메타태그 설정
├── hooks/
│   ├── useCostDetail.ts            # 찜/확정 상태 관리 및 에러 핸들링 포함 커스텀 훅
│   └── useIsMobileView.ts          # SMALL 또는 MEDIUM일 때 true 반환하는 모바일 뷰 판별 훅
├── index.module.css                # 견적 상세 페이지 스타일
└── index.tsx                       # 견적 상세 페이지 메인 컴포넌트
```

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

## <span id="convention">🖌️ 4. 컨벤션</span>

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

## <span id="tree">🌱 5. 프로젝트 구조</span>

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

<br>

#### <p align="right"><a href="#top">TOP👆🏻</a></p>

<br>



