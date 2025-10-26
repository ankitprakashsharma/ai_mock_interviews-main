import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/InterviewCard"; // ✅ adjust path if needed
import { dummyInterviews } from "@/constants"; // removed 'interviewer' since unused

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="card-cta flex justify-between items-center flex-wrap gap-8">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2 className="text-2xl font-semibold">
            Get Interview-Ready with AI-Powered Practice & Feedback
          </h2>
          <p className="text-lg text-gray-600">
            Practice on real interview questions & get instant feedback
          </p>

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="AI Robot"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      {/* Your Interviews */}
      <section className="flex flex-col gap-6 mt-8">
        <h2 className="text-xl font-semibold">Your Interviews</h2>

        <div className="interviews-section">
          {dummyInterviews.length > 0 ? (
            dummyInterviews.map((interview) => (
              <InterviewCard key={interview.id} {...interview} />
            ))
          ) : (
            <p>You haven&apos;t taken any interviews yet.</p>
          )}
        </div>
      </section>

      {/* Take an Interview */}
      <section className="flex flex-col gap-6 mt-8">
        <h2 className="text-xl font-semibold">Take an Interview</h2>

        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard key={interview.id} {...interview} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Page;
