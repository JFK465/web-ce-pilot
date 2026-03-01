import Link from "next/link";
import { FileX, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="flex justify-center mb-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
            <FileX className="h-8 w-8 text-muted-foreground" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <h2 className="text-xl font-semibold mb-4">Seite nicht gefunden</h2>
        <p className="text-muted-foreground mb-8">
          Diese Seite existiert nicht oder wurde verschoben. Prüfen Sie die URL oder kehren Sie zur Startseite zurück.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Zur Startseite
          </Link>
          <Link
            href="/tools/dop-pflichtcheck"
            className="px-5 py-2.5 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
          >
            DoP-Pflichtcheck
          </Link>
        </div>
      </div>
    </div>
  );
}
