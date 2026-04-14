import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

type HiringFiltersProps = {
  talentQuery: string;
  talentCountry: string;
  talentCategory: string;
  talentBudget: string;
  talentAvailability: string;
  talentOther: string;
  onTalentQueryChange: (value: string) => void;
  onTalentCountryChange: (value: string) => void;
  onTalentCategoryChange: (value: string) => void;
  onTalentBudgetChange: (value: string) => void;
  onTalentAvailabilityChange: (value: string) => void;
  onTalentOtherChange: (value: string) => void;
};

export default function HiringFilters({
  talentQuery,
  talentCountry,
  talentCategory,
  talentBudget,
  talentAvailability,
  talentOther,
  onTalentQueryChange,
  onTalentCountryChange,
  onTalentCategoryChange,
  onTalentBudgetChange,
  onTalentAvailabilityChange,
  onTalentOtherChange,
}: HiringFiltersProps) {
  return (
    <div className="mt-6 rounded-2xl border border-border bg-background/70 p-4">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        <div className="relative sm:col-span-2 xl:col-span-1 2xl:col-span-2">
          <span className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Name
          </span>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={talentQuery}
              onChange={(e) => onTalentQueryChange(e.target.value)}
              placeholder="Search talents by name or username"
              className="h-9 w-full rounded-lg border border-border bg-background pl-10 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        <div>
          <span className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Country
          </span>
          <Select value={talentCountry} onValueChange={onTalentCountryChange}>
            <SelectTrigger className="h-9 w-full bg-background">
              <SelectValue placeholder="Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Countries</SelectItem>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="it">Italy</SelectItem>
              <SelectItem value="de">Germany</SelectItem>
              <SelectItem value="fr">France</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <span className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Category
          </span>
          <Select value={talentCategory} onValueChange={onTalentCategoryChange}>
            <SelectTrigger className="h-9 w-full bg-background">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="music">Music</SelectItem>
              <SelectItem value="performance">Performance</SelectItem>
              <SelectItem value="visual">Visual Arts</SelectItem>
              <SelectItem value="tech">Tech</SelectItem>
              <SelectItem value="design">Design</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <span className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Budget
          </span>
          <Select value={talentBudget} onValueChange={onTalentBudgetChange}>
            <SelectTrigger className="h-9 w-full bg-background">
              <SelectValue placeholder="Budget" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Budgets</SelectItem>
              <SelectItem value="under100">Under $100/hr</SelectItem>
              <SelectItem value="100to200">$100-$200/hr</SelectItem>
              <SelectItem value="200plus">$200+/hr</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <span className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Availability
          </span>
          <Select
            value={talentAvailability}
            onValueChange={onTalentAvailabilityChange}
          >
            <SelectTrigger className="h-9 w-full bg-background">
              <SelectValue placeholder="Availability" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Availability</SelectItem>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="busy">Busy</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <span className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Other
          </span>
          <Select value={talentOther} onValueChange={onTalentOtherChange}>
            <SelectTrigger className="h-9 w-full bg-background">
              <SelectValue placeholder="Other" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Talents</SelectItem>
              <SelectItem value="verified">Verified only</SelectItem>
              <SelectItem value="toprated">Top rated</SelectItem>
              <SelectItem value="pricing">Budget friendly</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}