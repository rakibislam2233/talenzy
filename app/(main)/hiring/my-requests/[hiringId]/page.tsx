"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  Clock,
  DollarSign,
  Download,
  FileText,
  MessageSquare,
  Star,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

type OrderStatus =
  | "PENDING_ACCEPTANCE"
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

  // State management
  const [status, setStatus] = useState<OrderStatus>("IN_PROGRESS");
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [counterOffer, setCounterOffer] = useState("");
  const [showNegotiation, setShowNegotiation] = useState(false);
  const [disputeReason, setDisputeReason] = useState("");
  const [showDispute, setShowDispute] = useState(false);

  // Mock negotiation history
  const [negotiations, setNegotiations] = useState([
    {
      from: "client",
      amount: 500,
      message: "Initial offer",
      timestamp: "Oct 10, 2023",
    },
  ]);

  // Mock submitted work
  const submittedWork = {
    description:
      "I've completed the video editing as per your requirements. The final video includes all transitions, color grading, and subtitles as discussed.",
    files: [
      { name: "campaign_video_final.mp4", size: 45600, url: "#" },
      { name: "raw_footage_backup.zip", size: 128000, url: "#" },
    ],
    submittedDate: "Oct 18, 2023",
  };

  // Mock data
  const orderData = {
    id: hiringId,
    title: "Video Editing for Campaign Q3",
    category: "Video Editing",
    priority: "Urgent Priority",
    status: status,
    progress: 60,
    freelancer: {
      name: "Sarah Jenkins",
      username: "@sarahcreative",
      role: "Top Rated • Video Editor",
      avatar: "SJ",
      rating: 4.9,
      reviews: 120,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    },
    financials: {
      totalBudget: 500.0,
      depositPaid: 250.0,
      remaining: 250.0,
    },
    timeline: {
      startDate: "Oct 12, 2023",
      dueDate: "Oct 20, 2023",
      status: "3 DAYS LEFT",
    },
    description:
      "I need a high-energy, 30-second vertical video edit for our Q3 marketing campaign. The style should be fast-paced, similar to TikTok trends, with dynamic transitions and kinetic typography.",
    requirements: [
      "Resolution: 1080x1920 (9:16)",
      "Color grading to match our brand palette (Brand Guide attached)",
      "Background music syncing (Royalty-free track provided)",
      "Subtitles for all spoken dialogue",
    ],
  };

  const handleSendCounterOffer = () => {
    if (counterOffer) {
      setNegotiations([
        ...negotiations,
        {
          from: "client",
          amount: parseFloat(counterOffer),
          message: `Counter offer: $${counterOffer}`,
          timestamp: new Date().toLocaleDateString(),
        },
      ]);
      setStatus("NEGOTIATING");
      setCounterOffer("");
      setShowNegotiation(false);
    }
  };

  const handleAcceptFreelancerOffer = () => {
    setStatus("ACCEPTED");
    console.log("Freelancer offer accepted");
  };

  const handleSubmitReview = () => {
    console.log("Review submitted:", { rating, review });
    setStatus("COMPLETED");
    setShowReviewForm(false);
  };

  const handleCompleteOrder = () => {
    setShowReviewForm(true);
  };

  const handleCancelOrder = () => {
    setStatus("CANCELLED");
    console.log("Order cancelled");
  };

  const handleDispute = () => {
    if (disputeReason) {
      setStatus("DISPUTED");
      setShowDispute(false);
      console.log("Dispute raised:", disputeReason);
    }
  };

  const getStatusBadge = () => {
    const badges = {
      PENDING_ACCEPTANCE: {
        color: "bg-orange-500/20 text-orange-500",
        text: "PENDING ACCEPTANCE",
      },
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
      DISPUTED: { color: "bg-red-500/20 text-red-500", text: "DISPUTED" },
    };
    return badges[status];
  };

  return (
    <div className="min-h-screen bg-[#1a161f] pb-32">
      {/* Header */}
      <div className="border-b border-border-dark/30 bg-surface-dark/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/hiring">
              <Button
                variant="ghost"
                className="text-gray-400 hover:text-white h-10 w-10 p-0"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex-1">
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                <span>Home</span>
                <span>/</span>
                <span>My Hiring Requests</span>
                <span>/</span>
                <span className="text-white">Order #{hiringId}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Freelancer Card */}
          <div className="lg:col-span-1">
            <div className="bg-surface-dark/50 backdrop-blur-xl rounded-3xl p-6 border border-border-dark/40 sticky top-24">
              <div className="text-center mb-6">
                <div className="relative inline-block mb-4">
                  <div className="size-24 rounded-3xl overflow-hidden border-2 border-primary/50 shadow-xl shadow-primary/20">
                    <Image
                      src={orderData.freelancer.image}
                      alt={orderData.freelancer.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-blue-500 p-1 rounded-full">
                    <CheckCircle2 className="size-4 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-black text-white mb-1 uppercase tracking-tight">
                  {orderData.freelancer.name}
                </h3>
                <p className="text-primary text-sm font-bold mb-2">
                  {orderData.freelancer.username}
                </p>
                <p className="text-gray-400 text-xs font-medium mb-4">
                  {orderData.freelancer.role}
                </p>

                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="flex items-center gap-1 bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-lg">
                    <Star className="size-3 fill-current" />
                    <span className="text-xs font-black">
                      {orderData.freelancer.rating}
                    </span>
                  </div>
                  <span className="text-gray-500 text-xs">
                    ({orderData.freelancer.reviews} reviews)
                  </span>
                </div>

                <Button className="w-full bg-white text-primary hover:bg-white/90 rounded-xl h-12 font-black uppercase tracking-widest text-xs mb-3">
                  <MessageSquare className="size-4 mr-2" />
                  Message Talent
                </Button>
              </div>

              {/* Financials */}
              <div className="border-t border-border-dark/30 pt-6">
                <h4 className="text-white font-black uppercase text-xs tracking-widest mb-4">
                  Financials
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Total Budget</span>
                    <span className="text-white font-bold">
                      ${orderData.financials.totalBudget.toFixed(2)}
                    </span>
                  </div>
                  {(status === "ACCEPTED" ||
                    status === "IN_PROGRESS" ||
                    status === "PENDING_REVIEW" ||
                    status === "COMPLETED") && (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-green-500 text-sm flex items-center gap-1">
                          <div className="size-2 bg-green-500 rounded-full" />
                          Deposit Paid
                        </span>
                        <span className="text-green-500 font-bold">
                          ${orderData.financials.depositPaid.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 text-sm">Remaining</span>
                        <span className="text-white font-bold">
                          ${orderData.financials.remaining.toFixed(2)}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Timeline */}
              <div className="border-t border-border-dark/30 pt-6 mt-6">
                <h4 className="text-white font-black uppercase text-xs tracking-widest mb-4">
                  Timeline
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Start Date</span>
                    <span className="text-white font-medium text-sm">
                      {orderData.timeline.startDate}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Due Date</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium text-sm">
                        {orderData.timeline.dueDate}
                      </span>
                      <span className="bg-orange-500/20 text-orange-500 text-[8px] font-black px-2 py-0.5 rounded uppercase">
                        {orderData.timeline.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Details */}
          <div className="lg:col-span-2">
            {/* Order Header */}
            <div className="bg-surface-dark/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-border-dark/40 mb-6">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-gray-500">
                      Order #{orderData.id}
                    </span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-500">Oct 10, 2023</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-black text-white mb-3 uppercase tracking-tight">
                    {orderData.title}
                  </h1>
                  <div className="flex flex-wrap gap-2">
                    <span
                      className={`${
                        getStatusBadge().color
                      } px-3 py-1 rounded-lg text-xs font-black uppercase border`}
                    >
                      {getStatusBadge().text}
                    </span>
                    <span className="bg-background-dark px-3 py-1 rounded-lg text-xs font-bold text-gray-400 border border-border-dark/30">
                      {orderData.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              {(status === "IN_PROGRESS" || status === "PENDING_REVIEW") && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest">
                      Progress
                    </span>
                    <span className="text-sm font-black text-primary">
                      {orderData.progress}%
                    </span>
                  </div>
                  <div className="h-2 bg-background-dark rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-primary to-purple-600 transition-all duration-500"
                      style={{ width: `${orderData.progress}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* PENDING_ACCEPTANCE - Waiting for freelancer */}
            {status === "PENDING_ACCEPTANCE" && (
              <div className="bg-orange-500/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-orange-500/30 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                    <Clock className="size-5 text-orange-500" />
                  </div>
                  <h2 className="text-xl font-black text-white uppercase tracking-tight">
                    Waiting for Freelancer Response
                  </h2>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Your hire request has been sent. The freelancer will review
                  and respond soon.
                </p>
                <Button
                  onClick={handleCancelOrder}
                  variant="outline"
                  className="bg-transparent border-red-500/50 text-red-500 hover:bg-red-500/10 rounded-xl h-10 px-6 font-bold uppercase text-xs"
                >
                  Cancel Request
                </Button>
              </div>
            )}

            {/* NEGOTIATING - Price negotiation */}
            {status === "NEGOTIATING" && (
              <div className="bg-surface-dark/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-border-dark/40 mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <DollarSign className="size-5 text-blue-500" />
                  </div>
                  <h2 className="text-xl font-black text-white uppercase tracking-tight">
                    Price Negotiation
                  </h2>
                </div>

                <div className="space-y-3 mb-6">
                  {negotiations.map((neg, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-xl ${
                        neg.from === "client"
                          ? "bg-primary/10 border border-primary/30"
                          : "bg-background-dark/50 border border-border-dark/30"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-gray-400 uppercase">
                          {neg.from === "client"
                            ? "Your Offer"
                            : "Freelancer Counter"}
                        </span>
                        <span className="text-xs text-gray-500">
                          {neg.timestamp}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium text-sm">
                          {neg.message}
                        </span>
                        <span className="text-white font-black text-xl">
                          ${neg.amount}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Latest Offer Highlight */}
                {negotiations.length > 0 &&
                  negotiations[negotiations.length - 1].from ===
                    "freelancer" && (
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 mb-6">
                      <p className="text-blue-400 text-sm font-bold mb-2">
                        💰 Freelancer&apos;s Latest Offer: $
                        {negotiations[negotiations.length - 1].amount}
                      </p>
                      <p className="text-gray-400 text-xs">
                        You can accept this offer, reject it, or send a new
                        counter-offer.
                      </p>
                    </div>
                  )}

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <Button
                    onClick={handleAcceptFreelancerOffer}
                    className="w-full bg-green-500 hover:bg-green-600 text-white rounded-xl h-12 font-black uppercase tracking-widest text-xs shadow-xl"
                  >
                    <CheckCircle2 className="size-4 mr-2" />
                    Accept Offer
                  </Button>
                  <Button
                    onClick={handleCancelOrder}
                    variant="outline"
                    className="w-full bg-transparent border-red-500/50 text-red-500 hover:bg-red-500/10 rounded-xl h-12 font-black uppercase tracking-widest text-xs"
                  >
                    <X className="size-4 mr-2" />
                    Reject Offer
                  </Button>
                  <Button
                    onClick={() => setShowNegotiation(true)}
                    className="w-full bg-primary hover:bg-primary-hover text-white rounded-xl h-12 font-black uppercase tracking-widest text-xs"
                  >
                    <DollarSign className="size-4 mr-2" />
                    Counter Offer
                  </Button>
                </div>

                {showNegotiation && (
                  <div className="p-6 bg-background-dark/50 rounded-2xl border border-border-dark/30">
                    <label className="text-white font-bold text-sm mb-2 block">
                      Your Counter Offer ($)
                    </label>
                    <input
                      type="number"
                      value={counterOffer}
                      onChange={(e) => setCounterOffer(e.target.value)}
                      placeholder="Enter your offer amount"
                      className="w-full bg-background-dark border border-border-dark/30 rounded-xl h-12 px-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 mb-4"
                    />
                    <div className="flex gap-3">
                      <Button
                        onClick={handleSendCounterOffer}
                        className="flex-1 bg-primary hover:bg-primary-hover text-white rounded-xl h-10 font-bold uppercase text-xs"
                      >
                        Send Offer
                      </Button>
                      <Button
                        onClick={() => setShowNegotiation(false)}
                        variant="outline"
                        className="flex-1 bg-transparent border-border-dark text-gray-400 hover:bg-surface-dark rounded-xl h-10 font-bold uppercase text-xs"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* PENDING_REVIEW - Freelancer submitted work */}
            {status === "PENDING_REVIEW" && (
              <>
                <div className="bg-surface-dark/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-border-dark/40 mb-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="size-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                      <FileText className="size-5 text-yellow-500" />
                    </div>
                    <h2 className="text-xl font-black text-white uppercase tracking-tight">
                      Work Submitted - Review Required
                    </h2>
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-6">
                    <p className="text-yellow-500 text-sm font-bold">
                      ⚠ The freelancer has submitted their work. Please review
                      and take action.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-white font-bold text-sm mb-3">
                      Work Description:
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed bg-background-dark/50 p-4 rounded-xl">
                      {submittedWork.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-white font-bold text-sm mb-3">
                      Submitted Files:
                    </h3>
                    <div className="space-y-2">
                      {submittedWork.files.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between bg-background-dark/50 p-4 rounded-xl border border-border-dark/30 hover:border-primary/50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <FileText className="size-5 text-primary" />
                            <div>
                              <p className="text-white font-medium text-sm">
                                {file.name}
                              </p>
                              <p className="text-gray-500 text-xs">
                                {(file.size / 1024).toFixed(2)} KB
                              </p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            className="text-primary hover:text-primary-hover h-8 px-3"
                          >
                            <Download className="size-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Button
                      onClick={handleCompleteOrder}
                      className="bg-green-500 hover:bg-green-600 text-white rounded-xl h-12 font-black uppercase tracking-widest text-xs shadow-xl"
                    >
                      <CheckCircle2 className="size-4 mr-2" />
                      Complete Order
                    </Button>
                    <Button
                      onClick={() => setShowDispute(true)}
                      variant="outline"
                      className="bg-transparent border-orange-500/50 text-orange-500 hover:bg-orange-500/10 rounded-xl h-12 font-black uppercase tracking-widest text-xs"
                    >
                      <AlertTriangle className="size-4 mr-2" />
                      Dispute
                    </Button>
                    <Button
                      onClick={handleCancelOrder}
                      variant="outline"
                      className="bg-transparent border-red-500/50 text-red-500 hover:bg-red-500/10 rounded-xl h-12 font-black uppercase tracking-widest text-xs"
                    >
                      <X className="size-4 mr-2" />
                      Cancel
                    </Button>
                  </div>

                  {showDispute && (
                    <div className="mt-6 p-6 bg-orange-500/10 rounded-2xl border border-orange-500/30">
                      <label className="text-white font-bold text-sm mb-2 block">
                        Dispute Reason
                      </label>
                      <Textarea
                        value={disputeReason}
                        onChange={(e) => setDisputeReason(e.target.value)}
                        placeholder="Explain why you're disputing this work..."
                        className="min-h-[100px] bg-background-dark border-border-dark/30 text-white mb-4"
                      />
                      <div className="flex gap-3">
                        <Button
                          onClick={handleDispute}
                          className="flex-1 bg-orange-500 hover:bg-orange-600 text-white rounded-xl h-10 font-bold uppercase text-xs"
                        >
                          Submit Dispute
                        </Button>
                        <Button
                          onClick={() => setShowDispute(false)}
                          variant="outline"
                          className="flex-1 bg-transparent border-border-dark text-gray-400 hover:bg-surface-dark rounded-xl h-10 font-bold uppercase text-xs"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}

            {/* Review Form (shown after completing order) */}
            {showReviewForm && (
              <div className="bg-surface-dark/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-border-dark/40 mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Star className="size-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-black text-white uppercase tracking-tight">
                    Leave a Review
                  </h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-white font-bold text-sm mb-3 block">
                      Rating
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => setRating(star)}
                          className="transition-transform hover:scale-110"
                        >
                          <Star
                            className={`size-8 ${
                              star <= rating
                                ? "fill-yellow-500 text-yellow-500"
                                : "text-gray-600"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-white font-bold text-sm mb-2 block">
                      Your Review
                    </label>
                    <Textarea
                      value={review}
                      onChange={(e) => setReview(e.target.value)}
                      placeholder="Share your experience working with this freelancer..."
                      className="min-h-[120px] bg-background-dark border-border-dark/30 text-white"
                    />
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={handleSubmitReview}
                      className="flex-1 bg-primary hover:bg-primary-hover text-white rounded-xl h-12 font-black uppercase tracking-widest text-xs"
                    >
                      Submit Review & Complete
                    </Button>
                    <Button
                      onClick={() => setShowReviewForm(false)}
                      variant="outline"
                      className="flex-1 bg-transparent border-border-dark text-white hover:bg-surface-dark rounded-xl h-12 font-bold uppercase tracking-widest text-xs"
                    >
                      Skip Review
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* COMPLETED */}
            {status === "COMPLETED" && (
              <div className="bg-green-500/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-green-500/30 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="size-5 text-green-500" />
                  </div>
                  <h2 className="text-xl font-black text-white uppercase tracking-tight">
                    Order Completed
                  </h2>
                </div>
                <p className="text-gray-300 text-sm">
                  This order has been successfully completed. Thank you for
                  using our platform!
                </p>
              </div>
            )}

            {/* CANCELLED */}
            {status === "CANCELLED" && (
              <div className="bg-red-500/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-red-500/30 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                    <X className="size-5 text-red-500" />
                  </div>
                  <h2 className="text-xl font-black text-white uppercase tracking-tight">
                    Order Cancelled
                  </h2>
                </div>
                <p className="text-gray-400 text-sm">
                  This order has been cancelled. Any deposits will be refunded
                  according to our policy.
                </p>
              </div>
            )}

            {/* DISPUTED */}
            {status === "DISPUTED" && (
              <div className="bg-orange-500/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-orange-500/30 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                    <AlertTriangle className="size-5 text-orange-500" />
                  </div>
                  <h2 className="text-xl font-black text-white uppercase tracking-tight">
                    Order Under Dispute
                  </h2>
                </div>
                <p className="text-gray-400 text-sm">
                  This order is currently under dispute. Our support team will
                  review and contact you within 24-48 hours.
                </p>
              </div>
            )}

            {/* Service Description */}
            <div className="bg-surface-dark/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-border-dark/40">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="size-5 text-primary" />
                </div>
                <h2 className="text-xl font-black text-white uppercase tracking-tight">
                  Service Description
                </h2>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {orderData.description}
              </p>

              <div>
                <h3 className="text-white font-bold text-sm mb-3">
                  Requirements:
                </h3>
                <ul className="space-y-2">
                  {orderData.requirements.map((req, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-400 text-sm"
                    >
                      <div className="size-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
