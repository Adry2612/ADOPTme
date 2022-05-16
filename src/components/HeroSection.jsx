import React from 'react';
import styled from 'styled-components';

import dog from '../dog-nobg.png';
import cat from '../cat-bg.jpg';

export default function HeroSection() {
  return (
    <>
        <Hero> 
            <Decoration />
            <DogShadow src={dog} alt="" />
            
            <Dog src={dog} alt="" />

            <Eslogan> 
                <h1>
                    Ayuda a nuestros amigos a encontrar un hogar
                </h1>

                <Button> Inicia Sesión </Button>
            </Eslogan>
        </Hero>

        <SectionTwo>
            <ImageContainer>
                <Cat src={cat} alt="" />
                <CircleDecoration />
            </ImageContainer>

            <TextContainer>
                <h4> 
                    Nuestros amigos peludos necesitan tu ayuda 
                </h4>

                <h2> 
                    Miles de animales son abandonados cada año. Dales la oportunidad de encontrar una nueva familia.
                </h2>
            </TextContainer>
        </SectionTwo>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#FFD06E" fill-opacity="1" d="M0,256L120,213.3C240,171,480,85,720,69.3C960,53,1200,107,1320,133.3L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </svg>
        <SectionThree>
            <h2> En ADOPTme creamos la conexión para que conozcas al nuevo miembro de la familia. </h2>
            <h3> Tres simples pasos </h3>

            <Step>
                <img src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" alt="" />
                <h2> Registrate en ADOPTme </h2>
            </Step>

            <Step>
                <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" alt="" />
                <h2> Rellena un pequeño formulario </h2>
            </Step>
            <Step>
                <img src="https://images.unsplash.com/photo-1551946581-f7a62cd2f00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
                <h2> Encuentra a tu nuevo amigo </h2>
            </Step>

        </SectionThree>
    </>
  )
}


const Hero = styled.section`
    width: 100vw;
    height: 100vh;
    background: rgb(191,125,202);
    background: linear-gradient(to right, rgba(191,125,202, 80) 0%, rgba(251,191,212) 100%);
    border-radius: 0 0 0 50%;
    position: relative;
`

const Decoration = styled.article`
    width: 100%;
    height: 100%;
    background: #BF7DCACC;
    border-radius:  0 0 0 40%;
    position: fixed;
    top: 0;
    z-index: -1;
    position: absolute;
`

const Dog = styled.img`
    width: 60vw;
    height: 115vh;
    transform: rotateY(180deg);
    position: absolute;
    right: 0;
    bottom: 0;
`

const DogShadow = styled.img`
    width: 65vw;
    height: 120vh;
    transform: rotateY(180deg);
    position: absolute;
    right: 0;
    bottom: 0;
    filter: drop-shadow(50%);
    opacity: 20%;
`

const Eslogan = styled.div`
    width: 35%;
    position: absolute;
    left: 12rem;
    top: 7rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > h1{
        font-size: 60px;
        color: white;
        text-align: left;
    }
`

const Button = styled.button`
    background-color: #FF8AA1;
    color: white;
    padding: 20px;
    border-radius: 20px;
    border: none;
    width: 14rem;
`

const SectionTwo = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ImageContainer = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    position: relative;
`

const Cat = styled.img`
    width: 27rem;
    height: 27rem;
    object-fit: cover;
    object-position: 0 70%;
    border-radius: 50%;
    transform: rotateY(180deg);
`

const CircleDecoration = styled.div`
    width: 27rem;
    height: 27rem;
    border-radius: 50%;
    position: absolute;
    bottom: 9rem;
    left: 8rem;
    background: red;
    z-index:-1;
    background-color: #EA90E1;
`

const TextContainer = styled.article`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > h4{
        width: 60%;
        font-size: 30px;
        font-weight: lighter;
        margin-bottom: -1rem;
        text-align: center;
    }

    & > h2{
        width: 80%;
        font-size: 50px;
        text-align: left;
        background: -webkit-linear-gradient(#BF7DCA, #FFAA8F);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

const SectionThree = styled.section`
    width: 100vw;
    /* height: 100vh; */
    background-color: #FFD06E;
    color: white;
    margin-top: -1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    & > h2{
        font-size: 50px;
        margin: 8px;
    }

    & > h3{
        font-size: 50px;
        font-weight: lighter;
        margin: 8px;
        color: #EA90E1;
    }
`

const Step = styled.div`
    width: 50%;
    height: 12rem;
    background: linear-gradient(to right, #EA90E1 0%, #FFAA8F 100%);
    border-radius: 20px 0 100px 20px;
    margin: 2rem;
    position: relative;

    & > img{
        width: 40%;
        height: 100%;
        left: 0;
        position: absolute;
        object-fit: cover;
        object-position: 0 30%;
        border-radius: 20px 20px 20px 20px;
    }

    & > h2{
        position: absolute;
        right: 12%;
        top: 1.5rem;
        width: 40%;
        font-size: 35px;
    }
`