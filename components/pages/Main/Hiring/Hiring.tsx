"use client";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import HiringFilters from "./HiringFilters";
import HiringHero from "./HiringHero";
import HiringHiredMeCard from "./HiringHiredMeCard";
import HiringRequestCard from "./HiringRequestCard";
import HiringTabs from "./HiringTabs";
import HiringTalentCard from "./HiringTalentCard";
import { hireRequests, hiredMeRequests, talents } from "./mock-data";
import { HiringTab } from "./types";

const Hiring = () => {
  const pathname = usePathname();
  const activeTab: HiringTab = pathname.includes("/my-requests")
    ? "my-requests"
    : pathname.includes("/hired-me")
      ? "hired-me"
      : "all";
  const [talentQuery, setTalentQuery] = useState("");
  const [talentCountry, setTalentCountry] = useState("all");
  const [talentCategory, setTalentCategory] = useState("all");
  const [talentBudget, setTalentBudget] = useState("all");
  const [talentAvailability, setTalentAvailability] = useState("all");
  const [talentOther, setTalentOther] = useState("all");

  const filteredTalents = useMemo(() => {
    return talents.filter((talent) => {
      const q = talentQuery.trim().toLowerCase();
      const byName =
        q.length === 0 ||
        talent.name.toLowerCase().includes(q) ||
        talent.username.toLowerCase().includes(q);
      const byCountry =
        talentCountry === "all" || talent.country === talentCountry;
      const byCategory =
        talentCategory === "all" || talent.category === talentCategory;
      const byAvailability =
        talentAvailability === "all" ||
        talent.availability === talentAvailability;
      const byBudget =
        talentBudget === "all" ||
        (talentBudget === "under100" && talent.hourlyRate < 100) ||
        (talentBudget === "100to200" &&
          talent.hourlyRate >= 100 &&
          talent.hourlyRate <= 200) ||
        (talentBudget === "200plus" && talent.hourlyRate > 200);
      const byOther =
        talentOther === "all" ||
        (talentOther === "verified" && talent.verified) ||
        (talentOther === "toprated" && talent.rating >= 4.9) ||
        (talentOther === "pricing" && talent.hourlyRate <= 120);

      return (
        byName &&
        byCountry &&
        byCategory &&
        byAvailability &&
        byBudget &&
        byOther
      );
    });
  }, [
    talentAvailability,
    talentBudget,
    talentCategory,
    talentCountry,
    talentOther,
    talentQuery,
  ]);

  const visibleTalents = filteredTalents.slice(0, 4);

  return (
    <div className="flex h-full">
      <div className="flex-1 overflow-y-auto p-4 pb-32 sm:p-7 lg:p-8">
        <HiringHero />

        <HiringFilters
          talentQuery={talentQuery}
          talentCountry={talentCountry}
          talentCategory={talentCategory}
          talentBudget={talentBudget}
          talentAvailability={talentAvailability}
          talentOther={talentOther}
          onTalentQueryChange={setTalentQuery}
          onTalentCountryChange={setTalentCountry}
          onTalentCategoryChange={setTalentCategory}
          onTalentBudgetChange={setTalentBudget}
          onTalentAvailabilityChange={setTalentAvailability}
          onTalentOtherChange={setTalentOther}
        />

        <HiringTabs activeTab={activeTab} />

        {activeTab === "all" && (
          <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:grid-cols-4">
            {visibleTalents.map((talent) => (
              <HiringTalentCard key={talent.username} talent={talent} />
            ))}

            {visibleTalents.length === 0 && (
              <div className="col-span-full rounded-2xl border border-border bg-background p-8 text-center">
                <p className="text-lg font-medium text-foreground">
                  No talents found
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Try another name or country.
                </p>
              </div>
            )}
          </div>
        )}

        {activeTab === "my-requests" && (
          <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:grid-cols-3">
            {hireRequests.map((order) => (
              <HiringRequestCard key={order.id} order={order} />
            ))}
          </div>
        )}

        {activeTab === "hired-me" && (
          <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:grid-cols-3">
            {hiredMeRequests.map((hire) => (
              <HiringHiredMeCard key={hire.id} hire={hire} />
            ))}
          </div>
        )}

        <div className="relative z-10 mt-10 flex justify-center pb-12">
          <Button
            variant="outline"
            className="h-12 rounded-xl border-border bg-transparent px-8"
          >
            Show More Talents
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hiring;
