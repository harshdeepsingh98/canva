import AuthLayout from "components/AuthLayout";
import React from "react";
import DashboardView from "view/Dashboard";

const Dashboard: React.FC = () => {
  return (
    <AuthLayout title={"Dashboard"}>
      <DashboardView />
    </AuthLayout>
  );
};

export default Dashboard;
