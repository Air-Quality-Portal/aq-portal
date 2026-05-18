import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-1 display-flex flex-column flex-align-center flex-justify-center text-center padding-y-6 padding-x-4">
      <p className="font-heading-3xl text-bold margin-bottom-1">404</p>
      <h1 className="font-heading-2xl margin-bottom-2">Page not found</h1>
      <p className="font-body-md text-base margin-bottom-6">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <Link href="/" className="usa-button">
        Return home
      </Link>
    </div>
  );
}
