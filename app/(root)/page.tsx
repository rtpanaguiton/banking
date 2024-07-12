import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    $id: "",
    email: "reypan@gmail.com",
    userId: "",
    dwollaCustomerUrl: "",
    dwollaCustomerId: "",
    firstName: "Reymund",
    lastName: "Pan",
    address1: "",
    city: "",
    state: "",
    postalCode: "",
    dateOfBirth: "",
    ssn: "",
  };

  const reyAccount1 = {
    id: "string",
    availableBalance: 1234.56,
    currentBalance: 9876.4,
    officialName: "string",
    mask: "string",
    institutionId: "string",
    name: "Rey P",
    type: "Personal",
    subtype: "",
    appwriteItemId: "",
    sharableId: "",
  };

  const BDO = {
    $id: "string",
    accountId: "abcde",
    bankId: "abcde1",
    accessToken: "",
    fundingSourceUrl: "",
    userId: "7854",
    sharableId: "",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account efficiently"
          />
          <TotalBalanceBox
            accounts={[reyAccount1]}
            totalBanks={1}
            totalCurrentBalance={2356.35}
          />
        </header>
        RECENT TRANSACTION
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 1234.56 }, { currentBalance: 456.5 }]}
      />
    </section>
  );
};

export default Home;
