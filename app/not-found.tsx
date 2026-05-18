import { PageMessage } from "./components/PageMessage";

export default function NotFoundPage() {
  return (
    <PageMessage
      label="404"
      heading="Page not found"
      description="The page you're looking for doesn't exist or may have been moved."
    />
  );
}
