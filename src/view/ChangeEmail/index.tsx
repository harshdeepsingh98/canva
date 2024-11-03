// import axios from "axios";
import {
  LoginContainer,
  ButtonContainer,
  BottomContainer,
  InputContainer,
  ErrorMessageContainer,
} from "styles/views/ChangeEmail";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ChangeEmailView: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    // Clear previous errors
    setError("");

    // Validate email field
    if (!email) {
      setError("Email is required.");
      return;
    }

    try {
      // Dummy API call
      // const response = await axios.post("https://dummyapi.io/auth/login", {
      //   email,
      // });

      // Process response
      // console.log("API Response:", response.data);
      navigate("/auth/magic_link_register");
    } catch (error) {
      console.error("API Error:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <LoginContainer>
      <div>
        <h1>
          Change Email <br />
          Address
        </h1>
        <h5>Please enter your new email address to receive the magic link</h5>
        <InputContainer
          type="email"
          placeholder="Email Address*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <ErrorMessageContainer>{error}</ErrorMessageContainer>}
      </div>

      <BottomContainer>
        <ButtonContainer onClick={handleSubmit}>
          Send Magic Link
          <img src="https://studio.proteanx.io/static/media/arrow_protean.36858cb62c52a21590b7ef023dfa1357.svg" />
        </ButtonContainer>
        <img src="	https://studio.proteanx.io/static/media/brand_logo_xstudio.b9f6914043c5ebf85522fbe305bc8a47.svg" />
      </BottomContainer>
    </LoginContainer>
  );
};

export default ChangeEmailView;
