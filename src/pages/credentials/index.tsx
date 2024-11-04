import AuthLayout from "components/AuthLayout";
import React from "react";
import CredentialsView from "view/Credentials";

const Credentials: React.FC = () => {
  return (
    <AuthLayout title={"Create Crendentials"}>
      <CredentialsView />
    </AuthLayout>
  );
};

export default Credentials;
