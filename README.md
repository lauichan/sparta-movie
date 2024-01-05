영화 검색 사이트 개인 프로젝트 요구사항

# 필수 요구 사항
- [x] jQuery 라이브러리 사용없이 순수 바닐라 자바스크립트 사용하기
- [x] TMDB 오픈 API를 이용하여 인기영화 데이터 가져오기
- [x] 영화정보 카드 리스트 UI 구현
- - [x] TMDB에서 받아온 데이터를 브라우저 화면에 카드 형태의 데이터로 보여줍니다.
- - [x] 카드에는 title(제목), overview(내용 요약), poster_path(포스터 이미지 경로), vote_average(평점) 이렇게 4가지 정보가 필수로 들어갑니다.
- - [x] 카드 클릭 시에는 클릭한 영화 id 를 나타내는 alert 창을 띄웁니다.
- [x] 영화 검색 UI 구현
- - [x] API로 받아온 전체 영화들 중 영화 제목에 input 창에 입력한 문자값이 포함되는 영화들만 화면에 보이도록 합니다. 
- - [x] 입력 후 검색버튼 클릭 시 실행되도록 합니다.
- [x] 하기 기재된 Javascript 문법 요소를 이용하여 구현
- - [x] const와 let만을 이용한 변수 선언 필수
- - [x] 화살표 함수 1개 이상 사용 (일반 화살표 함수, 한 줄로 된 화살표 함수, 매개변수가 하나인 화살표 함수)
- - [x] 배열 메소드 2개 이상 사용 (forEach, map, filter, reduce, find)
- - [x] DOM 제어하기 2개 이상 사용하기 (문서 객체 선택&조작, 이벤트 처리 등)

# 선택 요구 사항 
- [x] flex 사용하기
- [ ] grid 사용하기
- [x] 웹사이트 랜딩 또는 새로고침 후 검색 입력란에 커서 자동 위치시키기
- [x] 대소문자 관계없이 검색 가능하게 하기
- [x] 키보드 enter키를 입력해도 검색버튼 클릭한 것과 동일하게 검색 실행시키기

# 추가 기능
- 카드에 마우스 오버 -> 영화 개요 보이기
- 영화 장르 정보 출력
- 장르 검색 기능