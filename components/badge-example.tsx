import { CustomBadge } from "./ui/custom-badge"

export default function BadgeExample() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <CustomBadge>
        <svg
          viewBox="0 0 24 24"
          className="mr-2 h-4 w-4 text-red-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m7 4 10 8-10 8" />
        </svg>
        Welcome to Lucis
      </CustomBadge>
    </div>
  )
}

