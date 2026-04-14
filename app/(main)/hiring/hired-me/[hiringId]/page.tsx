"use client";

import CounterOfferEditor from "@/components/pages/Main/Hiring/Details/CounterOfferEditor";
import DetailHeader from "@/components/pages/Main/Hiring/Details/DetailHeader";
import NegotiationHighlight from "@/components/pages/Main/Hiring/Details/NegotiationHighlight";
import NegotiationHistory from "@/components/pages/Main/Hiring/Details/NegotiationHistory";
import PartyCard from "@/components/pages/Main/Hiring/Details/PartyCard";
import RequirementsCard from "@/components/pages/Main/Hiring/Details/RequirementsCard";
import StatusPill from "@/components/pages/Main/Hiring/Details/StatusPill";
import { NegotiationEntry } from "@/components/pages/Main/Hiring/Details/types";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Clock, Upload } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

type RequestStatus =
  | "PENDING"
  | "NEGOTIATING"
  | "ACCEPTED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "REJECTED";

export default function WhoHiredMeDetailPage() {
  const params = useParams();
  const hiringId = params.hiringId as string;

  // State management
  const [status, setStatus] = useState<RequestStatus>("NEGOTIATING");
  const [workDescription, setWorkDescription] = useState("");
  const [counterOffer, setCounterOffer] = useState("");
  const [showNegotiation, setShowNegotiation] = useState(false);

  const [negotiations, setNegotiations] = useState<NegotiationEntry[]>([
    {
      from: "client",
      amount: 1200,
      message: "Initial offer",
      timestamp: "Oct 25, 2023",
    },
    {
      from: "freelancer",
      amount: 1500,
      message: "My counter offer",
      timestamp: "Oct 26, 2023",
    },
    {
      from: "client",
      amount: 1350,
      message: "Latest offer from client",
      timestamp: "Oct 27, 2023",
    },
  ]);

  const requestData = {
    id: hiringId,
    title: "Website Redesign Project",
    category: "Web Design",
    status: status,
    client: {
      name: "Tech Startup Inc",
      username: "@techstartup",
      avatar: "TS",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200",
    },
    financials: {
      originalOffer: 1200.0,
      currentOffer: negotiations[negotiations.length - 1].amount,
      advancePaid: negotiations[negotiations.length - 1].amount / 2,
      remaining: negotiations[negotiations.length - 1].amount / 2,
    },
    timeline: {
      requestDate: "Oct 25, 2023",
      deadline: "Nov 15, 2023",
      status: "21 DAYS LEFT",
    },
    description:
      "We need a complete redesign of our company website. The design should be modern, clean, and user-friendly. We're looking for a responsive design that works well on all devices.",
    requirements: [
      "Homepage redesign",
      "About Us page",
      "Services page",
      "Contact form integration",
      "Mobile responsive design",
      "SEO optimization",
    ],
  };

  const latestOffer = negotiations[negotiations.length - 1];
  const isClientTurn = latestOffer.from === "client";

  const handleAcceptOffer = () => {
    setStatus("ACCEPTED");
  };

  const handleRejectOffer = () => {
    setStatus("REJECTED");
  };

  const handleSendCounterOffer = () => {
    if (counterOffer) {
      setNegotiations([
        ...negotiations,
        {
          from: "freelancer",
          amount: parseFloat(counterOffer),
          message: `Counter offer sent to client: $${counterOffer}`,
          timestamp: new Date().toLocaleDateString(),
        },
      ]);
      setCounterOffer("");
      setShowNegotiation(false);
    }
  };

  const getStatusBadge = () => {
    const badges = {
      PENDING: {
        color: "bg-orange-500/20 text-orange-500",
        text: "PENDING APPROVAL",
      },
      NEGOTIATING: {
        color: "bg-blue-500/20 text-blue-500",
        text: "NEGOTIATING",
      },
      ACCEPTED: { color: "bg-green-500/20 text-green-500", text: "ACCEPTED" },
      IN_PROGRESS: { color: "bg-primary/20 text-primary", text: "IN PROGRESS" },
      COMPLETED: { color: "bg-green-500/20 text-green-500", text: "COMPLETED" },
      REJECTED: { color: "bg-red-500/20 text-red-500", text: "REJECTED" },
    };
    return badges[status];
  };

  return (
    <div className="min-h-screen bg-background pb-32">
      <DetailHeader sectionLabel="Who Hired Me" requestId={hiringId} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <PartyCard
              image={requestData.client.image}
              name={requestData.client.name}
              username={requestData.client.username}
              priceLabel="Current Offer"
              priceValue={requestData.financials.currentOffer}
              messageLabel="Message Client"
            />

            {(status === "ACCEPTED" || status === "IN_PROGRESS") && (
              <div className="bg-background/50 backdrop-blur-xl rounded-3xl p-6 border border-border/40">
                <h4 className="text-foreground  uppercase text-xs tracking-widest mb-4">
                  Escrow Status
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Advance (50%)</span>
                    <span className="text-green-500 font-bold">
                      ${requestData.financials.advancePaid}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">On Completion</span>
                    <span className="text-foreground font-bold">
                      ${requestData.financials.remaining}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-background/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-border/40">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-muted-foreground uppercase ">
                  Request #{requestData.id}
                </span>
                <StatusPill badge={getStatusBadge()} />
              </div>
              <h1 className="text-2xl sm:text-3xl  text-foreground mb-6 uppercase tracking-tight">
                {requestData.title}
              </h1>

              {status === "NEGOTIATING" && (
                <div className="space-y-6">
                  {isClientTurn && (
                    <NegotiationHighlight
                      title="Latest Client Offer"
                      amount={latestOffer.amount}
                      description="You can accept this offer, reject it, or send a new counter-offer."
                      onAccept={handleAcceptOffer}
                      onReject={handleRejectOffer}
                      onCounter={() => setShowNegotiation(true)}
                    />
                  )}

                  {!isClientTurn && (
                    <div className="bg-primary/10 border border-primary/30 rounded-2xl p-6 text-center">
                      <Clock className="size-8 text-primary mx-auto mb-3 animate-pulse" />
                      <p className="text-primary  uppercase text-xs tracking-widest mb-1">
                        Waiting for Client
                      </p>
                      <p className="text-muted-foreground text-xs">
                        You sent a counter offer of <b>${latestOffer.amount}</b>
                        . Waiting for client response.
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
                    reverseFor="freelancer"
                    rightLabel="You"
                    leftLabel="Client"
                  />
                </div>
              )}

              {(status === "ACCEPTED" || status === "IN_PROGRESS") && (
                <div className="space-y-6">
                  <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="size-6 text-green-500" />
                      <div>
                        <p className="text-green-500  uppercase text-xs tracking-widest">
                          Offer Accepted!
                        </p>
                        <p className="text-muted-foreground text-sm">
                          You are officially hired for{" "}
                          <b>${latestOffer.amount}</b>. You can now submit your
                          work below.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-background/30 rounded-2xl p-6 border border-border/20">
                    <h3 className="text-foreground  uppercase text-sm tracking-widest mb-4">
                      Submit Deliverables
                    </h3>
                    <Textarea
                      placeholder="Describe your work..."
                      className="bg-background border-border mb-4 h-32 text-foreground"
                      value={workDescription}
                      onChange={(e) => setWorkDescription(e.target.value)}
                    />
                    <div className="border-2 border-dashed border-border/40 rounded-2xl p-8 text-center hover:border-primary/50 transition-all cursor-pointer">
                      <Upload className="size-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground text-xs font-bold">
                        Drop files here or click to upload
                      </p>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary-600 text-primary-foreground rounded-xl h-12  uppercase tracking-widest text-xs mt-6 shadow-xl shadow-primary/20">
                      Submit Work for Review
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <RequirementsCard
              title="Project Requirements"
              description={requestData.description}
              requirements={requestData.requirements}
              mode="list"
            />
          </div>
        </div>
      </div>
    </div>
  );
}