import { observer } from "mobx-react-lite";
import styled from "styled-components";
import loginStore from "../../stores/login-store";
import { useNormalizeScroll } from "../../utils/utils";
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";
import { colors } from "../../styles/colors";
import { useNavigate } from "react-router";

const LoginPopup = observer(() => {
  const { currentMode, changeMode } = loginStore;

  const navigate = useNavigate();

  useNormalizeScroll();

  const handleOverlayClick = () => {
    navigate("/");
  };

  return (
    <LoginOverlay onClick={handleOverlayClick}>
      <LoginWrapper onClick={(e) => e.stopPropagation()}>
        {currentMode == "login" && <LoginForm />}
        {currentMode == "register" && <RegisterForm />}

        {currentMode == "login" && (
          <FormMessage>
            Впервые у нас? <FormLink onClick={changeMode}>Регистрация</FormLink>
          </FormMessage>
        )}
        {currentMode == "register" && (
          <FormMessage>
            Уже были у нас? <FormLink onClick={changeMode}>Войти</FormLink>
          </FormMessage>
        )}
      </LoginWrapper>
    </LoginOverlay>
  );
});

export const FormMessage = styled.p`
  text-align: center;
`;
export const FormLink = styled.button`
  color: ${colors.primary};
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #ca6212;
  }
`;

export const LoginOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  animation: opacity 0.3s ease;
  background-color: rgba(47, 47, 47, 0.66);

  @keyframes opacity {
    from {
      background-color: rgba(47, 47, 47, 0);
    }
    to {
      background-color: rgba(47, 47, 47, 0.66);
    }
  }
`;

export const LoginWrapper = styled.div`
  padding: 40px 40px;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  background-color: #fdfdfd;
  border-radius: 14px;

  animation: ascent 0.1s ease;

  @keyframes ascent {
    from {
      transform: scale(0.7);
      opacity: 0;
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export default LoginPopup;
