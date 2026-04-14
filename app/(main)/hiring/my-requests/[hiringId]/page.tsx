"use client";

import CounterOfferEditor from "@/components/pages/Main/Hiring/Details/CounterOfferEditor";
import DetailHeader from "@/components/pages/Main/Hiring/Details/DetailHeader";
import NegotiationHighlight from "@/components/pages/Main/Hiring/Details/NegotiationHighlight";
import NegotiationHistory from "@/components/pages/Main/Hiring/Details/NegotiationHistory";
import PartyCard from "@/components/pages/Main/Hiring/Details/PartyCard";
import RequirementsCard from "@/components/pages/Main/Hiring/Details/RequirementsCard";
import StatusPill from "@/components/pages/Main/Hiring/Details/StatusPill";
import { NegotiationEntry } from "@/components/pages/Main/Hiring/Details/types";
import { CheckCircle2, Clock } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

type OrderStatus =
  | "NEGOTIATING"
  | "ACCEPTED"
  | "IN_PROGRESS"
  | "PENDING_REVIEW"
  | "COMPLETED"
  | "CANCELLED"
  | "DISPUTED";

export default function MyHireRequestDetailPage() {
  const params = useParams();
  const hiringId = params.hiringId as string;

  const [status, setStatus] = useState<OrderStatus>("NEGOTIATING");
  const [counterOffer, setCounterOffer] = useState("");
  const [showNegotiation, setShowNegotiation] = useState(false);
  const [negotiations, setNegotiations] = useState<NegotiationEntry[]>([
    {
      from: "client",
      amount: 1200,
      message: "My initial offer",
      timestamp: "Oct 25, 2023",
    },
    {
      from: "freelancer",
      amount: 1500,
      message: "Talent sent a counter offer",
      timestamp: "Oct 26, 2023",
    },
  ]);

  const latestOffer = negotiations[negotiations.length - 1];
  const isFreelancerTurn = latestOffer.from === "freelancer";

  const orderData = {
    id: hiringId,
    title: "Website Redesign Project",
    status,
    freelancer: {
      name: "Sarah Jenkins",
      username: "@sarahcreative",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
      rating: 4.8,
      reviews: 42,
    },
    description:
      "I need a high-energy, complete redesign of our company website. The design should be modern, clean, and user-friendly.",
    requirements: [
      "Resolution: 1080p",
      "Brand palette matching",
      "Responsive Design",
      "SEO Ready",
    ],
  };

  const handleAcceptOffer = () => {
    setStatus("ACCEPTED");
  };

  const handleRejectOffer = () => {
    setStatus("CANCELLED");
  };

  const handleSendCounterOffer = () => {
    if (counterOffer) {
      setNegotiations([
        ...negotiations,
        {
          from: "client",
          amount: parseFloat(counterOffer),
          message: `Sending counter offer to talent: $${counterOffer}`,
          timestamp: new Date().toLocaleDateString(),
        },
      ]);
      setCounterOffer("");
      setShowNegotiation(false);
    }
  };

  const getStatusBadge = () => {
    const badges = {
      NEGOTIATING: {
        color: "bg-blue-500/20 text-blue-500",
        text: "NEGOTIATING",
      },
      ACCEPTED: { color: "bg-green-500/20 text-green-500", text: "ACCEPTED" },
      IN_PROGRESS: { color: "bg-primary/20 text-primary", text: "IN PROGRESS" },
      PENDING_REVIEW: {
        color: "bg-yellow-500/20 text-yellow-500",
        text: "PENDING REVIEW",
      },
      COMPLETED: { color: "bg-green-500/20 text-green-500", text: "COMPLETED" },
      CANCELLED: { color: "bg-red-500/20 text-red-500", text: "CANCELLED" },
      DISPUTED: { color: "bg-orange-500/20 text-orange-500", text: "DISPUTED" },
    };
    return badges[status];
  };

  return (
    <div className="min-h-screen bg-background pb-32">
      <DetailHeader sectionLabel="My Hire Requests" requestId={hiringId} />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-1">
            <PartyCard
              image={orderData.freelancer.image}
              name={orderData.freelancer.name}
              username={orderData.freelancer.username}
              priceLabel="Pricing"
              priceValue={latestOffer.amount}
              messageLabel="Message Talent"
              rating={orderData.freelancer.rating}
              reviews={orderData.freelancer.reviews}
            />
          </div>

          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-3xl border border-border/40 bg-background/50 p-6 backdrop-blur-xl sm:p-8">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Order #{orderData.id}
                </span>
                <StatusPill badge={getStatusBadge()} />
              </div>
              <h1 className="mb-6 text-2xl uppercase tracking-tight text-foreground sm:text-3xl">
                {orderData.title}
              </h1>

              {status === "NEGOTIATING" && (
                <div className="space-y-6">
                  {isFreelancerTurn && (
                    <NegotiationHighlight
                      title="Latest Freelancer Offer"
                      amount={latestOffer.amount}
                      description="You can accept this counter-offer, reject it, or send a new price."
                      onAccept={handleAcceptOffer}
                      onReject={handleRejectOffer}
                      onCounter={() => setShowNegotiation(true)}
                    />
                  )}

                  {!isFreelancerTurn && (
                    <div className="rounded-2xl border border-primary/30 bg-primary/10 p-6 text-center">
                      <Clock className="mx-auto mb-3 size-8 animate-pulse text-primary" />
                      <p className="mb-1 text-xs uppercase tracking-widest text-primary">
                        Waiting for Talent
                      </p>
                      <p className="text-xs text-muted-foreground">
                        You sent a counter offer of <b>${latestOffer.amount}</b>. Waiting for
                        talent response.
                      </p>
                    </div>
                  )}

                  {showNegotiation && (
                    <CounterOfferEditor
                      value={counterOffer}
                      onChange={setCounterOffer}
                      onSubmit={handleSendCounterOffer}
                      onCancel={() => setShowNegotiation(false)}
                    />
                  )}

                  <NegotiationHistory
                    entries={negotiations}
                    reverseFor="client"
                    rightLabel="You"
                    leftLabel="Sarah J."
                  />
                </div>
              )}

              {(status === "ACCEPTED" || status === "IN_PROGRESS") && (
                <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="size-6 text-green-500" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-green-500">
                        Order Accepted!
                      </p>
                      <p className="text-sm text-muted-foreground">
                        The talent has accepted your offer of <b>${latestOffer.amount}</b>. The
                        project is now in progress.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <RequirementsCard
              title="Service Description"
              description={orderData.description}
              requirements={orderData.requirements}
              mode="grid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
