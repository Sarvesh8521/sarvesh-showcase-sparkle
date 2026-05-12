export const Footer = () => (
  <footer className="border-t border-border mt-24">
    <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground mono">
      <span>© {new Date().getFullYear()} Sarvesh Singh — Built with care.</span>
      <span>~/portfolio $ <span className="accent-text">end_of_line</span></span>
    </div>
  </footer>
);
