export { auth as proxy } from "@/shared/lib/auth";

// Faqat shu sahifalar himoyalangan
export const config = {
  matcher: ["/", "/todo/:path*"],
};
