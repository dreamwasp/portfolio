import styled from "@emotion/styled";

const NewBody = styled.div`
  background: ${(props) => props.theme.colors.primary};
`;

export const Body = () => {
  return <NewBody>New Construction</NewBody>;
};
