import { redirect } from "next/navigation"

import { LearningProgress } from "@/components/dashboard/learning-progress"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { UpcomingEvents } from "@/components/dashboard/upcoming-events"
import { getUserStats } from "@/data/dashboard"
import { getCurrentUser } from "@/lib/auth/auth-utils"

export default async function Page() {
  const user = await getCurrentUser();

  if (!user) {
    redirect('/auth/signin?callbackUrl=/');
  }

  const firstName = user.name?.split(' ')[0]
  const greeting = getGreeting()
  const userStats = await getUserStats()

  return (
    <div>
      {/* <CodacLogo

        leftDiamondAnimation="animate-slide-in-left"
        rightDiamondAnimation="animate-slide-in-right"
      /> */}
      <div className="flex flex-1 flex-col gap-4 p-4">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            {greeting}, {firstName}!
          </h1>
          <p className="text-muted-foreground">
            Here&apos;s what&apos;s happening in your learning journey today.
          </p>
        </div>

        {/* Stats Cards */}
        <StatsCards userStats={userStats} />

        {/* Main Content Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <LearningProgress />
          <UpcomingEvents />
        </div>

        {/* Recent Activity */}
        <RecentActivity />
      </div>
    </div>
  )
}

// Helper function to get time-based greeting
function getGreeting(): string {
  const hour = new Date().getHours()

  if (hour < 12) {
    return "Good morning"
  } else if (hour < 17) {
    return "Good afternoon"
  } else {
    return "Good evening"
  }
}
