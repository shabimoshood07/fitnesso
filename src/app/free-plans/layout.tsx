import FreeMealForm from "@/components/FreeMealForm";

export default function FreePlanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        {children}
        <FreeMealForm />
      </div>
    </>
  );
}
