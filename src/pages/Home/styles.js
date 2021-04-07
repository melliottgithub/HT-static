import styled  from 'styled-components';

export const AppWrapper = styled.div`
    display:flex;
    justify-content: center;
    gap : 25px;
    margin:0 auto;
    width:96%;
    flex-direction:column;
    @media (min-width: 760px) {
    flex-direction:row;
    width:700px;
  }
`

export const ContactFormWrapper = styled.div`
    flex:1;
`

export const ContactsWrapper = styled.div`
    flex:1;
`