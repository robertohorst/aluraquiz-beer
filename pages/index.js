import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { Router, useRouter } from 'next/router';

import db from '../db.json'
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Button from '../src/components/Button';
import Input from '../src/components/Input';

export default function Home() {

  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit= { function(infosDoEvento) {
                  infosDoEvento.preventDefault();
                  router.push(`/quiz?name=${name}`)
                  console.log({name});
            }}
            >
              <Input 
                name="nomeDoUsuario"
                onChange={ (infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Seu nome" 
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/robertohorst" />
    </QuizBackground>
  );
}
