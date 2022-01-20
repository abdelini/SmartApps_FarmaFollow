import React, {useState} from 'react';
import { Data } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import {FiPlus, FiMinus} from 'react-icons/fi'

const TipsSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100vh;
    background: #fff;
`

const Container = styled.div`
    position: absolute;
    top: 20%;
    box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
    margin: 0 3rem;
`

const Wrap = styled.div`
    background: #3399ff;
    coor: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: auto;
    text-align: center;
    cursor: pointer;

    h1{
        padding: 2rem;
        font-size: 2rem;
    }

    span{
        margin-right: 1.5rem;
    }
`

const Dropdown = styled.div`
    background: #99ccff;
    color: #fff;
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #99ccff;
    border-top: 1px solid #99ccff;

    p{
        font-size: 2rem;
        padding: 20px
    }
`


const Tips = () => {
    const [clicked, setClicked] = useState(false)

    const toggle = index => {
        //Als tips section actief is, sluit het
        if(clicked === index){
            return setClicked(null)
        }

        setClicked(index)
    }


  return (
    <IconContext.Provider value={{color: '#fff', size: '25px'}}>
        <TipsSection>
            <Container>
                {Data.map((item, index) => {
                    return(
                        <>
                            <Wrap onClick={() => toggle(index)} key={index}>
                                <h2>{item.ingreep}</h2>
                                <span>{clicked === index ? <FiMinus/> : <FiPlus/>}</span>
                            </Wrap>
                            {clicked === index ? (
                                <Dropdown>
                                    <p>{item.tips}</p>
                                </Dropdown>
                            ) : null}
                        </>
                    )
                })}
            </Container>
        </TipsSection>

    </IconContext.Provider>
  )
};

export default Tips;
