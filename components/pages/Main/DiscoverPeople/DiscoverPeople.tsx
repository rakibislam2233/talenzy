"use client";
import { useMemo, useState } from "react";
import DiscoverFilters from "./DiscoverFilters";
import DiscoverGrid from "./DiscoverGrid";
import DiscoverHeader from "./DiscoverHeader";
import { profiles } from "./mock-data";

const DiscoverPeople = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("all");

  const filteredProfiles = useMemo(() => {
    return profiles.filter((profile) => {
      const q = searchText.trim().toLowerCase();
      const byName =
        q.length === 0 ||
        profile.name.toLowerCase().includes(q) ||
        profile.username.toLowerCase().includes(q);
      const byCountry =
        selectedCountry === "all" || profile.country === selectedCountry;
      return byName && byCountry;
    });
  }, [searchText, selectedCountry]);

  return (
    <div className="w-full px-4 py-6 pb-32 sm:px-6 sm:py-8 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <DiscoverHeader />
      </div>

      <DiscoverFilters
        searchText={searchText}
        selectedCountry={selectedCountry}
        onSearchTextChange={setSearchText}
        onCountryChange={setSelectedCountry}
      />

      <div className="mt-10">
        <DiscoverGrid profiles={filteredProfiles} />
      </div>
    </div>
  );
};

export default DiscoverPeople;