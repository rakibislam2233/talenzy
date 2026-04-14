import { Button } from "@/components/ui/button";
import {
    Bell,
    ChevronRight,
    Lock,
    Shield,
    User,
} from "lucide-react";
import Link from "next/link";

const sections = [
	{
		title: "Account",
		items: [
			{
				label: "Edit profile",
				description: "Update your name, bio, avatar and profile details.",
				href: "/settings/edit-profile",
				icon: User,
			},
			{
				label: "Profile",
				description: "Open your public profile page.",
				href: "/alextalent",
				icon: User,
			}
		],
	},
	{
		title: "Privacy & Security",
		items: [
			{
				label: "Privacy and safety",
				description: "Manage visibility, mentions, comments and protections.",
				href: "/settings/privacy-and-safety",
				icon: Shield,
			},
			{
				label: "Two-factor authentication",
				description: "Add an extra verification layer for account security.",
				href: "/settings/two-factor-auth",
				icon: Lock,
			},
			{
				label: "Change password",
				description: "Update your account password and security credentials.",
				href: "/settings/change-password",
				icon: Lock,
			},
		],
	},
	{
		title: "Content & Activity",
		items: [
			{
				label: "Notification settings",
				description: "Choose which alerts you get and how often.",
				href: "/settings/notification-settings",
				icon: Bell,
			},
			{
				label: "Content preferences",
				description: "Adjust feed, recommendations and media interests.",
				href: "/settings/content-preferences",
				icon: Bell,
			},
		],
	},
];

export default function SettingsPage() {
	return (
		<div className="mx-auto w-full max-w-5xl px-4 pb-24 pt-6 sm:px-6 sm:pt-8 md:pl-80">
			<section className="rounded-2xl border border-border bg-card">
				<div className="border-b border-border p-5 sm:p-6">
					<p className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
						Settings
					</p>
					<h1 className="mt-1 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
						Account Settings
					</h1>
					<p className="mt-1 text-sm text-muted-foreground">
						Manage your profile, privacy and app preferences from one place.
					</p>
				</div>

				<div className="space-y-8 p-5 sm:p-6">
					{sections.map((section) => (
						<div key={section.title}>
							<h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
								{section.title}
							</h2>

							<div className="overflow-hidden rounded-xl border border-border bg-background">
								{section.items.map((item) => {
									const Icon = item.icon;
									return (
										<Link
											key={item.href}
											href={item.href}
											className="flex items-center justify-between border-b border-border p-4 last:border-b-0"
										>
											<div className="flex items-start gap-3">
												<div className="rounded-lg border border-border bg-card p-2">
													<Icon className="h-4 w-4 text-muted-foreground" />
												</div>
												<div>
													<p className="text-sm font-semibold text-foreground sm:text-base">{item.label}</p>
													<p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">{item.description}</p>
												</div>
											</div>
											<ChevronRight className="h-4 w-4 text-muted-foreground" />
										</Link>
									);
								})}
							</div>
						</div>
					))}

					<div className="flex flex-col gap-3 border-t border-border pt-2 sm:flex-row sm:items-center sm:justify-between">
						<p className="text-xs text-muted-foreground">Need help with account recovery or security issue?</p>
						<Button asChild variant="outline" className="h-10 rounded-lg border-border bg-background text-foreground">
							<Link href="/help">Open Help Center</Link>
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
