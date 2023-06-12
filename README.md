<h1>'WePet' PROJECT</h1>
Product Manager: 김지연(F) <br />
Project Manager: 백지율(F) <br />
Teammates: 오티모시(B), 이관용(B), 조수진(F) <br />
<br />
<br />
<h2>About</h2>
1.  개발기간: 2023/5/26 ~ 2023/6/9<br />
2.  백엔드 github 링크: https://github.com/wecode-bootcamp-korea/46-1st-WePet-backend<br />
3.  프로젝트 목적과 소개<br />
<h4>[반려동물 시장 변화 3 KEYWORD]</h4>
<span>Professional Care ( 대충 키우지 않고 제대로 키운다 )</span><br />
<span>Together Time ( 가족이기에 소중한 시간을 함께 )</span><br />
<span>Segmented Market ( 세분화 된 니즈를 공략 )</span><br />
<br />
반려동물을 단순히 키우는 동물을 넘어선, 함께 살아가는 가족처럼 여기고 이들에 대한 투자를 아끼지 않는 사람들이 증가하고, <br />
반려동물 관련 시장의 가능성이 무한대로 성장하고 있는 변화를 반영하여 'WePet'의 프로젝트를 시작하게 되었습니다.


<br />
<br />
<h2>Tech Stack</h2>

<h3>FrontEnd</h3>
<div>
<img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white" alt="html">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
<img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="SASS">
</div>
<br />
<br />
<h2>Collaboration Tool</h2>
<div>
<img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white" alt="Notion">
<img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" alt="Slack">
<img src="https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white" alt="Trello">
<img src="https://img.shields.io/badge/Google%20Sheets-34A853?style=for-the-badge&logo=google-sheets&logoColor=white" alt="GoogleSheet">
<img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" alt="Prettier">
<img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" alt="Eslint">
<img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" alt="prettier">
</div>
<br />
<br />
<h2>기능구현</h2>

<h3>로그인/회원가입</h3>
<span>1) 실시간 유효성 검사</span> <br />
- 이메일: '@'포함<br />
- 비밀번호: 8자리 이상 & 문자/숫자/특수문자 포함 <br />
- 비밀번호 확인 <br /> 
- 이름: 두글자 이상 <br /> 
<span>2) 유효성 검사 조건 불충족 경우, 실시간으로 입력창 하단에 안내 메세지 출력</span> <br />
<span>3) 필수 입력 사항 미 입력시 가입하기 버튼 비활성화</span> <br />
<span>4) 약관 정보 전체 선택 체크박스 구현</span> <br />
<span>5) 회원 가입 안내창 실행 후 화면 클릭 시 로그인 페이지로 이동 구현</span> <br />
<span>6) fetch API </span> <br />
  : fetch 함수를 사용하여 서버와 데이터 통신을 수행하고 로그인/회원가입을 위해 서버에 POST 요청
   로그인 시 fetch 함수를 사용해 데이터를 전달하고 localStorage 에 토큰을 저장
   이메일중복/회원가입 및 로그인실패시, 모달창 구현(이메일중복/회원가입 및 로그인실패)<br />
<br />
<br />
<h3>Nav/Footer</h3>
<span>1) 로그인 여부에 따라 버튼 문구 변경 (로그인/로그아웃)</span> <br />
<span>2) 로그인 여부에 따라 NAV 모달에 노출 문구 변경 (앗 로그인이 필요합니다, 안녕하세요 ~님)</span> <br />
<span>3) 로그인이 된 경우에만 장바구니, 마이페이지로 진입(로그인이 안 된 경우에는 로그인 페이지로 이동)</span> <br />
<span>4) useNavigate Hook 을 활용한 페이지 이동</span> <br />
<span>5) localStorage의 token의 유무를 확인하여 결과에 따른 다른 페이지 출력</span> <br />
<span>6) map 메서드를 이용해 반복되는 UI 구현</span> <br />
<span>7) css keyframes 를 활용하여 모달창 출력에 애니메이션 부여</span> <br />
<span>8) css transition-duration과 translate, rotate 이용으로 ham menu 애니메이션 구현</span> <br />
<br />
<br />
<h3>메인페이지</h3>
<span>1) 고객들의 관심을 유도할 수 있는 다양한 화면 효과</span> <br />
<span>2) Carousel 기능 - useEffect와 setInterval을 이용하여 5초마다 새로운 화면으로 전환되게 설정</span> <br />
<span>3) Slider 기능 - 간식/용품 카테고리에 대한 상품은 4개씩 slider로 노출</span> <br />
<span>4) Product - 쿼리스트링을 통해 최신순, 인기순 기준의 상품들을 map 메서드로 노출</span> <br />
<br />
<br />

<h3>상품리스트 페이지</h3>
<span>1) 네브 카테코리 선택에 따른, 페이지 전환을 구현</span> <br />
: useParams 훅을 사용하여 URL의 파라미터(id) 값을 가져옴 <br />
<span>2) 드롭박스(추천순/최신순/가격낮은순/가격높은순)</span> <br />
: useEffect 훅을 사용하여 컴포넌트가 마운트되거나 id 또는 orderBy 값이 변경될 때마다 상품 목록을 가져오는 비동기 작업을 수행<br />
<span>3) useEffect 훅과 fetch 함수를 사용해 전체 카테고리를 불러왔고, 필터 클릭 시 쿼리 스트링을 추가해 해당 값의 데이터를 불러옴</span> <br />
<span>4) 네브 카테코리 선택에 따른, 페이지 전환을 구현(해당 카테고리의 타이틀/설명/총 갯수/상품리스트 변경)</span> <br />
<span>5) 상품이미지 호버 시 확대 및 color변경 기능</span> <br />
<span>6) 상품 클릭시, Link 태그 사용 상세페이지 이동사</span> <br />
<br />
<br />
<h3>상품상세 페이지</h3>
<span>1) config.js 파일을 통한 url 관리</span> <br />
<span>2) useEffect 함수 내부의 데이터를 불러오기 전에 UI 를 그릴 수 있도록 하는 조건부 렌더링 활용</span> <br />
   - if(!productData?.productPrice) return null<br />
   - if(!productData?.mainThumbnailImage) return null<br />
<span>3) toLocalString() 메서드 활용</span> <br />
<span>4) onClick 이벤트로 scrollTo 활용하여, 버튼 클릭시 원하는 지점으로 스크롤 이동</span> <br />
<span>5) css translate 를 활용한 img carousel box</span> <br />
<span>6) map 메서드를 활용한 상품상세정보 table과 리뷰, 이미지 나열 등</span> <br />
<br />
<br />
<h3>장바구니 페이지</h3>
<span>1) checkbox 기능으로 전체 선택 및 일부 선택 기능, 선택 갯수 노출</span> <br />
<span>2) count 컴포넌트로 실시간 제품별 구매 수량 변경 및 reduce 함수를 통한 실시간 총 구매 금액 산출</span> <br />
<span>3) 구매 유도를 위한 배송비 무료까지 잔여 금액에 대한 알람창 노출</span> <br />
<span>4) 장바구니에 담긴 제품이 없을 경우, "앗 장바구니가 텅~" 문구 노출, 구매 버튼 비활성화, 배송비 0원 적용</span> <br />
<span>5) 주문 버튼 클릭 시 결제 페이지로 이동</span> <br />
<b>[서버와의 데이터 통신]</b> <br />
<span>1) 유저의 장바구니 데이터를 GET 메서드 통신</span> <br />
<span>2) 장바구니 상품별 수량 변경 부분은 PATCH 메서드 통신 (수량 추가/감소 endpoint)</span> <br />
<span>3) 선택 삭제 및 전체 삭제 기능은 DELETE 메서드 통신 (개별 삭제 및 전체 선택 endpoint)</span> <br />
<br />
<br />
<h3>결제 페이지</h3>
<span>1) TOKEN 을 부여받은 회원의 배송지 정보 등록 (POST)</span> <br />
<span>2) useState hook 을 활용하여 input Value 관리 및 저장</span> <br />
<span>3) 'Object.values(agreeList).every(list => list === true) 로 구조분해 할당 및 전체 동의 state 관리</span> <br />
<span>4) reduce 메서드로 총 금액 계산 및 관리</span> <br />
<br />
<br />
<h3>마이페이지</h3>
<span>1) 조건부 렌더링으로 클릭하는 메뉴에 따라 다른 문구 노출</span> <br />
<span>2) 1:1 문의 내역에는 버튼 클릭 시 문의 내용 입력 모달 확인 가능</span> <br />
<span>3) 이메일 문의 클릭 시 바로 메일을 보낼 수 있게 링크가 적용</span> <br />
<br />
<br />



