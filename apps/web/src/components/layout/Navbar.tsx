import styled from "@emotion/styled";

export default function Navbar() {
  return (
    <>
      <S.Wrapper>
        <S.LogoBox>
          <S.Title>Hovelopin.Log</S.Title>
        </S.LogoBox>

        <S.NavBox>
          <S.About>소개</S.About>
          <S.About>블로그</S.About>
          <S.About>다이어리</S.About>
          <S.About>데일리로그</S.About>
        </S.NavBox>
      </S.Wrapper>
    </>
  );
}

const S = {
  Wrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 6px 16px rgba(15, 21, 34, 0.06);
    padding: 12px 20px;
  `,
  LogoBox: styled.div`
    cursor: pointer;
  `,
  Title: styled.h1`
    font-size: 24px;
  `,
  NavBox: styled.div`
    display: flex;
  `,
  About: styled.span`
    padding: 10px 12px;
    cursor: pointer;
    color: #4e5968;
    font-size: 15px;
    &:hover {
      border-bottom: 1.5px solid #cbffdf;
    }
  `,
};
