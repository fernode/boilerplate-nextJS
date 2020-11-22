import React from 'react';
import * as S from './styles';

function Main({
  title = 'React avançado',
  description = 'TypesCript, ReactJs, NextJs e Styled components',
}) {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um atomo e React Avançado escrito ao lado"
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Ilustração de um desenvolvedor de frente para uma tela com códigos"
      />
    </S.Wrapper>
  );
}

export default Main;
