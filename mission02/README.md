# vanilla-project 를 React로 전환하는 과제

야무쌤과 함께하는 주간 첫 과제 



## 신상품 페이지 


신상품 페이지 중에서 일부만 json 데이터로 가져오기로 했다. 

<img width="500" alt="스크린샷 2024-01-27 오후 4 53 49" src="https://github.com/ryujinzz/react-homework/assets/146301783/75c8367d-8055-4d79-ae1b-5199bfdcd283">


예상도는 이렇게 였는데....... 
작성하다 보니 css 관련은 조금씩 내려놓게 되었다..^^


## 폴더 나눈 경로

<img width="196" alt="스크린샷 2024-01-27 오후 8 30 47" src="https://github.com/ryujinzz/react-homework/assets/146301783/869ef310-e336-4523-9ea0-d3e1940ff712">

이미지와 텍스트를 나누어서 불러오기 위해 
기본바탕을 Exercise로 해두고 이미지 부분을 Images 로, <br/>
텍스트와 이미지를 함께 렌더링 하는 부분을 Product로 파일을 구분하였다. 


## 트러블 슈팅 

1. 문제: reat를 찾을 수 없다는 터미널 에러 발생 
<br/> 해결 : npm i @vitejs/plugin-react 설치
<img width="956" alt="스크린샷 2024-01-27 오후 8 37 22" src="https://github.com/ryujinzz/react-homework/assets/146301783/00efa27c-8d8a-43b2-ae69-37d36541195f">


2. 문제: 이미지들을 map에 함께 돌리지 않고 따로(import productImage1 from '../assets/product/richimond.jpeg' 같이) 불러와 합치려고 해서
   <br/>한꺼번에 한 li에서 3장씩의 이미지가 같이 불러와짐   
<br/> 해결 : map 안에 이미지 경로를 추가하여 json 파일에도 이미지들의 이름을 넣고 함께 돌림 

4. 문제: 갑자기 이미지를 렌더링 하는 곳에서 자꾸 [object, object] 로 뜨는 경우가 발생.
<br/> 해결 : Images 파일에서 객체구조분해할당으로 가져오지 않아서 일어난 문제였다. 
<img width="598" alt="스크린샷 2024-01-27 오후 8 20 34" src="https://github.com/ryujinzz/react-homework/assets/146301783/6be93203-c83b-44cb-bed6-e54f6519a482">


## 최종 결과물 

<img width="598" alt="스크린샷 2024-01-27 오후 8 20 12" src="https://github.com/ryujinzz/react-homework/assets/146301783/820e9f28-0a9e-4ba6-b205-e0765fbaca2e">


### 과제를 마치며.. 

이번 과제를 해보지 않았다면 어떤 방식으로 데이터를 직접 불러올 수 있는지 학습하지 못했을 것 같다는 생각이 들었다. <br/>
처음 시작부터 해내지 못할것 같다는 생각이 너무 강렬히 들어서 좌절스러웠지만 끝내 해냈다는 자신감을 조금 얻었다. <br/>
하지만 이정도로 헤매는데 파이널 프로젝트를 무사히 잘 넘길 수 있을까 하는 또 다른 걱정이 생겼다. 

