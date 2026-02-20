import Header from '@/components/Header';
import ModuleCard from '@/components/ModuleCard';

const modules = [
  ['Patient Module', '/patients', 'Registration, wallet mapping, EMR profile history with IPFS links.'],
  ['Appointments', '/appointments', 'Doctor booking and lifecycle management (scheduled, completed, cancelled).'],
  ['Doctor & Staff', '/staff', 'Role-based access and schedule management dashboard.'],
  ['EMR', '/emr', 'Lab, imaging, prescriptions and blockchain hash verification.'],
  ['Billing & Insurance', '/billing', 'Invoice generation + claim status tracking + on-chain invoice hash.'],
  ['Pharmacy', '/pharmacy', 'Medicine inventory, expiry checks and blockchain prescription validation.'],
  ['Laboratory', '/laboratory', 'Test requests, report generation and status tracking.'],
  ['Ward & Bed', '/ward', 'Real-time occupancy with bed assignment and AI occupancy prediction.'],
  ['Emergency', '/emergency', 'Quick intake and smart triage recommendations.'],
  ['Inventory', '/inventory', 'Equipment and consumables supply tracking.'],
  ['Telemedicine', '/telemedicine', 'Video consultation placeholder with consultation hash storage.'],
  ['Feedback', '/feedback', 'Patient complaint capture and admin review.']
];

export default function HomePage() {
  return (
    <main>
      <Header />
      <section className="mb-6 rounded-lg bg-white p-5 shadow-sm">
        <h2 className="mb-2 text-lg font-semibold">Analytics & Notifications</h2>
        <p className="text-sm text-slate-600">
          Dashboard exposes patient trends, revenue patterns, resource utilization and reminder channels for appointments,
          lab results, and follow-ups.
        </p>
      </section>
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {modules.map(([title, href, description]) => (
          <ModuleCard key={title} title={title} href={href} description={description} />
        ))}
      </section>
    </main>
  );
}
