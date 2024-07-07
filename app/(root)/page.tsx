import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Reymund" };

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
        </header>
        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={2356.35}
        />
      </div>
    </section>
  );
};

export default Home;
