import SettingsSidebar from "@/components/pages/Main/Settings/SettingsSidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full flex items-start">
      <SettingsSidebar />
      <div className="flex-1">{children}</div>
    </section>
  );
};

export default layout;
