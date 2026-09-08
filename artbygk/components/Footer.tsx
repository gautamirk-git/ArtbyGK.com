export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-muted">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-base text-foreground">ArtbyGK</p>
          <p>&copy; {year} ArtbyGK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
