import { PageStatus } from "./components/PageStatus";

export default function NotFoundPage() {
  return (
    <PageStatus
      label="404"
      heading="Page not found"
      description="The page you're looking for doesn't exist or may have been moved."
    />
  );
}
