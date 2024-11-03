// import axios from "axios";
import {
  LoginContainer,
  ButtonContainer,
  BottomContainer,
} from "styles/views/MagicLinkRegister";
import { useNavigate } from "react-router-dom";

const MagicLinkRegisterView: React.FC = () => {
  const navigate = useNavigate();

  return (
    <LoginContainer>
      <div>
        <h1>
          Magic link on <br />
          its way!
        </h1>
        <h5>
          An activation email has been sent to <span>a@gmail.com</span>. <br />
          To securely activate your account, please click on the provided link
          within the next 24 hours.
        </h5>
        <h5 onClick={() => navigate("/auth/change_email")}>
          <img src="	https://studio.proteanx.io/static/media/pen.22b22ce0a7b67c43fc5a61916f05ab13.svg" />
          Edit Email Address
        </h5>
      </div>
      <BottomContainer>
        <ButtonContainer onClick={() => navigate("/auth/change_email")}>
          Haven’t received a link, resend
          <img src="https://studio.proteanx.io/static/media/arrow_protean.36858cb62c52a21590b7ef023dfa1357.svg" />
        </ButtonContainer>
        <img src="	https://studio.proteanx.io/static/media/brand_logo_xstudio.b9f6914043c5ebf85522fbe305bc8a47.svg" />
      </BottomContainer>
    </LoginContainer>
  );
};

export default MagicLinkRegisterView;
