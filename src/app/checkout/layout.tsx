export default function CheckoutLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h1>Checkout layout</h1> {children}
    </section>
  );
}
