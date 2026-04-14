import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type DiscoverFiltersProps = {
  searchText: string;
  selectedCountry: string;
  onSearchTextChange: (value: string) => void;
  onCountryChange: (value: string) => void;
};

export default function DiscoverFilters({
  searchText,
  selectedCountry,
  onSearchTextChange,
  onCountryChange,
}: DiscoverFiltersProps) {
  return (
    <div className="rounded-2xl border border-border bg-background/50 p-4 sm:p-5">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end">
        <div className="flex-1">
          <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Search
          </label>
          <Input
            type="text"
            value={searchText}
            onChange={(e) => onSearchTextChange(e.target.value)}
            placeholder="Search by name or username"
          />
        </div>

        <div className="w-full lg:max-w-xs">
          <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Country
          </label>
          <Select value={selectedCountry} onValueChange={onCountryChange}>
            <SelectTrigger>
              <SelectValue placeholder="Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Countries</SelectItem>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="it">Italy</SelectItem>
              <SelectItem value="de">Germany</SelectItem>
              <SelectItem value="fr">France</SelectItem>
              <SelectItem value="jp">Japan</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}