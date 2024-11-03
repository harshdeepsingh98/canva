import {
  LoginContainer,
  //   ErrorMessageContainer,
  ButtonContainer,
  BottomContainer,
} from "styles/views/MagicLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
// import { useNavigate } from "react-router-dom";
import { Flex, Input, Typography, notification } from "antd";
import type { GetProps } from "antd";
import { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

type OTPProps = GetProps<typeof Input.OTP>;

const { Title } = Typography;

const MagicLinkView: React.FC = () => {
  const [otp, setOtp] = useState<string>(""); // State for OTP input
  const [error, setError] = useState<string>("");
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();

  const onChange: OTPProps["onChange"] = (text) => {
    setOtp(text); // Update the OTP state on change
    setError("");
  };

  const handleLogin = async () => {
    if (!otp) {
      setError("Enter a valid OTP"); // Set error if OTP is not filled
      return;
    }

    try {
      // Make API call using Axios
      // const response = await axios.post("/api/your-endpoint", { otp });
      // console.log("API Response:", response.data);
      navigate("/dashboard");
      // Handle successful login here (e.g., redirect user)
    } catch (error) {
      console.error("API Error:", error);
      setError("Enter a valid OTP"); // Set error on API failure
    }
  };

  const sharedProps: OTPProps = {
    onChange,
  };

  const openNotification = () => {
    api.open({
      message: (
        <div style={{ display: "flex", alignItems: "center", margin: "0" }}>
          <FontAwesomeIcon
            icon={faCheckCircle}
            style={{ marginRight: "10px", color: "green", fontSize: "24px" }} // Centered icon
          />
          <div>
            <span
              style={{ fontWeight: "bold", fontSize: "16px", color: "green" }}
            >
              Success
            </span>{" "}
            {/* Green success text */}
            <p style={{ margin: "0", color: "#333" }}>
              The magic link for login has been send over email
            </p>
          </div>
        </div>
      ),
      className: "custom-notification",
      style: {
        width: 700, // Increase width
        height: 80, // Adjust height if needed
        backgroundColor: "#d4edda", // Light green background
        color: "#155724", // Dark green text color
        border: "1px solid #c3e6cb", // Border color to match the background
        borderLeft: "5px solid green", // Green left border
        borderRadius: "8px",
        padding: "15px 10px 10px 10px",
      },
      placement: "top", // Position at the top of the screen
      //   top: 20, // Distance from the top

      duration: 3, // Duration for the notification to stay
    });
  };

  return (
    <LoginContainer>
      {contextHolder}
      <div>
        <h3>
          OTP on <br /> its way!
        </h3>
        <p>
          An login email has been sent to <b>harshdeep.singh@thewitslab.com</b>.{" "}
          <br /> To securely login to your account, please enter the OTP within
          the next 5 minutes.{" "}
        </p>
        <p
          style={{ padding: "20px 0", margin: "0", cursor: "pointer" }}
          onClick={openNotification}
        >
          <FontAwesomeIcon icon={faRedo} style={{ marginRight: "5px" }} />
          <span>Resend</span>
        </p>
        <div style={{ padding: "20px 0" }}>
          <hr />
        </div>

        <Flex gap="middle" align="flex-start" vertical>
          <Title
            level={5}
            style={{
              fontFamily: "DM-Sans-Regular!important",
              fontWeight: "400",
              fontSize: "14px",
              color: "#fff",
            }}
          >
            Enter the code received on email
          </Title>
          <Input.OTP
            formatter={(str) => str.toUpperCase()}
            {...sharedProps}
            className="input"
            style={{ width: "100%" }}
          />
          {error && (
            <div style={{ color: "white", marginTop: "5px" }}>{error}</div>
          )}
        </Flex>
      </div>
      <BottomContainer>
        <ButtonContainer onClick={handleLogin}>
          Login
          <img src="https://studio.proteanx.io/static/media/arrow_protean.36858cb62c52a21590b7ef023dfa1357.svg" />
        </ButtonContainer>
        <img src="	https://studio.proteanx.io/static/media/brand_logo_xstudio.b9f6914043c5ebf85522fbe305bc8a47.svg" />
      </BottomContainer>
    </LoginContainer>
  );
};

export default MagicLinkView;
