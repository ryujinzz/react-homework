import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <section className="footer-section1">
        <div className="footer-wrapper1">
          <span className="happy">고객행복센터</span>
          <p>
            <strong>1164-1107</strong>월~토요일 오전 7시 - 오후 6시
          </p>
          <div className="question">
            <a href="/">카카오톡 문의</a>
            <div className="question-p">
              <p>
                월~토요일
                <span className="divider">|</span>
                오전 7시 - 오후 6시
                <br />
                일/공휴일
                <span className="divider">|</span>
                오전 7시 - 오후 1시
              </p>
            </div>
          </div>
          <div className="question-one">
            <a href="/">1:1 문의</a>
            <div className="question-one-p">
              <p>
                365일
                <br />
                고객센터 운영시간에 순차적으로 답변드리겠습니다.
              </p>
            </div>
          </div>
          <div className="question-order">
            <a href="/">대량주문 문의</a>
            <div className="question-order-p">
              <p>
                월~금요일
                <span className="divider">|</span>
                오전 9시 - 오후 6시
                <br />
                점심시간
                <span className="divider">|</span>낮 12시 - 오후 1시
              </p>
            </div>
          </div>
          <div className="question-ect">
            <span>
              비회원 문의 : <a href="">help@karlycorp.com</a>
            </span>
            <span>
              비회원 대량 주문 문의 : <a href="">help@karlycorp.com</a>
            </span>
          </div>
        </div>
        <div className="footer-wrapper2">
          <ul>
            <li>
              <a href="/">칼리소개</a>
            </li>
            <li>
              <a href="/">칼리소개영상</a>
            </li>
            <li>
              <a href="/">인재채용</a>
            </li>
            <li>
              <a href="/">이용약관</a>
            </li>
            <li>
              <a href="/">개인정보처리방침</a>
            </li>
            <li>
              <a href="/">이용안내</a>
            </li>
          </ul>
          <div className="address">
            <address>
              <p>
                법인명 (상호) : 주식회사 칼리
                <span className="divider">|</span>
                사업자등록번호 : 261-81-23567
                <span className="divider">|</span>
                <a href="">사업자정보 확인</a>
                <br />
                통신판매업 : 제 2018-서울강남-01646 호
                <span className="divider">|</span>
                개인정보보호책임자 : 이원준
                <br />
                주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동)
                <span className="divider">|</span>
                대표이사 : 김슬아
                <br />
                입점문의 : 입정문의하기
                <span className="divider">|</span>
                제휴문의 : <a href="/">business@karlycorp.com</a>
                <br />
                채용문의 : <a href="/">recruit@karlycorp.com</a>
                <br />
                팩스 : 070 - 7500 - 6098
              </p>
            </address>
          </div>
          <div className="footer-sns">
            <a href="https://blog.naver.com/marketkurly">
              <picture>
                <img src="/images/footer/blog.png" alt="네이버 블로그" />
              </picture>
            </a>
            <a href="https://www.facebook.com/Marketkurly/">
              <picture>
                <img src="/images/footer/facbook.jpg" alt="페이스북" />
              </picture>
            </a>
            <a href="https://www.instagram.com/marketkurly/">
              <picture>
                <img src="/images/footer/instar.png" alt="인스타그램" />
              </picture>
            </a>
            <a href="https://m.post.naver.com/marketkurly">
              <picture>
                <img src="/images/footer/naver-post.png" alt="네이버 포스트" />
              </picture>
            </a>
            <a href="https://www.youtube.com/channel/UCfpdjL5pl-1qKT7Xp4UQzQg">
              <picture>
                <img src="/images/footer/youtube.png" alt="유투브" />
              </picture>
            </a>
          </div>
        </div>
      </section>
      <section className="footer-section2">
        <div className="footer-wrapper3">
          <a href="/">
            <picture>
              <img
                src="/images/footer/Vector.svg"
                alt="정보 보호 관리 체계 인증서"
              />
            </picture>
            <p>
              [인증범위] 마켓칼리 쇼핑몰 서비스 개발 운영 <br />
              (심사받지 않은 물리적 인프라 제외) <br />
              [유효기간] 2022.01.19 ~ 2025.01.18
            </p>
          </a>
          <a href="/">
            <picture>
              <img
                src="/images/footer/logo_privacy.svg"
                alt="우수 웹사이트 인증서"
              />
            </picture>
            <p>
              개인정보보호 우수 웹사이트 <br />
              개인정보처리시스템 인증 (ePRIVACY PLUS)
            </p>
          </a>
          <a href="/">
            <picture>
              <img
                src="/images/footer/logo_tosspayments.svg"
                alt="토스 페이먼츠 에스크로 서비스"
              />
            </picture>
            <p>
              토스페이먼츠 구매안전(에스크로) 서비스 <br />를 이용하실 수
              있습니다.
            </p>
          </a>
          <a href="/">
            <picture>
              <img
                width="34"
                height="34"
                src="/images/footer/woori.png"
                alt="우리은행 지급보증서"
              />
            </picture>
            <p>
              고객님이 현금으로 결제한 금액에 대해 우리은행과 채무지급보
              <br />증 계약을 체결하여 안전거래를 보장하고 있습니다.
            </p>
          </a>
        </div>
      </section>
      <section className="footer-section3">
        <p>
          마켓컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별 판매자가
          판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
          <br />
          마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서
          통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불
          등 의무와 책임을 부담하지 않습니다.
        </p>
        <p>© KURLY CORP. ALL RIGHTS RESERVED</p>
      </section>
    </footer>
  );
};

export default Footer;
