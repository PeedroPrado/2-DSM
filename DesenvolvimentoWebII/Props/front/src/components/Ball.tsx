import styled from "styled-components"; //importa o Styled do "styles components"
// Define o BallStyled e estiliza $color: string define a cor do fundo do círculo
const BallStyled = styled.div<{ $color: string }>` 
  width: 40px; 
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  background-color: ${(props) => props.$color}; 
  color: white;
  cursor: pointer;
  margin: 5px;
`;

interface BallProps {
  number: number;
  color: string;
  onRightClick?: () => void;
}

const Ball: React.FC<BallProps> = ({ number, color, onRightClick }) => {
  return (
    <BallStyled 
      $color={color} 
      onContextMenu={(e) => {
        e.preventDefault();
        onRightClick && onRightClick();
      }}
    >
      {number}
    </BallStyled>
  );
};

export default Ball;
