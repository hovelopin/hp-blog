import styled from "@emotion/styled";

interface Props {
  children: React.ReactElement;
}

export default function ScreenLayout({ children }: Props) {
  return <S.Wrapper>{children}</S.Wrapper>;
}

const S = {
  Wrapper: styled.div`
    max-width: 1140px;
    margin: 0 auto;
  `,
};
