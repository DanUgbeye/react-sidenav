import React from "react";
import SessionStats from "./components/SessionStats.component";
import TopRatedCountries from "./components/TopRatedCountries.component";
import WelcomeNote from "./components/WelcomeNote.component";

// data imports
import sessionStatsData from "../../data/sessionStats.data";
import newOrdersByCountryData from "../../data/newOrdersByCountry.data";
import usersByCountryData from "../../data/usersByCountry.data";

export default function HomePage() {
  return (
    <div>
      <WelcomeNote
        name={"Adam"}
        welcomeText={"We can help you sort things out"}
      />

      <SessionStats data={sessionStatsData} />

      <TopRatedCountries
        newUsers={newOrdersByCountryData}
        users={usersByCountryData}
      />
    </div>
  );
}
